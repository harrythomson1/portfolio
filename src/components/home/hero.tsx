import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { AvatarSlot } from "@/components/ui/avatar-slot";
import { Squiggle } from "@/components/ui/decorations";
import { site } from "@/data/site";

export function Hero() {
  return (
    <section className="grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:gap-12 items-center">
      <div>
        <div className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
          {site.role}
        </div>
        <h1 className="text-5xl md:text-6xl font-bold leading-[1.05] tracking-tight">
          Hi, I&apos;m
          <br />
          <span className="text-accent">{site.name}.</span>
        </h1>
        <p className="mt-6 max-w-md text-base text-ink-soft">
          Full stack engineer with 4+ years of production experience across Rails systems,
          Python APIs and React with TypeScript frontends.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Button href="/projects">
            View My Work
            <Icon name="arrow-right" className="h-4 w-4" />
          </Button>
          <Button href={site.resumeUrl} variant="secondary">
            <Icon name="download" className="h-4 w-4" />
            Download Resume
          </Button>
          <Squiggle className="ml-1 hidden md:block" />
        </div>
      </div>
      <div className="flex justify-center md:justify-end">
        <AvatarSlot
          rounded="card"
          className="aspect-[3/4] w-full max-w-[320px]"
        />
      </div>
    </section>
  );
}
