import { PageCard, PageCardHeader } from "@/components/layout/page-card";
import { SkillCategory } from "@/components/skills/skill-category";
import { skillCategories } from "@/data/skills";

export default function SkillsPage() {
  return (
    <PageCard>
      <PageCardHeader
        eyebrow="Skills"
        title={
          <>
            Technologies I work with <span className="text-accent">·</span>
          </>
        }
        subtitle="Here are the technologies and tools I use to build robust and scalable applications."
      />
      <div className="space-y-8">
        {skillCategories.map((c) => (
          <SkillCategory key={c.title} category={c} />
        ))}
      </div>
    </PageCard>
  );
}
