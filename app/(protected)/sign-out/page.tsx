import { signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import Typography from "@/components/ui/typography";
import ReturnToHome from "@/components/component/return-home-button";

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
          className="flex flex-col items-center gap-4 w-full max-w-md text-center p-4 bg-secondary rounded-lg shadow-lg"
        >
          <Typography element="h3" as="h3">
            Are you sure you want to sign out?
          </Typography>
          <Button
            type="submit"
            variant={"ghost"}
            size={"lg"}
            className="w-full border m-0 py-4"
          >
            <LogOut className="mr-2 h-4 w-4" />
            <span>Sign out</span>
          </Button>
        </form>
      </div>
    </>
  );
};

export default SignOut;
