"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

const AethericCoreScene = dynamic(() => import("./AethericCoreScene"), {
  ssr: false,
  loading: () => <StaticCoreFallback />,
});

function StaticCoreFallback() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="relative h-40 w-40">
        <div className="absolute inset-0 rounded-full bg-primary/15 blur-2xl" />
        <div className="absolute inset-4 rounded-full border border-primary/25 bg-primary/10" />
        <div className="absolute inset-10 rounded-full bg-gradient-to-br from-primary/40 to-accent/30" />
      </div>
    </div>
  );
}

export function AethericCore() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const reducedMotion = usePrefersReducedMotion();
  const enable3d = isDesktop && !reducedMotion;

  useEffect(() => {
    const node = containerRef.current;
    if (!node || !enable3d) return;

    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.15, rootMargin: "100px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [enable3d]);

  return (
    <div
      ref={containerRef}
      className="relative h-[320px] w-full sm:h-[380px] lg:h-[440px]"
    >
      <div className="glass-core absolute inset-0 rounded-[2rem]" />
      <div className="absolute inset-[1px] overflow-hidden rounded-[calc(2rem-1px)]">
        {enable3d ? (
          <AethericCoreScene active={inView} />
        ) : (
          <StaticCoreFallback />
        )}
      </div>
      <div className="pointer-events-none absolute inset-0 rounded-[2rem] ring-[0.5px] ring-inset ring-white/10" />
      <div className="pointer-events-none absolute -inset-px rounded-[2rem] bg-gradient-to-br from-primary/20 via-transparent to-accent/20 opacity-60" />
    </div>
  );
}
