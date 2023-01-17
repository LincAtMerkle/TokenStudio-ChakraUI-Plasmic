import * as React from "react";
import { PlasmicCanvasHost } from "@plasmicapp/host";
import { ChakraProvider } from "@chakra-ui/react";
import { registerAllComponents } from "./allComponents";
// import { theme as proTheme } from '../pro-package/src/index'
import { extendTheme, theme as baseTheme } from "@chakra-ui/react";
import "@fontsource/inter/variable.css";
import {semanticTokens} from './token'
import {components} from './componentsTokens'
import { hasVariant } from "@plasmicapp/react-web";


const theme = extendTheme(
  {
    semanticTokens,
    components,
    },
);

registerAllComponents();

export default function PlasmicHost() {
  return (
    // <ChakraProvider theme={themePro}>
    <ChakraProvider theme={theme}>
      <PlasmicCanvasHost />
    </ChakraProvider>
  );
}