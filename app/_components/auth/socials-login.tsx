"use client";

import { Button } from "@/app/_components/ui/button";
import Google from "@/public/images/GoogleLogo.png";
import { signIn } from "next-auth/react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

const SocialsLogin = () => {
  const searchParams = useSearchParams();

  const callbackUrl = searchParams.get("redirectTo");

  const handleSignIn = async (provider: string) => {
    await signIn(
      provider,
      {
        callbackUrl: callbackUrl || "/",
      },
      {
        prompt: "login",
      }
    );
  };
  return (
    <Button
      onClick={() => {
        handleSignIn("google");
      }}
      variant={"outline"}
      className="w-fit flex justify-center items-center gap-2"
    >
      تسجيل الدخول عن طريق جوجل
      <Image src={Google} alt="Google Logo" width={20} height={20} />
    </Button>
  );
};

export default SocialsLogin;
