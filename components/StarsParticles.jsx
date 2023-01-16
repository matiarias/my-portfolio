import { useCallback } from "react";

import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import StarsConfig from "../config/stars-particles.json";

const StarsParticles = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={StarsConfig}
      />
    </>
  );
};

export default StarsParticles;
