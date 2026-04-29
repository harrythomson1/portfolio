import Link from "next/link";
import { Icon } from "@/components/ui/icon";
import { TechBadge } from "@/components/ui/tech-badge";
import { ProjectMeta } from "./project-meta";
import { ProjectShowcase } from "./project-showcase";
import { TECH } from "@/data/tech";
import type { Project } from "@/data/projects";

export function ProjectDetail({ project }: { project: Project }) {
  return (
    <div>
      <Link
        href="/projects"
        className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-soft hover:text-ink"
      >
        <Icon name="arrow-left" className="h-4 w-4" /> Back to projects
      </Link>

      <header className="mt-6">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-ink leading-tight">
          {project.title} <span className="text-accent">·</span>
        </h1>
        <p className="mt-3 max-w-2xl text-base text-ink-soft">{project.longDescription}</p>
      </header>

      <div className="mt-8">
        <ProjectMeta project={project} />
      </div>

      <div className="mt-8">
        <ProjectShowcase project={project} />
      </div>

      <section className="mt-10">
        <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
          Technologies used
        </h2>
        <div className="mt-3 flex flex-wrap gap-2">
          {project.techStack.map((t) => (
            <TechBadge key={t} tech={TECH[t]} />
          ))}
        </div>
      </section>

      <div className="mt-10 grid gap-8 md:grid-cols-2">
        <section>
          <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            Key features
          </h2>
          <ul className="mt-3 space-y-2.5">
            {project.features.map((f) => (
              <li key={f} className="flex items-start gap-3 text-sm text-ink">
                <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent-soft text-accent">
                  <Icon name="check" className="h-3 w-3" />
                </span>
                {f}
              </li>
            ))}
          </ul>
        </section>
        <section>
          <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            What I learned
          </h2>
          <p className="mt-3 text-sm text-ink-soft leading-relaxed">{project.learnings}</p>
        </section>
      </div>
    </div>
  );
}
