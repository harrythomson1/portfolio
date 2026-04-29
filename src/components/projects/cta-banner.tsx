import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";

type Props = {
  title?: string;
  body?: string;
  ctaLabel?: string;
  ctaHref?: string;
};

export function CtaBanner({
  title = "Have an idea in mind?",
  body = "Let's build something amazing together.",
  ctaLabel = "Get In Touch",
  ctaHref = "/contact",
}: Props) {
  return (
    <div className="mt-10 flex flex-wrap items-center justify-between gap-4 rounded-card bg-surface-soft ring-1 ring-line p-5">
      <div>
        <h3 className="text-sm font-semibold text-ink">{title}</h3>
        <p className="text-sm text-ink-soft">{body}</p>
      </div>
      <Button href={ctaHref}>
        {ctaLabel}
        <Icon name="arrow-right" className="h-4 w-4" />
      </Button>
    </div>
  );
}
