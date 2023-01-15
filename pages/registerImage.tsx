import { Image } from "@chakra-ui/react";
import { registerComponent } from "@plasmicapp/host";

export function registerImage() {
  registerComponent(Image, {
    name: "Image",
    importPath: "@chakra-ui/react",
    props: {
      src: {
        type: "string",
        defaultValue: "https://bit.ly/naruto-sage",
      },
      fallbackSrc: {
        type: "string",
        defaultValue: "https://via.placeholder.com/150",
      },
      alt: {
        type: "string",
        defaultValueHint: "name of the image",
      },
      loading: {
        type: "choice",
        options: ["lazy", "eager"],
      },
    },
  });
}
