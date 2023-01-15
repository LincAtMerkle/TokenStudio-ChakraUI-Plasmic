

import { ChakraDocsProps } from "../components/ChakraDocs";

export function registerChakraDocs(){
    registerComponent(ChakraDocs, {
        name: "ChakraDocs",
        importPath: "@chakra-ui/react",
        props: {
    theme: {
      type: 'choice',
      options: ["light", "dark"],
      description: "Theme",
    },
    path: {
      //@ts-ignore
      type: 'string',
      title: "Tokens path",
      description: "Tokens path",
    },
    set: {
      type: 'choice',
      // options: tokenSetOrder,
      options: [
        "core/border",
        "core/color",
        "core/opacity",
        "core/size",
        "core/space",
        "core/typography",
        "comp/avatar",
        "comp/button",
        "comp/checkbox",
        "comp/heading",
        "comp/icon",
        "comp/icon-button",
        "comp/input",
        "comp/radio",
        "comp/select",
        "comp/switch",
        "comp/tab",
        "comp/tag",
        "comp/text",
        "comp/tooltip",
        "semantic/light",
        "semantic/dark",
        "Brand-ChakraDemo/light",
        "Brand-ChakraDemo/dark"
      ],
      // title: "Token set",
      description: "Token set",
    }     
  },
});};
