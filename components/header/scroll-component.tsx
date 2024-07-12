"use client";

import useScroll from "@/hooks/use-scroll";
import { ny } from "@/lib/utils";
import { useSelectedLayoutSegment } from "next/navigation";
export const ScrollComponent = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const scrolled = useScroll(5);
  const selectedLayout = useSelectedLayoutSegment();
  return (
    <div
      className={ny(
        "w-full sticky inset-x-0 top-0 transition-all bg-background z-50",
        {
          "bg-yellow-500": scrolled,
          "bg-background": selectedLayout,
        }
      )}
    >
      {children}
    </div>
  );
};
