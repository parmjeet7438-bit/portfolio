"use client";

import { useEffect, useState } from "react";
import { motion } from "@/lib/motion";
import { ExternalLink, GitBranch, Star } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { api } from "@/services/api";
import { FALLBACK_PROJECTS } from "@/lib/fallbackData";
import type { Project } from "@/types";
import { fadeInUp, staggerContainer } from "@/animations/variants";

export function ProjectsSection() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api<{ data: Project[] }>("/projects")
      .then((res) => {
        const fromApi = res.data?.filter(
          (p) => !/portfolio website/i.test(p.title)
        );
        setProjects(fromApi?.length ? fromApi : FALLBACK_PROJECTS);
      })
      .catch(() => setProjects(FALLBACK_PROJECTS))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section id="projects" className="section-padding">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeading subtitle="Projects" title="Featured Projects" description="Showcasing my best work" />

        {loading ? (
          <div className="grid gap-6 md:grid-cols-2">
            {Array.from({ length: 2 }).map((_, i) => (
              <Skeleton key={i} className="h-80" />
            ))}
          </div>
        ) : (
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-6 md:grid-cols-2"
          >
            {projects.map((project) => (
              <motion.div
                key={project._id}
                variants={fadeInUp}
                whileHover={{ y: -4 }}
                className="glass-card glow-border group overflow-hidden rounded-2xl transition-shadow hover:shadow-[0_0_24px_rgba(56,189,248,0.12)]"
              >
                <div className="relative aspect-video bg-gradient-to-br from-sky-950/30 to-slate-900/50">
                  {project.featured && (
                    <div className="absolute right-4 top-4 flex items-center gap-1 rounded-full bg-amber-500/20 px-3 py-1 text-xs text-amber-400">
                      <Star className="h-3 w-3" /> Featured
                    </div>
                  )}
                  <div className="flex h-full items-center justify-center text-4xl font-bold text-primary/30">
                    {project.title.charAt(0)}
                  </div>
                </div>
                <div className="p-6">
                  <div className="mb-2 flex items-center justify-between">
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                    <Badge className="capitalize">{project.status.replace("-", " ")}</Badge>
                  </div>
                  <p className="mb-4 text-sm text-muted-foreground">{project.description}</p>
                  <div className="mb-4 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    {project.githubUrl && (
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <GitBranch className="mr-1 h-3 w-3" /> Code
                        </a>
                      </Button>
                    )}
                    {project.liveUrl && (
                      <Button size="sm" asChild>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-1 h-3 w-3" /> Live Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}
