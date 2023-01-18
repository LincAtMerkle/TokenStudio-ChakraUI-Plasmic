// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type InterfaceIconIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function InterfaceIconIcon(props: InterfaceIconIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 48 48"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M22.586 8.586a2 2 0 012.828 0l14 14a2 2 0 11-2.828 2.828L26 14.828V38a2 2 0 11-4 0V14.828L11.414 25.414a2 2 0 11-2.828-2.828l14-14z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default InterfaceIconIcon;
/* prettier-ignore-end */
