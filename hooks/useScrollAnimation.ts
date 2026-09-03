import { useEffect } from "react";

import { useAnimation, useReducedMotion } from "framer-motion";
import { useInView } from "react-intersection-observer";

/**
 * Reveal sutil y único para las secciones al entrar en el viewport.
 */
export function useScrollAnimation() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0 });
  const controls = useAnimation();
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        transition: { duration: shouldReduceMotion ? 0 : 0.35, ease: "easeOut" },
      });
    }
  }, [inView, controls, shouldReduceMotion]);

  return { ref, controls, initial: shouldReduceMotion ? false : { opacity: 0 } };
}
