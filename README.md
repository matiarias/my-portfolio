# Matias Arias — Portfolio

Personal bilingual portfolio for a Frontend Engineer specializing in React, TypeScript, Node.js and NestJS. It is a content-led, single-page experience built around a cosmic editorial visual system.

**Live site:** [matiasarias.vercel.app](https://matiasarias.vercel.app/)

## Sections

- **Home:** professional positioning, social links and an optional music control.
- **About:** professional profile, engineering highlights and agentic-development tools.
- **Experience:** verified roles, responsibilities and technology tags.
- **Projects:** selected work with GitHub and deployment links.
- **Contact:** direct email CTA and LinkedIn link.

## Stack

- Next.js 16 (Pages Router), React 19 and TypeScript 5
- Tailwind CSS 3, Framer Motion and `react-intersection-observer`
- `@tsparticles/react`, `lottie-react` and `react-icons`
- ESLint 9 with `eslint-config-next` 16

## Local development

Node.js 24 or newer is required.

```bash
npm install
npm run dev
npm run lint
npx tsc --noEmit
npm run build
```

The dev server runs on `http://localhost:3000`. `npm run build` requires access to Google Fonts when Lato is not already cached, because it is loaded through `next/font/google`.

## Languages and SEO

- English is the default language at `/`; Spanish is available at `/es`.
- The `EN | ES` navbar control changes the route while preserving the current section.
- Localized copy and metadata live in `data/portfolioContent.ts`; shared project assets, links and technology data remain in `data/`.
- The application uses the Pages Router's native i18n routing. No global client state library is required for language selection.

## Design and accessibility

- Tailwind is the sole styling system. The global design tokens live in `styles/globals.css`.
- The palette combines deep violet surfaces, cyan technical accents and yellow emphasis.
- Section spacing is intentionally compact (`py-10`, `md:py-14`) to avoid stacked whitespace.
- The mobile navigation uses an Obsidian glass drawer. It locks document scrolling while open, keeps the drawer independently scrollable and supports Escape, overlay and close-button dismissal.
- Focus-visible states and reduced-motion support are required for interactive UI.
- There is no loading screen or About profile image. The remaining navbar Lottie is a small brand detail only.

## Project structure

```text
pages/                 Next.js Pages Router entry points
components/            Page sections
subComponents/         Reusable UI components
data/                  Typed static portfolio data
hooks/                 Shared hooks, including localized content access
types/                 Shared TypeScript interfaces
styles/                Tailwind global styles
.agents/skills/frontend-design Local UI-design guidance and Apache-2.0 license
```

Imports use the `@/` alias configured in `tsconfig.json`.

## Design skill

`.agents/skills/frontend-design/` contains the frontend-design skill used for the Cosmic Editorial refactor. It is kept with its Apache-2.0 license so future UI work follows the same intentional, accessible and content-led direction.

## Contact

- [LinkedIn](https://www.linkedin.com/in/matiasarias27)
- [GitHub](https://github.com/matiarias)
- [Email](mailto:maticarlosarias@gmail.com)
