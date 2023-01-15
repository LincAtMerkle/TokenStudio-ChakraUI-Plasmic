import { Stack} from "@chakra-ui/react";
import {registerComponent } from "@plasmicapp/host";

export function registerStack(){
    registerComponent(Stack, {
        name: "Stack",
        importPath: "@chakra-ui/react",
        props: {
    direction: {
      type: "choice",
      options: ["row", "column"],
      defaultValue: "row"
    },
    align: {
      type: "choice",
      options: ["start", "center", "end", "stretch"],
    },
    justify: {
      type: "choice",
      options: ["start", "center", "end", "stretch"],
    },
    spacing: {
      type: "number",
      defaultValue: 8,
    },
    wrap: {
      type: "choice",
      options: ["wrap", "nowrap"],
    },
    children: {
      type: "slot",
    },
  },
});
}