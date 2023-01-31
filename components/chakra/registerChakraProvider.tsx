import { ChakraProvider, ChakraProviderProps } from "@chakra-ui/react";
import { GlobalContextMeta } from "@plasmicapp/host";
import registerGlobalContext from "@plasmicapp/host/registerGlobalContext";
import { Registerable } from "./registerable";
import { getComponentNameAndImportMeta } from "./utils";
import { extendTheme } from "@chakra-ui/react"

export const colorTokens = {
  myToken1: {
    defaultValue: "#FF0000"
  },
  myToken2: {
    defaultValue: "#00FF00"
  },
  myToken3: {
    defaultValue: "#0000FF"
  }
}

type ColorTokensType = keyof typeof colorTokens;

type PlasmicChakraProviderProps = {
  children?: React.ReactNode;
} & {
  [prop in ColorTokensType]: string
};

export const chakraProviderMeta: GlobalContextMeta<PlasmicChakraProviderProps> = {
  ...getComponentNameAndImportMeta("ChakraProvider"),
  props: {
    ...(Object.fromEntries(
      Object.entries(colorTokens).map(([name, { defaultValue }]) => [
        name, {
          type: "color",
          defaultValue
        }
      ])
    )),
  },
};


export function PlasmicChakraProvider(props: PlasmicChakraProviderProps) {
  const theme = extendTheme({
    colors: {
      ...(Object.fromEntries(
        Object.keys(colorTokens).map((name) => [
          name, {
            500: props[name as ColorTokensType]
          }
        ])
      ))
    },
  })
  return <ChakraProvider theme={theme}>
    {props.children}
  </ChakraProvider>
}

export function registerChakraProvider(
  loader?: Registerable,
  customChakraProviderMeta?: GlobalContextMeta<PlasmicChakraProviderProps>
) {
  const doRegisterComponent: typeof registerGlobalContext = (...args) =>
    loader
      ? loader.registerGlobalContext(...args)
      : registerGlobalContext(...args);
  doRegisterComponent(
    PlasmicChakraProvider,
    customChakraProviderMeta ?? chakraProviderMeta
  );
}
