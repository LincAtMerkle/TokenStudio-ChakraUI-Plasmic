import {registerComponent } from "@plasmicapp/host";
import {Checkbox} from "@chakra-ui/react";

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
            options: ["xl", "sm", "md", "lg","xxl"],
          },
          value: {
            type: "string",
          },
          variant: {
            type: "choice",
            options: ["primary"],
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
