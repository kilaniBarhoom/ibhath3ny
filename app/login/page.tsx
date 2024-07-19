import SocialsLogin from "@/components/auth/socials-login";
import { buttonVariants } from "@/components/ui/button";
import Typography from "@/components/ui/typography";
import { ny } from "@/lib/utils";
import Link from "next/link";

const LoginPage = () => {
  return (
    <div className="max-w-screen-sm mx-auto pt-24 px-4">
      <div className="flex flex-col justify-center items-center gap-14 bg-secondary/40 p-5 rounded-md">
        <Typography element="h3" as="h3" className="text-secondary-foreground">
          تسجيل الدخول
        </Typography>
        <div className="flex flex-col gap-4">
          <SocialsLogin />
          <Typography
            element="p"
            as="mutedText"
            className="text-center max-w-80"
          >
            بتسجيل الدخول، أنت توافق على
            <br />
            <Link
              href={"/terms-of-usage"}
              className={ny(
                buttonVariants({ variant: "link" }),
                "px-1 font-normal"
              )}
            >
              شروط الاستخدام
            </Link>{" "}
            <span>・</span>
            <Link
              href={"/privacy-policy"}
              className={ny(
                buttonVariants({ variant: "link" }),
                "px-1 font-normal"
              )}
            >
              وسياسة الخصوصية
            </Link>
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
