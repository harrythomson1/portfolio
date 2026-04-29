import type { IconName } from "@/components/ui/icon";
import type { TechKey } from "./tech";

export type ProjectCategory = "Full Stack" | "Backend";

export type Project = {
  slug: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  icon: IconName;
  iconColor: string;
  category: ProjectCategory;
  featured: boolean;
  role: string;
  duration: string;
  liveUrl?: string;
  liveLabel?: string;
  repoUrl?: string;
  repoUrlBackend?: string;
  techStack: TechKey[];
  features: string[];
  learnings: string;
  /** Path inside /public, e.g. "/videos/gucheongam.mp4". Leave undefined to fall back to image or designed showcase. */
  videoSrc?: string;
  /** Optional image fallback in /public, e.g. "/images/gucheongam.png". */
  imageSrc?: string;
  /** 0–2: 0 = paused, 1 = normal, etc. Used by the video element if you want slow-mo. */
  playbackRate?: number;
  /**
   * Optional headline stat shown on the showcase card when there's no video / image.
   * Example: { value: "~5%", label: "Conversion uplift" }
   */
  highlight?: { value: string; label: string };
};

export const projects: Project[] = [
  {
    slug: "gucheongam-tea-inventory",
    title: "Gucheongam Tea Inventory PWA",
    shortDescription:
      "Bilingual full-stack PWA for a Buddhist temple in South Korea — solo delivered, live in production.",
    longDescription:
      "A bilingual (Korean / English) inventory and sales-tracking PWA built for the monks at Gucheongam, a Buddhist temple in South Korea. Solo delivered end-to-end and now running in production with live users, improving stock visibility and sales tracking for non-technical operators.",
    icon: "puzzle",
    iconColor: "#3ecf8e",
    category: "Full Stack",
    featured: true,
    role: "Solo Engineer (Freelance / Volunteer)",
    duration: "2026",
    repoUrl: "https://github.com/harrythomson1/gucheung-am-tea-inventory-frontend",
    repoUrlBackend: "https://github.com/harrythomson1/gucheung-am-tea-inventory-backend",
    techStack: ["fastapi", "react", "typescript", "supabase", "pytest"],
    features: [
      "Bilingual interface (Korean and English) for non-technical users",
      "Full auth flow backed by Supabase",
      "Production PWA with offline-tolerant UX",
      "Sales tracking and stock visibility dashboards",
      "Dual-lingual onboarding documentation for end users",
      "Integration tests with pytest",
    ],
    learnings:
      "Shipping for users whose native language wasn't my own forced me to slow down on UX writing, error states and documentation — and to think about non-technical operators first. The hardest part wasn't the stack, it was making the product invisible.",
    videoSrc: "/videos/projects/inventory.mp4"
  },
  {
    slug: "simply-business-checkout",
    title: "Simply Business — Checkout Redesign",
    shortDescription:
      "Rebuilt the checkout workflow at the UK's largest insurance broker — drove ~5% conversion uplift.",
    longDescription:
      "Led the redesign of the post-quote checkout workflow at Simply Business, the UK's largest small-business insurance broker. The work spanned a Rails + React/TypeScript stack inside a large monolith serving tens of thousands of customers daily across the UK and US.",
    icon: "check",
    iconColor: "#cc0000",
    category: "Full Stack",
    featured: true,
    role: "Software Engineer",
    duration: "2021 – 2025",
    techStack: ["rails", "react", "typescript", "postgresql", "rspec"],
    features: [
      "Around 5% conversion uplift from the quote comparison page",
      "Iterated with design and product through A/B experiments",
      "Hardened error and edge-case handling for high-traffic checkout",
      "Maintained and extended a long-lived Rails monolith codebase",
    ],
    learnings:
      "Working inside a large monolith taught me how to ship safely under load — small reversible changes, good test coverage and tight feedback loops with experimentation matter more than clever architecture.",
    highlight: { value: "~5%", label: "Conversion uplift" },
  },
  {
    slug: "gradtopia-live-chat",
    title: "Gradtopia Live Chat",
    shortDescription:
      "Real-time mentor/mentee chat with WebSocket transport and a polling fallback for uptime.",
    longDescription:
      "A live chat system for Gradtopia, an education platform connecting mentors and mentees. Built to keep conversations on-platform and increase retention. Engineered for maximum uptime with a polling fallback when WebSocket transport degrades.",
    icon: "code",
    iconColor: "#3c873a",
    category: "Backend",
    featured: true,
    role: "Freelance Full-Stack Developer",
    duration: "2025",
    techStack: ["nodejs", "socketio", "typescript", "mongodb"],
    features: [
      "Real-time messaging via Socket.io",
      "Automatic polling fallback when websockets fail",
      "Mentor / mentee thread routing and history",
      "Built to keep communications on-platform for retention",
    ],
    learnings:
      "Real-time isn't only about getting the happy path working — it's about graceful degradation. Designing the polling fallback up-front made the system feel reliable even on flaky networks.",
  },
  {
    slug: "simply-business-commission-engine",
    title: "Simply Business — Ancillary Commission Engine",
    shortDescription:
      "Event-driven commission engine handling thousands of daily transactions with 100% accuracy.",
    longDescription:
      "An event-driven, scalable system that automatically generates commission for ancillary insurance products. Replaces a manual reconciliation process and handles thousands of daily transactions with full auditability.",
    icon: "sparkles",
    iconColor: "#6c5ce7",
    category: "Backend",
    featured: false,
    role: "Software Engineer",
    duration: "2021 – 2025",
    techStack: ["rails", "ruby", "postgresql", "rspec"],
    features: [
      "Event-driven architecture for commission accrual",
      "100% transaction accuracy across thousands of daily events",
      "Auditable history per product and partner",
      "Replaced manual reconciliation, freeing up finance ops",
    ],
    learnings:
      "Money systems have to be boring. Idempotency, event ordering and replay-ability mattered far more than throughput — designing for correctness first paid off every time we extended it.",
    highlight: { value: "100%", label: "Transaction accuracy at scale" },
  },
];

export const PROJECT_CATEGORIES: ("All" | ProjectCategory)[] = [
  "All",
  "Full Stack",
  "Backend",
];
