export type ExperienceItem = {
  role: string;
  company: string;
  start: string;
  end: string;
  bullets: string[];
};

export const experience: ExperienceItem[] = [
  {
    role: "Career Break — Independent Development & Language Acquisition",
    company: "Remote",
    start: "2025",
    end: "Present",
    bullets: [
      "Delivered a production inventory PWA for monks at a Buddhist temple in South Korea (Gucheongam Tea Inventory — see projects).",
      "Continued personal development with consistent interview preparation, studying data structures and algorithms.",
    ],
  },
  {
    role: "Freelance Full-Stack Developer",
    company: "Gradtopia (Education Platform), Remote",
    start: "2025",
    end: "2025",
    bullets: [
      "Built a live chat system where mentors could have conversations with mentees, using Node.js with Socket.io.",
      "Engineered for maximum uptime with a polling fallback when websockets failed.",
      "Helped keep all communications on-platform to increase retention of students to mentors.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Simply Business — UK's largest insurance broker (~500 employees), London",
    start: "2021",
    end: "2025",
    bullets: [
      "Built the redesign of the checkout workflow (Rails + React with TypeScript) that led to around a 5% increase in conversion from the quote comparison page.",
      "Worked on a project to automatically generate commission for ancillary products, with event-driven, scalable architecture handling thousands of daily transactions with 100% accuracy.",
      "Maintained a large-scale Rails monolith that served tens of thousands of customers daily across the UK and US.",
      "Frontline for production incidents — fast response and root-cause analysis on bugs in the monolith.",
    ],
  },
];

export type EducationItem = {
  degree: string;
  school: string;
  start: string;
  end: string;
  detail: string;
};

export const education: EducationItem[] = [
  {
    degree: "Software Engineering Apprenticeship (Level 4)",
    school: "British Computer Society (BCS)",
    start: "2020",
    end: "2021",
    detail: "University-level qualification accredited by the British Computer Society",
  },
  {
    degree: "Makers Academy — Intensive Full-Stack Bootcamp",
    school: "Makers Academy, London",
    start: "2020",
    end: "2020",
    detail: "16-week intensive programme: Ruby, Rails, JavaScript, TDD, Agile",
  },
];
