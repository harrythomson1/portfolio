export type Tech = {
  label: string;
  initial: string;
  /** Hex with leading #. Used for the letter-chip fallback and as a hint colour. */
  color: string;
  /** simple-icons slug, e.g. "react", "rubyonrails". When set, the brand SVG is rendered. */
  slug?: string;
};

export const TECH = {
  // Languages
  python: { label: "Python", initial: "Py", color: "#3776ab", slug: "python" },
  ruby: { label: "Ruby", initial: "Rb", color: "#cc342d", slug: "ruby" },
  typescript: { label: "TypeScript", initial: "TS", color: "#3178c6", slug: "typescript" },
  javascript: { label: "JavaScript", initial: "JS", color: "#f7df1e", slug: "javascript" },

  // Backend
  rails: { label: "Ruby on Rails", initial: "RoR", color: "#cc0000", slug: "rubyonrails" },
  fastapi: { label: "FastAPI", initial: "F", color: "#009688", slug: "fastapi" },
  sqlalchemy: { label: "SQLAlchemy", initial: "SA", color: "#d71f00", slug: "sqlalchemy" },
  nodejs: { label: "Node.js", initial: "N", color: "#3c873a", slug: "nodedotjs" },
  socketio: { label: "Socket.io", initial: "S", color: "#010101", slug: "socketdotio" },
  rest: { label: "REST APIs", initial: "R", color: "#6c5ce7" },

  // Frontend
  react: { label: "React", initial: "R", color: "#61dafb", slug: "react" },
  nextjs: { label: "Next.js", initial: "N", color: "#000000", slug: "nextdotjs" },
  reactnative: { label: "React Native", initial: "RN", color: "#61dafb", slug: "react" },
  tailwind: { label: "Tailwind CSS", initial: "T", color: "#06b6d4", slug: "tailwindcss" },

  // Databases
  postgresql: { label: "PostgreSQL", initial: "Pg", color: "#336791", slug: "postgresql" },
  mysql: { label: "MySQL", initial: "My", color: "#00758f", slug: "mysql" },
  mongodb: { label: "MongoDB", initial: "M", color: "#4db33d", slug: "mongodb" },
  supabase: { label: "Supabase", initial: "Sb", color: "#3ecf8e", slug: "supabase" },

  // Infrastructure
  aws: { label: "AWS", initial: "A", color: "#ff9900" },
  docker: { label: "Docker", initial: "D", color: "#2496ed", slug: "docker" },
  githubactions: {
    label: "GitHub Actions",
    initial: "GA",
    color: "#2088ff",
    slug: "githubactions",
  },
  cicd: { label: "CI/CD", initial: "CI", color: "#6c5ce7" },
  vercel: { label: "Vercel", initial: "V", color: "#000000", slug: "vercel" },
  railway: { label: "Railway", initial: "Rw", color: "#0b0d0e", slug: "railway" },
  alembic: { label: "Alembic", initial: "Al", color: "#6c5ce7" },

  // Testing & Process
  rspec: { label: "RSpec", initial: "Rs", color: "#f04b69" },
  pytest: { label: "pytest", initial: "Pt", color: "#009fda", slug: "pytest" },
  tdd: { label: "TDD", initial: "TD", color: "#22c55e" },
  agile: { label: "Agile / Scrum", initial: "A", color: "#a855f7" },
} satisfies Record<string, Tech>;

export type TechKey = keyof typeof TECH;
