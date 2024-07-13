import Provider from "@/utils/providers/session-provider";
import type { Metadata } from "next";
import localFont from "next/font/local";

import TopLoader from "@/components/component/top-loader";
import { ny } from "@/lib/utils";
import "./globals.css";
import Header from "@/components/header/Header";

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
          <div className="min-h-screen w-full bg-background text-secondary-foreground">
            <TopLoader />
            <Header />
            <main>{children}</main>
          </div>
        </Provider>
      </body>
    </html>
  );
}
