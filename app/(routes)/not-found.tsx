"use client";

import { Button, buttonVariants } from "@/app/_components/ui/button";
import Typography from "@/app/_components/ui/typography";
import NotFoundImage from "@/public/images/404.svg";
import Image from "next/image";
import { useRouter } from "next/navigation"; // Usage: App router

export default function NotFound() {
  const router = useRouter();
  return (
    <div className=" flex flex-col items-center gap-5 min-h-dvh pt-20 text-center">
      <Image src={NotFoundImage} alt="Not Found" className="md:w-96 w-72" />
      <Typography element="h2" as="h2" className="text-secondary-foreground">
        هذه الصفحة غير موجودة
      </Typography>
      <Button onClick={() => router.back()} className={buttonVariants()}>
        العودة للصفحة السابقة
      </Button>
    </div>
  );
}
