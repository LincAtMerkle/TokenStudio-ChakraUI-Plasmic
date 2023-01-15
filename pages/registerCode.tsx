import { Code } from "@chakra-ui/react";
import { registerComponent } from "@plasmicapp/host";

export function registerCode() {
  registerComponent(Code, {
    name: "Code",
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
        defaultValue: "gray",
      },
      variant: {
        type: "choice",
        options: ["solid", "subtle", "outline"],
        defaultValue: "subtle",
      },
      children: {
        type: "slot",
        defaultValue: [
          {
            type: "text",
            value: "Code",
          },
        ],
      },
    },
  });
}
