import { Divider } from "@chakra-ui/react";
import { registerComponent } from "@plasmicapp/host";

export function registerDivider() {
  registerComponent(Divider, {
    name: "Divider",
    importPath: "@chakra-ui/react",
    props: {
      orientation: {
        type: "choice",
        options: ["vertical", "horizontal"],
      },
      variant: {
        type: "choice",
        options: ["solid", "dashed"],
      },
    },
  });
}
