import { ChakraProvider, ChakraProvider} from "@chakra-ui/react";
import {registerComponent } from "@plasmicapp/host";
import { GlobalContextMeta } from "@plasmicapp/host";
import registerGlobalContext from "@plasmicapp/host/registerGlobalContext";
import { Registerable } from "./registerable";


export const chakraProviderMeta: GlobalContextMeta<ChakraProviderProps> = {
  ...getComponentNameAndImportMeta("ChakraProvider"),export function registerButtonGroup(){
    registerComponent(ButtonGroup, {
        name: "ButtonGroup",
        importPath: "@chakra-ui/react",
        props: {
    theme: "object",
  },
};

export function registerChakraProvider(
  loader?: Registerable,
  customChakraProviderMeta?: GlobalContextMeta<ChakraProviderProps>
) {
  const doRegisterComponent: typeof registerGlobalContext = (...args) =>
    loader
      ? loader.registerGlobalContext(...args)
      : registerGlobalContext(...args);
  doRegisterComponent(
    ChakraProvider,
    customChakraProviderMeta ?? chakraProviderMeta
  );
}
