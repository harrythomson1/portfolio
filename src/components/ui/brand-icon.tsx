import {
  siPython,
  siRuby,
  siTypescript,
  siJavascript,
  siRubyonrails,
  siFastapi,
  siSqlalchemy,
  siNodedotjs,
  siSocketdotio,
  siReact,
  siNextdotjs,
  siTailwindcss,
  siPostgresql,
  siMysql,
  siMongodb,
  siSupabase,
  siDocker,
  siGithubactions,
  siVercel,
  siRailway,
  siPytest,
} from "simple-icons";

type Si = { path: string; hex: string; title: string };

/**
 * Map of simple-icons slugs to the icon's SVG path data + brand colour.
 * Slugs come from `tech.ts` — when an entry's `slug` matches one of these keys,
 * <BrandIcon> renders the logo. Anything not in this map falls back to a letter chip.
 */
const ICONS: Record<string, Si> = {
  python: siPython,
  ruby: siRuby,
  typescript: siTypescript,
  javascript: siJavascript,
  rubyonrails: siRubyonrails,
  fastapi: siFastapi,
  sqlalchemy: siSqlalchemy,
  nodedotjs: siNodedotjs,
  socketdotio: siSocketdotio,
  react: siReact,
  nextdotjs: siNextdotjs,
  tailwindcss: siTailwindcss,
  postgresql: siPostgresql,
  mysql: siMysql,
  mongodb: siMongodb,
  supabase: siSupabase,
  docker: siDocker,
  githubactions: siGithubactions,
  vercel: siVercel,
  railway: siRailway,
  pytest: siPytest,
};

type Props = {
  slug: string;
  size?: number;
  /** Override the brand hex colour. Defaults to the brand's official hex. */
  color?: string;
  className?: string;
  title?: string;
};

export function BrandIcon({ slug, size = 16, color, className = "", title }: Props) {
  const icon = ICONS[slug];
  if (!icon) return null;
  const fill = color ?? `#${icon.hex}`;
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill={fill}
      className={className}
      aria-label={title ?? icon.title}
    >
      <title>{title ?? icon.title}</title>
      <path d={icon.path} />
    </svg>
  );
}

export function hasBrandIcon(slug: string | undefined): slug is string {
  return !!slug && slug in ICONS;
}
