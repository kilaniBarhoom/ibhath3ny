import { auth } from "@/auth";
import SocialsLogin from "../auth/socials-login";
import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { LogOut } from "lucide-react";
import { ny } from "@/lib/utils";
import HeaderMobile from "./mobile-header";
import { ScrollComponent } from "./scroll-component";
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
          <SocialsLogin />
        )}
        <div className="flex items-center gap-4">
          <Link
            href={"/"}
            className={ny(buttonVariants({ variant: "link" }), "p-0")}
          >
            الرئيسية
          </Link>
          <span>・</span>
          <Link
            href={"/community/home"}
            className={ny(buttonVariants({ variant: "link" }), "p-0")}
          >
            مجتمعنا
          </Link>
          <span>・</span>
          <Link
            href={"/community"}
            className={ny(buttonVariants({ variant: "link" }), "p-0")}
          >
            الأسئلة المتكررة
          </Link>
          <span>・</span>
          <Link
            href={"/community"}
            className={ny(buttonVariants({ variant: "link" }), "p-0")}
          >
            الأسعار
          </Link>
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
