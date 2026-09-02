import { BsEnvelope, BsLinkedin } from "react-icons/bs";

import TitleSections from "@/subComponents/TitleSections";
import { usePortfolioContent } from "@/hooks/usePortfolioContent";

const Contact = () => {
  const content = usePortfolioContent();

  return (
    <section id="contact" className="section-shell">
      <TitleSections title={content.contact.title} />

      <div className="panel mt-10 grid overflow-hidden md:grid-cols-2">
        <a
          href="mailto:maticarlosarias@gmail.com"
          className="group flex items-start gap-4 p-6 transition hover:bg-cosmic-cyan-300/[0.06] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-cosmic-cyan-300 md:p-8"
        >
          <span className="grid size-10 shrink-0 place-items-center rounded-full border border-cosmic-cyan-300/25 bg-violet-950/60 text-cosmic-cyan-300 transition group-hover:border-cosmic-cyan-300/60 group-hover:text-cosmic-cyan-200" aria-hidden="true">
            <BsEnvelope size={18} />
          </span>
          <span className="min-w-0">
            <span className="block text-lg font-bold text-slate-100 transition group-hover:text-cosmic-cyan-200">{content.contact.email}</span>
            <span className="mt-1 block break-all text-sm text-slate-400">maticarlosarias@gmail.com</span>
          </span>
        </a>

        <a
          href="https://www.linkedin.com/in/matiasarias27"
          target="_blank"
          rel="noreferrer noopener"
          className="group flex items-start gap-4 border-t border-violet-300/20 p-6 transition hover:bg-cosmic-cyan-300/[0.06] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-cosmic-cyan-300 md:border-l md:border-t-0 md:p-8"
        >
          <span className="grid size-10 shrink-0 place-items-center rounded-full border border-cosmic-cyan-300/25 bg-violet-950/60 text-cosmic-cyan-300 transition group-hover:border-cosmic-cyan-300/60 group-hover:text-cosmic-cyan-200" aria-hidden="true">
            <BsLinkedin size={18} />
          </span>
          <span>
            <span className="block text-lg font-bold text-slate-100 transition group-hover:text-cosmic-cyan-200">{content.contact.linkedin}</span>
            <span className="mt-1 block text-sm text-slate-400">linkedin.com/in/matiasarias27</span>
          </span>
        </a>
      </div>
    </section>
  );
};

export default Contact;
