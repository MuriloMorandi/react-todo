import { cva, type VariantProps } from "class-variance-authority";
import type React from "react";

export const skeletonVariants = cva(
  "animate-pulse bg-gray-200 pointer-events-none",
  {
    variants: {
      rounded: {
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        full: "rounded-full",
      },
    },
    defaultVariants: {
      rounded: "lg",
    },
  },
);

interface SkeletonProps
  extends React.ComponentProps<"div">, VariantProps<typeof skeletonVariants> {}

export function Skeleton({ className, rounded, ...props }: SkeletonProps) {
  return (
    <div className={skeletonVariants({ rounded, className })} {...props} />
  );
}
