import * as React from "react";
import { PlasmicCanvasHost } from "@plasmicapp/host";
import { ChakraProvider } from "@chakra-ui/react";
import { registerAllComponents } from "./allComponents";
import { theme as proTheme } from '../pro-package/src/index'
import { extendTheme, theme as baseTheme } from "@chakra-ui/react";
import "@fontsource/inter/variable.css";
import { hasVariant } from "@plasmicapp/react-web";

// TOKENS.
// Not a Chakra feature,
// Can be any naming system
// Can come from NPM package
const tokens = {
  colors: {
    light: {
      "bg-default": "#ff00ff",
      "fg-default": "#0000ff",
      "btn-bg": "#ff00ff",
      "btn-fg": "#00ff00",
    },
  },
};

// SEMANTIC TOKENS.
// A Chakra UI feature
const semanticTokens = {
  colors: {
    "bg-default": {
      default: tokens.colors.light["bg-default"],
      _dark: tokens.colors.light["bg-default"],
    },
    "fg-default": {
      default: tokens.colors.light["fg-default"],
      _dark: tokens.colors.light["fg-default"],
    },
    "btn-bg": {
      default: tokens.colors.light["btn-bg"],
      _dark: tokens.colors.light["btn-bg"],
    },
    "btn-fg": {
      default: tokens.colors.light["btn-fg"],
      _dark: tokens.colors.light["btn-fg"],
    },
  },
};

// Global Styles
// How does this work in Plasmic
const styles = {
  global: {
    body: {
      background: 'bg-default'
    }
  }
}

// Component Overrides
const components = {
  Button: {
    baseStyle: {
      background: 'btn-bg', //btn-primary-bg 
      color: 'btn-fg'
    },
    variant: {
      primary: {
        background: 'bg-default',
        color: 'fg-default'
      }
    },
    sizes: {
      md: {
        h: 8,
        p: '5px 16px',
        fontSize: '14px'
      }
    },
    defaultProps: {
      size: 'md',
    }
  }
}



const themePro = extendTheme(
  {
    colors: { ...baseTheme.colors, brand: baseTheme.colors.yellow },
    styles,
    semanticTokens,
    components,
    },
  proTheme,
);

registerAllComponents();

export default function PlasmicHost() {
  return (
    <ChakraProvider theme={themePro}>
      <PlasmicCanvasHost />
    </ChakraProvider>
  );
}
