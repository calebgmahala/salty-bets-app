import { ButtonHTMLAttributes, PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

export interface ButtonProps
  extends PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>> {}

export const Button = ({ children, className, ...props }: ButtonProps) => (
  <button
    {...props}
    className={twMerge(
      "transition-all shadow-sm p-1 rounded-sm",
      props.disabled
        ? "bg-gray-100"
        : "hover:shadow-xl hover:scale-105 active:opacity-50",
      className
    )}
  >
    {children}
  </button>
);
