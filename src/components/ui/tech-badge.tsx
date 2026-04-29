import type { Tech } from "@/data/tech";
import { BrandIcon, hasBrandIcon } from "./brand-icon";

type Size = "sm" | "md";

type Props = {
  tech: Tech;
  size?: Size;
  className?: string;
};

const SIZES: Record<
  Size,
  { wrap: string; chip: string; text: string; logo: number }
> = {
  sm: {
    wrap: "px-2.5 py-1 gap-1.5",
    chip: "h-4 w-4 text-[10px]",
    text: "text-xs",
    logo: 14,
  },
  md: {
    wrap: "px-3 py-2 gap-2",
    chip: "h-5 w-5 text-[11px]",
    text: "text-sm",
    logo: 16,
  },
};

export function TechBadge({ tech, size = "md", className = "" }: Props) {
  const s = SIZES[size];

  return (
    <span
      className={`inline-flex items-center rounded-pill bg-surface-soft text-ink ring-1 ring-line ${s.wrap} ${s.text} ${className}`}
    >
      {hasBrandIcon(tech.slug) ? (
        <BrandIcon slug={tech.slug} size={s.logo} title={tech.label} />
      ) : (
        <span
          className={`inline-flex items-center justify-center rounded-md font-bold text-white ${s.chip}`}
          style={{ backgroundColor: tech.color }}
          aria-hidden
        >
          {tech.initial}
        </span>
      )}
      <span className="font-medium">{tech.label}</span>
    </span>
  );
}
