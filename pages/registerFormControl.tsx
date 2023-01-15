import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  FormHelperText,
} from "@chakra-ui/react";
import { registerComponent } from "@plasmicapp/host";

export function registerFormControl() {
  registerComponent(FormControl, {
    name: "FormControl",
    importPath: "@chakra-ui/react",
    props: {
      label: "string",
      isDisabled: "boolean",
      isInvalid: "boolean",
      isRequired: "boolean",
      isreadOnly: "boolean",
      children: {
        type: "slot",
        defaultValue: [
          {
            type: "component",
            name: "FormLabel",
          },
          {
            type: "component",
            name: "Input",
          },
        ],
      },
    },
  });
}
export function registerFormLabel() {
  registerComponent(FormLabel, {
    name: "FormLabel",
    importPath: "@chakra-ui/react",
    props: {
      children: {
        type: "slot",
        defaultValue: {
          type: "text",
          value: "Label",
          styles: {
            display: "inline-block",
            width: "auto",
          },
        },
      },
    },
  });
}
export function registerFormHelperText() {
  registerComponent(FormHelperText, {
    name: "FormHelperText",
    importPath: "@chakra-ui/react",
    props: {
      children: {
        type: "slot",
        defaultValue: {
          type: "text",
          value: "We'll never share your email.",
        },
      },
    },
  });
}
export function registerFormErrorMessage() {
  registerComponent(FormErrorMessage, {
    name: "FormErrorMessage",
    importPath: "@chakra-ui/react",
    props: {
      children: {
        type: "slot",
        defaultValue: {
          type: "text",
          value: "This is an error message.",
        },
      },
    },
  });
}
