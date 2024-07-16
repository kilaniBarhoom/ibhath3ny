import { auth } from "@/auth";
import Link from "next/link";
import { Button, buttonVariants } from "../ui/button";
import { LogOut } from "lucide-react";
import { ny } from "@/lib/utils";
import HeaderMobile from "./mobile-header";
import { ScrollComponent } from "./scroll-component";
import { headerItems } from "./header-items";
import { Fragment } from "react";
// import LanguageSelectForm from "../component/language-select";

const Header = async () => {
  const session = await auth();
  const user = session?.user;
  return (
    <ScrollComponent>
      <div className="md:flex hidden gap-8 items-center">
        {user ? (
          <div className="flex items-center gap-3">
            <Link className={buttonVariants()} href={"/sign-out"}>
              <LogOut /> تسجيل الخروج
            </Link>
          </div>
        ) : (
          <Link href={"/login"} className={ny(buttonVariants(), "w-full")}>
            تسجيل الدخول
          </Link>
        )}
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
      </div>
      <HeaderMobile session={session} />
      <div className="text-2xl mr-auto font-bold">
        <Link href={"/"}>ibhath3ny</Link>
      </div>
    </ScrollComponent>
  );
};

export default Header;
