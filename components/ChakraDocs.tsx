import React, { useEffect, useMemo, useState } from "react";
import { Documentation } from "./Documentation";
import DesignTokenItem from "./DesignTokenItem";

export type ChakraDocsProps = JSX.IntrinsicAttributes & {
  set?: string;
  path?: string;
  theme?: string;
  className?: string;
};

export default function ChakraDocs(
  { set, path, theme, className }: ChakraDocsProps,
  render: (data: any) => JSX.Element
) {
  {
    const [copiedToken, setCopiedToken] = useState("");
    const onTokenCopy = async (value: string, tokenName: any) => {
      if (!navigator?.clipboard) {
        alert("Clipboard not supported");
      }

      try {
        await navigator.clipboard.writeText(value);
        setCopiedToken(`${tokenName}${value}`);
      } catch (error) {
        alert("Error copying value");
      }
    };
    console.log(`SET: ${set}`);
    return (
      <div className={className}>
        <Documentation
          theme={theme}
          path={path}
          set={set}
          render={(data) => {
            return data.map(
              ({ value, tokenName, variant, description }: any, i: any) => {
                return (
                  <div key={`token-docs-${i}`} style={{ padding: 0 }}>
                    <DesignTokenItem
                      //@ts-ignore
                      description={description}
                      textValue={value}
                      tokenName={tokenName}
                      value={value}
                      variant={variant}
                      radius={value}
                      fontSize={value} //parseInt(value)}
                      // color={{ props: { style: { backgroundColor: value } } }}
                    />
                  </div>
                );
              }
            );
          }}
        />
      </div>
    );
  }
}
