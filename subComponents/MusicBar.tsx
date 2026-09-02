import { useRef, useState } from "react";

import SvgAlien from "@/subComponents/SvgComponent";
import { usePortfolioContent } from "@/hooks/usePortfolioContent";

// Fix #4: Un solo estado `isPlaying` en lugar de dos estados siempre sincronizados
const MusicBar = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [playbackError, setPlaybackError] = useState("");
  const refMusic = useRef<HTMLAudioElement>(null);
  const content = usePortfolioContent();

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
        setPlaybackError(content.music.error);
      }
    }
  };

  return (
    <div className="relative shrink-0">
      <button
        type="button"
        onClick={handleClick}
        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-cosmic-cyan-300/30 bg-violet-950/60 text-slate-100 transition hover:-translate-y-0.5 hover:border-cosmic-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cosmic-cyan-300"
        aria-label={isPlaying ? content.music.pause : content.music.play}
        aria-pressed={isPlaying}
        aria-describedby={playbackError ? "music-status" : undefined}
        title={playbackError || undefined}
      >
        <SvgAlien
          width={24}
          height={24}
          fill={isPlaying ? "#86efac" : "rgb(226,232,240)"}
        />

        <audio
          ref={refMusic}
          loop
          preload="metadata"
          src="/assets/audio/dreamkid-fugitive.mp3"
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onError={() => setPlaybackError(content.music.error)}
        />
      </button>

      <span id="music-status" role="status" aria-live="polite" className={playbackError ? "absolute bottom-full left-0 mb-2 w-max rounded bg-violet-950/95 px-3 py-2 text-xs text-slate-100" : "sr-only"}>
        {playbackError}
      </span>
    </div>
  );
};

export default MusicBar;
