import Link from "next/link";
import { TileIcon } from "@/components/ui/tile-icon";
import { TechBadge } from "@/components/ui/tech-badge";
import { Icon } from "@/components/ui/icon";
import { TECH } from "@/data/tech";
import type { Project } from "@/data/projects";

export function ProjectListItem({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group flex items-center gap-5 rounded-card bg-surface ring-1 ring-line p-5 transition hover:ring-accent/40"
    >
      <TileIcon name={project.icon} color={project.iconColor} />
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <h3 className="text-base font-semibold text-ink">{project.title}</h3>
        </div>
        <p className="mt-1 text-sm text-ink-soft">{project.shortDescription}</p>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {project.techStack.slice(0, 4).map((t) => (
            <TechBadge key={t} tech={TECH[t]} size="sm" />
          ))}
        </div>
      </div>
      <Icon
        name="arrow-right"
        className="h-5 w-5 text-ink-muted transition group-hover:text-accent group-hover:translate-x-0.5"
      />
    </Link>
  );
}
