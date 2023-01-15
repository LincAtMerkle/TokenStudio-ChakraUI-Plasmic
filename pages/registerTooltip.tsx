import { Tooltip } from "@chakra-ui/react";
import { registerComponent } from "@plasmicapp/host";

export function registerTooltip() {
  registerComponent(Tooltip, {
    name: "Tooltip",
    importPath: "@chakra-ui/react",
    props: {
      children: {
        type: "slot",
        defaultValue: {
          type: "component",
          name: "Button",
          props: {
            children: {
              type: "text",
              value: "Hover me",
            },
          },
        },
      },
      label: {
        type: "string",
        defaultValue: "Hi! I am a tooltip",
      },
      placement: {
        type: "choice",
        options: [
          "auto",
          "auto-start",
          "auto-end",
          "top",
          "top-start",
          "top-end",
          "bottom",
          "bottom-start",
          "bottom-end",
          "right",
          "right-start",
          "right-end",
          "left",
          "left-start",
          "left-end",
        ],
        defaultValue: "bottom",
      },
      hasArrow: "boolean",
      arrowSize: {
        type: "number",
        defaultValue: 10,
      },
      arrowShadowColor: {
        type: "string",
      },
      arrowPadding: {
        type: "number",
        defaultValue: 8,
      },
      defaultIsOpen: "boolean",

      isDisabled: "boolean",
      offset: {
        type: "array",
        defaultValue: [0, 0],
      },
      closeOnClick: {
        type: "boolean",
        defaultValue: true,
      },
      closeDelay: {
        type: "number",
        defaultValue: 0,
      },
    },
  });
}
