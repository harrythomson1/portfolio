import { notFound } from "next/navigation";
import { PageCard } from "@/components/layout/page-card";
import { ProjectDetail } from "@/components/projects/project-detail";
import { projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <PageCard>
      <ProjectDetail project={project} />
    </PageCard>
  );
}
