"use client";

import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import { DEFAULT_REDIRECT } from "@/routes";

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
      className="w-full"
    >
      تسجيل الدخول
    </Button>
  );
};

export default SocialsLogin;
