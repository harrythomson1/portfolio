import Link from "next/link";
import { TechBadge } from "@/components/ui/tech-badge";
import { TileIcon } from "@/components/ui/tile-icon";
import { TECH } from "@/data/tech";
import type { Project } from "@/data/projects";

type Props = {
  project: Project;
  /** Cap how many tech badges to show on the card. */
  techLimit?: number;
};

export function ProjectCard({ project, techLimit = 3 }: Props) {
  const techs = project.techStack.slice(0, techLimit);

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block rounded-card bg-surface ring-1 ring-line p-5 transition hover:ring-accent/40 hover:-translate-y-0.5"
    >
      <TileIcon name={project.icon} color={project.iconColor} />
      <h3 className="mt-4 text-base font-semibold text-ink">{project.title}</h3>
      <p className="mt-1 text-sm text-ink-soft line-clamp-2">{project.shortDescription}</p>
      <div className="mt-4 flex flex-wrap gap-1.5">
        {techs.map((t) => (
          <TechBadge key={t} tech={TECH[t]} size="sm" />
        ))}
      </div>
    </Link>
  );
}
