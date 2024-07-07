import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";

const fonts = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
});

const Home = () => {
  return (
    <div>
      <h1
        className={cn(
          "text-6xl font-semibold drop-shadow-md text-green-500",
          fonts.className
        )}
      >
        Home
      </h1>
    </div>
  );
};

export default Home;
