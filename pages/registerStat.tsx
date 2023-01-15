import {
  StatArrow,
  StatHelpText,
  StatLabel,
  StatNumber,
  Stat,
} from "@chakra-ui/react";
import { registerComponent } from "@plasmicapp/host";

export function registerStat() {
  registerComponent(Stat, {
    name: "Stat",
    importPath: "@chakra-ui/react",
    props: {
      children: {
        type: "slot",
        defaultValue: [
          {
            type: "component",
            name: "StatLabel",
            props: { children: { type: "text", value: "Collected Fees" } },
          },
          {
            type: "component",
            name: "StatNumber",
            props: { children: { type: "text", value: "£345,670" } },
          },
          {
            type: "component",
            name: "StatHelpText",
            props: {
              children: {
                type: "hbox",
                styles: {
                  alignItems: "center",
                  padding: "0px",
                },
                children: [
                  {
                    type: "component",
                    name: "StatArrow",
                    props: { type: "increase" },
                  },
                  { type: "text", value: "Last 7 days" },
                ],
              },
            },
          },
        ],
      },
    },
  });
}
export function registerStatHelpText() {
  registerComponent(StatHelpText, {
    name: "StatHelpText",
    importPath: "@chakra-ui/react",
    props: {
      children: {
        type: "slot",
        defaultValue: [
          {
            type: "text",
            value: "StatHelpText",
          },
        ],
      },
    },
  });
}
export function registerStatArrow() {
  registerComponent(StatArrow, {
    name: "StatArrow",
    importPath: "@chakra-ui/react",
    props: {
      type: {
        type: "choice",
        options: ["increase", "decrease"],
      },
    },
  });
}
export function registerStatNumber() {
  registerComponent(StatNumber, {
    name: "StatNumber",
    importPath: "@chakra-ui/react",
    props: {
      children: {
        type: "slot",
        defaultValue: [
          {
            type: "text",
            value: "£345,670",
          },
        ],
      },
    },
  });
}
export function registerStatLabel() {
  registerComponent(StatLabel, {
    name: "StatLabel",
    importPath: "@chakra-ui/react",
    props: {
      children: {
        type: "slot",
        defaultValue: [
          {
            type: "text",
            value: "StatLabel",
          },
        ],
      },
    },
  });
}
