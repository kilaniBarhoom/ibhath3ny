"use client";

import Image from "next/image";
import NotFoundImage from "@/public/images/404.svg";
import Typography from "@/components/ui/typography";
import { Button, buttonVariants } from "@/components/ui/button";
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
