# My Portfolio — Matias Arias

Personal portfolio showcasing my work as a Frontend Developer. Single-page site built with **Next.js**, **React**, **TypeScript**, and **Tailwind CSS**, with animations powered by Framer Motion.

**Live site:** [https://matiasarias.vercel.app/](https://matiasarias.vercel.app/)

---

## What's inside

The site is a one-page experience with these sections:

| Section | Description |
|---------|-------------|
| **Home** | Hero with social links, Lottie animations, and background music |
| **About** | Bio and professional photo |
| **Experience** | Work history |
| **Skills** | Tech stack grid |
| **Projects** | Featured projects with links to GitHub and live demos |
| **Contact** | Form powered by EmailJS |

---

## Tech stack

| Category | Technology |
|----------|------------|
| Runtime | Node.js 24+ |
| Framework | Next.js 15 (Pages Router) |
| UI | React 19 |
| Language | TypeScript 5 |
| Styling | Tailwind CSS 3 |
| Animations | Framer Motion |
| Particles | @tsparticles/react |
| Lottie | lottie-react |
| Contact form | EmailJS |
| Notifications | react-toastify |
| Scroll animations | react-intersection-observer |
| Typewriter effect | typewriter-effect |
| Icons | react-icons |
| Deploy | Vercel |

---

## Recent updates

This project was recently modernized after being untouched for several years:

- **JavaScript → TypeScript** — all components, pages, and data files migrated with shared interfaces in `types/`
- **Node.js 18 → 24** — updated runtime requirement (`.nvmrc` + `engines` in `package.json`)
- **Next.js 13 → 15** and **React 18 → 19**
- **Dependencies upgraded** — Framer Motion, EmailJS, tsparticles, react-toastify, and others
- **`AGENTS.md` added** — reference doc for AI agents and contributors (stack, structure, conventions)

---

## Getting started

### Prerequisites

- [Node.js 24+](https://nodejs.org/) (use `nvm use` if you have `.nvmrc`)

### Install and run

```bash
# Install dependencies
npm install

# Development server (http://localhost:3000)
npm run dev

# Production build
npm run build

# Run production server
npm run start

# Lint
npm run lint
```

---

## Project structure

```
├── pages/           # Next.js routes (Pages Router)
├── components/      # Main page sections
├── subComponents/   # Reusable UI pieces
├── data/            # Static data (projects, skills, experience)
├── types/           # TypeScript interfaces
├── config/          # JSON configs (e.g. particles)
├── public/          # Static assets
├── styles/          # Global CSS (Tailwind)
└── AGENTS.md        # Agent/contributor reference
```

Imports use the `@/` alias (configured in `tsconfig.json`).

---

## Screenshots

![Home Section](/public/assets/screenshots/screenshot-home.png)

![About Section](/public/assets/screenshots/screenshot-about.png)

![Skills Section](/public/assets/screenshots/screenshot-skills.png)

![Projects Section](/public/assets/screenshots/screenshot-projects.png)

![Contact Section](/public/assets/screenshots/screenshot-contact.png)

---

## Author

**Matias Arias** — Frontend Developer based in Argentina.

- [LinkedIn](https://www.linkedin.com/in/matiasarias27)
- [GitHub](https://github.com/matiarias)
- [Email](mailto:matt.arias182@gmail.com)
