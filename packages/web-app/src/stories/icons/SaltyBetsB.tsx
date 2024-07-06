import { SVGProps } from "react";
import config from "../../../tailwind.config";

export const SaltyBetsB = ({ ...props }: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx="50" cy="50" r="50" fill={config.extend.theme.colors["salty-blue"]} />
    <text x="54" y="84" fill="white" font-size="90" fontFamily='sans-serif' fontWeight="800" style={{transform: "scaleX(.6)"}}>B</text>
  </svg>
);
