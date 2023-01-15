import { PinInputField, PinInput } from "@chakra-ui/react";
import { registerComponent } from "@plasmicapp/host";

export function registerPinInput() {
  registerComponent(PinInput, {
    name: "PinInput",
    importPath: "@chakra-ui/react",
    props: {
      size: {
        type: "choice",
        options: ["xl", "sm", "md", "lg"],
      },
      type: {
        type: "choice",
        options: ["number", "alphanumeric"],
      },
      variant: {
        type: "choice",
        options: ["outline", "filled", "flushed", "unstyled"],
      },
      mask: {
        type: "boolean",
        description:
          "Whether the pin input's value should be masked like 'type=password'.",
      },
      manageFocus: {
        type: "boolean",
        defaultValue: true,
        description:
          "Whether the pin input should move automatically to the next input once filled.",
      },
      autoFocus: {
        type: "boolean",
        description: "Whether the pin input should be focused on mount.",
      },
      opt: {
        type: "boolean",
        description: "autocomplete='one-time-code'",
      },
      errorBorderColor: {
        type: "string",
        defaultValue: "red.500",
      },
      focusBorderColor: {
        type: "string",
        defaultValue: "blue.500",
      },
      isDisabled: {
        type: "boolean",
      },
      isInvalid: {
        type: "boolean",
      },

      children: {
        type: "slot",
        allowedComponents: ["PinInputField"],
        defaultValue: [
          {
            type: "component",
            name: "PinInputField",
          },
          {
            type: "component",
            name: "PinInputField",
          },
          {
            type: "component",
            name: "PinInputField",
          },
          {
            type: "component",
            name: "PinInputField",
          },
        ],
      },
    },
  });
}
export function registerPinInputField() {
  registerComponent(PinInputField, {
    name: "PinInputField",
    importPath: "@chakra-ui/react",
    props: {},
  });
}