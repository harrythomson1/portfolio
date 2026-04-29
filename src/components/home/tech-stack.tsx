import { TechBadge } from "@/components/ui/tech-badge";
import { TECH, type TechKey } from "@/data/tech";

const STACK: TechKey[] = ["rails", "react", "typescript", "fastapi", "python", "postgresql"];

export function TechStack() {
  return (
    <section className="mt-16">
      <h2 className="text-sm font-semibold text-ink-soft">Tech I work with:</h2>
      <div className="mt-4 flex flex-wrap gap-2.5">
        {STACK.map((key) => (
          <TechBadge key={key} tech={TECH[key]} />
        ))}
      </div>
    </section>
  );
}
