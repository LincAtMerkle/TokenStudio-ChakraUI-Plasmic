import { AvatarBadge, AvatarGroup, Avatar } from "@chakra-ui/react";
import { registerComponent } from "@plasmicapp/host";

export function registerAvatarBadge() {
  registerComponent(AvatarBadge, {
    name: "AvatarBadge",
    importPath: "@chakra-ui/react",
    props: {
      boxSize: {
        type: "string",
        defaultValue: "1.25em",
      },
      bg: {
        type: "string",
        defaultValue: "green.500",
      },
      borderColor: "string",
    },
  });
}

export function registerAvatar() {
  registerComponent(Avatar, {
    name: "Avatar",
    importPath: "@chakra-ui/react",
    props: {
      name: {
        type: "string",
        defaultValue: "Kola Tioluwani",
      },
      src: {
        type: "string",
        defaultValue: "https://bit.ly/dan-abramov",
      },
      size: {
        type: "choice",
        options: ["2xs", "xs", "sm", "md", "lg", "xl", "2xl", "full"],
      },
      loading: {
        type: "choice",
        options: ["eager", "lazy"],
      },
      showBorder: "boolean",
      children: {
        type: "slot",
        hidePlaceholder: true,
        allowedComponents: ["AvatarBadge"],
        defaultValue: {
          type: "component",
          name: "AvatarBadge",
        },
      },
    },
  });
}
export function registerAvatarGroup() {
  registerComponent(AvatarGroup, {
    name: "AvatarGroup",
    importPath: "@chakra-ui/react",
    props: {
      size: {
        type: "choice",
        options: ["2xs", "xs", "sm", "md", "lg", "xl", "2xl", "full"],
      },
      max: {
        type: "number",
        description: "The maximum number of avatars to show before truncating.",
      },
      spacing: {
        type: "string",
        defaultValue: "-0.75rem",
      },
      children: {
        type: "slot",
        allowedComponents: ["Avatar"],
        defaultValue: [
          {
            type: "component",
            name: "Avatar",
            props: {
              name: "Dan Abrahmov",
              src: "https://bit.ly/dan-abramov",
            },
          },
          {
            type: "component",
            name: "Avatar",
            props: {
              name: "Kola Tioluwani",
              src: "https://bit.ly/tioluwani-kolawole",
            },
          },
          {
            type: "component",
            name: "Avatar",
            props: {
              name: "Kent Dodds",
              src: "https://bit.ly/kent-c-dodds",
            },
          },
          {
            type: "component",
            name: "Avatar",
            props: {
              name: "Ryan Florence",
              src: "https://bit.ly/ryan-florence",
            },
          },
          {
            type: "component",
            name: "Avatar",
            props: {
              name: "Prosper Otemuyiwa",
              src: "https://bit.ly/prosper-baba",
            },
          },
          {
            type: "component",
            name: "Avatar",
            props: {
              name: "Christian Nwamba",
              src: "https://bit.ly/code-beast",
            },
          },
          {
            type: "component",
            name: "Avatar",
            props: {
              name: "Segun Adebayo",
              src: "https://bit.ly/sage-adebayo",
            },
          },
        ],
      },
    },
  });
}
