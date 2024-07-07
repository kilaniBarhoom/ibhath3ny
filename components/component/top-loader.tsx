import NextTopLoader from "nextjs-toploader";
import React from "react";

export default function TopLoader() {
  return (
    <>
      <NextTopLoader
        color="#b70909"
        initialPosition={0.08}
        crawlSpeed={200}
        height={4}
        crawl={true}
        easing="ease"
        speed={200}
        shadow="0 0 10px #b70909,0 0 5px #b70909"
      />
    </>
  );
}
