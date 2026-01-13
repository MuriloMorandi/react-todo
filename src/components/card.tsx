import { cva, type VariantProps } from "class-variance-authority";
import React from "react";

export const cardVariants = cva(
  "rounded-lg border-solid border-gray-200 bg-white shadow-sm",
  {
    variants: {
      size: {
        none: "",
        md: "p-5",
      },
    },
    defaultVariants: {
      size: "none",
    },
  }
);

interface CardProps
  extends React.ComponentProps<"div">,
    VariantProps<typeof cardVariants> {
  as?: keyof React.JSX.IntrinsicElements;
}

export function Card({
  as = "div",
  children,
  className,
  size,
  ...props
}: CardProps) {
  return React.createElement(as, {
    className: cardVariants({ size, className }),
    ...props,
    children,
  });
}
