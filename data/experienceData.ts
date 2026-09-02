import type { WorkExperience } from "@/types";

export const workExperience: WorkExperience[] = [
  {
    id: 1,
    company: "Santander Tecnología Argentina",
    skills: [
      { id: 100, skillJob: "Next.js" },
      { id: 200, skillJob: "React.js" },
      { id: 300, skillJob: "Node.js" },
      { id: 400, skillJob: "NestJS" },
      { id: 500, skillJob: "TypeScript" },
      { id: 600, skillJob: "JavaScript" },
      { id: 700, skillJob: "Styled Components" },
      { id: 800, skillJob: "Testing with Jest and Testing Library" },
    ],
  },
  {
    id: 2,
    company: "Santander Tecnología Argentina",
    skills: [
      { id: 1100, skillJob: "React.js" },
      { id: 1200, skillJob: "TypeScript" },
      { id: 1300, skillJob: "JavaScript" },
      { id: 1400, skillJob: "Styled Components" },
      { id: 1500, skillJob: "Jest" },
    ],
  },
  {
    id: 3,
    company: "Nodos Hub",
    skills: [
      { id: 2100, skillJob: "React.js" },
      { id: 2200, skillJob: "JavaScript" },
    ],
  },
];
