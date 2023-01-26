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
        <meta name="description" content="My portfolio by Matias Arias" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon-planet.ico" />
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
