import type { TechKey } from "./tech";

export type SkillCategory = {
  title: string;
  items: TechKey[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    items: ["python", "ruby", "typescript", "javascript"],
  },
  {
    title: "Backend",
    items: ["rails", "fastapi", "sqlalchemy", "nodejs", "socketio", "rest"],
  },
  {
    title: "Frontend",
    items: ["react", "nextjs", "reactnative", "tailwind"],
  },
  {
    title: "Databases",
    items: ["postgresql", "mysql", "mongodb", "supabase"],
  },
  {
    title: "Infrastructure",
    items: ["aws", "docker", "githubactions", "cicd", "vercel", "railway", "alembic"],
  },
  {
    title: "Testing & Process",
    items: ["rspec", "pytest", "tdd", "agile"],
  },
];
