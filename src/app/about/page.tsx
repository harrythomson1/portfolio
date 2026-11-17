import { PageCard } from "@/components/layout/page-card";
import { AboutIntro } from "@/components/about/about-intro";
import { WhatDrivesMe } from "@/components/about/what-drives-me";
import { EducationSection } from "@/components/about/education-section";

export default function AboutPage() {
  return (
    <PageCard>
      <AboutIntro />
      <WhatDrivesMe />
      <EducationSection />
      <section aria-labelledby="recommendation-heading" className="mt-12">
        <h2
          id="recommendation-heading"
          className="text-xs font-semibold uppercase tracking-[0.18em] text-accent"
        >
          A personal recommendation
        </h2>
        <div className="mt-5 rounded-card bg-surface-soft p-6 ring-1 ring-line sm:p-8">
          <h3 className="text-lg font-semibold text-ink">Helms Psychology</h3>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-soft">
            I&apos;ve worked with Katharina Helms for psychological support, and
            she has helped me a lot. I&apos;m grateful for her support and happy
            to recommend her practice.
          </p>
          <a
            href="https://helmspsychology.com/en"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex rounded-sm text-sm font-semibold text-accent underline underline-offset-4 hover:text-accent-strong focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          >
            Visit Helms Psychology
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </div>
      </section>
    </PageCard>
  );
}
