import { useEffect, useState } from "react";

import Head from "next/head";

import Loading from "../components/Loading/Loading";
import StarsParticles from "../components/StarsParticles";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Experience from "@/components/Experience";

export default function Home() {
  const [loadingPage, setLoadingPage] = useState(true);

  // Fix #3: Cleanup del timer para evitar setState sobre componente desmontado
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadingPage(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Head>
        <title>Matias Arias - Portfolio</title>
        <meta
          name="description"
          content="I'm a Frontend Developer based in Argentina. I want to create websites that make an impact on people."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://matiasarias.vercel.app/" />
        <meta property="og:title" content="Matias Arias - Portfolio" />
        <meta
          property="og:description"
          content="I'm a Frontend Developer based in Argentina. I want to create websites that make an impact on people."
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
        <meta property="twitter:title" content="Matias Arias - Portfolio" />
        <meta
          property="twitter:description"
          content="I'm a Frontend Developer based in Argentina. I want to create websites that make an impact on people."
        />
        <meta
          property="twitter:image"
          content="/assets/screenshots/screenshot-home.png"
        />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      {loadingPage ? (
        <Loading />
      ) : (
        <>
          <StarsParticles />
          <NavBar />
          <Hero />
          <About />
          <Experience />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
        </>
      )}
    </>
  );
}
