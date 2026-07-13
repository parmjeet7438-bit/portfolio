"use client";

import { useEffect, useState } from "react";
import { motion } from "@/lib/motion";
import { GitBranch, Star } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { SITE_CONFIG } from "@/lib/constants";
import type { GitHubRepo } from "@/types";
import { fadeInUp, staggerContainer } from "@/animations/variants";

export function GitHubSection() {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.github.com/users/parmjeet7438-bit/repos?sort=updated&per_page=6")
      .then((r) => r.json())
      .then((data) => {
        if (Array.isArray(data)) setRepos(data);
      })
      .catch(() => setRepos([]))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section id="github" className="section-padding">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeading
          subtitle="GitHub"
          title="Open Source Activity"
          description="Recent repositories and contributions"
        />

        {loading ? (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 3 }).map((_, i) => (
              <Skeleton key={i} className="h-40" />
            ))}
          </div>
        ) : repos.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl p-8 text-center"
          >
            <p className="mb-4 text-muted-foreground">View my GitHub profile for repositories and activity.</p>
            <Button asChild>
              <a href={SITE_CONFIG.github} target="_blank" rel="noopener noreferrer">
                Visit GitHub Profile
              </a>
            </Button>
          </motion.div>
        ) : (
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          >
            {repos.map((repo) => (
              <motion.a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                variants={fadeInUp}
                whileHover={{ y: -4 }}
                className="glass-card block rounded-xl p-5 transition-all hover:border-primary/40"
              >
                <div className="mb-2 flex items-center gap-2">
                  <GitBranch className="h-4 w-4 text-primary" />
                  <span className="font-medium">{repo.name}</span>
                </div>
                <p className="mb-3 line-clamp-2 text-sm text-muted-foreground">
                  {repo.description || "No description"}
                </p>
                <div className="flex items-center gap-3">
                  {repo.language && <Badge className="text-xs">{repo.language}</Badge>}
                  <span className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Star className="h-3 w-3" /> {repo.stargazers_count}
                  </span>
                </div>
              </motion.a>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}
