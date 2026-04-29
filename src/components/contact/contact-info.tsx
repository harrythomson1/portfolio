import { TileIcon } from "@/components/ui/tile-icon";
import type { IconName } from "@/components/ui/icon";
import { site } from "@/data/site";

type Row = {
  icon: IconName;
  color: string;
  label: string;
  value: string;
  href?: string;
};

const ROWS: Row[] = [
  {
    icon: "mail",
    color: "#6c5ce7",
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
  },
  {
    icon: "linkedin",
    color: "#0a66c2",
    label: "LinkedIn",
    value: site.links.linkedin.label,
    href: site.links.linkedin.href,
  },
  {
    icon: "github",
    color: "#181717",
    label: "GitHub",
    value: site.links.github.label,
    href: site.links.github.href,
  },
  {
    icon: "map-pin",
    color: "#22c55e",
    label: "Location",
    value: site.location,
  },
];

export function ContactInfo() {
  return (
    <ul className="space-y-3">
      {ROWS.map((row) => {
        const inner = (
          <>
            <TileIcon name={row.icon} color={row.color} />
            <div className="min-w-0">
              <div className="text-xs uppercase tracking-wider text-ink-muted">
                {row.label}
              </div>
              <div className="text-sm font-medium text-ink truncate">{row.value}</div>
            </div>
          </>
        );
        return (
          <li key={row.label}>
            {row.href ? (
              <a
                href={row.href}
                target={row.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="flex items-center gap-4 rounded-card bg-surface ring-1 ring-line p-4 transition hover:ring-accent/40"
              >
                {inner}
              </a>
            ) : (
              <div className="flex items-center gap-4 rounded-card bg-surface ring-1 ring-line p-4">
                {inner}
              </div>
            )}
          </li>
        );
      })}
    </ul>
  );
}
