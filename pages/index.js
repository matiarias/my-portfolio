import Head from "next/head";

import { useEffect, useState } from "react";

import Loading from "../components/Loading/Loading";
import StarsParticles from "../components/StarsParticles";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  const [loadingPage, setLoadingPage] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoadingPage(false);
    }, 5000);
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

        {/* Facebook meta tags */}

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://matiasarias.vercel.app/" />
        <meta property="og:title" content="Matias Arias - Portfolio" />
        <meta
          property="og:description"
          content="I'm a Frontend Developer based in Argentina. I want to create websites that make an impact on people."
        />
        <meta
          property="og:image"
          content="/public/assets/screenshots/screenshot-home.png"
        />

        {/* Twitter meta tags */}

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
          content="/public/assets/screenshots/screenshot-home.png"
        />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      {loadingPage ? (
        <Loading />
      ) : (
        <div>
          <StarsParticles />
          <NavBar />
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
        </div>
      )}
    </>
  );
}
