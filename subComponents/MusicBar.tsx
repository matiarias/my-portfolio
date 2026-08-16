import { useRef, useState } from "react";

import SvgAlien from "@/subComponents/SvgComponent";

// Fix #4: Un solo estado `isPlaying` en lugar de dos estados siempre sincronizados
const MusicBar = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const refMusic = useRef<HTMLAudioElement>(null);

  const handleClick = () => {
    if (isPlaying) {
      refMusic.current?.pause();
    } else {
      refMusic.current?.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div
      onClick={handleClick}
      className="shadow-lg shadow-gray-300"
      style={{
        position: "absolute",
        top: "100px",
        right: "30px",
        padding: "10px",
        cursor: "pointer",
        borderRadius: "100%",
      }}
    >
      <SvgAlien fill={isPlaying ? "#00af10" : "rgb(229,231,235)"} />

      <audio
        ref={refMusic}
        loop
        src="/assets/audio/dreamkid-fugitive.mp3"
      ></audio>
    </div>
  );
};

export default MusicBar;
