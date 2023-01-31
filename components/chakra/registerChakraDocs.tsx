import ChakraDocsProps from "../ChakraDocs";
import { ComponentMeta } from "@plasmicapp/host/registerComponent";
import {
  getComponentNameAndImportMeta,
  getPlasmicComponentName,
} from "./utils";
import metadata from "../../pro-package/tokenStudioChakra/$metadata.json";

export const chakraDocsMeta: ComponentMeta<typeof ChakraDocsProps> = {
  ...getComponentNameAndImportMeta("ChakraDocs"),
    props: {
      // Theme used if not light and dark token set chosen. ie "hm/light"
      theme: {
        type: "choice",
        options: ["light", "dark"],
        description: "Theme",
        defaultValue: "light",
      },
      path: {
        //@ts-ignore
        type: "string",
        title: "Tokens path",
        description: "Tokens path",
        // defaultValue: "semantic.font-size",
      },
      set: {
        type: "choice",
        options: metadata.tokenSetOrder,
        description: "Token set",
        // defaultValue: "semantic/light",
      },
    },
  }
