import SideNav from "@/app/_components/community/side-nav";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Community | ibhath3ny",
  description:
    "ibhath3ny is a website to search for old child programs using AI!",
};

const CommunityLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col w-full p-5 *:min-h-screen">
      <aside className="fixed right-0 top-16 inset-y-0 h-full z-10 bg-muted hidden overflow-y-auto lg:flex w-72 flex-shrink-0">
        <SideNav />
      </aside>
      <main className="min-h-screen lg:px-72 px-4 w-full max-w-screen-2xl mx-auto">{children}</main>
      <aside className="fixed left-0 top-16 inset-y-0 h-full z-10 bg-muted hidden overflow-y-auto lg:flex w-72 flex-shrink-0">
        <SideNav />
      </aside>
    </div>
  );
};

export default CommunityLayout;
