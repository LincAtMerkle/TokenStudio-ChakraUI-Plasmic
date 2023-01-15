import { Input } from "@chakra-ui/react";
import { registerComponent } from "@plasmicapp/host";

export function registerInput() {
  registerComponent(Input, {
    name: "Input",
    importPath: "@chakra-ui/react",
    props: {
      size: {
        type: "choice",
        options: ["xl", "sm", "md", "lg"],
      },
      variant: {
        type: "choice",
        options: ["outline", "filled", "flushed", "unstyled"],
      },
      isDisabled: {
        type: "boolean",
      },
      isInvalid: {
        type: "boolean",
      },
      isReadOnly: {
        type: "boolean",
      },
      isRequired: {
        type: "boolean",
      },
      errorBorderColor: {
        type: "string",
        defaultValue: "red.500",
      },
      focusBorderColor: {
        type: "string",
        defaultValue: "blue.500",
      },
    },
  });
}
