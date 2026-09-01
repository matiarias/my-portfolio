# AGENTS.md — Portfolio de Matias Arias

Guía para agentes y desarrolladores que trabajan en este repositorio.

## Contexto

Portfolio personal de una sola página de **Matias Arias**, Frontend Engineer. Usa Next.js Pages Router y mantiene estas secciones: Home, About, Experience, Projects y Contact.

**Deploy:** [matiasarias.vercel.app](https://matiasarias.vercel.app/)

## Stack

| Categoría | Tecnología |
| --- | --- |
| Runtime | Node.js 24+ |
| Framework | Next.js 16, Pages Router |
| UI | React 19, TypeScript 5 |
| Estilos | Tailwind CSS 3 |
| Animación | Framer Motion, `react-intersection-observer` |
| Partículas | `@tsparticles/react` |
| Contacto | EmailJS y react-toastify |
| Iconos / Lottie | react-icons y lottie-react |
| Calidad | ESLint 9 + eslint-config-next 16 |

No migrar a App Router salvo pedido explícito. No incorporar librerías de UI nuevas sin necesidad.

## Arquitectura y datos

```text
pages/                 Rutas y metadatos SEO
components/            Secciones principales
subComponents/         Componentes reutilizables
data/                  Datos estáticos tipados
types/                 Interfaces compartidas
styles/globals.css     Tailwind global y componentes visuales comunes
.agents/skills/        Skills locales compartidas por agentes
```

- Usar el alias `@/` para imports internos.
- Mantener los tipos simples. `WorkExperience` incluye `highlights: string[]`; los datos de experiencia viven en `data/experienceData.ts`.
- No existe pantalla de carga, sección Skills ni imagen de perfil en About.
- El CV es la fuente de verdad para contenido profesional y herramientas; no inventar experiencia, métricas ni tecnologías.

## Sistema visual y accesibilidad

- Tailwind es la única librería de estilos. Reutilizar `section-shell`, `panel`, `section-heading` y los tokens de `styles/globals.css`.
- Dirección: Cosmic Editorial — fondo `#100022`, superficies violeta, cyan técnico y amarillo de énfasis.
- Mantener la densidad actual de secciones: `py-10` en mobile y `md:py-14` en desktop. No duplicar márgenes verticales entre secciones sin un motivo de contenido.
- Los títulos de sección no usan labels decorativos como `Signal / …`.
- Todo control interactivo debe tener etiqueta accesible, `focus-visible` y soporte para `prefers-reduced-motion`.
- La navegación móvil usa un drawer Obsidian glass. Cuando está abierto, el documento se bloquea con `body` fijo para evitar scroll de fondo; el drawer usa `100dvh` y es su propia región desplazable. Conservar cierre por overlay, Escape, botón y links internos.
- La grilla de Experience no debe usar un fondo o borde de contenedor que produzca celdas vacías; cada card posee su propio borde y superficie.

## Contenido y metadatos

- Hero: React, TypeScript, Node.js, NestJS y agentic development como propuesta principal. Santander y banking aparecen como evidencia dentro de Experience, no como posicionamiento principal.
- About puede incluir: GitHub Copilot, Windsurf, Devin, Claude Code y Codex. No añadir Cursor sin una fuente actualizada que lo respalde.
- Mantener título, description, Open Graph y Twitter de `pages/index.tsx` alineados con el Hero.
- El email público único es `maticarlosarias@gmail.com`.

## Comandos y entorno

```bash
npm run dev
npm run lint
npx tsc --noEmit
npm run build
```

`npm run lint` usa la configuración flat en `eslint.config.mjs`; no usar `next lint`. La fuente Lato se carga con `next/font/google`, por lo que un build local necesita acceso a Google Fonts si la caché no está disponible.

Las credenciales de EmailJS se leen de `.env.local`. Usar `.env.local.example` como plantilla y nunca versionar valores reales.

## Skill de UI

Antes de iniciar un refactor visual relevante, leer `.agents/skills/frontend-design/SKILL.md` completo y seguir su guía. La copia local proviene de [Anthropic Skills](https://github.com/anthropics/skills) y se distribuye bajo Apache-2.0; su licencia está junto a la skill.
