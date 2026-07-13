"use client";

import { useEffect, useState } from "react";
import { motion } from "@/lib/motion";
import { Award, Download, ExternalLink } from "lucide-react";
import Image from "next/image";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Button } from "@/components/ui/button";
import { api } from "@/services/api";
import { FALLBACK_CERTIFICATIONS } from "@/lib/fallbackData";
import type { Certification } from "@/types";
import { fadeInUp, staggerContainer } from "@/animations/variants";

export function CertificationsSection() {
  const [certs, setCerts] = useState<Certification[]>([]);

  useEffect(() => {
    api<{ data: Certification[] }>("/certifications")
      .then((res) => setCerts(res.data))
      .catch(() => setCerts(FALLBACK_CERTIFICATIONS));
  }, []);

  return (
    <section id="certifications" className="section-padding">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeading
          subtitle="Certifications"
          title="Samsung Innovation Campus"
          description="Professional certifications and achievements"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className={
            certs.length === 1
              ? "mx-auto flex max-w-xl justify-center"
              : "grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          }
        >
          {certs.map((cert) => (
            <motion.div
              key={cert._id}
              variants={fadeInUp}
              whileHover={{ y: -4 }}
              className="glass-card glow-border group w-full overflow-hidden rounded-2xl transition-shadow hover:shadow-[0_0_24px_rgba(56,189,248,0.12)]"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-sky-950/40 via-slate-900/60 to-slate-950/80 p-3 sm:p-4">
                {cert.imageUrl ? (
                  <div className="relative h-full w-full overflow-hidden rounded-lg shadow-[0_8px_30px_rgba(0,0,0,0.35)] ring-1 ring-white/10">
                    <Image
                      src={cert.imageUrl}
                      alt={cert.title}
                      fill
                      className="object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                      sizes="(max-width: 768px) 100vw, 36rem"
                    />
                  </div>
                ) : (
                  <div className="flex h-full items-center justify-center">
                    <Award className="h-16 w-16 text-primary/50" />
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="mb-1 text-lg font-semibold">{cert.title}</h3>
                <p className="mb-2 text-sm text-primary">{cert.issuer}</p>
                <p className="mb-4 text-sm text-muted-foreground">{cert.description}</p>
                {cert.issueDate && (
                  <p className="mb-4 text-xs text-muted-foreground">
                    {cert.issueDate} — {cert.expiryDate || "Present"}
                  </p>
                )}
                <div className="flex flex-wrap gap-2">
                  {cert.imageUrl && (
                    <Button variant="outline" size="sm" className="gap-1" asChild>
                      <a href={cert.imageUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-3 w-3" /> View Certificate
                      </a>
                    </Button>
                  )}
                  {cert.pdfUrl && (
                    <Button variant="ghost" size="sm" className="gap-1" asChild>
                      <a href={cert.pdfUrl} download>
                        <Download className="h-3 w-3" /> Download
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
