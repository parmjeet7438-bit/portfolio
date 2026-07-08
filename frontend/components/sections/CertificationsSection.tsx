"use client";

import { motion } from "framer-motion";
import { Download, ExternalLink, Calendar, BookOpen, Building2 } from "lucide-react";
import Image from "next/image";
import type { Certification } from "@/types";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Button } from "@/components/ui/button";
import { fadeInUp, staggerContainer } from "@/animations/variants";

interface CertificationsSectionProps {
  certifications: Certification[];
}

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export function CertificationsSection({
  certifications,
}: CertificationsSectionProps) {
  return (
    <section id="certifications" className="section-shell py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          label="Achievements"
          title="Certifications"
          description="Professional certifications and achievements"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-1 lg:max-w-3xl lg:mx-auto"
        >
          {certifications.map((cert) => (
            <motion.div
              key={cert._id}
              variants={fadeInUp}
              whileHover={{ y: -4 }}
              className="group glass-panel overflow-hidden rounded-2xl transition-all hover:border-primary/20"
            >
              <div className="grid gap-6 p-6 md:grid-cols-[220px_1fr] md:items-start">
                <div className="relative mx-auto w-full max-w-[220px] md:mx-0">
                  <div className="rounded-xl bg-gradient-to-br from-primary/70 via-accent/50 to-primary/70 p-[2.5px] shadow-lg shadow-primary/15 transition-all duration-300 group-hover:shadow-xl group-hover:shadow-primary/25">
                    <div className="rounded-[10px] bg-white p-1.5 shadow-inner ring-1 ring-black/5 dark:ring-white/10">
                      <div className="relative aspect-[1024/729] overflow-hidden rounded-md">
                        <Image
                          src={cert.imageUrl}
                          alt={cert.name}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                          sizes="220px"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="mb-1 text-xs font-medium uppercase tracking-wider text-primary">
                    {cert.issuer}
                  </div>
                  <h3 className="text-xl font-bold">{cert.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {cert.description}
                  </p>

                  <div className="mt-3 flex flex-col gap-1.5 text-sm text-muted">
                    {cert.courseName && (
                      <span className="flex items-center gap-2">
                        <BookOpen className="h-3.5 w-3.5 shrink-0 text-primary" />
                        Course: {cert.courseName}
                      </span>
                    )}
                    {cert.programStartDate && cert.programEndDate && (
                      <span className="flex items-center gap-2">
                        <Calendar className="h-3.5 w-3.5 shrink-0 text-primary" />
                        {formatDate(cert.programStartDate)} –{" "}
                        {formatDate(cert.programEndDate)}
                      </span>
                    )}
                    {cert.affiliation && (
                      <span className="flex items-center gap-2">
                        <Building2 className="h-3.5 w-3.5 shrink-0 text-primary" />
                        In partnership with {cert.affiliation}
                      </span>
                    )}
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    <Button variant="default" size="sm" asChild>
                      <a
                        href={cert.certificateUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        View Certificate
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <a href={cert.downloadUrl} download>
                        <Download className="h-4 w-4" />
                        Download
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
