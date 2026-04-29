import { TileIcon } from "@/components/ui/tile-icon";
import { education } from "@/data/experience";

export function EducationSection() {
  return (
    <section className="mt-12">
      <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
        Education
      </h2>
      <div className="mt-5 space-y-3">
        {education.map((e) => (
          <div
            key={e.degree}
            className="flex items-start gap-4 rounded-card bg-surface ring-1 ring-line p-5"
          >
            <TileIcon name="graduation" color="#6c5ce7" />
            <div className="min-w-0 flex-1">
              <h3 className="text-base font-semibold text-ink">{e.degree}</h3>
              <p className="text-sm text-ink-soft">{e.school}</p>
              <p className="mt-1 text-xs text-ink-muted">
                {e.start} – {e.end} · {e.detail}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
