export interface Project {
  title: string;
  year: number;
  description: string;
  url: string;
}

export const projects: Project[] = [
  {
    title: "Super Ruby Bros",
    year: 2021,
    description: "A 2D Ruby platformer",
    url: "/projects/super-ruby-bros",
  }
];
