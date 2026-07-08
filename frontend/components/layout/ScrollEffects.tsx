"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useMediaQuery } from "@/hooks/useMediaQuery";

export function ScrollProgressBar() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;

      requestAnimationFrame(() => {
        const scrollTop = window.scrollY;
        const docHeight =
          document.documentElement.scrollHeight - window.innerHeight;
        const progress = docHeight > 0 ? scrollTop / docHeight : 0;

        if (barRef.current) {
          barRef.current.style.transform = `scaleX(${progress})`;
        }

        ticking = false;
      });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed left-0 top-0 z-[60] h-[2px] w-full origin-left bg-border/30">
      <div
        ref={barRef}
        className="h-full w-full origin-left bg-gradient-to-r from-primary via-accent to-primary will-change-transform"
        style={{ transform: "scaleX(0)" }}
      />
    </div>
  );
}

export function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  useEffect(() => {
    if (!isDesktop || !glowRef.current) return;

    const glow = glowRef.current;
    let rafId = 0;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const animate = () => {
      currentX += (targetX - currentX) * 0.42;
      currentY += (targetY - currentY) * 0.42;
      glow.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
      rafId = requestAnimationFrame(animate);
    };

    const onMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    rafId = requestAnimationFrame(animate);
    window.addEventListener("mousemove", onMove, { passive: true });

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", onMove);
    };
  }, [isDesktop]);

  if (!isDesktop) return null;

  return (
    <div
      ref={glowRef}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[1] h-[440px] w-[440px] -translate-x-1/2 -translate-y-1/2 will-change-transform"
    >
      <div
        className="absolute inset-0 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, var(--cursor-ring) 0%, transparent 68%)",
        }}
      />
      <div
        className="absolute inset-[28%] blur-xl"
        style={{
          background:
            "radial-gradient(circle, var(--cursor-white) 0%, rgba(255,255,255,0.12) 40%, transparent 72%)",
        }}
      />
    </div>
  );
}

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;

      requestAnimationFrame(() => {
        setVisible(window.scrollY > 500);
        ticking = false;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className="fixed bottom-8 right-8 z-50 flex h-12 w-12 items-center justify-center rounded-full glass-panel font-mono text-primary transition-colors hover:border-primary/30"
    >
      ↑
    </motion.button>
  );
}
