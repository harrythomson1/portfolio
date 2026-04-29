import { PageCard } from "@/components/layout/page-card";
import { Hero } from "@/components/home/hero";
import { TechStack } from "@/components/home/tech-stack";
import { FeaturedProjects } from "@/components/home/featured-projects";

export default function Home() {
  return (
    <PageCard>
      <Hero />
      <TechStack />
      <FeaturedProjects />
    </PageCard>
  );
}
