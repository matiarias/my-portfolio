import { motion } from "framer-motion";
import TitleSections from "@/subComponents/TitleSections";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { usePortfolioContent } from "@/hooks/usePortfolioContent";

// Fix #1: Usa el hook centralizado en lugar de duplicar useInView + useAnimation + useEffect
// Fix #12: Imports estandarizados con alias @/
const About = () => {
  const { ref, controls, initial } = useScrollAnimation();
  const content = usePortfolioContent();

  return (
    <motion.section id="about" ref={ref} initial={initial} animate={controls} className="section-shell">
      <TitleSections title={content.about.title} />

      <div className="editorial-copy">
        <div className="mt-5 space-y-5">
          {content.about.description.map((paragraph) => (
            <p key={paragraph} className="lede">{paragraph}</p>
          ))}
        </div>
        <ul className="signal-grid">
          {content.about.highlights.map((highlight) => (
            <li key={highlight.title}>
              <strong>{highlight.title}</strong>
              <span>{highlight.description}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.section>
  );
};

export default About;
