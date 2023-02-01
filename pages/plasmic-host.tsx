import * as React from "react";
import { PlasmicCanvasHost, registerComponent, registerToken  } from "@plasmicapp/host";
import { ChakraProvider } from "@chakra-ui/react";
// import {registerAllComponents} from "./allComponents";
import { registerAll } from "../components/chakra";
import { theme as proTheme } from '../pro-package/src/index'
import { extendTheme, theme as baseTheme } from '@chakra-ui/react'
import '@fontsource/inter/variable.css'
import tokenStudioChakra from './tokenStudioChakra.json'

// You can register any code components that you want to use here; see
// https://docs.plasmic.app/learn/code-components-ref/
// And configure your Plasmic project to use the host url pointing at
// the /plasmic-host page of your nextjs app (for example,
// http://localhost:3000/plasmic-host).  See
// https://docs.plasmic.app/learn/app-hosting/#set-a-plasmic-project-to-use-your-app-host

// registerComponent(...)

const themePro = extendTheme(
  {
    colors: { ...baseTheme.colors, brand: baseTheme.colors.yellow },
  },
  proTheme,  
)
registerAll();
// registerAllComponents();

export default function PlasmicHost() {
  return (
    <ChakraProvider theme={themePro}>
      <PlasmicCanvasHost />
    </ChakraProvider>
  );
}

// registerToken({
//   type: "color",
//   name: "Token from code",
//   value: "#F123CC"
// })

// const tokenStudio = {
  
//   "colors": {
//     "st-dark": {
//       "color-fl-green-50": "#fcfff6",
//       "color-fl-green-100": "#f2ffdc",
//       "color-fl-green-200": "#e6ffb8",
//     },
//     "st-light": {
//       "color-fl-green-50": "#fcfff6",
//       "color-fl-green-100": "#f2ffdc",
//       "color-fl-green-200": "#e6ffb8",
//     }
//   }
// }

Object.entries(tokenStudioChakra.colors)
  .flatMap(([colorName, colorOptions]) =>
    Object.entries(colorOptions).map(([colorLevel, colorValue]) => ({
      name: `${colorName} ${colorLevel}`,
      value: colorValue
    })
  )).forEach(({ name, value}) => {
    registerToken({
      type: "color",
      name,
      value
    })
  })


  Object.entries(tokenStudioChakra.space)
  .flatMap(([spaceName, spaceOptions]) =>
    Object.entries(spaceOptions).map(([spaceLevel, spaceValue]) => ({
      name: `${spaceName} ${spaceLevel}`,
      value: spaceValue
    })
  )).forEach(({ name, value}) => {
    registerToken({
      type: "spacing",
      name,
      value
    })
  })

  Object.entries(tokenStudioChakra.fonts)
  .flatMap(([fontsName, fontsOptions]) =>
    Object.entries(fontsOptions).map(([fontsLevel, fontsValue]) => ({
      name: `${fontsName} ${fontsLevel}`,
      value: fontsValue
    })
  )).forEach(({ name, value}) => {
    registerToken({
      type: "font-family",
      name,
      value
    })
  })

  Object.entries(tokenStudioChakra.fontSizes)
  .flatMap(([fontSizeName, fontSizeOptions]) =>
    Object.entries(fontSizeOptions).map(([fontSizeLevel, fontSizeValue]) => ({
      name: `${fontSizeName} ${fontSizeLevel}`,
      value: fontSizeValue
    })
  )).forEach(({ name, value}) => {
    registerToken({
      type: "font-size",
      name,
      value
    })
  })

  Object.entries(tokenStudioChakra.fontWeights)
  .flatMap(([fontWeightName, fontWeightOptions]) =>
    Object.entries(fontWeightOptions).map(([fontWeightLevel, fontWeightValue]) => ({
      name: `${fontWeightName} ${fontWeightLevel}`,
      value: fontWeightValue
    })
  )).forEach(({ name, value}) => {
    registerToken({
      // Samuel says "Use line-height for font-weight" for now
      type: "line-height",
      name,
      value
    })
  })

  // Add radii, font-weight, sizes, borders to Plasmic, 
  // Add opacity to TokenStudio, 

  Object.entries(tokenStudioChakra.radii)
  .flatMap(([radiiName, radiiOptions]) =>
    Object.entries(radiiOptions).map(([radiiLevel, radiiValue]) => ({
      name: `${radiiName} ${radiiLevel}`,
      value: radiiValue
    })
  )).forEach(({ name, value}) => {
    registerToken({
      // Samuel says "Use spacing for radii" for now
      type: "spacing",
      name,
      value
    })
  })

  Object.entries(tokenStudioChakra.sizes)
  .flatMap(([sizeName, sizeOptions]) =>
    Object.entries(sizeOptions).map(([sizeLevel, sizeValue]) => ({
      name: `${sizeName} ${sizeLevel}`,
      value: sizeValue
    })
  )).forEach(({ name, value}) => {
    registerToken({
      // Samuel says "Use spacing for sizes" for now
      type: "spacing",
      name,
      value
    })
  })

  Object.entries(tokenStudioChakra.borders)
  .flatMap(([borderName, borderOptions]) =>
    Object.entries(borderOptions).map(([borderLevel, borderValue]) => ({
      name: `${borderName} ${borderLevel}`,
      value: borderValue
    })
  )).forEach(({ name, value}) => {
    registerToken({
      // Samuel says "Use spacing for border" for now
      type: "spacing",
      name,
      value
    })
  })