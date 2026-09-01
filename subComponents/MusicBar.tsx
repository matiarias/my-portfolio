import { useRef, useState } from "react";

import SvgAlien from "@/subComponents/SvgComponent";

// Fix #4: Un solo estado `isPlaying` en lugar de dos estados siempre sincronizados
const MusicBar = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [playbackError, setPlaybackError] = useState("");
  const refMusic = useRef<HTMLAudioElement>(null);

  const handleClick = async () => {
    const audio = refMusic.current;

    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      try {
        setPlaybackError("");
        await audio.play();
      } catch {
        setIsPlaying(false);
        setPlaybackError("Music could not be played.");
      }
    }
  };

  return (
    <div className="absolute right-[30px] top-[100px]">
      <button
        type="button"
        onClick={handleClick}
        className="rounded-full p-2.5 shadow-lg shadow-gray-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
        aria-label={isPlaying ? "Pause background music" : "Play background music"}
        aria-pressed={isPlaying}
        aria-describedby={playbackError ? "music-status" : undefined}
        title={playbackError || undefined}
      >
        <SvgAlien fill={isPlaying ? "#00af10" : "rgb(229,231,235)"} />

        <audio
          ref={refMusic}
          loop
          preload="metadata"
          src="/assets/audio/dreamkid-fugitive.mp3"
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onError={() => setPlaybackError("Music could not be played.")}
        />
      </button>

      <span id="music-status" role="status" aria-live="polite" className={playbackError ? "absolute right-0 top-full mt-2 w-max rounded bg-violet-950/95 px-3 py-2 text-xs text-slate-100" : "sr-only"}>
        {playbackError}
      </span>
    </div>
  );
};

export default MusicBar;
