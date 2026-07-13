"use client";

import { motion } from "@/lib/motion";
import type { LucideIcon } from "lucide-react";
import { Clock, Heart, Puzzle, RefreshCw, Users, Zap } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { SOFT_SKILLS } from "@/lib/constants";
import { ABOUT_TEXT } from "@/lib/fallbackData";
import { staggerContainer, fadeInUp } from "@/animations/variants";

const iconMap: Record<string, LucideIcon> = {
  Zap,
  Puzzle,
  Users,
  RefreshCw,
  Heart,
  Clock,
};

export function AboutSection() {
  return (
    <section id="about" className="section-padding">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeading subtitle="About Me" title="Who I Am" description="Passionate developer building scalable solutions" />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-8 lg:grid-cols-2"
        >
          <motion.div variants={fadeInUp} className="glass-card glow-border rounded-2xl p-8">
            <p className="leading-relaxed text-muted-foreground">{ABOUT_TEXT}</p>
          </motion.div>

          <motion.div variants={fadeInUp} className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {SOFT_SKILLS.map((skill) => {
              const Icon = iconMap[skill.icon] || Zap;
              return (
                <motion.div
                  key={skill.title}
                  whileHover={{ scale: 1.05, y: -4 }}
                  className="glass-card glow-border group flex flex-col items-center gap-3 rounded-xl p-5 text-center transition-all hover:shadow-[0_0_24px_rgba(56,189,248,0.12)]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="text-sm font-medium">{skill.title}</span>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
