import React, { useEffect, useMemo, useState } from "react";

// import metadata from '../styles/figmaTokensChakra/$metadata.json'
// import lightTokens from '../styles/documentationTokens/light.json'
// import darkTokens from '../styles/documentationTokens/dark.json'
import metadata from "../pro-package/tokenStudioChakra/$metadata.json";
import lightTokens from "../pro-package/documentationTokens/light.json";
import darkTokens from "../pro-package/documentationTokens/dark.json";

export default interface DocumentationComponentProps {
  value: string;
  variant: string;
  tokenName: string;
}

export function Documentation({
  set = "core/color",
  path = "",
  theme = "light",
  render,
}: {
  set?: string;
  path?: string;
  theme?: string;
  render: (data: any) => JSX.Element;
}) {
  const [data, setData] = useState<Record<string, any>>();
  const [error, setError] = useState("");
  useEffect(() => {
    async function loadData() {
      try {
        if (metadata.tokenSetOrder.includes(set)) {
          // console.log('****  HERE NOW  ***')
          const data = await import(
            `../pro-package/tokenStudioChakra/${set}.json`
          );
          // console.log("***DATA***:" + JSON.stringify(data));

          setData(data.default);
        } else {
          setError(
            `Token set not found: ${set}. No such path found in metadata.json`
          );
        }
      } catch (error) {
        setError(JSON.stringify(error));
      }
    }
    loadData();
  }, [set]);

  ////******** MERGE THIS WITH.....
  const jsonData = useMemo(() => {
    if (data) {
      // console.log("!!!!!!!! data: "+ JSON.stringify(data))
      const themeFile: Record<string, any> =
        theme === "light" ? lightTokens : darkTokens;
      if (path) {
        const pathData = path
          .split(".")
          .reduce((object, key) => object[key], themeFile);
        if (!pathData) {
          setError(`Cannot find tokens in path: ${path}`);
        } else {
          return pathData;
        }
      } else {
        const themeData: Record<string, any> = {};
        Object.keys(data).forEach((key) => {
          themeData[key] = themeFile[key] || {};
        });
        return themeData || {};
      }
    }
    return {};
  }, [data, path, theme]);

  //******** THIS ********
  const tokenData = useMemo(() => {
    const tokenData: DocumentationComponentProps[] = [];
    const getTokenData = (data: Record<string, any>, path = ""): any => {
      Object.keys(data).forEach((key) => {        
        console.log(key, data[key]);
        let tokenPath = path;
        if ("value" in data[key]) {
          // CAN"T GET IN HERE. BUT I ADDED value as a prop. 
          // console log returns "data[key]: {}"
          // It looks empty Why? 
          console.log("!!!!!!!!!!!     HERE FINALLY    !!!!!!!!!!!")
          const tokenName = tokenPath ? `${tokenPath}.${key}` : key;
          const variant = data[key].type as string;
          const value = data[key].value as string;
          // console.log("tokenName: "+tokenName)
          // console.log("variant: "+variant)
          // console.log("value: "+value)
          tokenData.push({
            variant,
            value,
            tokenName,
          });
        } else {
          tokenPath = tokenPath ? `${tokenPath}.${key}` : `${key}`;
          return getTokenData(data[key], tokenPath);
        }
      });
    };
    getTokenData(jsonData);

    return tokenData;
  }, [jsonData]);

  if (error) {
    return <h3>{error}</h3>;
  }
  return render(tokenData);
}
