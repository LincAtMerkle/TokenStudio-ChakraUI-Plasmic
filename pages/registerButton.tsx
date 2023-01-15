import { ButtonGroup, Button } from "@chakra-ui/react";
import {registerComponent } from "@plasmicapp/host";

export function registerButtonGroup(){
    registerComponent(ButtonGroup, {
        name: "ButtonGroup",
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
          },
          size: {
            type: "choice",
            options: ["xl", "sm", "md", "lg"],
            defaultValue: "md",
          },
          isAttached: {
            type: "boolean",
            defaultValue: false,
          },
          isDisabled: {
            type: "boolean",
            defaultValue: false,
          },
          spacing: {
            type: "string",
            defaultValue: "0.5rem",
          },
          children: {
            type: "slot",
            defaultValue: [
              {
                type: "component",
                name: "Button",
                props: {
                  children: {
                    type: "text",
                    value: "Button 1",
                  },
                },
              },
              {
                type: "component",
                name: "Button",
                props: {
                  children: {
                    type: "text",
                    value: "Button 2",
                  },
                },
              },
            ],
          },
        },
      });
} 

export function registerButton(){
  registerComponent(Button, {
      name: "Button",
      importPath: "@chakra-ui/react",
      props: {
        size: {
          type: "choice",
          options: ["xl", "sm", "md", "lg","xxl"],
        },
        variant: {
          type: "choice",
          options: ["ghost", "primary","outline", "solid", "link", "unstyled"],
          defaultValue: "solid",
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
        iconSpacing: "number",
        isActive: {
          type: "boolean",
        },
        isDisabled: {
          type: "boolean",
        },
        isLoading: {
          type: "boolean",
        },
        children: {
          type: "slot",
          defaultValue: {
            type: "text",
            value: "Button",
          },
        },
      },
    });
} 