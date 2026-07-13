"use client";

import { useEffect, useRef } from "react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { useMediaQuery } from "@/hooks/useMediaQuery";

export function CustomCursor() {
  const reduced = usePrefersReducedMotion();
  const isMobile = useMediaQuery("(max-width: 768px)");
  const ringRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (reduced || isMobile) return;

    const root = document.documentElement;
    root.classList.add("custom-cursor-active");

    const onMove = (e: MouseEvent) => {
      const { clientX: x, clientY: y } = e;
      const transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;

      if (ringRef.current) {
        ringRef.current.style.transform = transform;
        ringRef.current.style.opacity = "1";
      }
      if (dotRef.current) {
        dotRef.current.style.transform = transform;
        dotRef.current.style.opacity = "1";
      }
    };

    const onLeave = () => {
      if (ringRef.current) ringRef.current.style.opacity = "0";
      if (dotRef.current) dotRef.current.style.opacity = "0";
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseleave", onLeave);

    return () => {
      root.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
    };
  }, [reduced, isMobile]);

  if (reduced || isMobile) return null;

  return (
    <>
      <div
        ref={ringRef}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[9998] hidden h-8 w-8 rounded-full border border-sky-400/60 opacity-0 will-change-transform md:block"
      />
      <div
        ref={dotRef}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[9999] hidden h-1.5 w-1.5 rounded-full bg-sky-400 opacity-0 will-change-transform md:block"
      />
    </>
  );
}
