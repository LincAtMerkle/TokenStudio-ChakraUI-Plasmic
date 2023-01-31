import { IconProps } from "@chakra-ui/icons";
import { ComponentMeta } from "@plasmicapp/host/registerComponent";
import {
  getComponentNameAndImportMeta,
  getPlasmicComponentName,
} from "../chakra/utils";

export const bowlingIconMeta: ComponentMeta<IconProps> = {
  ...getComponentNameAndImportMeta("BowlingIcon", "Tabs"),

    props: {
      viewBox: {
        type: "string",
        defaultValue: "0 0 32 32",
      },
      boxSize: {
        type: "string",
        defaultValue: "1em",
      },
      color: {
        type: "string",
        defaultValue: "currentColor",
      },
      focusable: {
        type: "boolean",
        defaultValue: false,
      },
      role: {
        type: "choice",
        options: ["presentation", "img"],
      },
    },
  }
