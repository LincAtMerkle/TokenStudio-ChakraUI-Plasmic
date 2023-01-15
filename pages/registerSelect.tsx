import { Select} from "@chakra-ui/react";
import {registerComponent } from "@plasmicapp/host";

import React from "react";

export function registerSelect(){
    registerComponent(Select, {
        name: "Select",
        importPath: "@chakra-ui/react",
        props: {
    size: {
      type: "choice",
      options: ["lg", "md", "sm", "xs"],
      defaultValue: "md",
    },
    variant: {
      type: "choice",
      options: ["outline", "filled", "flushed", "unstyled"],
      defaultValue: "outline",
    },
    placeholder: {
      type: "string",
    },
    errorBorderColor: {
      type: "string",
      defaultValueHint: "red.500",
    },
    isDisabled: {
      type: "boolean",
    },
    isInvalid: {
      type: "boolean",
    },
    isReadOnly: {
      type: "boolean",
    },
    isRequred: {
      type: "boolean",
    },
    children: {
      type: "slot",
      defaultValue: [
        {
          type: "component",
          name: "Option",
          props: {
            children: {
              type: "text",
              value: "Option 01",
            },
          },
        },
        {
          type: "component",
          name: "Option",
          props: {
            children: {
              type: "text",
              value: "Option 02",
            },
          },
        },
        {
          type: "component",
          name: "Option",
          props: {
            children: {
              type: "text",
              value: "Option 03",
            },
          },
        },
      ],
    },
  },
});
}
export interface OptionProps {
  value: string;
  className?: string;
  children: any;
}

export function Option(props: OptionProps) {
  const { value, className, children } = props;
  return (
    <option className={className} value={value}>
      {children}
    </option>
  );
}

export function registerOption(){
    registerComponent(Option, {
        name: "Option",
        importPath: "@chakra-ui/react",
        props: {
    value: "string",
    children: {
      type: "slot",
      defaultValue: {
        type: "text",
        value: "Option",
      },
    },
  },
});
}
