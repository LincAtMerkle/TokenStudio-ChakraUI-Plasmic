import { SizeComponent} from "./SizeComponent";
import {registerComponent } from "@plasmicapp/host";

export function registerSizeComponent() {
registerComponent(SizeComponent, {
name:"SizeComponent",
    importPath: "./pages/SizeComponent",
    props: {
        size:{
            type: 'string',
            defaultValue: "8px",
        },
    }
})
}