"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "@/lib/motion";
import { useIsMobile } from "@/hooks/useIsMobile";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

export function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 180, damping: 32, mass: 0.18 });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-[100] h-0.5 origin-left bg-sky-400/90 will-change-transform"
      style={{ scaleX }}
    />
  );
}

export function ScrollEffects() {
  const [showTop, setShowTop] = useState(false);
  const isMobile = useIsMobile();
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setShowTop(window.scrollY > 480);
        ticking = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {!isMobile && !reduced && <ScrollProgressBar />}
      {showTop && (
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" })}
          className="glass-card fixed bottom-6 right-5 z-50 flex h-11 w-11 items-center justify-center text-accent md:bottom-8 md:right-8"
          aria-label="Scroll to top"
        >
          ↑
        </button>
      )}
    </>
  );
}
