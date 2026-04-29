import Link from "next/link";
import { ProjectCard } from "@/components/projects/project-card";
import { Icon } from "@/components/ui/icon";
import { projects } from "@/data/projects";

export function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured).slice(0, 3);

  return (
    <section className="mt-16">
      <div className="flex items-end justify-between">
        <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
          Featured projects
        </h2>
        <Link
          href="/projects"
          className="inline-flex items-center gap-1 text-sm font-medium text-ink-soft hover:text-ink"
        >
          View all projects
          <Icon name="arrow-right" className="h-3.5 w-3.5" />
        </Link>
      </div>
      <div className="mt-5 grid gap-4 md:grid-cols-3">
        {featured.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </section>
  );
}
