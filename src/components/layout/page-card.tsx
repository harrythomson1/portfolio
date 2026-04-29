import { type ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

export function PageCard({ children, className = "" }: Props) {
  return (
    <div
      className={
        "relative rounded-card bg-surface text-ink p-6 sm:p-10 md:p-14 overflow-hidden " +
        "min-h-[calc(100vh-7rem)] md:min-h-[calc(100vh-2rem)] " +
        className
      }
    >
      {children}
    </div>
  );
}

export function PageCardHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
}) {
  return (
    <header className="mb-10">
      {eyebrow ? (
        <div className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
          {eyebrow}
        </div>
      ) : null}
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-ink leading-tight">
        {title}
      </h1>
      {subtitle ? (
        <p className="mt-4 max-w-2xl text-base text-ink-soft">{subtitle}</p>
      ) : null}
    </header>
  );
}
