import { BsGithub, BsLinkedin } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import Link from "next/link";

import MusicBar from "@/subComponents/MusicBar";
import { usePortfolioContent } from "@/hooks/usePortfolioContent";

const Hero = () => {
  const content = usePortfolioContent();

  return (
    <section
      id="home"
      className="relative min-h-screen w-full overflow-hidden"
    >
      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 py-10 pt-20 md:px-10 md:py-14 md:pt-20">
        <p className="eyebrow">{content.hero.eyebrow}</p>
        <h1 className="mt-5 max-w-5xl text-5xl font-bold leading-[.95] tracking-tight text-slate-100 md:text-8xl">
          {content.hero.titlePrefix}<span className="text-cosmic-cyan-400">{content.hero.titleEmphasis}</span>{content.hero.titleSuffix}
        </h1>
        <p className="mt-7 max-w-2xl text-lg leading-relaxed text-slate-300 md:text-2xl">{content.hero.description}</p>

        <Link
          href="#contact"
          className="mt-9 w-fit rounded-full bg-cosmic-signal-300 px-6 py-3 font-bold text-cosmic-space transition hover:-translate-y-0.5 hover:bg-cosmic-signal-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cosmic-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-cosmic-space"
        >
          {content.hero.contactCta}
        </Link>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href="https://www.linkedin.com/in/matiasarias27"
            target="_blank"
            rel="noreferrer noopener"
            aria-label={content.social.linkedin}
          >
            <div className="rounded-full border border-cosmic-cyan-300/30 bg-violet-950/60 p-3 text-xl transition hover:-translate-y-1 hover:border-cosmic-cyan-300">
              <BsLinkedin className=" text-white" />
            </div>
          </a>

          <a
            href="https://github.com/matiarias"
            target="_blank"
            rel="noreferrer noopener"
            aria-label={content.social.github}
          >
            <div className="rounded-full border border-cosmic-cyan-300/30 bg-violet-950/60 p-3 text-xl transition hover:-translate-y-1 hover:border-cosmic-cyan-300">
              <BsGithub className=" text-white" />
            </div>
          </a>

          <a
            href="mailto:maticarlosarias@gmail.com"
            aria-label={content.social.email}
          >
            <div className="rounded-full border border-cosmic-cyan-300/30 bg-violet-950/60 p-3 text-xl transition hover:-translate-y-1 hover:border-cosmic-cyan-300">
              <AiOutlineMail className=" text-white" />
            </div>
          </a>

          <MusicBar />
        </div>
      </div>
    </section>
  );
};

export default Hero;
