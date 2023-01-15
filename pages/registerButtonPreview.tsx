

import ButtonPreview  from "../components/ButtonPreview";
import {registerComponent } from "@plasmicapp/host";

export function registerButtonPreview(){
    registerComponent(ButtonPreview, {
        name: "ButtonPreview",
        importPath: "@chakra-ui/react",
        props: {
  },
});};
