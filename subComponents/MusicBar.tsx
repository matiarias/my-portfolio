import { useRef, useState } from "react";
import { TbPlayerPause, TbPlayerPlay } from "react-icons/tb";

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
        className={`inline-flex h-11 w-11 items-center justify-center rounded-full border bg-violet-950/60 transition-[color,transform,box-shadow,border-color] duration-200 hover:-translate-y-0.5 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cosmic-cyan-300 ${isPlaying ? "border-cosmic-cyan-300/70 text-cosmic-cyan-200 shadow-[0_0_18px_rgba(103,232,249,0.24)]" : "border-cosmic-cyan-300/30 text-slate-100 hover:border-cosmic-cyan-300"}`}
        aria-label={isPlaying ? content.music.pause : content.music.play}
        aria-pressed={isPlaying}
        aria-describedby={playbackError ? "music-status" : undefined}
        title={playbackError || undefined}
      >
        {isPlaying ? <TbPlayerPause size={24} aria-hidden="true" /> : <TbPlayerPlay size={24} aria-hidden="true" />}

        <audio
          ref={refMusic}
          loop
          preload="metadata"
          src="/assets/audio/retro-evenings.mp3"
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
