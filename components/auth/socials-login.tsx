"use client";

import { Button } from "@/components/ui/button";
// import GoogleLogo from "@/pubilc/images/GoogleLogo.png";
import GoogleLogo from "@/public/images/GoogleLogo.png";
import Image from "next/image";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { DEFAULT_REDIRECT } from "@/routes";

const SocialsLogin = () => {
  const [loadingToSignInWithProvider, setLoadingToSignInWithProvider] =
    useState(false);

  const handleSignIn = async (provider: string) => {
    setLoadingToSignInWithProvider(true);
    await signIn(provider, {
      callbackUrl: DEFAULT_REDIRECT,
    });
    setLoadingToSignInWithProvider(false);
  };
  return (
    <Button
      onClick={() => {
        handleSignIn("google");
      }}
      variant={"outline"}
      className="w-fit gap-2 justify-start"
      loading={loadingToSignInWithProvider}
      disabled={loadingToSignInWithProvider}
    >
      <Image src={GoogleLogo} alt="Google Logo" width={20} height={20} />
      Sign in with Google
    </Button>
  );
};

export default SocialsLogin;
