"use client";

import { motion } from "@/lib/motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  subtitle: string;
  title: string;
  description?: string;
  className?: string;
}

export function SectionHeading({ subtitle, title, description, className }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className={cn("mb-10 text-center md:mb-12", className)}
    >
      <span className="section-badge mb-4">{subtitle}</span>
      <h2 className="heading-lg">{title}</h2>
      <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-transparent via-sky-400 to-transparent" />
      {description && (
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground md:mt-5 md:text-base">
          {description}
        </p>
      )}
    </motion.div>
  );
}
