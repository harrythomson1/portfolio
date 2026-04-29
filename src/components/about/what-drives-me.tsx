import { TileIcon } from "@/components/ui/tile-icon";
import type { IconName } from "@/components/ui/icon";

type Drive = {
  icon: IconName;
  color: string;
  title: string;
  body: string;
};

const DRIVES: Drive[] = [
  {
    icon: "puzzle",
    color: "#6c5ce7",
    title: "Solve Problems",
    body: "I enjoy tackling complex problems and finding efficient solutions.",
  },
  {
    icon: "lightbulb",
    color: "#f59e0b",
    title: "Build Impactful Things",
    body: "I love building products that solve real user problems.",
  },
  {
    icon: "sparkles",
    color: "#22c55e",
    title: "Keep Learning",
    body: "I'm always learning new technologies and improving my skills.",
  },
];

export function WhatDrivesMe() {
  return (
    <section className="mt-14">
      <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
        What drives me
      </h2>
      <div className="mt-5 grid gap-4 md:grid-cols-3">
        {DRIVES.map((d) => (
          <div
            key={d.title}
            className="rounded-card bg-surface ring-1 ring-line p-6"
          >
            <TileIcon name={d.icon} color={d.color} />
            <h3 className="mt-4 text-base font-semibold text-ink">{d.title}</h3>
            <p className="mt-1 text-sm text-ink-soft">{d.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
