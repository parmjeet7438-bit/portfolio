import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { CertificationsSection } from "@/components/sections/CertificationsSection";
import { GitHubSection } from "@/components/sections/GitHubSection";
import { fetchPortfolioData } from "@/lib/fetchData";

export default async function HomePage() {
  const { projects, certifications, experiences, portfolio } =
    await fetchPortfolioData();

  return (
    <>
      <HeroSection />
      <AboutSection portfolio={portfolio} />
      <ExperienceSection experiences={experiences} />
      <ProjectsSection projects={projects} />
      <CertificationsSection certifications={certifications} />
      <GitHubSection />
    </>
  );
}
