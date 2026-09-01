import Head from "next/head";

import StarsParticles from "../components/StarsParticles";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Experience from "@/components/Experience";

export default function Home() {
  return (
    <>
      <Head>
        <title>Matias Arias | Frontend Engineer - React, TypeScript, Node.js & NestJS</title>
        <meta
          name="description"
          content="Frontend Engineer specializing in React, TypeScript, Node.js and NestJS. I build accessible, production-ready web products with agentic development workflows."
        />
        <meta
          name="keywords"
          content="Frontend Engineer, React, TypeScript, Node.js, NestJS, Next.js, accessibility, WCAG, BFF development, agentic development, GitHub Copilot, Windsurf, Devin, Claude Code, Codex, banking products, investment products"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://matiasarias.vercel.app/" />
        <meta property="og:title" content="Matias Arias | Frontend Engineer - React, TypeScript, Node.js & NestJS" />
        <meta
          property="og:description"
          content="Frontend Engineer specializing in React, TypeScript, Node.js and NestJS. I build accessible, production-ready web products with agentic development workflows."
        />
        <meta
          property="og:image"
          content="/assets/screenshots/screenshot-home.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://matiasarias.vercel.app/"
        />
        <meta property="twitter:title" content="Matias Arias | Frontend Engineer - React, TypeScript, Node.js & NestJS" />
        <meta
          property="twitter:description"
          content="Frontend Engineer specializing in React, TypeScript, Node.js and NestJS. I build accessible, production-ready web products with agentic development workflows."
        />
        <meta
          property="twitter:image"
          content="/assets/screenshots/screenshot-home.png"
        />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <StarsParticles />
      <NavBar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
