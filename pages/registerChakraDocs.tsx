import ChakraDocs from "../components/ChakraDocs";
import {registerComponent } from "@plasmicapp/host";

export function registerChakraDocs(){
    registerComponent(ChakraDocs, {
        name: "ChakraDocs",
        importPath: "../components/ChakraDocs",
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
        "hm/light",
        "hm/dark"
      ],
      // title: "Token set",
      description: "Token set",
    }     
  },
});};
