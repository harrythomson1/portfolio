import { PageCard } from "@/components/layout/page-card";
import { AboutIntro } from "@/components/about/about-intro";
import { WhatDrivesMe } from "@/components/about/what-drives-me";
import { EducationSection } from "@/components/about/education-section";

export default function AboutPage() {
  return (
    <PageCard>
      <AboutIntro />
      <WhatDrivesMe />
      <EducationSection />
    </PageCard>
  );
}
