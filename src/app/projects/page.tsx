import { PageCard, PageCardHeader } from "@/components/layout/page-card";
import { ProjectFilter } from "@/components/projects/project-filter";
import { CtaBanner } from "@/components/projects/cta-banner";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <PageCard>
      <PageCardHeader
        eyebrow="Projects"
        title={
          <>
            Things I&apos;ve built <span className="text-accent">·</span>
          </>
        }
        subtitle={`A collection of projects that showcase my skills and passion for building great software.`}
      />
      <ProjectFilter projects={projects} />
      <CtaBanner />
    </PageCard>
  );
}
