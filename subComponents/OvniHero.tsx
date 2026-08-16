import { memo } from "react";

import Lottie from "lottie-react";

import Ovni2 from "@/public/assets/LottieFiles/ovni-hero.json";

// Fix #6: memo para evitar re-renders innecesarios
const OvniHero = memo(function OvniHero() {
  return <Lottie animationData={Ovni2} />;
});

export default OvniHero;
