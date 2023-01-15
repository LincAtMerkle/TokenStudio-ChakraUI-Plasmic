import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Icon,
} from "@chakra-ui/react";
import {registerComponent } from "@plasmicapp/host";


export function registerCard(){
    registerComponent(Card, {
        name: "Card",
        importPath: "@chakra-ui/react",
        props: {
    size: {
      type: "choice",
      options: ["sm", "md", "lg"],
      // defaultValue: "lg",
      },
    variant: {
      type: "choice",
      options: ["primary", "elevated", "outline", "filled", "unstyled"],
      defaultValue: "primary",
      },
    children: {
      type: "slot",
      allowedComponents: ["CardBody,CardHeader, CardFooter"],
      defaultValue: [
        {
          type: "component",
          name: "CardHeader",
        },
        {
          type: "component",
          name: "CardBody",
        },
        {
          type: "component",
          name: "CardFooter",
        },
        ],
      },
  },
});};
export function registerCardHeader(){
    registerComponent(CardHeader, {
        name: "CardHeader",
        importPath: "@chakra-ui/react",
        props: {
    size: {
        type: 'choice',
        options: ['sm', 'md', 'lg'],
      },
      children: {
        type: 'slot',
        defaultValue: [
          {
          type: "component",
          name: "ImageWithOverlay",
          },
        ],
      },
  },
});};
export function registerCardBody(){
    registerComponent(CardBody, {
        name: "CardBody",
        importPath: "@chakra-ui/react",
        props: {
    children: {
      type: "slot",
      defaultValue: [
          {type: "component", name: "Tag"},
          {type: "component", name: "Tag"},
          {type: "component", name: "Tag"},
          {type: "component", name: "Tag"},
          {type: "component", name: "Tag"},
          {type: "component", name: "Tag"},
          {type: "component", name: "Text"},
        ],
      }
  },
});};
export function registerCardFooter(){
    registerComponent(CardFooter, {
        name: "CardFooter",
        importPath: "@chakra-ui/react",
        props: {
    children: {
      type: "slot",
      defaultValue: [
        {
          type: "component",
          name: "Stack",
          props: {
            children:[
              {type: "component", name: "IconButton"},
              {type: "component", name: "IconButton"},
              {type: "component", name: "IconButton"},
              {type: "component", name: "IconButton"},
              {type: "component", name: "IconButton"},
              {type: "component", name: "IconButton"},
              ]
          },
        },
        {type: "component", name: "Tag"},
      ]
    }
  },
});};