import { buttonVariants } from "@/components/ui/button";
import { ny } from "@/lib/utils";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const SideNav = () => {
  return (
    <div className="bg-muted flex flex-col w-full h-full p-4">
      <DropdownMenu>
        <DropdownMenuTrigger>Open</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>حسابي</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem></DropdownMenuItem>
          <DropdownMenuItem>Team</DropdownMenuItem>
          <DropdownMenuItem>Subscription</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <nav className="flex flex-col gap-2">
        {Array.from({ length: 10 }).map((_, i) => (
          <Link
            key={i}
            href="#"
            className={ny(buttonVariants({ variant: "ghostOnNav" }), "w-full")}
          >
            عنصر {i}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default SideNav;
