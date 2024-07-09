"use client";

import { X } from "lucide-react";
import * as React from "react";

import { Badge } from "@/components/ui/badge";
import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Command as CommandPrimitive } from "cmdk";
import { ny } from "@/lib/utils";

export default function MultiSelect({
  items,
  className,
}: {
  items: any;
  className?: string;
}) {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [open, setOpen] = React.useState(false);
  const [selected, setSelected] = React.useState<any[]>([]);
  const [inputValue, setInputValue] = React.useState("");

  const handleUnselect = React.useCallback((item: any) => {
    setSelected((prev) => prev.filter((s) => s.value !== item.value));
  }, []);

  const handleKeyDown = React.useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      const input = inputRef.current;
      if (input) {
        if (e.key === "Delete" || e.key === "Backspace") {
          if (input.value === "") {
            setSelected((prev) => {
              const newSelected = [...prev];
              newSelected.pop();
              return newSelected;
            });
          }
        }
        // This is not a default behaviour of the <input /> field
        if (e.key === "Escape") {
          input.blur();
        }
      }
    },
    []
  );

  const selectables = items.filter((item: any) => !selected.includes(item));

  return (
    <Command
      onKeyDown={handleKeyDown}
      className={ny("overflow-visible bg-transparent", className)}
    >
      <div className="group rounded-md border border-input px-3 py-2 text-sm ring-offset-background hover:bg-muted/30 transition-all ease-in-out duration-200 focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2">
        <div className="flex flex-wrap gap-1 text-right justify-end items-end">
          {selected.map((Course) => {
            return (
              <Badge key={Course.value} variant="secondary">
                {Course.label}
                <button
                  className="ml-0 flex items-center gap-2 rounded-md outline-none ring-offset-background focus:ring-2 focus:ring-ring focus:ring-offset-2"
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleUnselect(Course);
                    }
                  }}
                  onMouseDown={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                  }}
                  onClick={() => handleUnselect(Course)}
                >
                  <X className="size-3 text-primary mr-1 hover:text-secondary-foreground" />
                </button>
              </Badge>
            );
          })}
          {/* Avoid having the "Search" Icon */}
          <CommandPrimitive.Input
            ref={inputRef}
            value={inputValue}
            onValueChange={setInputValue}
            onBlur={() => setOpen(false)}
            onFocus={() => setOpen(true)}
            placeholder="اختار واحد او اكثر...."
            className="ml-2 flex-1 w-[230px] bg-transparent outline-none placeholder:text-secondary-foreground text-right justify-end items-end"
          />
        </div>
      </div>
      <div className="relative mt-2">
        <CommandList>
          {open && selectables.length > 0 ? (
            <div className="absolute top-0 z-10 w-full rounded-md border bg-background text-secondary-foreground shadow-md outline-none animate-in">
              <ScrollArea className="max-h-60 overflow-y-auto">
                <CommandGroup className="h-full overflow-auto">
                  {selectables.map((item: any) => {
                    return (
                      <CommandItem
                        key={item.value}
                        onMouseDown={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                        }}
                        onSelect={() => {
                          setInputValue("");
                          setSelected((prev) => [...prev, item]);
                        }}
                        className={"cursor-pointer, text-secondary-foreground"}
                      >
                        {item.label}
                      </CommandItem>
                    );
                  })}
                </CommandGroup>
              </ScrollArea>
            </div>
          ) : null}
        </CommandList>
      </div>
    </Command>
  );
}
