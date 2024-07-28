"use client";

import { buttonVariants } from "@/app/_components/ui/button";
import { ny } from "@/app/_lib/utils";
import {
  MessageCircleQuestion,
  NotebookPen,
  Plus,
  Settings,
  Tag,
  Users,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Separator } from "../../ui/separator";

type SidenavItem = {
  title: string;
  icon: any;
  href: string;
};

const sidenavItems1: SidenavItem[] = [
  {
    title: "جميع الأسئلة",
    icon: <MessageCircleQuestion />,
    href: "all-questions",
  },
  {
    title: "أسئلتي",
    icon: <NotebookPen />,
    href: "my-questions",
  },
  {
    title: "تاغات",
    icon: <Tag />,
    href: "tags",
  },
  {
    title: "مجتمعات",
    icon: <Users />,
    href: "communities",
  },
];

export const sidenavItems2: SidenavItem[] = [
  {
    title: "إضافة سؤال",
    icon: <Plus />,
    href: "ask",
  },
  {
    title: "الإعدادات",
    icon: <Settings />,
    href: "settings",
  },
];
const SideNav = () => {
  const pathname = usePathname();
  return (
    <nav className="flex flex-col gap-5 py-4 w-full h-full">
      <div className="px-4 flex flex-col gap-5">
        {sidenavItems1.map((item) => (
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
              "w-full justify-start flex items-center gap-3"
            )}
          >
            {item.icon}
            {item.title}
          </Link>
        ))}
      </div>
      <Separator />
      <div className="px-4 flex flex-col gap-5">
        {sidenavItems2.map((item) => (
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
              "w-full justify-start flex items-center gap-3"
            )}
          >
            {item.icon}
            {item.title}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default SideNav;
