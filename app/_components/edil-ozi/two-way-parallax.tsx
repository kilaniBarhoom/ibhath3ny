"use client";
import { useEffect, useState, useRef, FC } from "react";
import Image from "next/image";
// import rnd from "@/public/images/rnd.png";

import { useScroll, useTransform, motion } from "framer-motion";
import { ny } from "@/app/_lib/utils";

//optionally hook for smooth scrolling

export type image = { img: string; title: string };

interface Props {
  images: image[];
  className?: string;
}

const TwoWayParallax: FC<Props> = ({ images, className }) => {
  const gallery = useRef(null);

  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  const { scrollYProgress } = useScroll({
    target: gallery,
    //when to start and end the animation (related to target element)
    offset: ["start end", "end start"],
  });

  const { height } = dimension;
  const y1 = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);

  // Optionally for smooth scrolling

  useEffect(() => {
    const resize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener("resize", resize);
    resize();
  }, []);

  return (
    <div
      ref={gallery}
      className={ny(
        "box-content flex h-[180vh] gap-2 overflow-hidden bg-background p-4 py-10",
        className
      )}
    >
      <Column
        images={[images[0].img, images[1].img, images[2].img]}
        y={y1}
        classes="top-[-45%]"
      />
      <Column
        images={[images[4].img, images[5].img, images[1].img]}
        y={y2}
        classes="top-[-95%]"
      />
      <Column
        images={[images[3].img, images[1].img, images[5].img]}
        y={y3}
        classes="top-[-65%] hidden lg:flex"
      />
      <Column
        images={[images[1].img, images[2].img, images[3].img]}
        y={y4}
        classes="hidden xl:flex top-[-75%]"
      />
    </div>
  );
};
export default TwoWayParallax;

type Column = {
  images: string[];
  y: any;
  classes: string;
};

const Column = ({ images, y = 0, classes }: Column) => {
  return (
    <motion.div
      style={{ y }}
      className={`relative flex h-full md:min-w-[300px] w-fit bg-background flex-col gap-4 ${classes}`}
    >
      {images.map((src, idx: number) => (
        <div
          key={idx}
          className="relative h-full w-full overflow-hidden rounded-md"
        >
          <img src={src} className="w-full object-contain" alt="img" />
        </div>
      ))}
    </motion.div>
  );
};
