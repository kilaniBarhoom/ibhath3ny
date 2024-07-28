import SocialsLogin from "@/app/_components/auth/socials-login";
import { buttonVariants } from "@/app/_components/ui/button";
import Typography from "@/app/_components/ui/typography";
import { ny } from "@/app/_lib/utils";
import Link from "next/link";

const LoginPage = () => {
  return (
    <div className="flex items-center justify-center mx-auto md:min-h-dvh md:pt-0 py-24 px-8">
      <div className="flex flex-col justify-center items-center gap-14 bg-smoked w-fit p-5 rounded-md">
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
