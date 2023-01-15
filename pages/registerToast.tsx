import { Toast } from "@chakra-ui/react";
import { registerComponent } from "@plasmicapp/host";

export function registerToast() {
  registerComponent(Toast, {
    name: "Toast",
    importPath: "@chakra-ui/react",
    props: {
      title: {
        type: "string",
        defaultValue: "Toast Title",
      },
      description: {
        type: "string",
        defaultValue: "Toast description",
      },
      variant: {
        type: "choice",
        options: ["solid", "subtle", "left-accent", "top-accent"],
      },
      duration: {
        type: "number",
        defaultValue: 5000,
      },
      isClosable: {
        type: "boolean",
      },
      position: {
        type: "choice",
        options: [
          "top",
          "top-right",
          "top-left",
          "bottom",
          "bottom-right",
          "bottom-left",
        ],
      },
      status: {
        type: "choice",
        options: ["info", "success", "warning", "error", "loading"],
      },
    },
  });
}
