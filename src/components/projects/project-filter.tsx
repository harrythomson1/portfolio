"use client";

import { useState } from "react";
import { ProjectListItem } from "./project-list-item";
import { PROJECT_CATEGORIES, type Project, type ProjectCategory } from "@/data/projects";

type Filter = "All" | ProjectCategory;

export function ProjectFilter({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState<Filter>("All");

  const visible =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <div>
      <div role="tablist" className="inline-flex flex-wrap gap-1 rounded-pill bg-surface-soft p-1 ring-1 ring-line">
        {PROJECT_CATEGORIES.map((cat) => {
          const isActive = active === cat;
          return (
            <button
              key={cat}
              role="tab"
              aria-selected={isActive}
              onClick={() => setActive(cat)}
              className={
                "rounded-pill px-4 py-1.5 text-sm font-medium transition-colors " +
                (isActive
                  ? "bg-accent text-white shadow-sm"
                  : "text-ink-soft hover:text-ink")
              }
            >
              {cat}
            </button>
          );
        })}
      </div>

      <div className="mt-6 space-y-3">
        {visible.map((p) => (
          <ProjectListItem key={p.slug} project={p} />
        ))}
      </div>
    </div>
  );
}
