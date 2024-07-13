"use client";

import TwoWayParallax from "@/components/edil-ozi/two-way-parallax";
import { buttonVariants } from "@/components/ui/button";
import DotPattern from "@/components/ui/dot-pattern";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect.tsx";
import Typography from "@/components/ui/typography";
import { ny } from "@/lib/utils";
import Baraem2 from "@/public/images/chanel logos/baraem2.svg";
import CN2 from "@/public/images/chanel logos/cn2.svg";
import Mbc32 from "@/public/images/chanel logos/mbc32.svg";
import Spacetoon2 from "@/public/images/chanel logos/spacetoon2.svg";
import Robot from "@/public/images/robot.png";
import Image from "next/image";
import Link from "next/link";
const Home = () => {
  const images = [
    {
      title: "SpongeBob",
      img: "https://assets.nick.com/uri/mgid:arc:imageassetref:shared.nick.us:a625d441-bbbf-42c8-9927-6a0157aac911?quality=0.7&gen=ntrn",
    },
    {
      title: "Fanboy and Chum Chum",
      img: "https://variety.com/wp-content/uploads/2009/10/rfanboy_chin.jpg?w=250",
    },
    {
      title: "Angelo Rules",
      img: "https://play-lh.googleusercontent.com/proxy/BizrQ0hq72QIWGoYYacXOCiA5OJ0o89IloY9S3VQS8g-C7iDkAXtWc7mk3mRvIiMk_oneAGPiXQC7bXAcwJESmMkc4zqsMTvfSS6kvjnJ1iCQtiAypDvc6cxQd0HJUvISig2Eyme-rz55a1i4kClYOueiQRc3OO3rE-cxQ",
    },
    {
      title: "Abtal Al Kora",
      img: "https://i0.wp.com/shahiid-anime.net/wp-content/uploads/Inazuma_Eleven_series_1.jpg?fit=759%2C1080&ssl=1",
    },
    {
      title: "Foster House",
      img: "https://www.arabic-toons.com/images/anime/cat_1439261116.jpg",
    },
    {
      title: "Ed Ed & Eddy",
      img: "https://www.arabic-toons.com/images/anime/cat_1436441194.jpg",
    },
  ];
  const words = "بحث مدعوم بالذكاء الاصطناعي";
  return (
    <>
      <div className="flex flex-col gap-20 px-3 snap-y">
        <section className="max-w-screen-lg min-h-dvh mx-auto flex flex-col antialiased items-center md:justify-center overflow-hidden gap-24 md:p-0 pt-10">
          <DotPattern
            className={ny(
              "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]"
            )}
          />
          <div className="text-center flex flex-col gap-10 justify-center items-center w-full z-30">
            <button className="scale-90 flex items-center gap-2 w-fit px-3 py-1 bg-gradient-to-br pointer-events-none from-yellow-300 to-background border border-yellow-100 rounded-full">
              <span className="text-xs">مدعوم بالذكاء الاصطناعي</span>
              <Image
                src={Robot}
                className="w-6"
                alt="robot"
                objectFit="contain"
              />
            </button>
            <Typography element="h1" as={"h1"}>
              إبحث عن برنامجك بسهولة و سرعة!
              <TextGenerateEffect words={words} />
            </Typography>

            <Link
              href={"/search"}
              className={ny(
                buttonVariants({ size: "md" }),
                "w-fit rounded-full"
              )}
            >
              إبحث الآن
            </Link>
          </div>
          <div className="w-full flex gap-5 justify-center items-center flex-wrap">
            <Image src={Spacetoon2} alt="spacetoon1" className="w-14" />
            <Image src={Mbc32} alt="Mbc32" className="w-11" />
            <Image src={Baraem2} alt="Baraem2" className="w-14" />
            <Image src={CN2} alt="CN2" className="w-11" />
          </div>
        </section>
        <section className="my-40 mx-auto">
          <TwoWayParallax images={images} />
        </section>
        <section className="flex justify-between w-full max-w-screen-lg mx-auto">
          <Typography element="h2" as="h2">
            جميع البرامج المتوفرة
          </Typography>
        </section>
      </div>
    </>
  );
};

export default Home;
