"use client";

import { ny } from "@/lib/utils";
import { CircleDollarSign } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment } from "react";
import { buttonVariants } from "../ui/button";
import { headerItems } from "./header-items";
import Typography from "../ui/typography";

type Props = {
  user: any;
};

const RenderParts = ({ user }: Props) => {
  const pathname = usePathname();
  return (
    <>
      {pathname === "/search" ? (
        <div className="flex items-center gap-1 p-1 px-2 bg-muted rounded-md">
          <CircleDollarSign className="text-primary p-0 m-0 h-fit" size={20} />
          <Typography
            element="p"
            as="lead"
            className="text-secondary-foreground h-fit leading-none p-0 m-0 pt-1 w-fit md:leading-none tabular-nums font-normal"
          >
            0
          </Typography>
        </div>
      ) : (
        <div className="flex items-center gap-4">
          {headerItems.map((item, i) => (
            <Fragment key={item.title}>
              <Link
                href={item.href}
                className={ny(
                  buttonVariants({ variant: "link" }),
                  "p-0 font-normal"
                )}
              >
                {item.title}
              </Link>
              <span className={`${i === headerItems.length - 1 && "hidden"}`}>
                ・
              </span>
            </Fragment>
          ))}
        </div>
      )}
    </>
  );
};

export default RenderParts;
