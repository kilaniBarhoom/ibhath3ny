import { auth } from "@/auth";
import SocialsLogin from "../auth/socials-login";
import Link from "next/link";
import { ScrollComponent } from "./scroll-component";
import { buttonVariants } from "../ui/button";
import { LogOut } from "lucide-react";
// import LanguageSelectForm from "../component/language-select";

const Header = async () => {
  const session = await auth();
  const user = session?.user;
  return (
    <ScrollComponent>
      <div className="flex justify-between items-center p-3">
        <div className="text-2xl font-bold">
          <Link href={"/"}>ibhath3ny</Link>
        </div>
        <div className="flex items-center gap-4">
          {/* <LanguageSelectForm /> */}
          {user ? (
            <div className="flex items-center gap-3">
              <div className="mr-3">{user?.name}</div>
              <Link className={buttonVariants()} href={"/sign-out"}>
                <LogOut /> تسجيل الخروج
              </Link>
            </div>
          ) : (
            <SocialsLogin />
          )}
        </div>
      </div>
    </ScrollComponent>
  );
};

export default Header;
