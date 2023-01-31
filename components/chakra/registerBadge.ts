import { BadgeProps } from "@chakra-ui/react";
import { ComponentMeta } from "@plasmicapp/host/registerComponent";
import { getComponentNameAndImportMeta } from "./utils";

export const badgeMeta: ComponentMeta<BadgeProps> = {
  ...getComponentNameAndImportMeta("Badge"),
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
  },
};
