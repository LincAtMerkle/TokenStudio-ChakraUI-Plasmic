import { CheckboxGroup, Checkbox } from "@chakra-ui/react";
import { registerComponent } from "@plasmicapp/host";

export function registerCheckbox() {
  registerComponent(Checkbox, {
    name: "Checkbox",
    importPath: "@chakra-ui/react",
    props: {
      colorScheme: {
        type: "choice",
        options: [
          "whiteAlpha",
          "blackAlpha",
          "gray",
          "red",
          "orange",
          "yellow",
          "green",
          "teal",
          "blue",
          "cyan",
          "purple",
          "pink",
          "linkedin",
          "facebook",
          "messenger",
          "whatsapp",
          "twitter",
          "telegram",
        ],
        defaultValue: "blue",
      },
      size: {
        type: "choice",
        options: ["xl", "sm", "md", "lg"],
      },
      value: {
        type: "string",
      },
      spacing: {
        type: "string",
        defaultValue: "0.5rem",
      },
      isChecked: {
        type: "boolean",
      },
      isIndeterminate: {
        type: "boolean",
      },
      isDisabled: {
        type: "boolean",
      },
      isRequired: {
        type: "boolean",
      },
      isInvalid: {
        type: "boolean",
      },
      children: {
        type: "slot",
        defaultValue: {
          type: "text",
          value: "Checkbox",
        },
      },
    },
  });
}
export function registerCheckboxGroup() {
  registerComponent(CheckboxGroup, {
    name: "CheckboxGroup",
    importPath: "@chakra-ui/react",
    props: {
      size: {
        type: "choice",
        options: ["xl", "sm", "md", "lg"],
        defaultValue: "md",
      },
      isDisabled: {
        type: "boolean",
      },
      children: {
        type: "slot",
        allowedComponents: ["Checkbox"],
        defaultValue: [
          {
            type: "component",
            name: "Checkbox",
            props: {
              value: "1",
              children: {
                type: "text",
                value: "Checkbox 1",
              },
            },
          },
          {
            type: "component",
            name: "Checkbox",
            props: {
              value: "2",
              children: {
                type: "text",
                value: "Checkbox 2",
              },
            },
          },
          {
            type: "component",
            name: "Checkbox",
            props: {
              value: "3",
              children: {
                type: "text",
                value: "Checkbox 3",
              },
            },
          },
        ],
      },
    },
  });
}
