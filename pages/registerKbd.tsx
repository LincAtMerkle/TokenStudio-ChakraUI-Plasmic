import { Kbd } from "@chakra-ui/react";
import {registerComponent } from "@plasmicapp/host";

export function registerKbd(){
    registerComponent(Kbd, {
        name: "Kbd",
        importPath: "@chakra-ui/react",
        props: {
    children: {
      type: "slot",
      defaultValue: [
        {
          type: "text",
          value: "⌘",
        },
      ],
    },
  },
});
}

export function registerKbd(
  loader?: Registerable,
  customKbdMeta?: ComponentMeta<KbdProps>
) {
  const doRegisterComponent: typeof registerComponent = (...args) =>
    loader ? loader.registerComponent(...args) : registerComponent(...args);
  doRegisterComponent(Kbd, customKbdMeta ?? kbdMeta);
}
