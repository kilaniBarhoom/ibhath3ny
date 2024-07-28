import Provider from "@/app/_utils/providers/session-provider";
import type { Metadata } from "next";
import localFont from "next/font/local";
import TopLoader from "@/app/_components/component/top-loader";
import Header from "@/app/_components/header";
import { ny } from "@/app/_lib/utils";
import "./globals.css";
import { Toaster } from "./_components/ui/sonner";

const fustat = localFont({
  src: [
    {
      path: "../public/fonts/Fustat.ttf",
      weight: "400",
    },
  ],
  variable: "--font-fustat",
});
const merhey = localFont({
  src: [
    {
      path: "../public/fonts/Marhey.ttf",
      weight: "400",
    },
  ],
  variable: "--font-marhey",
});
const vazirmatn = localFont({
  src: [
    {
      path: "../public/fonts/Vazirmatn.ttf",
      weight: "400",
    },
  ],
  variable: "--font-marhey",
});

export const metadata: Metadata = {
  title: "ibhath3ny",
  description:
    "ibhath3ny is a website to searhc for old child programs using AI!",
};

export default async function LocaleLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={ny("font-marhey", merhey.variable)}>
        <Provider>
          <Toaster />
          <div className="min-h-screen w-full bg-background text-secondary-foreground flex flex-col">
            <div className="w-full h-full flex flex-col">
              <TopLoader />
              <Header />
              <main>{children}</main>
            </div>
          </div>
        </Provider>
      </body>
    </html>
  );
}
