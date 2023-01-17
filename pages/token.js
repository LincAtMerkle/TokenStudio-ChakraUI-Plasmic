// TOKENS.
// Not a Chakra feature,
// Can be any naming system
// Can come from NPM package

import tokenStudioChakra from './tokenStudioChakra.json'


const tokens = {
    colors: {
      light: {
        "bg-default": "#ffff00",
        "fg-default": "#0000ff",
        "btn-bg":tokenStudioChakra.colors['st-light']["color-hm-navy-400"],
        "btn-fg": "#00ff00",
      },
    },
  };
  
  // SEMANTIC TOKENS.
  // A Chakra UI feature
 export const semanticTokens = {
    colors: {
      "bg-default": {
        default: tokens.colors.light["bg-default"],
        _dark: tokens.colors.light["bg-default"],
      },
      "fg-default": {
        default: tokens.colors.light["fg-default"],
        _dark: tokens.colors.light["fg-default"],
      },
      "btn-bg": {
        default: tokens.colors.light["btn-bg"],
        _dark: tokens.colors.light["btn-bg"],
      },
      "btn-fg": {
        default: tokens.colors.light["btn-fg"],
        _dark: tokens.colors.light["btn-fg"],
      },
    },
  };
  
  