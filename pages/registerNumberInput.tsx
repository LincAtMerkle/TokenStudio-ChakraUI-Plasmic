import {
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInputField,
  NumberInput,
  NumberInputStepper,
} from "@chakra-ui/react";
import { registerComponent } from "@plasmicapp/host";

export function registerNumberInput() {
  registerComponent(NumberInput, {
    name: "NumberInput",
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
      inputMode: {
        type: "choice",
        options: [
          "text",
          "search",
          "none",
          "tel",
          "url",
          "email",
          "numeric",
          "decimal",
        ],
      },
      format: {
        type: "string",
      },
      step: {
        type: "number",
      },
      precision: {
        type: "number",
      },
      max: {
        type: "number",
      },
      min: {
        type: "number",
      },
      errorBorderColor: {
        type: "string",
        defaultValue: "red.500",
      },
      focusBorderColor: {
        type: "string",
        defaultValue: "blue.500",
      },
      allowMouseWheel: {
        type: "boolean",
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

      children: {
        type: "slot",
        defaultValue: [
          {
            type: "component",
            name: "NumberInputField",
          },
          {
            type: "component",
            name: "NumberInputStepper",
          },
        ],
      },
    },
  });
}
export function registerNumberInputStepper() {
  registerComponent(NumberInputStepper, {
    name: "NumberInputStepper",
    importPath: "@chakra-ui/react",
    props: {
      children: {
        type: "slot",
        allowedComponents: ["NumberIncrementStepper", "NumberDecrementStepper"],
        defaultValue: [
          {
            type: "component",
            name: "NumberIncrementStepper",
          },
          {
            type: "component",
            name: "NumberDecrementStepper",
          },
        ],
      },
    },
  });
}

export function registerNumberDecrementStepper() {
  registerComponent(NumberDecrementStepper, {
    name: "NumberDecrementStepper",
    importPath: "@chakra-ui/react",
    props: {},
  });
}

export function registerNumberIncrementStepper() {
  registerComponent(NumberIncrementStepper, {
    name: "NumberIncrementStepper",
    importPath: "@chakra-ui/react",
    props: {},
  });
}
export function registerNumberInputField() {
  registerComponent(NumberInputField, {
    name: "NumberInputField",
    importPath: "@chakra-ui/react",
    props: {},
  });
}
