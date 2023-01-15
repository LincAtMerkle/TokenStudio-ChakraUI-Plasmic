import { AspectRatio} from "@chakra-ui/react";
import {registerComponent } from "@plasmicapp/host";

export function registerAspectRatio(){
    registerComponent(AspectRatio, {
        name: "AspectRatio",
        importPath: "@chakra-ui/react",
        props: {
    ratio: {
      type: "number",
      defaultValue: 1.333,
    },
    children: {
      type: "slot",
      defaultValue: {
        type: "component",
        name: "Image",
      },
    },
  },
});
};
