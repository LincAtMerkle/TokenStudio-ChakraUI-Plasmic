import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import { registerComponent } from "@plasmicapp/host";

export function registerTable() {
  registerComponent(Table, {
    name: "Table",
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
      size: {
        type: "choice",
        options: ["sm", "md", "lg"],
        defaultValue: "md",
      },
      variant: {
        type: "choice",
        options: ["simple", "striped", "unstyled"],
        defaultValue: "simple",
      },
      children: {
        type: "slot",
      },
    },
  });
}

export function registerTableCaption() {
  registerComponent(TableCaption, {
    name: "TableCaption",
    importPath: "@chakra-ui/react",
    props: {
      placement: {
        type: "choice",
        options: ["top", "bottom"],
        defaultValue: "bottom",
      },
      children: {
        type: "slot",
        defaultValue: {
          type: "text",
          value: "Imperial to metric conversion factors",
        },
      },
    },
  });
}

export function registerThead() {
  registerComponent(Thead, {
    name: "Thead",
    importPath: "@chakra-ui/react",
    props: {
      children: {
        type: "slot",
        allowedComponents: ["Th", "Tr"],
      },
    },
  });
}
export function registerTbody() {
  registerComponent(Tbody, {
    name: "Tbody",
    importPath: "@chakra-ui/react",
    props: {
      children: {
        type: "slot",
        allowedComponents: ["Td", "Tr"],
      },
    },
  });
}

export function registerTr() {
  registerComponent(Tr, {
    name: "Tr",
    importPath: "@chakra-ui/react",
    props: {
      children: {
        type: "slot",
        allowedComponents: ["Td", "Th"],
      },
    },
  });
}
export function registerTd() {
  registerComponent(Td, {
    name: "Td",
    importPath: "@chakra-ui/react",
    props: {
      isNumeric: "boolean",
      children: {
        type: "slot",
        defaultValue: {
          type: "text",
          value: "Table Cell",
        },
      },
    },
  });
}
export function registerTh() {
  registerComponent(Th, {
    name: "Th",
    importPath: "@chakra-ui/react",
    props: {
      isNumeric: "boolean",
      children: {
        type: "slot",
        defaultValue: {
          type: "text",
          value: "Table Cell",
        },
      },
    },
  });
}
export function registerTableContainer() {
  registerComponent(TableContainer, {
    name: "TableContainer",
    importPath: "@chakra-ui/react",
    props: {
      overflowX: {
        type: "choice",
        options: ["auto", "scroll", "hidden", "visible"],
      },
      overflowY: {
        type: "choice",
        options: ["auto", "scroll", "hidden", "visible"],
      },
      whiteSpace: {
        type: "choice",
        options: ["normal", "nowrap", "pre", "pre-line", "pre-wrap"],
      },
      children: {
        type: "slot",
        allowedComponents: ["Table"],
        defaultValue: {
          type: "component",
          name: "Table",
          props: {
            children: [
              {
                type: "component",
                name: "Thead",
                props: {
                  children: {
                    type: "component",
                    name: "Tr",
                    props: {
                      children: [
                        {
                          type: "component",
                          name: "Th",
                          props: {
                            children: {
                              type: "text",
                              value: "TO CONVERT",
                            },
                          },
                        },
                        {
                          type: "component",
                          name: "Th",
                          props: {
                            children: {
                              type: "text",
                              value: "INTO",
                            },
                          },
                        },
                        {
                          type: "component",
                          name: "Th",
                          props: {
                            children: {
                              type: "text",
                              value: "MULTIPLY BY",
                            },
                          },
                        },
                      ],
                    },
                  },
                },
              },
              {
                type: "component",
                name: "Tbody",
                props: {
                  children: [
                    {
                      type: "component",
                      name: "Tr",
                      props: {
                        children: [
                          {
                            type: "component",
                            name: "Td",
                            props: {
                              children: {
                                type: "text",
                                value: "inches",
                              },
                            },
                          },
                          {
                            type: "component",
                            name: "Td",
                            props: {
                              children: {
                                type: "text",
                                value: "millimetres (mm)",
                              },
                            },
                          },
                          {
                            type: "component",
                            name: "Td",
                            props: {
                              children: {
                                type: "text",
                                value: "25.4",
                              },
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
          },
        },
      },
    },
  });
}
export function registerTfoot() {
  registerComponent(Tfoot, {
    name: "Tfoot",
    importPath: "@chakra-ui/react",
    props: {
      children: {
        type: "slot",
        defaultValue: [
          {
            type: "component",
            name: "Tr",
            props: {
              children: [
                {
                  type: "component",
                  name: "Th",
                  props: {
                    children: {
                      type: "text",
                      value: "Name",
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
