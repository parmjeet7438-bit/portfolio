"use client";

import { useEffect } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollEffects } from "@/components/layout/ScrollEffects";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { TrainingSection } from "@/components/sections/TrainingSection";
import { CertificationsSection } from "@/components/sections/CertificationsSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { EducationSection } from "@/components/sections/EducationSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { api } from "@/services/api";

export default function HomePage() {
  useEffect(() => {
    const id = window.setTimeout(() => {
      api("/portfolio/track/visit", { method: "POST" }).catch(() => {});
    }, 1000);
    return () => window.clearTimeout(id);
  }, []);

  return (
    <>
      <ScrollEffects />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <TrainingSection />
        <CertificationsSection />
        <ProjectsSection />
        <EducationSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
