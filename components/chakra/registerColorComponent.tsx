import { ColorComponent } from "./ColorComponent";
import { registerComponent } from "@plasmicapp/host";


export function registerColorComponent() {
registerComponent(ColorComponent, {
name:"ColorComponent",
 importPath: "./pages/ColorComponent",
    props: {
        color:{
            type: 'string',
            defaultValue: "red",
        },
    }
})
}