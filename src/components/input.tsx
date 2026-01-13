import React from "react";
import { cva, cx, type VariantProps } from "class-variance-authority";
import { textVariants } from "./text";

export const inputTextVariants = cva(
  `
    border-b border-solid border-gray-200 focus:border-pink-base
    bg-transparent outline-none
    `,
  {
    variants: {
      size: {
        sm: "pb-2 px-2",
      },
      disabled: {
        true: "pointer-events-none",
        false: "",
      },
    },
    defaultVariants: {
      size: "sm",
      disabled: false,
    },
  }
);

interface InputProps
  extends Omit<React.ComponentProps<"input">, "size" | "disabled">,
    VariantProps<typeof inputTextVariants> {}

export function Input({ disabled, className, size, ...props }: InputProps) {
  return (
    <input
      className={cx(
        inputTextVariants({ disabled, size }),
        textVariants(),
        className
      )}
      {...props}
    />
  );
}
