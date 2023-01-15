import { TabList, TabPanel, TabPanels, Tab, Tabs } from "@chakra-ui/react";
import { registerComponent } from "@plasmicapp/host";

export function registerTabList() {
  registerComponent(TabList, {
    name: "TabList",
    importPath: "@chakra-ui/react",
    props: {
      children: {
        type: "slot",
        allowedComponents: ["Tab"],
      },
    },
  });
}
export function registerTabs() {
  registerComponent(Tabs, {
    name: "Tabs",
    importPath: "@chakra-ui/react",
    props: {
      align: {
        type: "choice",
        options: ["start", "center", "end"],
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
      orientation: {
        type: "choice",
        options: ["horizontal", "vertical"],
      },
      size: {
        type: "choice",
        options: ["sm", "md", "lg"],
      },
      variant: {
        type: "choice",
        options: [
          "line",
          "enclosed",
          "enclosed-colored",
          "soft-rounded",
          "solid-rounded",
          "unstyled",
        ],
        defaultValue: "line",
      },
      direction: {
        type: "choice",
        options: ["ltr", "rtl"],
      },
      index: {
        type: "number",
      },
      isFitted: "boolean",
      isLazy: "boolean",
      isManual: "boolean",
      children: {
        type: "slot",
        allowedComponents: ["TabList", "TabPanels"],
        defaultValue: [
          {
            type: "component",
            name: "TabList",
            props: {
              children: [
                {
                  type: "component",
                  name: "Tab",
                  props: {
                    children: {
                      type: "text",
                      value: "Tab 1",
                    },
                  },
                },
                {
                  type: "component",
                  name: "Tab",
                  props: {
                    children: {
                      type: "text",
                      value: "Tab 2",
                    },
                  },
                },
                {
                  type: "component",
                  name: "Tab",
                  props: {
                    children: {
                      type: "text",
                      value: "Tab 3",
                    },
                  },
                },
              ],
            },
          },
          {
            type: "component",
            name: "TabPanels",
            props: {
              children: [
                {
                  type: "component",
                  name: "TabPanel",
                  props: {
                    children: {
                      type: "text",
                      value: "Tab 1's Panel Content",
                    },
                  },
                },
                {
                  type: "component",
                  name: "TabPanel",
                  props: {
                    children: {
                      type: "text",
                      value: "Tab 2's Panel Content",
                    },
                  },
                },
                {
                  type: "component",
                  name: "TabPanel",
                  props: {
                    children: {
                      type: "text",
                      value: "Tab 3's Panel Content",
                    },
                  },
                },
              ],
            },
          },
        ],
      },
    },
  });
}
export function registerTab() {
  registerComponent(Tab, {
    name: "Tab",
    importPath: "@chakra-ui/react",
    props: {
      id: "string",
      isDisabled: "boolean",
      panelId: "string",
      children: {
        type: "slot",
        defaultValue: {
          type: "text",
          value: "Tab",
        },
      },
    },
  });
}
export function registerTabPanels() {
  registerComponent(TabPanels, {
    name: "TabPanels",
    importPath: "@chakra-ui/react",
    props: {
      children: {
        type: "slot",
        allowedComponents: ["TabPanel"],
      },
    },
  });
}
export function registerTabPanel() {
  registerComponent(TabPanel, {
    name: "TabPanel",
    importPath: "@chakra-ui/react",
    props: {
      children: {
        type: "slot",
        defaultValue: {
          type: "text",
          value: "Tab Panel Content",
        },
      },
    },
  });
}
