import { ny } from "@/app/_lib/utils";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { Loader2 } from "lucide-react";
import * as React from "react";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap rounded-lg text-sm font-semibold transition-all ease-in-out duration-200 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 user-select-none",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-r from-amber-400 to-primary text-black scale-100 hover:scale-105",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-border text-secondary-foreground hover:bg-muted/30",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost:
          "hover:bg-muted text-muted-foreground hover:text-secondary-foreground",
        ghostOnNav:
          "hover:bg-background text-muted-foreground hover:text-secondary-foreground",
        link: "text-secondary-foreground hover:underline hover:text-primary-foreground",
        hover: "text-muted-foreground hover:text-secondary-foreground",
        expandIcon:
          "group relative text-primary-foreground bg-primary hover:bg-primary/90",
        gooeyRight:
          "text-secondary-foreground relative z-0 border border-border overflow-hidden transition-all duration-500 before:absolute before:inset-0 before:-z-10 before:translate-x-[150%] before:translate-y-[150%] before:scale-[2.5] before:rounded-[100%] before:bg-gradient-to-r from-zinc-400 before:transition-transform before:duration-1000  hover:before:translate-x-[0%] hover:before:translate-y-[0%] ",
        background:
          "bg-background text-secondary-foreground hover:bg-background/90",
        bgOutline:
          "border border-black/30 dark:border-white/30 text-secondary-foreground hover:bg-background hover:text-accent-foreground",
      },
      size: {
        xs: "h-7 rounded-lg p-2",
        sm: "h-9 py-2 rounded-lg px-4",
        default: "h-10 px-4 py-2",
        md: "h-11 py-3 px-6 text-lg",
        lg: "h-11 text-lg rounded-lg py-4 px-8",
        icon: "h-10 w-10 p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  loading?: boolean;
  Icon?: React.ComponentType<{ className?: string }>;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      loading = false,
      Icon,
      children,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={ny(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {children}
        {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        {Icon && (
          <div className="w-0 translate-x-[100%] pl-0 opacity-0 transition-all duration-200 group-hover:w-5 group-hover:translate-x-0 group-hover:pl-2 group-hover:opacity-100">
            <Icon />
          </div>
        )}
      </Comp>
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
