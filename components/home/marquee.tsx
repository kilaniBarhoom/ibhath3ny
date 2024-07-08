import { ny } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";

const reviews = [
  {
    name: "SpongeBob",
    img: "https://assets.nick.com/uri/mgid:arc:imageassetref:shared.nick.us:a625d441-bbbf-42c8-9927-6a0157aac911?quality=0.7&gen=ntrn",
  },
  {
    name: "Fanboy and Chum Chum",
    img: "https://variety.com/wp-content/uploads/2009/10/rfanboy_chin.jpg?w=250",
  },
  {
    name: "Angelo Rules",
    img: "https://play-lh.googleusercontent.com/proxy/BizrQ0hq72QIWGoYYacXOCiA5OJ0o89IloY9S3VQS8g-C7iDkAXtWc7mk3mRvIiMk_oneAGPiXQC7bXAcwJESmMkc4zqsMTvfSS6kvjnJ1iCQtiAypDvc6cxQd0HJUvISig2Eyme-rz55a1i4kClYOueiQRc3OO3rE-cxQ",
  },
  {
    name: "Abtal Al Kora",
    img: "https://i0.wp.com/shahiid-anime.net/wp-content/uploads/Inazuma_Eleven_series_1.jpg?fit=759%2C1080&ssl=1",
  },
  {
    name: "Foster House",
    img: "https://www.arabic-toons.com/images/anime/cat_1439261116.jpg",
  },
  {
    name: "Ed Ed & Eddy",
    img: "https://www.arabic-toons.com/images/anime/cat_1436441194.jpg",
  },
];

const firstRow = reviews.slice(0, reviews.length);

function ReviewCard({ img, name }: { img: string; name: string }) {
  return (
    <figure
      className={ny(
        "relative w-40 cursor-pointer overflow-hidden rounded-md border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-col items-center gap-2 w-full">
        <img className="rounded-md w-full object-contain" alt="" src={img} />
        <figcaption className="text-sm font-medium dark:text-white">
          {name}
        </figcaption>
      </div>
    </figure>
  );
}

export function MarqueeDemo() {
  return (
    <div className="relative bg-none flex h-full w-full max-w-screen-xl mx-auto flex-col items-center justify-center overflow-hidden pointer-events-none rounded-lg">
      <Marquee repeat={100} className="[--duration:20s] bg-none">
        {firstRow.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee>
      <Marquee reverse repeat={100} className="[--duration:20s] bg-none">
        {firstRow.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee>
    </div>
  );
}
