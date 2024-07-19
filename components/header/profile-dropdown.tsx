import { LogOut } from "lucide-react";

import { auth } from "@/auth";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ny } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { UserAvatar } from "../ui/user-avatar";

export default async function ProfileImageDropDown({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="cursor-pointer" asChild>
        {children}
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-52 border-border p-0">
        <DropdownMenuItem asChild className="p-2 m-0 justify-end">
          <UserAvatar
            className="p-1 rounded-none"
            nameClassName="text-secondary-foreground"
            image={session?.user?.image ?? ""}
            name={session?.user.name ?? ""}
          />
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild className="p-0 m-0">
          <Link
            href="/sign-out"
            className={ny(
              buttonVariants({ variant: "ghost", size: "xs" }),
              "w-full m-0 py-2 rounded-none justify-end"
            )}
          >
            <LogOut className="mr-2 h-4 w-4" />
            <span>تسجيل الخروج</span>
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
