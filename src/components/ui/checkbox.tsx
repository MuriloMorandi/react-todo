import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Icon } from "./icon";
import CheckIcon from "../../assets/icons/check.svg?react";
import { Skeleton } from "./skeleton";

export const checkboxWrapperVariants = cva(
  "inline-flex items-center justify-center relative group",
);

export const checkboxVariants = cva(
  `
  appearance-none peer cursor-pointer
  flex items-center justify-center
  overflow-hidden transition
  
    `,
  {
    variants: {
      variant: {
        default: `
            border-2 border-solid
          border-green-base hover:border-green-dark hover:bg-green-dark/20
          checked:bg-green-base checked:border-green-base
          group-hover:border-green-dark group-hover:checked:bg-green-dark
        `,
        none: "",
      },
      size: {
        md: "w-5 h-5 rounded-sm",
      },
      disabled: {
        true: "pointer-events-none",
        false: "",
      },
    },
    defaultVariants: {
      size: "md",
      disabled: false,
      variant: "default",
    },
  },
);

export const checkboxIconVariants = cva(
  `
    absolute top-1/2 left-1 -translate-y-1/2
    hidden peer-checked:block fill-white
    `,
  {
    variants: {
      size: {
        md: "w-3 h-3",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

interface CheckboxProps
  extends
    Omit<React.ComponentProps<"input">, "size" | "disabled">,
    VariantProps<typeof checkboxVariants> {
  loading?: boolean;
}

export function Checkbox({
  disabled,
  className,
  size,
  loading,
  variant,
  ...props
}: CheckboxProps) {
  if (loading) {
    return (
      <Skeleton
        className={checkboxVariants({ disabled, size, variant: "none" })}
      />
    );
  }

  return (
    <label className={checkboxWrapperVariants({ className })}>
      <input
        type="checkbox"
        className={checkboxVariants({ disabled, size, variant })}
        {...props}
      />
      <Icon className={checkboxIconVariants({ size })} svg={CheckIcon} />
    </label>
  );
}
