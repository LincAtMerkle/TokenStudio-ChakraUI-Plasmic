import { CardProps, CardHeaderProps, CardBodyProps, CardFooterProps, IconProps } from "@chakra-ui/react";
import { ComponentMeta } from "@plasmicapp/host/registerComponent";
import {
  getComponentNameAndImportMeta,
  getPlasmicComponentName,
} from "./utils";

export const cardMeta: ComponentMeta<CardProps> = {
  ...getComponentNameAndImportMeta("Card"),
  props: {
    size: {
      type: "choice",
      options: ["sm", "md", "lg"],
      // defaultValue: "lg",
    },
    variant: {
      type: "choice",
      options: ["primary", "elevated", "outline", "filled", "unstyled"],
      defaultValue: "primary",
    },
    children: {
      type: "slot",
      allowedComponents: [
        getPlasmicComponentName("CardBody,CardHeader, CardFooter"),
      ],
      defaultValue: [
        {
          type: "component",
          name: getPlasmicComponentName("CardHeader"),
        },
        {
          type: "component",
          name: getPlasmicComponentName("CardBody"),
        },
        {
          type: "component",
          name: getPlasmicComponentName("CardFooter"),
        },
      ],
    },
  },
};
export const cardHeaderMeta: ComponentMeta<CardHeaderProps> = {
  ...getComponentNameAndImportMeta("CardHeader", "Card"),
  props: {
    size: {
      type: "choice",
      options: ["sm", "md", "lg"],
    },
    children: {
      type: "slot",
      allowedComponents: [getPlasmicComponentName("ImageWithOverlay")],

      defaultValue: [
        {
          type: "component",
          name: getPlasmicComponentName("ImageWithOverlay"),
        },
      ],
    },
  },
};
export const cardBodyMeta: ComponentMeta<CardBodyProps> = {
  ...getComponentNameAndImportMeta("CardBody", "Card"),
  props: {
    children: {
      type: "slot",
      allowedComponents: [
        getPlasmicComponentName("Tag"),
        getPlasmicComponentName("Text")
      ],
      defaultValue: [
        { type: "component", name: getPlasmicComponentName("Tag") },
        { type: "component", name: getPlasmicComponentName("Tag") },
        { type: "component", name: getPlasmicComponentName("Tag") },
        { type: "component", name: getPlasmicComponentName("Tag") },
        { type: "component", name: getPlasmicComponentName("Tag") },
        { type: "component", name: getPlasmicComponentName("Tag") },
        { type: "component", name: getPlasmicComponentName("Text") },
      ],
    },
  },
};
export const cardFooterMeta: ComponentMeta<CardFooterProps> = {
  ...getComponentNameAndImportMeta("CardFooter", "Card"),
  props: {
    children: {
      type: "slot",
      allowedComponents: [
        getPlasmicComponentName("Stack"),
        getPlasmicComponentName("IconButton")
],

      defaultValue: [
        {
          type: "component",
          name: getPlasmicComponentName("Stack"),
          props: {
            children: [
              {
                type: "component",
                name: getPlasmicComponentName("IconButton"),
              },
              {
                type: "component",
                name: getPlasmicComponentName("IconButton"),
              },
              {
                type: "component",
                name: getPlasmicComponentName("IconButton"),
              },
              {
                type: "component",
                name: getPlasmicComponentName("IconButton"),
              },
              {
                type: "component",
                name: getPlasmicComponentName("IconButton"),
              },
              {
                type: "component",
                name: getPlasmicComponentName("IconButton"),
              },
            ],
          },
        },
        { type: "component", name: getPlasmicComponentName("Tag") },
      ],
    },
  },
};
