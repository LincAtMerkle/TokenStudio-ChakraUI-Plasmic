import {
  CloseButton,
  // Modal as ChakraUIModal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Modal,
} from "@chakra-ui/react";
import { registerComponent } from "@plasmicapp/host";

import React from "react";

export function registerModal() {
  registerComponent(Modal, {
    name: "Modal",
    importPath: "@chakra-ui/react",
    props: {
      isOpen: {
        type: "boolean",
        defaultValue: true,
      },
      isCentered: {
        type: "boolean",
        defaultValue: false,
      },
      scrollBehavior: {
        type: "choice",
        options: ["inside", "outside"],
        defaultValue: "outside",
        description: `
      Where scroll behavior should originate.
        - If set to 'inside', scroll only occurs within the ModalBody.
        - If set to 'outside', the entire ModalContent will scroll within the viewport.
      `,
      },
      motionPreset: {
        type: "choice",
        options: ["slideInBottom", "slideInRight", "scale", "none"],
        defaultValue: "scale",
      },
      children: {
        type: "slot",
        allowedComponents: ["ModalOverlay", "ModalContent"],
        defaultValue: [
          {
            type: "component",
            name: "ModalOverlay",
          },
          {
            type: "component",
            name: "ModalContent",
          },
        ],
      },
    },
  });
}

export function Modal(props: ModalProps) {
  return (
    <ChakraUIModal {...props} onClose={props.onClose ?? (() => {})}>
      {props.children}
    </ChakraUIModal>
  );
}

export function registerModalOverlay() {
  registerComponent(ModalOverlay, {
    name: "ModalOverlay",
    importPath: "@chakra-ui/react",
    props: {
      children: "slot",
    },
  });
}
export function registerModalContent() {
  registerComponent(ModalContent, {
    name: "ModalContent",
    importPath: "@chakra-ui/react",
    props: {
      children: {
        type: "slot",
        allowedComponents: [
          "ModalHeader",
          "ModalCloseButton",
          "ModalBody",
          "ModalFooter",
        ],
        defaultValue: [
          {
            type: "component",
            name: "ModalHeader",
          },
          {
            type: "component",
            name: "ModalBody",
          },
          {
            type: "component",
            name: "ModalFooter",
          },
        ],
      },
    },
  });
}
export function registerModalHeader() {
  registerComponent(ModalHeader, {
    name: "ModalHeader",
    importPath: "@chakra-ui/react",
    props: {
      children: {
        type: "slot",
        defaultValue: {
          type: "text",
          value: "Modal Title",
        },
      },
    },
  });
}

const LOREM_IPSUM_TEXT = `
  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
  Ipsum has been the industry's standard dummy text ever since the 1500s, when an
  unknown printer took a galley of type and scrambled it to make a type specimen book.
  It has survived not only five centuries, but also the leap into electronic typesetting,
  remaining essentially unchanged. It was popularised in the 1960s with the release of
  Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
  software like Aldus PageMaker including versions of Lorem Ipsum.
`;
export function registerModalBody() {
  registerComponent(ModalBody, {
    name: "ModalBody",
    importPath: "@chakra-ui/react",
    props: {
      children: {
        type: "slot",
        defaultValue: {
          type: "text",
          value: LOREM_IPSUM_TEXT,
        },
      },
    },
  });
}
export function registerModalFooter() {
  registerComponent(ModalFooter, {
    name: "ModalFooter",
    importPath: "@chakra-ui/react",
    props: {
      children: {
        type: "slot",
        defaultValue: {
          type: "text",
          value: "Modal Footer",
        },
      },
    },
  });
}
export function registerModalCloseButton() {
  registerComponent(ModalCloseButton, {
    name: "ModalCloseButton",
    importPath: "@chakra-ui/react",
    props: {
      isDisabled: "boolean",
    },
  });
}
