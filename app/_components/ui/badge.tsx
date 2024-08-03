import * as React from "react";
import { type VariantProps, cva } from "class-variance-authority";

import { ny } from "@/app/_lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        smoked: "border-transparent bg-smoked text-smoked-foreground",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
        tag: "bg-primary/30 text-primary/90",
      },
      rounded: {
        full: "rounded-full",
        default: "rounded-md",
      },
    },
    defaultVariants: {
      variant: "default",
      rounded: "default",
    }
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={ny(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
