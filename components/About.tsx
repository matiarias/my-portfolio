import { motion } from "framer-motion";
import TitleSections from "@/subComponents/TitleSections";

import { useScrollAnimation, SLIDE_FROM_LEFT } from "@/hooks/useScrollAnimation";
import { usePortfolioContent } from "@/hooks/usePortfolioContent";

// Fix #1: Usa el hook centralizado en lugar de duplicar useInView + useAnimation + useEffect
// Fix #12: Imports estandarizados con alias @/
const About = () => {
  const { ref, controls: controlsText } = useScrollAnimation(SLIDE_FROM_LEFT);
  const content = usePortfolioContent();

  return (
    <section id="about" className="section-shell">
      <TitleSections title={content.about.title} />

      <motion.div ref={ref} animate={controlsText} className="editorial-copy">
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
      </motion.div>
    </section>
  );
};

export default About;
