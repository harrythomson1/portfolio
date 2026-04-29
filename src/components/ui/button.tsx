import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md";

const VARIANTS: Record<Variant, string> = {
  primary: "bg-accent text-white hover:bg-accent-strong",
  secondary: "bg-white text-ink ring-1 ring-line hover:bg-surface-soft",
  ghost: "text-ink-soft hover:text-ink",
};

const SIZES: Record<Size, string> = {
  sm: "px-3.5 py-2 text-xs",
  md: "px-5 py-2.5 text-sm",
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-pill font-medium transition-colors disabled:opacity-50 disabled:pointer-events-none";

type CommonProps = {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  className?: string;
};

type ButtonProps = CommonProps &
  Omit<ComponentProps<"button">, keyof CommonProps> & { href?: undefined };
type LinkButtonProps = CommonProps &
  Omit<ComponentProps<typeof Link>, keyof CommonProps | "href"> & { href: string };

export function Button(props: ButtonProps | LinkButtonProps) {
  const { variant = "primary", size = "md", className = "", children, ...rest } = props;
  const cls = `${base} ${VARIANTS[variant]} ${SIZES[size]} ${className}`;

  if ("href" in rest && rest.href !== undefined) {
    const { href, ...linkRest } = rest as LinkButtonProps;
    return (
      <Link href={href} className={cls} {...linkRest}>
        {children}
      </Link>
    );
  }
  return (
    <button className={cls} {...(rest as ButtonProps)}>
      {children}
    </button>
  );
}
