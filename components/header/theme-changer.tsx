"use client";

import { useTheme } from "next-themes";
import { Button } from "../ui/button";
import { Moon, Sun } from "lucide-react";

const ThemeChanger = () => {
  const { setTheme, theme } = useTheme();
  return (
    <>
      <Button
        variant="ghostOnNav"
        className="p-2 px-3 border-none"
        onClick={() => setTheme("light")}
      >
        <Sun size={20} />
      </Button>
      <Button
        variant="ghostOnNav"
        className="p-2 px-3 border-none"
        onClick={() => setTheme("dark")}
      >
        <Moon size={20} />
      </Button>
    </>
  );
};

export default ThemeChanger;
