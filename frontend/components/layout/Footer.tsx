import { SITE } from "@/lib/constants";
import { SocialLinks } from "@/components/shared/SocialLinks";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface/30 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 text-center md:px-6">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent text-sm font-bold text-white">
          SK
        </div>
        <p className="text-sm text-muted">
          © {new Date().getFullYear()} Satnam Kumar. Built with Next.js & Express.
        </p>
        <SocialLinks github={SITE.github} />
      </div>
    </footer>
  );
}
