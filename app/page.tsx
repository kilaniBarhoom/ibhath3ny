import { MarqueeDemo } from "@/components/home/marquee";
import { buttonVariants } from "@/components/ui/button";
import { LampContainer } from "@/components/ui/lamp";
import Typography from "@/components/ui/typography";
import { ny } from "@/lib/utils";
import Link from "next/link";

const Home = () => {
  return (
    <div className={ny("w-full relative")}>
      <div className="flex flex-col w-full text-center justify-center items-center">
        <LampContainer>
          <div className="flex flex-col gap-5 justify-center items-center w-full relative z-30">
            <Typography element="h1" as={"h1"}>
              <p className="text-secondary-foreground">
                إبحث عن برنامجك بسهولة و سرعة!
              </p>
              بحث مدعوم بالذكاء الصناعي
            </Typography>
            <Link
              href={"/search"}
              className={ny(
                "w-fit rounded-full",
                buttonVariants({ size: "md" })
              )}
            >
              إبحث الآن
            </Link>
          </div>
          <div className="absolute -bottom-40 w-10 h-16 border-2 border-yellow rounded-full flex items-center justify-center">
            <div className="animate-scroll-dot w-2 h-2 bg-white rounded-full"></div>
          </div>
        </LampContainer>
        <MarqueeDemo />
      </div>
    </div>
  );
};

export default Home;
