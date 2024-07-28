"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { ny } from "@/app/_lib/utils";
import { Bot } from "lucide-react";

export const TextGenerateEffect = ({
  words,
  className,
}: {
  words: string;
  className?: string;
}) => {
  const [scope, animate] = useAnimate();
  let wordsArray = words.split(" ");
  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
      },
      {
        duration: 1,
        delay: stagger(0.25),
      }
    );
  }, [scope.current]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span key={word + idx} className="opacity-0">
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div
      className={ny(
        "text-4xl text-secondary-foreground flex flex-wrap items-center justify-center gap-4",
        className
      )}
    >
      {renderWords()}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 1,
          duration: 2,
          type: "spring",
          bounce: 10,
        }}
      >
        <Bot size={45} className="-rotate-6 text-blue-500" />
      </motion.div>
    </div>
  );
};
