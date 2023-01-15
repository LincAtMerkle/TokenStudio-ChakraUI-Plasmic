import {
  Tag,
  TagLabel,
  TagLeftIcon,
  TagRightIcon,
  TagCloseButton,
} from "@chakra-ui/react";
import { registerComponent } from "@plasmicapp/host";

export function registerTag() {
  registerComponent(Tag, {
    name: "Tag",
    importPath: "@chakra-ui/react",
    props: {
      spacing: {
        type: "string",
        defaultValue: "24px",
      },
      size: {
        type: "choice",
        options: ["sm", "md", "lg"],
      },
      variant: {
        type: "choice",
        options: ["primary", "subtle", "solid", "outline", "unstyled"],
      },
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
      },
      borderRadius: {
        type: "string",
      },
      children: {
        type: "slot",
        allowedComponents: [
          "TagLeftIcon",
          "TagLabel",
          "TagRightIcon",
          "TagCloseButton",
        ],
        defaultValue: [
          { type: "component", name: "TagLeftIcon" },
          {
            type: "component",
            name: "TagLabel",
            props: { children: { type: "text", value: "Tag" } },
          },
          { type: "component", name: "TagRightIcon" },
          { type: "component", name: "TagCloseButton" },
        ],
      },
    },
  });
}

export function registerTagLeftIcon() {
  registerComponent(TagLeftIcon, {
    name: "TagLeftIcon",
    importPath: "@chakra-ui/react",
    props: {
      children: {
        type: "slot",
        defaultValue: [
          {
            type: "component",
            name: "GolfIcon",
          },
        ],
      },
    },
  });
}

export function registerTagLabel() {
  registerComponent(TagLabel, {
    name: "TagLabel",
    importPath: "@chakra-ui/react",
    props: {
      children: {
        type: "slot",
        defaultValue: [
          {
            type: "text",
            value: "TagLabel",
          },
        ],
      },
    },
  });
}
export function registerTagRightIcon() {
  registerComponent(TagRightIcon, {
    name: "TagRightIcon",
    importPath: "@chakra-ui/react",
    props: {
      children: {
        type: "slot",
        defaultValue: [
          {
            type: "component",
            name: "GolfIcon",
          },
        ],
      },
    },
  });
}
export function registerTagCloseButton() {
  registerComponent(TagCloseButton, {
    name: "TagCloseButton",
    importPath: "@chakra-ui/react",
    props: {},
  });
}
