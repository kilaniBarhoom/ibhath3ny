"use client";

import React, { ReactNode, useEffect, useRef } from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { motion, useCycle } from "framer-motion";
import { buttonVariants } from "../ui/button";
import { ny } from "@/lib/utils";
import { LogOut } from "lucide-react";
import SocialsLogin from "../auth/socials-login";
import { headerItems } from "./header-items";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 100% 0)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(0px at 100% 0)",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const HeaderMobile = ({ session }: { session: any }) => {
  const pathname = usePathname();
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);
  const [isOpen, toggleOpen] = useCycle(false, true);

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      className={`fixed inset-0 z-50 w-full md:hidden ${
        isOpen ? "" : "pointer-events-none"
      }`}
      ref={containerRef}
    >
      <motion.div
        className="absolute inset-0 right-0 w-full bg-background"
        variants={sidebar}
      />
      <motion.ul
        variants={variants}
        className="absolute grid w-full gap-3 px-10 py-16 max-h-screen overflow-y-auto"
      >
        {headerItems.map((item, index) => (
          <MenuItem key={index} toggle={toggleOpen}>
            <Link
              href={item.href}
              className={ny(
                buttonVariants({ variant: "outline" }),
                "w-full text-center",
                pathname === item.href && "pointer-events-none"
              )}
            >
              {item.title}
            </Link>
          </MenuItem>
        ))}
        {session?.user ? (
          <MenuItem className="flex-1" toggle={toggleOpen}>
            <Link
              href="/sign-out"
              className={ny(
                buttonVariants(),
                "w-full text-center",
                pathname === "/sign-out" && "pointer-events-none font-bold"
              )}
            >
              <LogOut className="mr-2 h-4 w-4" />
              تسجيل الخروج
            </Link>
          </MenuItem>
        ) : (
          <MenuItem className="flex-1" toggle={toggleOpen}>
            <Link href={"/login"} className={ny(buttonVariants(), "w-full")}>
              تسجيل الدخول
            </Link>
          </MenuItem>
        )}
      </motion.ul>
      <MenuToggle toggle={toggleOpen} />
    </motion.nav>
  );
};

export default HeaderMobile;

const MenuToggle = ({ toggle }: { toggle: any }) => (
  <button
    onClick={toggle}
    className="pointer-events-auto absolute right-4 top-[14px] z-30"
  >
    <svg width="23" height="23" viewBox="0 0 23 23">
      <Path
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5" },
          open: { d: "M 3 16.5 L 17 2.5" },
        }}
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        variants={{
          closed: { d: "M 2 16.346 L 20 16.346" },
          open: { d: "M 3 2.5 L 17 16.346" },
        }}
      />
    </svg>
  </button>
);

const Path = (props: any) => (
  <motion.path
    fill="transparent"
    strokeWidth="2"
    stroke="hsl(0, 0%, 100%)"
    strokeLinecap="round"
    {...props}
  />
);

const MenuItem = ({
  className,
  children,
  toggle,
}: {
  className?: string;
  children?: ReactNode;
  toggle?: any;
}) => {
  return (
    <motion.li
      variants={MenuItemVariants}
      className={className}
      onClick={toggle}
    >
      {children}
    </motion.li>
  );
};

const MenuItemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
      duration: 0.02,
    },
  },
};

const variants = {
  open: {
    transition: { staggerChildren: 0.02, delayChildren: 0.15 },
  },
  closed: {
    transition: { staggerChildren: 0.01, staggerDirection: -1 },
  },
};

const useDimensions = (ref: any) => {
  const dimensions = useRef({ width: 0, height: 0 });

  useEffect(() => {
    if (ref.current) {
      dimensions.current.width = ref.current.offsetWidth;
      dimensions.current.height = ref.current.offsetHeight;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref]);

  return dimensions.current;
};
