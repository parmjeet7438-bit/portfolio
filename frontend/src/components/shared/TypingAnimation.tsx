"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface TypingAnimationProps {
  words: string[];
  className?: string;
}

export function TypingAnimation({ words, className }: TypingAnimationProps) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (!words.length) return;
    const word = words[index % words.length];
    const timeout = window.setTimeout(
      () => {
        if (!deleting) {
          const next = word.slice(0, text.length + 1);
          setText(next);
          if (next === word) {
            window.setTimeout(() => setDeleting(true), 1600);
          }
        } else {
          const next = word.slice(0, Math.max(0, text.length - 1));
          setText(next);
          if (next === "") {
            setDeleting(false);
            setIndex((i) => (i + 1) % words.length);
          }
        }
      },
      deleting ? 28 : 55
    );
    return () => window.clearTimeout(timeout);
  }, [text, deleting, index, words]);

  return (
    <span className={cn(className)}>
      {text}
      <span
        aria-hidden
        className="ml-0.5 inline-block h-[1em] w-0.5 animate-pulse bg-sky-400 align-middle"
      />
    </span>
  );
}
