import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { site } from "@/data/site";

export function ResumeCta() {
  return (
    <div className="mt-10 flex flex-wrap items-center justify-between gap-4 rounded-card bg-surface-soft ring-1 ring-line p-5">
      <div className="flex items-center gap-3">
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-tile bg-white ring-1 ring-line text-accent">
          <Icon name="send" className="h-4 w-4" />
        </span>
        <div>
          <h3 className="text-sm font-semibold text-ink">
            Let&apos;s build something great together!
          </h3>
          <p className="text-sm text-ink-soft">Available for full-time opportunities.</p>
        </div>
      </div>
      <Button href={site.resumeUrl} variant="secondary">
        Download Resume
        <Icon name="download" className="h-4 w-4" />
      </Button>
    </div>
  );
}
