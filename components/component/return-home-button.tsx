import Link from "next/link";
import React from "react";
import { buttonVariants } from "../ui/button";
import { MoveLeft } from "lucide-react";

const ReturnToHome = () => {
  return (
    <div className="my-5 mx-auto w-fit">
      <Link href="/" className={buttonVariants()}>
        <MoveLeft size={20} />
        Return Home
      </Link>
    </div>
  );
};

export default ReturnToHome;
