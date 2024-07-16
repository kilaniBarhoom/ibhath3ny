import SideNav from "@/components/community/side-nav";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Community | ibhath3ny",
  description:
    "ibhath3ny is a website to searhc for old child programs using AI!",
};

const CommunityLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex">
      <aside className="fixed inset-y-0 top-16 left-right z-10 border-l border-border hidden lg:flex min-w-56 w-56 transition-all duration-300 ease-in-out overflow-y-auto">
        <SideNav />
      </aside>
      <main className="max-w-screen-lg mx-auto lg:pr-56">{children}</main>
    </div>
  );
};

export default CommunityLayout;
