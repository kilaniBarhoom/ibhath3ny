import { auth } from "@/auth";
import { ny } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "../ui/button";
import HeaderMobile from "./mobile-header";
import ProfilerHeaderRender from "./profile-header-render";
import RenderParts from "./render-parts";
import { ScrollComponent } from "./scroll-component";
// import LanguageSelectForm from "../component/language-select";

const Header = async () => {
  const session = await auth();
  const user = session?.user;
  return (
    <ScrollComponent>
      <div className="md:flex hidden gap-5 items-center">
        {user ? (
          <ProfilerHeaderRender />
        ) : (
          <Link
            href={"/login"}
            className={ny(buttonVariants({ size: "sm" }), "w-full")}
          >
            تسجيل الدخول
          </Link>
        )}
        <RenderParts user={user} />
      </div>
      <HeaderMobile session={session} />
      <div className="text-2xl mr-auto font-bold">
        <Link href={"/"}>ibhath3ny</Link>
      </div>
    </ScrollComponent>
  );
};

export default Header;
