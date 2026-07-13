"use client";

import { motion } from "@/lib/motion";
import { GraduationCap } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { EDUCATION } from "@/lib/constants";
import { fadeInUp, staggerContainer } from "@/animations/variants";

export function EducationSection() {
  return (
    <section id="education" className="section-padding">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeading subtitle="Education" title="Academic Background" />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mx-auto max-w-2xl"
        >
          {EDUCATION.map((edu) => (
            <motion.div
              key={edu.degree}
              variants={fadeInUp}
              className="glass-card relative rounded-2xl p-8"
            >
              <div className="absolute -left-3 top-8 flex h-12 w-12 items-center justify-center rounded-full border border-primary/30 bg-primary/10">
                <GraduationCap className="h-5 w-5 text-primary" />
              </div>
              <div className="ml-8">
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                  {edu.status}
                </span>
                <h3 className="mt-3 text-xl font-semibold">{edu.degree}</h3>
                <p className="text-lg text-primary">{edu.field}</p>
                <p className="mt-3 text-muted-foreground">{edu.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
