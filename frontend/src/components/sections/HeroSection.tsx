"use client";

import { motion } from "@/lib/motion";
import { Download, FolderKanban, Mail, Sparkles, UserPlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TypingAnimation } from "@/components/shared/TypingAnimation";
import { SocialLinks } from "@/components/shared/SocialLinks";
import { AnimatedHeadline } from "@/components/shared/AnimatedHeadline";
import { HeroBackground3D } from "@/components/effects/HeroBackground3D";
import { TYPING_TITLES, SITE_CONFIG } from "@/lib/constants";
import { api } from "@/services/api";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.05 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function HeroSection() {
  const handleResume = async () => {
    try {
      await api("/portfolio/track/resume", { method: "POST" });
    } catch {
      /* silent */
    }
    window.open(SITE_CONFIG.resumeUrl, "_blank");
  };

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="hero-spotlight relative flex min-h-[100svh] items-center overflow-hidden pt-24 pb-12"
    >
      <HeroBackground3D />
      <div className="animated-grid pointer-events-none absolute inset-0 -z-10 opacity-30 md:opacity-40" />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-10 px-4 md:gap-14 md:px-8 lg:grid-cols-2">
        <motion.div variants={container} initial="hidden" animate="visible">
          <motion.div variants={item} className="section-badge mb-5">
            <Sparkles className="h-3.5 w-3.5" />
            Available for Opportunities
          </motion.div>

          <motion.p variants={item} className="mb-2 text-base font-medium text-muted-foreground md:text-lg">
            Hello, I&apos;m
          </motion.p>

          <motion.div variants={item}>
            <AnimatedHeadline text="Parmjeet Singh" as="h1" className="heading-xl mb-4" delay={0.05} />
          </motion.div>

          <motion.p variants={item} className="mb-2 text-base font-medium text-foreground/90 md:text-xl">
            Final Year Computer Science &amp; Engineering Student
          </motion.p>

          <motion.div variants={item} className="mb-8 flex min-h-9 items-center text-lg font-semibold md:text-xl">
            <span className="accent-text">
              <TypingAnimation words={TYPING_TITLES} />
            </span>
          </motion.div>

          <motion.div variants={item} className="mb-8 flex flex-wrap gap-3">
            <Button size="lg" className="btn-glow gap-2" onClick={handleResume}>
              <Download className="h-4 w-4" /> Download Resume
            </Button>
            <Button variant="outline" size="lg" className="gap-2" onClick={() => scrollTo("#projects")}>
              <FolderKanban className="h-4 w-4" /> View Projects
            </Button>
            <Button variant="glass" size="lg" className="gap-2" onClick={() => scrollTo("#contact")}>
              <UserPlus className="h-4 w-4" /> Hire Me
            </Button>
            <Button variant="ghost" size="lg" className="gap-2" onClick={() => scrollTo("#contact")}>
              <Mail className="h-4 w-4" /> Contact
            </Button>
          </motion.div>

          <motion.div variants={item}>
            <SocialLinks />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="glass-card glow-border relative aspect-square overflow-hidden rounded-3xl p-3">
            <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-sky-950/30 via-slate-900/50 to-sky-900/20">
              <div className="relative text-center">
                <div className="mx-auto mb-5 flex h-32 w-32 items-center justify-center rounded-full border border-sky-400/30 bg-sky-500/10 md:h-36 md:w-36">
                  <span className="text-5xl font-extrabold tracking-tight text-foreground">PS</span>
                </div>
                <p className="text-sm font-medium text-foreground/80">Parmjeet Singh</p>
                <p className="mt-1 text-xs text-muted-foreground">Full Stack · Backend · AI Learner</p>
              </div>
            </div>
          </div>

          <div className="glass-card absolute -right-1 -top-2 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-accent md:-right-2 md:-top-3 md:px-4 md:py-2">
            Open to Internships
          </div>
        </motion.div>
      </div>
    </section>
  );
}
