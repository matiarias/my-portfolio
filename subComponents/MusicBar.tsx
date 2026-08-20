import { useRef, useState } from "react";

import SvgAlien from "@/subComponents/SvgComponent";

// Fix #4: Un solo estado `isPlaying` en lugar de dos estados siempre sincronizados
const MusicBar = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const refMusic = useRef<HTMLAudioElement>(null);

  const handleClick = async () => {
    const audio = refMusic.current;

    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      try {
        await audio.play();
      } catch {
        setIsPlaying(false);
      }
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="rounded-full p-2.5 shadow-lg shadow-gray-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
      aria-label={isPlaying ? "Pause background music" : "Play background music"}
      aria-pressed={isPlaying}
      style={{
        position: "absolute",
        top: "100px",
        right: "30px",
        cursor: "pointer",
      }}
    >
      <SvgAlien fill={isPlaying ? "#00af10" : "rgb(229,231,235)"} />

      <audio
        ref={refMusic}
        loop
        src="/assets/audio/dreamkid-fugitive.mp3"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />
    </button>
  );
};

export default MusicBar;
