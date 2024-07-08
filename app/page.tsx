import { MarqueeDemo } from "@/components/home/marquee";
import { buttonVariants } from "@/components/ui/button";
import DotPattern from "@/components/ui/dot-pattern";
import Typography from "@/components/ui/typography";
import { ny } from "@/lib/utils";
import Link from "next/link";

const Home = () => {
  return (
    <div className={ny("w-full relative")}>
      <div className="absolute top-0 z-30 flex flex-col gap-10 w-full text-center justify-center items-center">
        <div className="flex flex-col gap-10 justify-center items-center w-full relative py-10 z-30">
          <DotPattern
            className={ny(
              "[mask-image:radial-gradient(600px_circle_at_center,white,transparent)]"
            )}
          />
          <Typography element="h1" as={"h1"}>
            <p className="text-secondary-foreground">
              إبحث عن برنامجك بسهولة و سرعة!
            </p>
            بحث مدعوم بالذكاء الصناعي
          </Typography>
          <Link
            href={"/search"}
            className={ny("w-fit rounded-full", buttonVariants({ size: "md" }))}
          >
            إبحث الآن
          </Link>
        </div>
        <MarqueeDemo />
      </div>
    </div>
  );
};

export default Home;
