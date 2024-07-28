import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/app/_components/ui/tooltip";
import React from "react";

const TooltipComponent = ({
  content,
  children,
}: {
  content: React.ReactNode;
  children?: React.ReactNode;
}) => {
  return (
    <TooltipProvider>
      <Tooltip >
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipContent variant={"secondary"}>{content}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default TooltipComponent;
