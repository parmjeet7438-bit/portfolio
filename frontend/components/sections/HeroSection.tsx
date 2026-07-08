"use client";

import { motion } from "framer-motion";
import { ChevronDown, Download, FolderOpen, Sparkles } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { SITE, TYPING_ROLES } from "@/lib/constants";
import { fadeInUp, staggerContainer } from "@/animations/variants";
import { TypingAnimation } from "@/components/shared/TypingAnimation";
import { SocialLinks } from "@/components/shared/SocialLinks";
import { MagneticButton } from "@/components/shared/MagneticButton";
import { AethericCore } from "@/components/effects/AethericCore";
import { ParticleBackground } from "@/components/effects/ParticleBackground";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden hero-gradient pt-20"
    >
      <ParticleBackground />

      <div className="relative z-10 mx-auto grid max-w-6xl gap-12 px-4 py-20 md:px-6 lg:grid-cols-2 lg:items-center lg:gap-16">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="space-y-7"
        >
          <motion.div variants={fadeInUp} className="flex items-center gap-3">
            <span className="label-mono text-primary">Portfolio · 2026</span>
            <span className="h-[0.5px] w-12 bg-border" />
            <span className="label-mono text-muted">Available for opportunities</span>
          </motion.div>

          <motion.p variants={fadeInUp} className="text-muted md:text-lg">
            Hello, I&apos;m
          </motion.p>

          <motion.h1
            variants={fadeInUp}
            className="text-4xl font-semibold tracking-[-0.04em] sm:text-5xl md:text-6xl lg:text-[4.5rem] lg:leading-[1.02]"
          >
            <span className="gradient-text">Satnam Kumar</span>
          </motion.h1>

          <motion.div
            variants={fadeInUp}
            className="flex min-h-8 items-center gap-2 font-mono text-sm text-muted md:text-base"
          >
            <Sparkles className="h-4 w-4 shrink-0 text-accent" />
            <TypingAnimation texts={TYPING_ROLES} />
          </motion.div>

          <motion.p
            variants={fadeInUp}
            className="max-w-xl text-base leading-relaxed text-muted md:text-lg md:leading-8"
          >
            Building practical applications with Python, modern web stacks, and
            AI — focused on clean architecture, polished interfaces, and
            measurable impact.
          </motion.p>

          <motion.div variants={fadeInUp} className="flex flex-wrap gap-3 pt-1">
            <MagneticButton
              as="a"
              href="#projects"
              className="inline-flex h-11 items-center gap-2 rounded-xl bg-gradient-to-r from-primary to-accent px-6 text-sm font-medium text-white shadow-lg shadow-primary/25"
            >
              <FolderOpen className="h-4 w-4" />
              View Projects
            </MagneticButton>
            <MagneticButton
              as="a"
              href={SITE.resumeUrl}
              download
              className="inline-flex h-11 items-center gap-2 rounded-xl border border-border bg-surface/50 px-6 text-sm font-medium backdrop-blur-sm hover:border-primary/50"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </MagneticButton>
            <MagneticButton
              as="a"
              href={SITE.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center gap-2 rounded-xl border border-border bg-surface/50 px-6 text-sm font-medium backdrop-blur-sm hover:border-primary/50"
            >
              <FaGithub className="h-4 w-4" />
              GitHub
            </MagneticButton>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <SocialLinks />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-lg lg:max-w-none"
        >
          <AethericCore />

          <div className="glass-panel absolute -bottom-4 left-4 right-4 rounded-2xl p-4 sm:left-6 sm:right-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="label-mono text-primary">Core Stack</p>
                <p className="mt-1 text-sm font-medium">Python · Node.js · MongoDB</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {["Python", "AI/ML", "Full-Stack"].map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full hairline-border bg-surface px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-muted"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-muted transition-colors hover:text-primary"
        aria-label="Scroll to about section"
      >
        <ChevronDown className="h-6 w-6 animate-scroll-down" />
      </motion.a>
    </section>
  );
}
