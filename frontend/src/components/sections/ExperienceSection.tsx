"use client";

import { useEffect, useState } from "react";
import { motion } from "@/lib/motion";
import { Briefcase } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { api } from "@/services/api";
import type { Experience } from "@/types";
import { fadeInUp } from "@/animations/variants";

export function ExperienceSection() {
  const [experiences, setExperiences] = useState<Experience[]>([]);

  useEffect(() => {
    api<{ data: Experience[] }>("/experience")
      .then((res) => setExperiences(res.data))
      .catch(() => setExperiences([]));
  }, []);

  return (
    <section id="experience" className="section-padding">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeading subtitle="Experience" title="Work Experience" description="My professional journey" />

        {experiences.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card mx-auto max-w-lg rounded-2xl p-12 text-center"
          >
            <Briefcase className="mx-auto mb-4 h-12 w-12 text-muted-foreground/50" />
            <p className="text-muted-foreground">Experience timeline will appear here once added via admin dashboard.</p>
          </motion.div>
        ) : (
          <div className="relative mx-auto max-w-3xl">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-sky-600 via-sky-400 to-sky-600 md:left-1/2" />
            {experiences.map((exp, i) => (
              <motion.div
                key={exp._id}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className={`relative mb-8 flex ${i % 2 === 0 ? "md:justify-start" : "md:justify-end"}`}
              >
                <div className="glass-card ml-10 w-full rounded-xl p-6 md:ml-0 md:w-[calc(50%-2rem)]">
                  <span className="text-sm text-primary">
                    {exp.startDate} — {exp.current ? "Present" : exp.endDate}
                  </span>
                  <h3 className="mt-1 text-lg font-semibold">{exp.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {exp.company} {exp.location && `• ${exp.location}`}
                  </p>
                  <p className="mt-3 text-sm text-muted-foreground">{exp.description}</p>
                </div>
                <div className="absolute left-2.5 top-6 h-4 w-4 rounded-full border-2 border-primary bg-background md:left-1/2 md:-translate-x-1/2" />
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
