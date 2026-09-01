import type { WorkExperience } from "@/types";

export const workExperience: WorkExperience[] = [
  {
    id: 1,
    company: "Santander Tecnología Argentina",
    position: "Software Engineer",
    startDate: "SEP 2023",
    endDate: "JUN 2026",
    highlights: [
      "Built frontend and BFF functionality for Dólar MEP purchases through linked external accounts.",
      "Developed accessible, production-ready interfaces for Market & Tenders in Home Banking.",
      "Contributed frontend and BFF work to Voluntary Corporate Events for investment holdings.",
      "Investigated and resolved production incidents using Kibana, Grafana and OpenShift.",
    ],
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
    position: "Software Engineer",
    startDate: "MAR 2023",
    endDate: "SEP 2023",
    highlights: [
      "Refactored UI during the Home Banking Modernization initiative.",
      "Developed transactional interfaces for USD purchase and sale flows.",
      "Improved accessibility in investment modules following WCAG guidelines.",
    ],
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
    position: "Frontend Developer Intern",
    startDate: "AUG 2022",
    endDate: "OCT 2022",
    highlights: [
      "Rebuilt the public landing page using React and JavaScript.",
      "Implemented authentication form validation and state handling.",
    ],
    skills: [
      { id: 2100, skillJob: "React.js" },
      { id: 2200, skillJob: "JavaScript" },
    ],
  },
];
