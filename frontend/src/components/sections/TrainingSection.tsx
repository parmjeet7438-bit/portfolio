"use client";

import { motion } from "@/lib/motion";
import { Brain, CheckCircle2, GraduationCap, MapPin } from "lucide-react";
import Image from "next/image";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { COLLEGE_JOURNEY, TRAINING_COURSE, TRAINING_HIGHLIGHTS } from "@/lib/constants";
import { fadeInUp, staggerContainer } from "@/animations/variants";

const GALLERY = [
  {
    src: "/images/college/campus-building.png",
    title: "Rayat-Bahra University",
    caption: "Campus",
  },
  {
    src: "/images/training/ai-lab-session-1.png",
    title: "AI Lab Session",
    caption: "Hands-on training",
  },
  {
    src: "/images/training/ai-lab-session-2.png",
    title: "Python Practice",
    caption: "Coding class",
  },
] as const;

export function TrainingSection() {
  return (
    <section id="journey" className="section-padding">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeading
          subtitle="My Journey"
          title="College & AI Path"
          description="Campus foundations meeting hands-on Python and AI training"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid gap-6 lg:grid-cols-2"
        >
          <motion.article
            variants={fadeInUp}
            className="glass-card glow-border flex flex-col overflow-hidden rounded-2xl"
          >
            <div className="relative h-44 overflow-hidden sm:h-52">
              <Image
                src="/images/college/campus-building.png"
                alt="Rayat-Bahra University"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              <div className="absolute bottom-4 left-4 flex items-center gap-3">
                <div className="relative h-11 w-11 overflow-hidden rounded-full bg-white ring-2 ring-white/30">
                  <Image
                    src="/images/college/rayat-bahra-logo.png"
                    alt="Rayat-Bahra logo"
                    fill
                    className="object-cover"
                    sizes="44px"
                  />
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-sky-300">
                    College Journey
                  </p>
                  <p className="text-sm text-white/90">{COLLEGE_JOURNEY.institution}</p>
                </div>
              </div>
            </div>

            <div className="flex flex-1 flex-col p-6">
              <div className="mb-3 flex items-center gap-2">
                <GraduationCap className="h-4 w-4 text-sky-400" />
                <span className="rounded-full bg-sky-500/15 px-2.5 py-0.5 text-xs font-medium text-sky-300">
                  {COLLEGE_JOURNEY.status}
                </span>
              </div>
              <h3 className="mb-2 text-lg font-semibold">{COLLEGE_JOURNEY.degree}</h3>
              <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                {COLLEGE_JOURNEY.description}
              </p>
              <ul className="mt-auto space-y-2">
                {COLLEGE_JOURNEY.highlights.slice(0, 3).map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-sky-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.article>

          <motion.article
            variants={fadeInUp}
            className="glass-card glow-border flex flex-col overflow-hidden rounded-2xl"
          >
            <div className="relative h-44 overflow-hidden bg-black sm:h-52">
              <Image
                src="/images/training/apple-ai-lab-banner.png"
                alt="Apple AI-LAB"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <p className="text-xs font-medium uppercase tracking-wide text-emerald-300">
                  AI Training Journey
                </p>
                <p className="text-sm text-white/90">Apple AI-LAB · Gyansetu</p>
              </div>
            </div>

            <div className="flex flex-1 flex-col p-6">
              <div className="mb-3 flex flex-wrap items-center gap-2">
                <Brain className="h-4 w-4 text-emerald-400" />
                <span className="rounded-full bg-emerald-500/15 px-2.5 py-0.5 text-xs font-medium text-emerald-300">
                  {TRAINING_COURSE.level}
                </span>
                <span className="rounded-full bg-white/5 px-2.5 py-0.5 text-xs text-muted-foreground">
                  {TRAINING_COURSE.duration}
                </span>
              </div>
              <h3 className="mb-2 text-lg font-semibold">{TRAINING_COURSE.name}</h3>
              <p className="mb-3 text-sm leading-relaxed text-muted-foreground">
                Expert-led Python &amp; ML training with weekly projects and a 1-month industry
                internship.
              </p>
              <div className="mb-4 flex items-start gap-2 text-xs text-muted-foreground">
                <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-sky-400" />
                <span>{TRAINING_COURSE.location}</span>
              </div>
              <ul className="mt-auto space-y-2">
                {TRAINING_HIGHLIGHTS.slice(0, 3).map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.article>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-8 grid gap-4 sm:grid-cols-3"
        >
          {GALLERY.map((img) => (
            <motion.div
              key={img.src}
              variants={fadeInUp}
              className="glass-card group overflow-hidden rounded-xl"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={img.src}
                  alt={img.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
              </div>
              <div className="px-4 py-3">
                <p className="text-sm font-medium">{img.title}</p>
                <p className="text-xs text-muted-foreground">{img.caption}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
