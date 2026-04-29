import type { ExperienceItem } from "@/data/experience";

export function TimelineItem({ item, isLast }: { item: ExperienceItem; isLast?: boolean }) {
  return (
    <li className="relative pl-8">
      <span className="absolute left-0 top-2 inline-flex h-3 w-3 -translate-x-1/2 rounded-full bg-accent ring-4 ring-accent-soft" />
      {!isLast ? (
        <span className="absolute left-0 top-5 -translate-x-1/2 h-full w-px bg-line" />
      ) : null}
      <div className="flex flex-wrap items-baseline justify-between gap-x-4">
        <h3 className="text-base font-semibold text-ink">{item.role}</h3>
        <span className="text-xs text-ink-muted">
          {item.start} – {item.end}
        </span>
      </div>
      <p className="text-sm text-ink-soft">{item.company}</p>
      <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-ink-soft marker:text-accent">
        {item.bullets.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>
    </li>
  );
}
