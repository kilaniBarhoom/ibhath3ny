import NextTopLoader from "nextjs-toploader";
import React from "react";

export default function TopLoader() {
  return (
    <>
      <NextTopLoader
        color="#ffec00"
        initialPosition={0.08}
        crawlSpeed={200}
        height={4}
        crawl={true}
        easing="ease"
        speed={200}
        shadow="0 0 10px #ffec00,0 0 5px #ffec00"
      />
    </>
  );
}
