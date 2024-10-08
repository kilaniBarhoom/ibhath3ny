import * as React from "react";
import { ny } from "@/app/_lib/utils";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={ny(
          "flex min-h-[80px] w-full rounded-md border border-input bg-background hover:bg-muted/30 px-4 py-3 text-sm text-secondary-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:border-secondary-foreground transition-all duration-200 ease-in-out disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Textarea.displayName = "Textarea";

export { Textarea };
