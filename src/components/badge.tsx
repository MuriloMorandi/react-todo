import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Text } from "./text";

export const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-full",
  {
    variants: {
      variant: {
        primary: "bg-green-light",
        secondary: "bg-pink-light",
      },
      size: {
        sm: "py-0.5 px-2",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "sm",
    },
  }
);

export const badgeTextVariants = cva("", {
  variants: {
    variant: {
      primary: "text-green-dark",
      secondary: "text-pink-dark",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

interface BadgeProps
  extends React.ComponentProps<"div">,
    VariantProps<typeof badgeVariants> {}

export function Badge({
  className,
  children,
  size,
  variant,
  ...props
}: BadgeProps) {
  return (
    <div className={badgeVariants({ className, size, variant })} {...props}>
      <Text variant={"body-sm-bold"} className={badgeTextVariants({ variant })}>
        {children}
      </Text>
    </div>
  );
}
