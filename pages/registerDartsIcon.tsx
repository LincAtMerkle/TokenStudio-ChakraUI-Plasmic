import { DartsIcon } from "../components/CustomIcons";
import {registerComponent } from "@plasmicapp/host";


export function registerDartsIcon(){
    registerComponent(DartsIcon, {
        name: "DartsIcon",
        importPath: "@chakra-ui/react",
        props: {
    viewBox: {
      type: "string",
      defaultValue: "0 0 32 32",
    },
    boxSize: {
      type: "string",
      defaultValue: "1em",
    },
    color: {
      type: "string",
      defaultValue: "currentColor",
    },
    focusable: {
      type: "boolean",
      defaultValue: false,
    },
    role: {
      type: "choice",
      options: [
        "presentation",
        "img"
      ],
    },
  },
});};