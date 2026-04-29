import { Icon } from "@/components/ui/icon";
import { AvatarSlot } from "@/components/ui/avatar-slot";
import { site } from "@/data/site";

export function AboutIntro() {
  return (
    <section className="grid gap-10 md:grid-cols-[1.2fr_0.8fr] md:gap-14 items-start">
      <div>
        <div className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
          About me
        </div>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight">
          I write code that ships to production and keeps working.
        </h1>
        <p className="mt-6 max-w-xl text-base text-ink-soft">
          I&apos;m a {site.role} with over 4 years of production experience across high-traffic
          Rails systems, Python APIs and React with TypeScript frontends. I&apos;m currently
          seeking a mid-level engineering role.
        </p>

        <ul className="mt-8 space-y-3 text-sm">
          <li className="flex items-center gap-3 text-ink">
            <Icon name="map-pin" className="h-4 w-4 text-accent" />
            {site.location}
          </li>
          <li className="flex items-center gap-3 text-ink-soft">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />
            {site.available}
          </li>
          <li className="flex items-center gap-3 text-ink">
            <Icon name="mail" className="h-4 w-4 text-accent" />
            <a className="hover:underline" href={`mailto:${site.email}`}>
              {site.email}
            </a>
          </li>
          <li className="flex items-center gap-3 text-ink">
            <Icon name="linkedin" className="h-4 w-4 text-accent" />
            <a
              className="hover:underline"
              href={site.links.linkedin.href}
              target="_blank"
              rel="noreferrer"
            >
              {site.links.linkedin.label}
            </a>
          </li>
        </ul>
      </div>
      <AvatarSlot rounded="card" className="aspect-[3/4] w-full max-w-[300px] justify-self-end" />
    </section>
  );
}
