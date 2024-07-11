"use client";

import { buttonVariants } from "@/components/ui/button";
import Spacetoon from "@/public/images/chanel logos/spacetoon.png";
import Mbc3 from "@/public/images/chanel logos/mbc3.png";
import CN from "@/public/images/chanel logos/cn.png";
import Baraem from "@/public/images/chanel logos/baraem.png";
import Typography from "@/components/ui/typography";
import { ny } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect.tsx";
import TwoWayParallax from "@/components/edil-ozi/two-way-parallax";
import { Spotlight } from "@/components/ui/Spotlight";
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
    <div className="flex flex-col gap-20">
      <section className="relative flex flex-col justify-between antialiased items-center gap-24 overflow-hidden pt-24">
        <Spotlight
          className="top-0 left-0 md:left-80 md:top-20"
          fill="yellow"
        />
        <div className="text-center flex flex-col gap-10 justify-center items-center w-full z-30">
          <Typography element="h1" as={"h1"}>
            إبحث عن برنامجك بسهولة و سرعة!
            <TextGenerateEffect words={words} />
          </Typography>
          <Link
            href={"/search"}
            className={ny(buttonVariants({ size: "md" }), "w-fit rounded-full")}
          >
            إبحث الآن
          </Link>
        </div>
        <div className="w-full flex gap-4 justify-center items-center">
          <Image src={Spacetoon} alt="spacetoon" className="w-16" />
          <Image src={Mbc3} alt="Mbc3" className="w-16" />
          <Image src={Baraem} alt="Baraem" className="w-16" />
          <Image src={CN} alt="CN" className="w-16" />
        </div>
      </section>
      <section className="my-40 mx-auto hidden md:flex">
        <TwoWayParallax images={images} />
      </section>
      <section className="flex justify-between w-full">
        <Typography element="h2" as="h2">
          جميع البرامج المتوفرة
        </Typography>
      </section>
    </div>
  );
};

export default Home;
