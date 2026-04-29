import { PageCard, PageCardHeader } from "@/components/layout/page-card";
import { TimelineItem } from "@/components/experience/timeline-item";
import { experience } from "@/data/experience";

export default function ExperiencePage() {
  return (
    <PageCard>
      <PageCardHeader
        eyebrow="Experience"
        title={
          <>
            My professional journey <span className="text-accent">·</span>
          </>
        }
        subtitle="A summary of my work experience and the impact I've made."
      />
      <ol className="space-y-10">
        {experience.map((item, i) => (
          <TimelineItem
            key={item.role + item.company}
            item={item}
            isLast={i === experience.length - 1}
          />
        ))}
      </ol>
    </PageCard>
  );
}
