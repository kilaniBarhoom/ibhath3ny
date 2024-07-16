"use client";

import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import { DEFAULT_REDIRECT } from "@/routes";
import Google from "@/public/images/GoogleLogo.png";
import Image from "next/image";

const SocialsLogin = () => {
  const handleSignIn = async (provider: string) => {
    await signIn(provider, {
      callbackUrl: DEFAULT_REDIRECT,
    });
  };
  return (
    <Button
      onClick={() => {
        handleSignIn("google");
      }}
      variant={"secondary"}
      className="w-fit flex justify-center items-center gap-2"
    >
      تسجيل الدخول عن طريق جوجل
      <Image src={Google} alt="Google Logo" width={20} height={20} />
    </Button>
  );
};

export default SocialsLogin;
