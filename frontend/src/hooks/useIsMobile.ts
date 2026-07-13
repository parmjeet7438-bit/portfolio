"use client";

import { useEffect, useState } from "react";

/** True on phones/tablets — used to skip heavy desktop-only effects. */
export function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${breakpoint}px)`);
    const coarse = window.matchMedia("(pointer: coarse)");
    const update = () => setIsMobile(mq.matches || coarse.matches);
    update();
    mq.addEventListener("change", update);
    coarse.addEventListener("change", update);
    return () => {
      mq.removeEventListener("change", update);
      coarse.removeEventListener("change", update);
    };
  }, [breakpoint]);

  return isMobile;
}
