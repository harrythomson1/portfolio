import { TechBadge } from "@/components/ui/tech-badge";
import { TECH } from "@/data/tech";
import type { SkillCategory as SkillCategoryType } from "@/data/skills";

export function SkillCategory({ category }: { category: SkillCategoryType }) {
  return (
    <div>
      <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-muted">
        {category.title}
      </h3>
      <div className="mt-3 flex flex-wrap gap-2">
        {category.items.map((key) => (
          <TechBadge key={key} tech={TECH[key]} />
        ))}
      </div>
    </div>
  );
}
