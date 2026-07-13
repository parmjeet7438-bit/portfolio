"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "@/lib/motion";
import { Download, GitBranch, Link2, Mail, Menu, X } from "lucide-react";
import { Logo } from "@/components/shared/Logo";
import { ThemeToggle } from "@/components/shared/ThemeToggle";
import { NAV_LINKS, SITE_CONFIG } from "@/lib/constants";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { cn } from "@/lib/utils";
import { api } from "@/services/api";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeSection = useScrollSpy();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleResume = async () => {
    try {
      await api("/portfolio/track/resume", { method: "POST" });
    } catch {
      /* silent */
    }
    window.open(SITE_CONFIG.resumeUrl, "_blank");
  };

  const iconBtn =
    "flex h-9 w-9 items-center justify-center rounded-lg border border-sky-500/20 bg-sky-500/5 text-muted-foreground transition-colors hover:border-sky-400/40 hover:text-accent";

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-sky-500/10 bg-background/90 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.2)] backdrop-blur-xl"
          : "py-5"
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 md:px-8">
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            scrollTo("#home");
          }}
          className="flex shrink-0 items-center gap-2"
        >
          <Logo />
          <span className="hidden font-bold sm:inline">Parmjeet</span>
        </a>

        <div className="hidden items-center gap-1 xl:flex">
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className={cn(
                "rounded-lg px-3 py-2 text-sm transition-colors hover:text-primary",
                activeSection === link.href.replace("#", "") && "text-accent"
              )}
            >
              {link.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <div className="hidden items-center gap-1.5 sm:flex">
            <a
              href={SITE_CONFIG.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className={iconBtn}
            >
              <GitBranch className="h-4 w-4" />
            </a>
            <a
              href={SITE_CONFIG.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className={iconBtn}
            >
              <Link2 className="h-4 w-4" />
            </a>
            <a href={`mailto:${SITE_CONFIG.email}`} aria-label="Email" className={iconBtn}>
              <Mail className="h-4 w-4" />
            </a>
            <button type="button" onClick={handleResume} aria-label="Download Resume" className={iconBtn}>
              <Download className="h-4 w-4" />
            </button>
          </div>
          <ThemeToggle />
          <button
            className="xl:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-white/10 bg-background/95 backdrop-blur-xl xl:hidden"
          >
            <div className="flex flex-col gap-1 p-4">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="rounded-lg px-4 py-3 text-left text-sm hover:bg-white/5"
                >
                  {link.label}
                </button>
              ))}
              <div className="mt-3 flex items-center gap-2 border-t border-white/10 pt-3 sm:hidden">
                <a
                  href={SITE_CONFIG.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className={iconBtn}
                >
                  <GitBranch className="h-4 w-4" />
                </a>
                <a
                  href={SITE_CONFIG.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className={iconBtn}
                >
                  <Link2 className="h-4 w-4" />
                </a>
                <a href={`mailto:${SITE_CONFIG.email}`} aria-label="Email" className={iconBtn}>
                  <Mail className="h-4 w-4" />
                </a>
                <button type="button" onClick={handleResume} aria-label="Download Resume" className={iconBtn}>
                  <Download className="h-4 w-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
