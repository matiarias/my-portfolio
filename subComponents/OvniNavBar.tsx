import { memo } from "react";

import Lottie from "lottie-react";

import Ovni from "@/public/assets/LottieFiles/ovni-navbar.json";

// Fix #6: memo para evitar re-renders innecesarios cuando NavBar actualiza su estado
const OvniNavBar = memo(function OvniNavBar() {
  return <Lottie animationData={Ovni} />;
});

export default OvniNavBar;
