import * as React from "react";
import { PlasmicCanvasHost } from "@plasmicapp/host";
import { ChakraProvider } from "@chakra-ui/react";
import {registerAllComponents} from "./allComponents";
import { theme as proTheme } from '../pro-package/src/index'
import { extendTheme, theme as baseTheme } from '@chakra-ui/react'
import '@fontsource/inter/variable.css'

const themePro = extendTheme(
  {
    colors: { ...baseTheme.colors, brand: baseTheme.colors.purple },
  },
  proTheme,
)

registerAllComponents();

export default function PlasmicHost() {
  return (
    <ChakraProvider theme={themePro}>
      <PlasmicCanvasHost />
    </ChakraProvider>
  );
}
