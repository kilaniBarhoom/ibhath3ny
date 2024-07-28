"use client";

import { ny } from "@/app/_lib/utils";
import useScroll from "@/app/_hooks/use-scroll";
import { usePathname, useSelectedLayoutSegment } from "next/navigation";

export const ScrollComponent = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const pathname = usePathname();
  const scrolled = useScroll(15);
  const selectedLayout = useSelectedLayoutSegment();

  const pathsToExclude = ["/community", "/profile"];

  return (
    <>
      {!pathsToExclude.includes(pathname) &&
        (pathname === "/" ? (
          <header
            className={ny(
              "w-full sticky inset-x-0 lg:top-10 top-0 transition-all bg-transparent z-50 ease-in-out duration-200",
              {
                "bg-background shadow-2xl top-0 lg:top-0 border-b": scrolled,
              }
            )}
          >
            <div
              className={ny(
                "flex justify-between items-center p-3 max-w-screen-lg mx-auto transition-all ease-in-out duration-200",
                {
                  " max-w-screen-lg mx-auto": selectedLayout,
                  "w-full max-w-screen-2xl": scrolled,
                }
              )}
            >
              {children}
            </div>
          </header>
        ) : (
          <header
            className={ny(
              "w-full sticky inset-x-0 top-0 bg-background shadow-2xl z-50 border-b border-border"
            )}
          >
            <div
              className={ny(
                "flex justify-between items-center p-3 mx-auto max-w-screen-2xl w-full"
              )}
            >
              {children}
            </div>
          </header>
        ))}
    </>
  );
};
