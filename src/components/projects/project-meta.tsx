import { Icon } from "@/components/ui/icon";
import type { Project } from "@/data/projects";

function MetaCell({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="text-xs font-medium uppercase tracking-wider text-ink-muted">
        {label}
      </div>
      <div className="mt-1 text-sm font-medium text-ink">{children}</div>
    </div>
  );
}

export function ProjectMeta({ project }: { project: Project }) {
  return (
    <div className="grid gap-6 border-y border-line py-6 md:grid-cols-3">
      <MetaCell label="Role">{project.role}</MetaCell>
      <MetaCell label="Duration">{project.duration}</MetaCell>
      <MetaCell label="GitHub">
        {project.repoUrl ? (
          <div className="flex flex-col gap-1">
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-accent hover:underline"
            >
              {project.repoUrlBackend ? "Frontend" : "View Code"}
              <Icon name="external" className="h-3.5 w-3.5" />
            </a>
            {project.repoUrlBackend && (
              <a
                href={project.repoUrlBackend}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-accent hover:underline"
              >
                Backend <Icon name="external" className="h-3.5 w-3.5" />
              </a>
            )}
          </div>
        ) : (
          <span className="text-ink-muted">—</span>
        )}
      </MetaCell>
    </div>
  );
}
