import { useEffect } from "react";

import { useAnimation } from "framer-motion";
import type { TargetAndTransition } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface AnimationValues {
  visible: TargetAndTransition;
  hidden: TargetAndTransition;
}

const DEFAULT_FADE_BLUR: AnimationValues = {
  visible: { opacity: 1, filter: "blur(0px)", transition: { duration: 0.7 } },
  hidden: { opacity: 0, filter: "blur(15px)" },
};

export const SLIDE_FROM_LEFT: AnimationValues = {
  visible: {
    x: 0,
    transition: { type: "spring", duration: 0.7, bounce: 0.2 },
  },
  hidden: { x: "-100%" },
};

/**
 * Hook reutilizable para animar elementos al entrar/salir del viewport.
 * @param config - Configuración de animación visible/hidden. Por defecto: fade + blur.
 */
export function useScrollAnimation(config: AnimationValues = DEFAULT_FADE_BLUR) {
  const { ref, inView } = useInView();
  const controls = useAnimation();

  useEffect(() => {
    controls.start(inView ? config.visible : config.hidden);
  }, [inView, controls, config.visible, config.hidden]);

  return { ref, controls };
}
