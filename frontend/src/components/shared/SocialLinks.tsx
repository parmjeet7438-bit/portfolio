"use client";

import { GitBranch, Link2, Mail } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

const links = [
  { href: SITE_CONFIG.github, icon: GitBranch, label: "GitHub" },
  { href: SITE_CONFIG.linkedin, icon: Link2, label: "LinkedIn" },
  { href: `mailto:${SITE_CONFIG.email}`, icon: Mail, label: "Email" },
];

export function SocialLinks() {
  return (
    <div className="flex items-center gap-3">
      {links.map(({ href, icon: Icon, label }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-sky-500/20 bg-sky-500/5 text-muted-foreground transition-colors hover:border-sky-400/40 hover:text-accent"
        >
          <Icon className="h-4 w-4" />
        </a>
      ))}
    </div>
  );
}
