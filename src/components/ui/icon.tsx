import type { ReactElement, SVGProps } from "react";

export type IconName =
  | "home"
  | "user"
  | "folder"
  | "sparkles"
  | "briefcase"
  | "mail"
  | "github"
  | "linkedin"
  | "external"
  | "arrow-right"
  | "arrow-left"
  | "download"
  | "map-pin"
  | "graduation"
  | "check"
  | "send"
  | "code"
  | "heart"
  | "lightbulb"
  | "puzzle"
  | "menu"
  | "close";

const PATHS: Record<IconName, ReactElement> = {
  home: (
    <path
      d="M3 11 12 4l9 7v8a2 2 0 0 1-2 2h-4v-6h-6v6H5a2 2 0 0 1-2-2v-8Z"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  user: (
    <>
      <circle cx="12" cy="8" r="4" strokeWidth="1.6" />
      <path d="M4 21c0-4 4-7 8-7s8 3 8 7" strokeWidth="1.6" strokeLinecap="round" />
    </>
  ),
  folder: (
    <path
      d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Z"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
  ),
  sparkles: (
    <path
      d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M6 18l2.5-2.5M15.5 8.5 18 6"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
  ),
  briefcase: (
    <>
      <rect x="3" y="7" width="18" height="13" rx="2" strokeWidth="1.6" />
      <path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" strokeWidth="1.6" />
      <path d="M3 12h18" strokeWidth="1.6" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" strokeWidth="1.6" />
      <path d="m4 7 8 6 8-6" strokeWidth="1.6" strokeLinecap="round" />
    </>
  ),
  github: (
    <path
      d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.93.36.31.68.92.68 1.86v2.75c0 .27.18.58.69.48A10 10 0 0 0 12 2Z"
      strokeWidth="1.4"
    />
  ),
  linkedin: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="3" strokeWidth="1.6" />
      <path
        d="M8 10v7M8 7v.01M12 17v-4a2 2 0 0 1 4 0v4M12 13v4"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </>
  ),
  external: (
    <path
      d="M14 4h6v6M20 4l-9 9M10 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  "arrow-right": (
    <path
      d="M5 12h14M13 5l7 7-7 7"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  "arrow-left": (
    <path
      d="M19 12H5M11 5l-7 7 7 7"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  download: (
    <path
      d="M12 3v12m0 0 4-4m-4 4-4-4M5 21h14"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  "map-pin": (
    <>
      <path
        d="M12 22s7-7.58 7-13a7 7 0 1 0-14 0c0 5.42 7 13 7 13Z"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="9" r="2.5" strokeWidth="1.6" />
    </>
  ),
  graduation: (
    <path
      d="M2 9l10-4 10 4-10 4L2 9Zm4 3v4c0 1.5 3 3 6 3s6-1.5 6-3v-4"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  check: (
    <path
      d="m5 12 5 5L20 7"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  send: (
    <path
      d="M22 2 11 13M22 2l-7 20-4-9-9-4 20-7Z"
      strokeWidth="1.6"
      strokeLinejoin="round"
      strokeLinecap="round"
    />
  ),
  code: (
    <path
      d="m8 18-6-6 6-6M16 6l6 6-6 6M14 4l-4 16"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  heart: (
    <path
      d="M12 21s-7-4.5-9.5-9A5.5 5.5 0 0 1 12 6a5.5 5.5 0 0 1 9.5 6c-2.5 4.5-9.5 9-9.5 9Z"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
  ),
  lightbulb: (
    <path
      d="M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12.7c.7.7 1 1.7 1 2.7V18h6v-.6c0-1 .3-2 1-2.7A7 7 0 0 0 12 2Z"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  puzzle: (
    <path
      d="M9 3h6v3a2 2 0 1 0 4 0v0h2v6h-3a2 2 0 1 0 0 4h3v5H9v-3a2 2 0 1 1-4 0v3H3v-9h3a2 2 0 1 0 0-4H3V3h6Z"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
  ),
  menu: (
    <path
      d="M4 6h16M4 12h16M4 18h16"
      strokeWidth="1.7"
      strokeLinecap="round"
    />
  ),
  close: (
    <path
      d="M6 6l12 12M6 18 18 6"
      strokeWidth="1.7"
      strokeLinecap="round"
    />
  ),
};

type Props = SVGProps<SVGSVGElement> & { name: IconName };

export function Icon({ name, className = "h-5 w-5", ...rest }: Props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      className={className}
      aria-hidden="true"
      {...rest}
    >
      {PATHS[name]}
    </svg>
  );
}
