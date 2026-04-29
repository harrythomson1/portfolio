type Props = { className?: string };

export function DotGrid({ className = "" }: Props) {
  return (
    <svg
      className={className}
      width="80"
      height="60"
      viewBox="0 0 80 60"
      fill="none"
      aria-hidden
    >
      {Array.from({ length: 6 }).map((_, row) =>
        Array.from({ length: 8 }).map((_, col) => (
          <circle
            key={`${row}-${col}`}
            cx={4 + col * 10}
            cy={4 + row * 10}
            r="1.4"
            fill="#cbd5e1"
          />
        ))
      )}
    </svg>
  );
}

export function Squiggle({ className = "" }: Props) {
  return (
    <svg
      className={className}
      width="80"
      height="20"
      viewBox="0 0 80 20"
      fill="none"
      aria-hidden
    >
      <path
        d="M2 14C8 4 14 4 20 14s12 10 18 0 12-10 18 0 12 10 18 0"
        stroke="#a78bfa"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Sparkle({ className = "" }: Props) {
  return (
    <svg
      className={className}
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      aria-hidden
    >
      <path
        d="M11 2v6M11 14v6M2 11h6M14 11h6"
        stroke="#a78bfa"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}
