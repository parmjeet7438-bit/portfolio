"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "@/lib/motion";
import { Code2, Database, Layout, Server, Wrench } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Skeleton } from "@/components/ui/skeleton";
import { api } from "@/services/api";
import { FALLBACK_SKILLS } from "@/lib/fallbackData";
import type { Skill } from "@/types";
import { fadeInUp, staggerContainer } from "@/animations/variants";

const CATEGORY_META: Record<string, { icon: typeof Code2; blurb: string }> = {
  "Programming Languages": {
    icon: Code2,
    blurb: "Core languages I use to build applications",
  },
  Frontend: {
    icon: Layout,
    blurb: "Interfaces, components, and modern UI tooling",
  },
  Backend: {
    icon: Server,
    blurb: "APIs, services, and server-side architecture",
  },
  Database: {
    icon: Database,
    blurb: "Data modeling and persistence",
  },
  "Developer Tools": {
    icon: Wrench,
    blurb: "Workflow, version control, and productivity",
  },
};

const CATEGORY_ORDER = [
  "Programming Languages",
  "Frontend",
  "Backend",
  "Database",
  "Developer Tools",
];

export function SkillsSection() {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api<{ data: Skill[] }>("/skills")
      .then((res) => setSkills(res.data?.length ? res.data : FALLBACK_SKILLS))
      .catch(() => setSkills(FALLBACK_SKILLS))
      .finally(() => setLoading(false));
  }, []);

  const grouped = useMemo(() => {
    const map = new Map<string, Skill[]>();
    for (const skill of skills) {
      const list = map.get(skill.category) ?? [];
      list.push(skill);
      map.set(skill.category, list);
    }

    const ordered = CATEGORY_ORDER.filter((c) => map.has(c)).map((category) => ({
      category,
      skills: (map.get(category) ?? []).sort((a, b) => a.order - b.order || a.name.localeCompare(b.name)),
    }));

    for (const [category, list] of map) {
      if (!CATEGORY_ORDER.includes(category)) {
        ordered.push({
          category,
          skills: [...list].sort((a, b) => a.order - b.order || a.name.localeCompare(b.name)),
        });
      }
    }

    return ordered;
  }, [skills]);

  return (
    <section id="skills" className="section-padding">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeading
          subtitle="Skills"
          title="Technical Expertise"
          description="A focused stack across languages, frontend, backend, and tools"
        />

        {loading ? (
          <div className="grid gap-5 md:grid-cols-2">
            {Array.from({ length: 4 }).map((_, i) => (
              <Skeleton key={i} className="h-44 rounded-2xl" />
            ))}
          </div>
        ) : (
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid gap-5 md:grid-cols-2"
          >
            {grouped.map(({ category, skills: items }) => {
              const meta = CATEGORY_META[category];
              const Icon = meta?.icon ?? Code2;

              return (
                <motion.div
                  key={category}
                  variants={fadeInUp}
                  className="glass-card glow-border rounded-2xl p-6 transition-shadow hover:shadow-[0_0_28px_rgba(56,189,248,0.1)]"
                >
                  <div className="mb-5 flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sky-500/10 text-sky-400">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold tracking-tight">{category}</h3>
                      <p className="mt-0.5 text-sm text-muted-foreground">
                        {meta?.blurb ?? "Technologies I work with"}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <span
                        key={skill._id}
                        className="rounded-lg border border-sky-500/20 bg-sky-500/[0.06] px-3 py-1.5 text-sm text-foreground/90 transition-colors hover:border-sky-400/40 hover:bg-sky-500/10"
                      >
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </div>
    </section>
  );
}
