import Image from "next/image";
import styles from "../../components/Loading/Loading.module.css";

import spaceImg from "../../public/assets/space-travel-1.jpg";
import rocket from "../../public/assets/LottieFiles/rocket.json";
import planet from "../../public/assets/LottieFiles/neptune-planet.json";

import Typewriter from "typewriter-effect";
import Lottie from "lottie-react";

const Loading = () => {
  return (
    <div className="relative h-screen w-screen">
      <Image
        style={{ objectFit: "cover", objectPosition: "center" }}
        src={spaceImg}
        alt="space galaxy"
        fill
      />

      <div className="absolute top-0 left-0 h-full w-full bg-black/10 flex flex-col justify-center items-center px-8">
        <div className="absolute top-2 left-6 h-[150px] w-[150px] md:h-[200px] md:w-[200px]">
          <Lottie animationData={planet} />
        </div>

        <div className="h-[250px] w-[250px] sm:h-[300px] sm:w-[300px] md:h-[400px] md:w-[400px]">
          <Lottie animationData={rocket} />
        </div>

        <h1 className="text-cyan-300 font-bold text-4xl md:text-5xl lg:text-6xl text-center">
          <Typewriter
            options={{
              strings: ["Take your Seats, Please!!!"],
              autoStart: true,
              loop: true,
            }}
          />
        </h1>
      </div>

      <div className={styles.stars__container}>
        <span className={styles.star}></span>
        <span className={styles.star}></span>
        <span className={styles.star}></span>
        <span className={styles.star}></span>
        <span className={styles.star}></span>
        <span className={styles.star}></span>
        <span className={styles.star}></span>
        <span className={styles.star}></span>
        <span className={styles.star}></span>
        <span className={styles.star}></span>
      </div>
    </div>
  );
};

export default Loading;
