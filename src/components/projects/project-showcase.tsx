import { MediaSlot } from "@/components/ui/media-slot";
import { Icon } from "@/components/ui/icon";
import { BrandIcon, hasBrandIcon } from "@/components/ui/brand-icon";
import { DotGrid } from "@/components/ui/decorations";
import { TECH, type Tech } from "@/data/tech";
import type { Project } from "@/data/projects";

export function ProjectShowcase({ project }: { project: Project }) {
  if (project.videoSrc || project.imageSrc) {
    return (
      <MediaSlot
        videoSrc={project.videoSrc}
        imageSrc={project.imageSrc}
        alt={project.title}
        playbackRate={project.playbackRate ?? 1}
      />
    );
  }
  return <ProjectShowcaseFallback project={project} />;
}

function ProjectShowcaseFallback({ project }: { project: Project }) {
  const tint = project.iconColor;
  const techs = project.techStack.slice(0, 6);

  return (
    <div className="relative aspect-video overflow-hidden rounded-card ring-1 ring-line bg-surface">
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at 28% 20%, ${tint}26 0%, ${tint}0a 35%, transparent 65%), radial-gradient(circle at 80% 90%, ${tint}1a 0%, transparent 50%)`,
        }}
      />
      <DotGrid className="pointer-events-none absolute right-6 top-6 opacity-30" />
      <DotGrid className="pointer-events-none absolute bottom-6 left-6 opacity-25" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center gap-5 px-8 py-10 text-center">
        <span
          className="inline-flex h-16 w-16 items-center justify-center rounded-tile text-white"
          style={{
            backgroundColor: tint,
            boxShadow: `0 14px 32px -12px ${tint}cc`,
          }}
        >
          <Icon name={project.icon} className="h-7 w-7" />
        </span>

        {project.highlight ? (
          <div>
            <div
              className="text-5xl md:text-6xl font-bold tracking-tight"
              style={{ color: tint }}
            >
              {project.highlight.value}
            </div>
            <div className="mt-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-ink-soft">
              {project.highlight.label}
            </div>
          </div>
        ) : (
          <p className="max-w-md text-base text-ink leading-relaxed">
            {project.shortDescription}
          </p>
        )}

        <div className="mt-1 flex flex-wrap items-center justify-center gap-4">
          {techs.map((t) => {
            const tech: Tech = TECH[t];
            return hasBrandIcon(tech.slug) ? (
              <BrandIcon
                key={t}
                slug={tech.slug}
                size={22}
                title={tech.label}
                className="opacity-80 transition hover:opacity-100"
              />
            ) : (
              <span
                key={t}
                title={tech.label}
                className="inline-flex h-6 items-center justify-center rounded px-2 text-[10px] font-bold text-white"
                style={{ backgroundColor: tech.color }}
                aria-label={tech.label}
              >
                {tech.initial}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}
