import { IconButton } from "@chakra-ui/react";
import { registerComponent } from "@plasmicapp/host";

export function registerIconButton() {
  registerComponent(IconButton, {
    name: "IconButton",
    importPath: "@chakra-ui/react",
    props: {
      size: {
        type: "choice",
        options: ["xl", "sm", "md", "lg"],
      },
      variant: {
        type: "choice",
        options: ["ghost", "outline", "solid", "link", "unstyled"],
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
      isActive: {
        type: "boolean",
      },
      isDisabled: {
        type: "boolean",
      },
      isLoading: {
        type: "boolean",
      },
      isRound: {
        type: "boolean",
        defaultValue: true,
      },
      icon: {
        type: "slot",
        hidePlaceholder: true,
        defaultValue: {
          type: "component",
          name: "GolfIcon",
        },
      },
    },
  });
}
