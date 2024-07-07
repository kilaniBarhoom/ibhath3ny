import Provider from "@/utils/providers/session-provider";
import { ThemeProvider } from "@/utils/providers/theme-provider";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import TopLoader from "@/components/component/top-loader";
import Header from "@/components/header/Header";

const fonts = Poppins({ subsets: ["latin"], weight: ["600"] });

export const metadata: Metadata = {
  title: "BoilerPlate",
  description: "BoilerPlate",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={fonts.className}>
        <Provider>
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
            <div className="min-h-screen w-full bg-background text-secondary-foreground">
              <TopLoader />
              <Header />
              <main className="p-5">{children}</main>
            </div>
          </ThemeProvider>
        </Provider>
      </body>
    </html>
  );
}
