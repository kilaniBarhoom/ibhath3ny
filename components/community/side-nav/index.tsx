"use client";

import { buttonVariants } from "@/components/ui/button";
import { ny } from "@/lib/utils";
import Link from "next/link";
import { sidenavItems } from "./side-nav-items";
import { usePathname } from "next/navigation";

const SideNav = () => {
  const pathname = usePathname();
  return (
    <div className="flex flex-col w-full h-full p-4">
      <nav className="flex flex-col gap-5">
        {sidenavItems.map((item) => (
          <Link
            key={item.title}
            href={`/community/${item.href}`}
            className={ny(
              buttonVariants({
                variant: pathname.includes(item.href)
                  ? "default"
                  : "ghostOnNav",
                size: "md",
              }),
              "w-full justify-start"
            )}
          >
            {item.title}
            <item.icon />
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default SideNav;
