"use client";

import { motion } from "framer-motion";
import { BookOpen, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import type { Experience } from "@/types";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Badge } from "@/components/ui/badge";
import { fadeInUp, staggerContainer, scaleIn } from "@/animations/variants";

interface ExperienceSectionProps {
  experiences: Experience[];
}

type ExperienceImage = NonNullable<Experience["images"]>[number];

function ExperienceImageFrame({
  src,
  alt,
  layout,
  index,
  featured = false,
}: {
  src: string;
  alt: string;
  layout: "landscape" | "portrait";
  index: number;
  featured?: boolean;
}) {
  return (
    <motion.div
      variants={scaleIn}
      custom={index}
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
      className="group relative"
    >
      <div className="overflow-hidden rounded-2xl bg-gradient-to-br from-primary/70 via-accent/50 to-primary/70 p-[2.5px] shadow-lg shadow-primary/10 transition-shadow duration-500 group-hover:shadow-xl group-hover:shadow-primary/25">
        <div className="rounded-[14px] bg-surface/80 p-1.5 ring-1 ring-border/60">
          <div
            className={`relative overflow-hidden rounded-xl ${
              featured
                ? layout === "portrait"
                  ? "aspect-[3/4] min-h-[320px]"
                  : "aspect-[16/10] min-h-[220px]"
                : layout === "portrait"
                  ? "aspect-[3/4]"
                  : "aspect-[4/3]"
            }`}
          >
            <Image
              src={src}
              alt={alt}
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              sizes={
                featured
                  ? "(max-width: 768px) 85vw, 420px"
                  : "(max-width: 768px) 70vw, 280px"
              }
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function TrainingGallery({
  images,
  side,
}: {
  images: ExperienceImage[];
  side: "left" | "right";
}) {
  const [featured, ...rest] = images;

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      className={`space-y-4 ${side === "right" ? "md:pl-4" : "md:pr-4"}`}
    >
      <motion.p
        variants={fadeInUp}
        className="label-mono text-primary md:text-left"
      >
        Training Highlights
      </motion.p>

      {featured && (
        <ExperienceImageFrame
          src={featured.url}
          alt={featured.alt}
          layout={featured.layout}
          index={0}
          featured
        />
      )}

      {rest.length > 0 && (
        <div className="grid grid-cols-2 gap-4">
          {rest.map((image, i) => (
            <div
              key={image.url}
              className={
                image.layout === "portrait" ? "col-span-2 mx-auto w-full max-w-[240px]" : ""
              }
            >
              <ExperienceImageFrame
                src={image.url}
                alt={image.alt}
                layout={image.layout}
                index={i + 1}
                featured={image.layout === "portrait"}
              />
            </div>
          ))}
        </div>
      )}
    </motion.div>
  );
}

function MobileTrainingGallery({ images }: { images: ExperienceImage[] }) {
  return (
    <div className="mt-6 md:hidden">
      <p className="label-mono mb-4 text-primary">Training Highlights</p>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        className="-mx-2 flex snap-x snap-mandatory gap-4 overflow-x-auto px-2 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {images.map((image, index) => (
          <motion.div
            key={image.url}
            variants={fadeInUp}
            className="w-[88vw] max-w-[360px] shrink-0 snap-center"
          >
            <ExperienceImageFrame
              src={image.url}
              alt={image.alt}
              layout={image.layout}
              index={index}
              featured
            />
          </motion.div>
        ))}
      </motion.div>
      <p className="text-center text-xs text-muted">Swipe to explore →</p>
    </div>
  );
}

export function ExperienceSection({ experiences }: ExperienceSectionProps) {
  return (
    <section id="experience" className="section-shell py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          label="Experience"
          title="My Journey"
          description="Professional training and learning experiences"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="relative mx-auto max-w-5xl"
        >
          <div className="absolute left-6 top-0 h-full w-px bg-gradient-to-b from-primary via-accent to-transparent md:left-1/2 md:-translate-x-px" />

          {experiences.map((exp, index) => {
            const hasImages = Boolean(exp.images && exp.images.length > 0);
            const galleryOnLeft = index % 2 === 0;

            return (
              <motion.div
                key={exp._id}
                variants={fadeInUp}
                className={`relative mb-16 flex flex-col gap-8 md:mb-20 md:flex-row md:gap-0 ${
                  galleryOnLeft ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="hidden md:flex md:w-1/2 md:items-center">
                  {hasImages && exp.images && (
                    <TrainingGallery
                      images={exp.images}
                      side={galleryOnLeft ? "left" : "right"}
                    />
                  )}
                </div>

                <div
                  className={`w-full md:w-1/2 ${
                    galleryOnLeft ? "md:pr-12 md:text-right" : "md:pl-12"
                  }`}
                >
                  <div className="glass-panel group relative rounded-2xl p-6 transition-all hover:border-primary/20 md:p-8">
                    <div
                      className={`absolute top-6 flex h-4 w-4 items-center justify-center md:top-8 ${
                        galleryOnLeft
                          ? "md:-right-[calc(2rem+0.5rem)]"
                          : "md:-left-[calc(2rem+0.5rem)]"
                      } left-4 md:left-auto md:right-auto`}
                    >
                      <span
                        className={`absolute h-4 w-4 rounded-full ${
                          exp.status === "current"
                            ? "animate-ping bg-primary/40"
                            : ""
                        }`}
                      />
                      <span
                        className={`relative h-3 w-3 rounded-full border-2 border-background ${
                          exp.status === "current" ? "bg-primary" : "bg-muted"
                        }`}
                      />
                    </div>

                    <div
                      className={`mb-3 flex flex-wrap items-center gap-2 ${
                        galleryOnLeft ? "md:justify-end" : "md:justify-start"
                      }`}
                    >
                      {exp.status === "current" && (
                        <Badge className="border-green-500/30 bg-green-500/10 text-green-500">
                          Current
                        </Badge>
                      )}
                      {exp.currentLevel && (
                        <Badge variant="secondary">{exp.currentLevel}</Badge>
                      )}
                    </div>

                    <h3 className="text-xl font-bold md:text-2xl">{exp.title}</h3>
                    {exp.organization && (
                      <p className="mt-1 text-sm text-muted md:text-base">
                        {exp.organization}
                      </p>
                    )}
                    <p className="mt-3 text-sm leading-relaxed text-muted md:text-base">
                      {exp.description}
                    </p>

                    {hasImages && exp.images && (
                      <MobileTrainingGallery images={exp.images} />
                    )}

                    {exp.learning.length > 0 && (
                      <div className="mt-4 md:mt-6">
                        <div
                          className={`mb-2 flex items-center gap-2 text-sm font-medium ${
                            galleryOnLeft ? "md:justify-end" : ""
                          }`}
                        >
                          <BookOpen className="h-4 w-4 text-primary" />
                          Learning
                        </div>
                        <ul
                          className={`space-y-1.5 ${
                            galleryOnLeft ? "md:text-right" : ""
                          }`}
                        >
                          {exp.learning.map((item) => (
                            <li
                              key={item}
                              className={`flex items-center gap-2 text-sm text-muted ${
                                galleryOnLeft ? "md:justify-end" : ""
                              }`}
                            >
                              <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-accent" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
