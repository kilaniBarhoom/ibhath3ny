import SideNav from "@/components/community/side-nav";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Community | ibhath3ny",
  description:
    "ibhath3ny is a website to searhc for old child programs using AI!",
};

const CommunityLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex max-w-screen-xl mx-auto w-full gap-10 p-5">
      <aside className="sticky h-full bg-muted top-20 hidden rounded-md lg:flex min-w-56 w-56 transition-all duration-300 ease-in-out overflow-y-auto">
        <SideNav />
      </aside>
      <main className="mx-auto w-full">{children}</main>
    </div>
  );
};

export default CommunityLayout;
