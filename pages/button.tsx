import {registerComponent } from "@plasmicapp/host";
import {Button } from "@chakra-ui/react";

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