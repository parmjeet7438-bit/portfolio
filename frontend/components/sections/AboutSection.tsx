"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Globe,
  Wrench,
  GraduationCap,
  Target,
} from "lucide-react";
import {
  FALLBACK_ABOUT,
  FALLBACK_SKILLS,
  FALLBACK_SOFT_SKILLS,
  FOCUS_AREAS,
} from "@/lib/constants";
import type { PortfolioInfo } from "@/types";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { AnimatedCounter } from "@/components/shared/AnimatedCounter";
import { fadeInUp, staggerContainer } from "@/animations/variants";

interface AboutSectionProps {
  portfolio?: PortfolioInfo | null;
}

const skillCategories = [
  { key: "programming" as const, label: "Programming Languages", icon: Code2 },
  { key: "web" as const, label: "Web Technologies", icon: Globe },
  { key: "database" as const, label: "Database", icon: Database },
  { key: "tools" as const, label: "Tools", icon: Wrench },
];

export function AboutSection({ portfolio }: AboutSectionProps) {
  const about = portfolio?.about || FALLBACK_ABOUT;
  const skills = portfolio?.skills || FALLBACK_SKILLS;
  const softSkills = portfolio?.softSkills || FALLBACK_SOFT_SKILLS;
  const stats = portfolio?.stats || {
    projectsCount: 2,
    skillsCount: 12,
    certificationsCount: 1,
  };

  return (
    <section id="about" className="section-shell py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          label="About Me"
          title="Who I Am"
          description="A dedicated computer science student passionate about software development"
        />

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="space-y-6"
          >
            <motion.div variants={fadeInUp} className="glass-panel rounded-2xl p-6 md:p-8">
              <h3 className="mb-4 text-xl font-semibold">Professional Summary</h3>
              <p className="leading-relaxed text-muted">{about}</p>
            </motion.div>

            <motion.div variants={fadeInUp} className="glass-panel rounded-2xl p-6 md:p-8">
              <div className="mb-4 flex items-center gap-3">
                <GraduationCap className="h-5 w-5 text-primary" />
                <h3 className="text-xl font-semibold">Education</h3>
              </div>
              <p className="font-medium">
                {portfolio?.education.degree ||
                  "B.Tech in Computer Science Engineering"}
              </p>
              <p className="mt-1 text-sm text-muted">
                {portfolio?.education.status || "Currently in 4th Year"}
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="glass-panel rounded-2xl p-6 md:p-8">
              <div className="mb-4 flex items-center gap-3">
                <Target className="h-5 w-5 text-accent" />
                <h3 className="text-xl font-semibold">Current Focus</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {FOCUS_AREAS.map((area) => (
                  <span
                    key={area}
                    className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-sm text-accent"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <div className="space-y-8">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-3 gap-4"
            >
              <AnimatedCounter value={stats.projectsCount} label="Projects" />
              <AnimatedCounter value={stats.skillsCount} suffix="+" label="Skills" />
              <AnimatedCounter
                value={stats.certificationsCount}
                label="Certifications"
              />
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid gap-4 sm:grid-cols-2"
            >
              {skillCategories.map(({ key, label, icon: Icon }) => (
                <motion.div
                  key={key}
                  variants={fadeInUp}
                  whileHover={{ y: -4, borderColor: "var(--primary)" }}
                  className="glass-panel rounded-2xl p-5 transition-colors"
                >
                  <div className="mb-3 flex items-center gap-2">
                    <Icon className="h-4 w-4 text-primary" />
                    <h4 className="text-sm font-semibold">{label}</h4>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {skills[key].map((skill) => (
                      <span
                        key={skill}
                        className="rounded-md bg-primary/10 px-2 py-0.5 text-xs text-primary"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h3 className="mb-4 text-lg font-semibold">Soft Skills</h3>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {softSkills.map((skill, i) => (
                  <motion.div
                    key={skill}
                    variants={fadeInUp}
                    whileHover={{ scale: 1.02 }}
                    className="group relative overflow-hidden rounded-xl hairline-border bg-surface/50 p-4 backdrop-blur-sm transition-all hover:border-primary/30"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/0 to-accent/0 transition-all group-hover:from-primary/5 group-hover:to-accent/5" />
                    <span className="relative text-sm font-medium">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
