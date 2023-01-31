import ButtonPreviewProps from "../ButtonPreview";
import { ComponentMeta } from "@plasmicapp/host/registerComponent";
import {
  getComponentNameAndImportMeta,
  getPlasmicComponentName,
} from "./utils";

export const buttonPreviewMeta: ComponentMeta<ButtonPreviewProps> = {
  ...getComponentNameAndImportMeta("ButtonPreview"),
  props: {},
};
