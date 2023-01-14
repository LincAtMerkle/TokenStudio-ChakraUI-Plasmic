import * as React from "react";
import Script from "next/script";
import { PlasmicCanvasHost, registerComponent } from "@plasmicapp/host";
import { ChakraProvider, Button } from "@chakra-ui/react";

import { theme as proTheme } from '../pro-package/src/index'
import { extendTheme, theme as baseTheme } from '@chakra-ui/react'


const themePro = extendTheme(
  {
    colors: { ...baseTheme.colors, brand: baseTheme.colors.purple },
  },
  proTheme,
)

registerComponent(Button, {
  name: "Button",
  importPath: "@chakra-ui/react",
  props: {
    size: {
      type: "choice",
      options: ["xl", "sm", "md", "lg"],
    },
    variant: {
      type: "choice",
      options: ["ghost", "primary","outline", "solid", "link", "unstyled"],
      defaultValue: "solid",
    },
    colorScheme: {
      type: "choice",
      options: [
        "whiteAlpha",
        "blackAlpha",
        "gray",
        "red",
        "orange",
        "yellow",
        "green",
        "teal",
        "blue",
        "cyan",
        "purple",
        "pink",
        "linkedin",
        "facebook",
        "messenger",
        "whatsapp",
        "twitter",
        "telegram",
      ],
    },
    iconSpacing: "number",
    isActive: {
      type: "boolean",
    },
    isDisabled: {
      type: "boolean",
    },
    isLoading: {
      type: "boolean",
    },
    children: {
      type: "slot",
      defaultValue: {
        type: "text",
        value: "Button",
      },
    },
  },
});

export default function PlasmicHost() {
  return (
    <ChakraProvider theme={themePro}>
      <PlasmicCanvasHost />
    </ChakraProvider>
  );
}
