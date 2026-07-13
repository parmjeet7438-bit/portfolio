"use client";

/**
 * Lightweight CSS ambient background — no Three.js on the critical path.
 * Keeps 60fps on low-end devices while preserving a premium look.
 */
export function HeroBackground3D() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-sky-500/15 blur-3xl" />
      <div className="absolute -right-16 bottom-10 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="absolute left-1/2 top-1/3 h-40 w-40 -translate-x-1/2 rounded-full bg-sky-400/10 blur-2xl" />
    </div>
  );
}
