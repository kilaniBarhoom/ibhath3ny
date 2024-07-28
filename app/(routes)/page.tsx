"use client";

import TwoWayParallax from "@/app/_components/edil-ozi/two-way-parallax";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/app/_components/ui/accordion";
import { buttonVariants } from "@/app/_components/ui/button";
import DotPattern from "@/app/_components/ui/dot-pattern";
import { TextGenerateEffect } from "@/app/_components/ui/text-generate-effect.tsx";
import Typography from "@/app/_components/ui/typography";
import useScroll from "@/app/_hooks/use-scroll";
import { ny } from "@/app/_lib/utils";
import Baraem2 from "@/public/images/chanel logos/baraem2.svg";
import CN2 from "@/public/images/chanel logos/cn2.svg";
import Mbc32 from "@/public/images/chanel logos/mbc32.svg";
import Spacetoon2 from "@/public/images/chanel logos/spacetoon2.svg";
import Robot from "@/public/images/robot.png";
import { ChevronUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Footer from "../_components/footer";

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

  const scrolled1 = useScroll(3);
  const scrolled2 = useScroll(4);
  const scrolled3 = useScroll(5);
  const scrolled4 = useScroll(6);
  const scrolled5 = useScroll(7);
  return (
    <div className="flex flex-col gap-20 px-3">
      <div
        className={ny(
          "fixed rounded-md z-50 -right-96 -rotate-45 bottom-14 grid place-items-center bg-primary cursor-pointer transition-all ease-in-out duration-200 shadow-lg",
          {
            "right-0 bottom-12 -rotate-12": scrolled1,
            "right-1 bottom-11 -rotate-6": scrolled2,
            "right-2 bottom-10 -rotate-3": scrolled3,
            "right-3 bottom-8 -rotate-1": scrolled4,
            "right-4 bottom-6 -rotate-0": scrolled5,
          }
        )}
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        <ChevronUp className="w-10 h-10 text-black" />
      </div>
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
            <p className="bg-gradient-to-r from-amber-200 to-primary bg-clip-text text-transparent">
              إبحث عن برنامجك بسهولة و سرعة!
            </p>
            <TextGenerateEffect words={words} />
          </Typography>

          <Link
            href={"/search"}
            className={ny(buttonVariants({ size: "md" }), "w-fit rounded-full")}
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
      <section className="my-40 mx-auto md:flex hidden">
        <TwoWayParallax images={images} />
      </section>
      {/* <section className="flex justify-between w-full max-w-screen-lg mx-auto">
          <Typography element="h2" as="h2">
            البرامج ال
          </Typography>
        </section> */}
      <section
        className="flex w-full mx-auto max-w-screen-lg justify-center items-center flex-col gap-10 md:min-h-dvh pb-20 md:pb-0"
        id="faq"
      >
        <Typography element="h3" as="h3">
          الأسئلة المتكررة
        </Typography>
        <div className="w-full">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                لماذا البرنامج الذي أبحث عنه غير متوفر؟
              </AccordionTrigger>
              <AccordionContent>
                الموقع يستخدم الذكاء الاصطناعي و تعلم الالة للبحث عن البرامج
                المتوفرة, و لكن مع الوقت سيتم توفير المزيد من البرامج عن طريق
                الذكاء الاصطناعي
              </AccordionContent>
            </AccordionItem>
            {/* <AccordionItem value="item-2">
              <AccordionTrigger>Is it styled?</AccordionTrigger>
              <AccordionContent>
                Yes. It comes with default styles that matches the other
                components&apos; aesthetic.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Is it animated?</AccordionTrigger>
              <AccordionContent>
                Yes. It&apos;s animated by default, but you can disable it if
                you prefer.
              </AccordionContent>
            </AccordionItem> */}
          </Accordion>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
