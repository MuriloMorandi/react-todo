import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Icon } from "./icon";
import { Skeleton } from "./skeleton";

export const buttonIconVariants = cva(
  "inline-flex items-center justify-center cursor-pointer transition group",
  {
    variants: {
      variant: {
        none: "",
        primary: "bg-green-base hover:bg-green-dark",
        secondary: "bg-gray-200 hover:bg-pink-base",
        tertiary: "bg-transparent hover:bg-gray-200",
      },
      size: {
        sm: "w-6 h-6 p-1 rounded",
      },
      disabled: {
        true: "opacity-50 pointer-events-none",
        false: "",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "sm",
      disabled: false,
    },
  },
);

export const buttonIconIconVariants = cva("transition", {
  variants: {
    variant: {
      none: "",
      primary: "fill-white",
      secondary: "fill-pink-base group-hover:fill-white",
      tertiary: "fill-gray-300 group-hover:fill-gray-400",
    },
    size: {
      sm: "w-4 h-4",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "sm",
  },
});

interface ButtonIconProps
  extends
    Omit<React.ComponentProps<"button">, "disabled" | "size">,
    VariantProps<typeof buttonIconVariants> {
  icon: React.ComponentProps<typeof Icon>["svg"];
  loading?: boolean;
}

export function ButtonIcon({
  className,
  disabled,
  size,
  variant,
  icon,
  loading,
  ...props
}: ButtonIconProps) {
  if (loading) {
    return (
      <Skeleton
        className={buttonIconVariants({
          className,
          size,
          variant: "none",
        })}
      />
    );
  }

  return (
    <button
      {...props}
      className={buttonIconVariants({ className, disabled, size, variant })}
    >
      <Icon svg={icon} className={buttonIconIconVariants({ size, variant })} />
    </button>
  );
}
