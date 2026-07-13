"use client";

import { motion } from "@/lib/motion";
import { cn } from "@/lib/utils";

interface AnimatedHeadlineProps {
  text: string;
  className?: string;
  delay?: number;
  as?: "h1" | "h2" | "span";
}

export function AnimatedHeadline({ text, className, delay = 0, as = "span" }: AnimatedHeadlineProps) {
  const Tag = as;
  const words = text.split(" ");

  return (
    <Tag className={cn("inline-block", className)}>
      {words.map((word, wi) => (
        <span key={`${word}-${wi}`} className="mr-[0.28em] inline-block last:mr-0">
          {word.split("").map((char, i) => (
            <motion.span
              key={`${char}-${wi}-${i}`}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: delay + (wi * word.length + i) * 0.022,
                duration: 0.28,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="inline-block"
            >
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </Tag>
  );
}
