"use client";

import useScroll from "@/hooks/use-scroll";
import { ny } from "@/lib/utils";
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
          <div
            className={ny(
              "w-full sticky inset-x-0 lg:top-10 top-0 transition-all bg-transparent z-50 ease-in-out duration-200",
              {
                "bg-yellow-500 top-0 lg:top-0": scrolled,
                "bg-transparent": selectedLayout,
              }
            )}
          >
            <div
              className={ny(
                "flex justify-between items-center p-3 max-w-screen-lg mx-auto transition-all ease-in-out duration-200",
                {
                  " max-w-screen-lg mx-auto": selectedLayout,
                  "w-full max-w-full": scrolled,
                }
              )}
            >
              {children}
            </div>
          </div>
        ) : (
          <div
            className={ny(
              "w-full sticky inset-x-0 top-0 transition-all bg-background z-50 ease-in-out duration-300",
              {
                "bg-yellow-500": scrolled,
                "bg-background": selectedLayout,
              }
            )}
          >
            <div
              className={ny(
                "flex justify-between items-center p-3 max-w-screen-lg mx-auto transition-all ease-in-out duration-300",
                {
                  " max-w-screen-lg mx-auto": selectedLayout,
                  "w-full max-w-full": scrolled,
                }
              )}
            >
              {children}
            </div>
          </div>
        ))}
    </>
  );
};
