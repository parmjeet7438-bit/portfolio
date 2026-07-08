"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Star, GitFork, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { getGitHubUser, getGitHubRepos } from "@/services/githubService";
import { SITE } from "@/lib/constants";
import type { GitHubRepo, GitHubUser } from "@/types";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { fadeInUp, staggerContainer } from "@/animations/variants";

export function GitHubSection() {
  const [user, setUser] = useState<GitHubUser | null>(null);
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([getGitHubUser(), getGitHubRepos()])
      .then(([u, r]) => {
        setUser(u);
        setRepos(r);
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  return (
    <section id="github" className="section-shell py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          label="Open Source"
          title="GitHub Activity"
          description="Public repositories and contributions"
        />

        {loading ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <Skeleton key={i} className="h-40" />
            ))}
          </div>
        ) : user ? (
          <>
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="glass-panel mb-10 flex flex-col items-center gap-6 rounded-2xl p-8 sm:flex-row"
            >
              <img
                src={user.avatar_url}
                alt={user.login}
                className="h-24 w-24 rounded-2xl border-2 border-primary/30"
              />
              <div className="flex-1 text-center sm:text-left">
                <h3 className="text-2xl font-bold">{user.name || user.login}</h3>
                <p className="mt-1 text-muted">@{user.login}</p>
                {user.bio && (
                  <p className="mt-2 text-sm text-muted">{user.bio}</p>
                )}
                <div className="mt-4 flex flex-wrap justify-center gap-4 sm:justify-start">
                  <span className="text-sm">
                    <strong className="text-foreground">{user.public_repos}</strong>{" "}
                    <span className="text-muted">repos</span>
                  </span>
                  <span className="text-sm">
                    <strong className="text-foreground">{user.followers}</strong>{" "}
                    <span className="text-muted">followers</span>
                  </span>
                  <span className="text-sm">
                    <strong className="text-foreground">{user.following}</strong>{" "}
                    <span className="text-muted">following</span>
                  </span>
                </div>
              </div>
              <Button variant="outline" asChild>
                <a href={SITE.github} target="_blank" rel="noopener noreferrer">
                  <FaGithub className="h-4 w-4" />
                  View Profile
                </a>
              </Button>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
            >
              {repos.map((repo) => (
                <motion.div
                  key={repo.id}
                  variants={fadeInUp}
                  whileHover={{ y: -4 }}
                  className="glass-panel group flex flex-col rounded-2xl p-6 transition-all hover:border-primary/20"
                >
                  <div className="mb-2 flex items-start justify-between">
                    <h4 className="font-semibold text-primary">{repo.name}</h4>
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted hover:text-foreground"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                  <p className="mb-4 flex-1 text-sm text-muted line-clamp-2">
                    {repo.description || "No description"}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-muted">
                    {repo.language && (
                      <span className="flex items-center gap-1">
                        <span className="h-2.5 w-2.5 rounded-full bg-accent" />
                        {repo.language}
                      </span>
                    )}
                    <span className="flex items-center gap-1">
                      <Star className="h-3.5 w-3.5" />
                      {repo.stargazers_count}
                    </span>
                    <span className="flex items-center gap-1">
                      <GitFork className="h-3.5 w-3.5" />
                      {repo.forks_count}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </>
        ) : (
          <p className="text-center text-muted">Unable to load GitHub data.</p>
        )}
      </div>
    </section>
  );
}
