import {
  BreadcrumbItem,
  BreadcrumbLink,
  Breadcrumb,
  BreadcrumbSeparator,
} from "@chakra-ui/react";
import {registerComponent } from "@plasmicapp/host";


export function registerBreadcrumbItem(){
    registerComponent(BreadcrumbItem, {
        name: "BreadcrumbItem",
        importPath: "@chakra-ui/react",
        props: {
    isCurrentPage: {
      type: "boolean",
    },
    isLastChild: {
      type: "boolean",
    },
    seperator: {
      type: "string",
      defaultValue: "/",
    },
    spacing: {
      type: "string",
      defaultValue: "8px",
    },
    children: {
      type: "slot",
      defaultValue: [
        {
          type: "component",
          name: "BreadcrumbLink",
          props: {
            children: {
              type: "text",
              value: "BreadcrumbItem",
            },
          },
        },
      ],
    },
  },
});};
export function registerBreadcrumbLink(){
    registerComponent(BreadcrumbLink, {
        name: "BreadcrumbLink",
        importPath: "@chakra-ui/react",
        props: {
    href: {
      type: "string",
      defaultValue: "#",
    },
    children: {
      type: "slot",
      defaultValue: [
        {
          type: "text",
          value: "Home",
        },
      ],
    },
  },
});};
export function registerBreadcrumb(){
    registerComponent(Breadcrumb, {
        name: "Breadcrumb",
        importPath: "@chakra-ui/react",
        props: {
    separator: {
      type: "string",
      defaultValue: "/",
    },
    spacing: {
      type: "string",
      defaultValue: "8px",
    },
    children: {
      type: "slot",
      defaultValue: [
        {
          type: "component",
          name: "BreadcrumbItem",
          props: {
            children: {
              type: "component",
              name: "BreadcrumbLink",
              props: {
                children: {
                  type: "text",
                  value: "Home",
                },
              },
            },
          },
        },
        {
          type: "component",
          name: "BreadcrumbItem",
          props: {
            children: {
              type: "component",
              name: "BreadcrumbLink",
              props: {
                children: {
                  type: "text",
                  value: "Docs",
                },
              },
            },
          },
        },
        {
          type: "component",
          name: "BreadcrumbItem",
          props: {
            isLastChild: true,
            isCurrentPage: true,
            children: {
              type: "component",
              name: "BreadcrumbLink",
              props: {
                children: {
                  type: "text",
                  value: "Breadcrumb",
                },
              },
            },
          },
        },
      ],
    },
  },
});};
export function registerBreadcrumbSeparator(){
    registerComponent(BreadcrumbSeparator, {
        name: "BreadcrumbSeparator",
        importPath: "@chakra-ui/react",
        props: {
    children: {
      type: "slot",
      defaultValue: {
        type: "text",
        value: "/",
      },
    },
  },
});};
