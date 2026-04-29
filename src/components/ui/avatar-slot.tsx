type Props = {
  /** Optional image src under /public, e.g. "/images/me.jpg". If omitted, shows an empty placeholder. */
  src?: string;
  alt?: string;
  className?: string;
  rounded?: "card" | "full";
};

export function AvatarSlot({
  src,
  alt = "",
  className = "",
  rounded = "card",
}: Props) {
  const radius = rounded === "full" ? "rounded-full" : "rounded-card";
  return (
    <div
      className={`relative overflow-hidden bg-surface-soft ring-1 ring-line ${radius} ${className}`}
      aria-hidden={!src}
    >
      {src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={src} alt={alt} className="h-full w-full object-cover" />
      ) : (
        <div className="flex h-full w-full items-center justify-center text-xs uppercase tracking-widest text-ink-muted">
          your photo
        </div>
      )}
    </div>
  );
}
