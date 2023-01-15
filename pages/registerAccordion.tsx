import {
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Accordion,
  AccordionIcon,
} from "@chakra-ui/react";
import {registerComponent } from "@plasmicapp/host";

export function registerAccordion() {
  registerComponent(Accordion, {
    name: "Accordion",
    importPath: "@chakra-ui/react",
    props: {
      allowMultiple: {
        type: "boolean",
        description:
          "If true, multiple accordion items can be expanded at the same time.",
      },
      allowToggle: {
        type: "boolean",
        description:
          "If true, an expanded accordion item can be collapsed again.",
      },
      defaultIndex: {
        type: "number",
        description:
          "The index of the accordion item that should be expanded by default.",
      },
      reduceMotion: {
        type: "boolean",
        description:
          "If true, height animation and transitions will be disabled.",
      },
      children: {
        type: "slot",
        allowedComponents: ["AccordionItem"],
        defaultValue: [
          { type: "component", name: "AccordionItem" },
          { type: "component", name: "AccordionItem" },
        ],
      },
    },
  });
}

export function registerAccordionItem() {
  registerComponent(AccordionItem, {
    name: "AccordionItem",
    importPath: "@chakra-ui/react",
    props: {
      id: {
        type: "string",
        description: "The unique id of the accordion item.",
      },
      isDisabled: {
        type: "boolean",
        description: "If true, the accordion item will be disabled.",
      },
      isFocusable: {
        type: "boolean",
        description: "If true, the accordion item will be focusable.",
      },
      children: {
        type: "slot",
        allowedComponents: [
          "AccordionButton",
          "AccordionPanel",
        ],
        defaultValue: [
          {
            type: "component",
            name: "AccordionButton",
          },
          {
            type: "component",
            name: "AccordionPanel",
          },
        ],
      },
    },
  });
}

export function registerAccordionButton() {
  registerComponent(AccordionButton, {
    name: "AccordionButton",
    importPath: "@chakra-ui/react",
    props: {
      _expanded: {
        type: "object",
        displayName: "expandedStyle",
        defaultValueHint: {
          bg: "orange",
          color: "white",
        },
      },
      children: {
        type: "slot",
        defaultValue: [
          {
            type: "text",
            value: "Section 1 title",
            styles: {
              textAlign: "left",
            },
          },
          {
            type: "component",
            name: "AccordionIcon",
          },
        ],
      },
    },
  });
}

export function registerAccordionPanel() {
  registerComponent(AccordionPanel, {
    name: "AccordionPanel",
    importPath: "@chakra-ui/react",
    props: {
      children: {
        type: "slot",
        defaultValue: {
          type: "component",
          name: "Text",
          props: {
            children: {
              type: "text",
              value:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            },
          },
        },
      },
    },
  });
}

export function registerAccordionIcon() {
  registerComponent(AccordionIcon, {
    name: "AccordionIcon",
    importPath: "@chakra-ui/react",
    props: {},
  });
}
