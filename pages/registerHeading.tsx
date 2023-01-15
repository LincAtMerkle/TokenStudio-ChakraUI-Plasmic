import { Heading } from "@chakra-ui/react";
import { registerComponent } from "@plasmicapp/host";

export function registerHeading() {
  registerComponent(Heading, {
    name: "Heading",
    importPath: "@chakra-ui/react",
    props: {
      children: {
        type: "slot",
        defaultValue: {
          type: "text",
          value:
            "Headings and other basic text writing including, body text, lists, and more.",
        },
      },
      size: {
        type: "choice",
        options: ["4xl", "3xl", "2xl", "xl", "lg", "md", "sm", "xs"],
        defaultValue: "xl",
      },
      noOfLines: {
        type: "number",
        defaultValue: 1,
      },
    },
  });
}
