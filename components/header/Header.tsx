import { auth } from "@/auth";
import SocialsLogin from "../auth/socials-login";
import Link from "next/link";

const Header = async () => {
  const session = await auth();
  const user = session?.user;
  return (
    <div className="w-full border-b border-border">
      <div className="flex justify-between items-center p-2">
        <div className="text-2xl font-bold">BoilerPlate</div>
        {user ? (
          <div className="flex items-center">
            <div className="mr-3">{user?.name}</div>
            <Link
              href={"/sign-out"}
              className="bg-primary-foreground text-primary-background px-3 py-1 rounded-md"
            >
              Logout
            </Link>
          </div>
        ) : (
          <SocialsLogin />
        )}
      </div>
    </div>
  );
};

export default Header;
