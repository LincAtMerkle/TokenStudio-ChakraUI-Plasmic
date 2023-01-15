import {
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  Popover,
  PopoverTrigger
} from "@chakra-ui/react";
import { registerComponent } from "@plasmicapp/host";

export function registerPopover() {
  registerComponent(Popover, {
    name: "Popover",
    importPath: "@chakra-ui/react",
    props: {
      gutter: {
        type: "number",
        defaultValue: 8,
      },
      arrowPadding: "number",
      arrowShadowColor: {
        type: "string",
        defaultValue: "rgba(0, 0, 0, 0.15)",
      },
      arrowSize: {
        type: "number",
      },
      offset: {
        type: "array",
        defaultValue: [0, 0],
      },
      closeDelay: "number",
      orientation: {
        type: "choice",
        options: ["horizontal", "vertical"],
      },
      placement: {
        type: "choice",
        options: ["top", "bottom", "left", "right"],
        defaultValue: "bottom",
      },
      direction: {
        type: "choice",
        options: ["ltr", "rtl"],
        defaultValue: "ltr",
      },
      trigger: {
        type: "choice",
        options: ["click", "hover"],
        defaultValue: "click",
      },
      isLazy: {
        type: "boolean",
      },
      isOpen: {
        type: "boolean",
      },
      children: {
        type: "slot",
        defaultValue: [
          {
            type: "component",
            name: "PopoverTrigger",
          },
          {
            type: "component",
            name: "PopoverContent",
          },
        ],
      },
    },
  });
}
export function registerPopoverContent() {
  registerComponent(PopoverContent, {
    name: "PopoverContent",
    importPath: "@chakra-ui/react",
    props: {
      children: {
        type: "slot",
        defaultValue: [
          {
            type: "component",
            name: "PopoverArrow",
          },
          {
            type: "component",
            name: "PopoverCloseButton",
          },
          {
            type: "component",
            name: "PopoverHeader",
            props: {
              children: {
                type: "text",
                value: "Confirmation!",
              },
            },
          },
          {
            type: "component",
            name: "PopoverBody",
            props: {
              children: {
                type: "text",
                value: "Are you sure you want to have that milkshake?",
              },
            },
          },
        ],
      },
    },
  });
}
export function registerPopoverArrow() {
  registerComponent(PopoverArrow, {
    name: "PopoverArrow",
    importPath: "@chakra-ui/react",
    props: {},
  });
}
export function registerPopoverCloseButton() {
  registerComponent(PopoverCloseButton, {
    name: "PopoverCloseButton",
    importPath: "@chakra-ui/react",
    props: {},
  });
}
export function registerPopoverHeader() {
  registerComponent(PopoverHeader, {
    name: "PopoverHeader",
    importPath: "@chakra-ui/react",
    props: {
      children: {
        type: "slot",
        defaultValue: {
          type: "text",
          value: "Confirmation!",
        },
      },
    },
  });
}
export function registerPopoverBody() {
  registerComponent(PopoverBody, {
    name: "PopoverBody",
    importPath: "@chakra-ui/react",
    props: {
      children: {
        type: "slot",
        defaultValue: {
          type: "text",
          value: "Are you sure you want to have that milkshake?",
        },
      },
    },
  });
}
export function registerPopoverTrigger() {
  registerComponent(PopoverTrigger, {
    name: "PopoverTrigger",
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
              value: "Trigger",
            },
          },
        },
      },
    },
  });
}

export interface PopoverTriggerProps {
  children: React.ReactNode;
}
