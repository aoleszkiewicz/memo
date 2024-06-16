import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export type WindowSize = {
  width: number | undefined;
  height: number | undefined;
};
