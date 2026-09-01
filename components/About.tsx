import { motion } from "framer-motion";
import TitleSections from "@/subComponents/TitleSections";

import { useScrollAnimation, SLIDE_FROM_LEFT } from "@/hooks/useScrollAnimation";

// Fix #1: Usa el hook centralizado en lugar de duplicar useInView + useAnimation + useEffect
// Fix #12: Imports estandarizados con alias @/
const About = () => {
  const { ref, controls: controlsText } = useScrollAnimation(SLIDE_FROM_LEFT);

  return (
    <section id="about" className="section-shell">
      <TitleSections title="About Me" />

      <motion.div ref={ref} animate={controlsText} className="editorial-copy">
        <p className="eyebrow">Profile / 2026</p>
        <p className="lede">
              Frontend Engineer with 3+ years at Santander Tecnología Argentina,
              building production-critical banking and investment features using
              React and TypeScript. Experienced in high-volume transactional
              systems, BFF development with Node.js/NestJS, and production
              incident resolution. I integrate agentic workflows with GitHub
              Copilot, Windsurf, Devin, Claude Code and Codex into my daily
              development cycle.
        </p>
        <ul className="signal-grid">
          <li><strong>3+ years</strong><span>production engineering</span></li>
          <li><strong>Agentic workflows</strong><span>Copilot · Windsurf · Devin · Claude Code · Codex</span></li>
          <li><strong>React / TS</strong><span>frontend systems</span></li>
          <li><strong>BFF</strong><span>Node.js & NestJS</span></li>
        </ul>
      </motion.div>
    </section>
  );
};

export default About;
