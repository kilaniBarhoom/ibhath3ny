import ReturnToHome from "@/app/_components/component/return-home-button";
import { Button } from "@/app/_components/ui/button";
import Typography from "@/app/_components/ui/typography";
import { signOut } from "@/auth";
import { LogOut } from "lucide-react";

const SignOut = () => {
  return (
    <>
      <ReturnToHome />
      <div className="flex items-center justify-center">
        <form
          action={async () => {
            "use server";
            await signOut({ redirectTo: "/", redirect: true });
          }}
          className="flex flex-col items-center gap-4 w-full max-w-md text-center p-4 bg-background/10 border border-border rounded-md shadow-lg"
        >
          <Typography element="h3" as="h3">
            هل تريد تسجيل الخروج؟
          </Typography>
          <Button
            type="submit"
            variant={"hover"}
            size={"lg"}
            className="w-full"
          >
            <LogOut className="mr-2 h-4 w-4" />
            تسجيل الخروج
          </Button>
        </form>
      </div>
    </>
  );
};

export default SignOut;
