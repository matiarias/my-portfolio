import Head from "next/head";
import { useRouter } from "next/router";

import StarsParticles from "../components/StarsParticles";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Experience from "@/components/Experience";
import { usePortfolioContent } from "@/hooks/usePortfolioContent";

export default function Home() {
  const { locale } = useRouter();
  const content = usePortfolioContent();
  const canonicalUrl = locale === "es"
    ? "https://matiasarias.vercel.app/es"
    : "https://matiasarias.vercel.app/";

  return (
    <>
      <Head>
        <title>{content.metadata.title}</title>
        <meta name="description" content={content.metadata.description} />
        <meta name="keywords" content={content.metadata.keywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href={canonicalUrl} />
        <link rel="alternate" hrefLang="en" href="https://matiasarias.vercel.app/" />
        <link rel="alternate" hrefLang="es" href="https://matiasarias.vercel.app/es" />
        <link rel="alternate" hrefLang="x-default" href="https://matiasarias.vercel.app/" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:title" content={content.metadata.title} />
        <meta property="og:description" content={content.metadata.description} />
        <meta
          property="og:image"
          content="/assets/screenshots/screenshot-home.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={canonicalUrl} />
        <meta property="twitter:title" content={content.metadata.title} />
        <meta property="twitter:description" content={content.metadata.description} />
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
