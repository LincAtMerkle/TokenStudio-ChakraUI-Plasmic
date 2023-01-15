import { Text } from "@chakra-ui/react";
import { registerComponent } from "@plasmicapp/host";

export function registerText() {
  registerComponent(Text, {
    name: "Text",
    importPath: "@chakra-ui/react",
    props: {
      children: {
        type: "slot",
        defaultValue: [
          {
            type: "text",
            value: "Some Text",
          },
        ],
      },
    },
  });
}
