"use client";

import { useEffect, useRef } from "react";
import { Play } from "lucide-react";
import { useSound } from "@/hooks/useSound";

interface QuizAtmosphereProps {
  hasStarted: boolean;
  onStart: () => void;
}

export default function QuizAtmosphere({ hasStarted, onStart }: QuizAtmosphereProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const { playClick } = useSound();

  const startMusic = () => {
    if (!audioRef.current) return;

    audioRef.current.currentTime = 0;
    audioRef.current.volume = 0.35;
    void audioRef.current.play().then(onStart).catch(onStart);
  };

  const handleStart = () => {
    playClick();
    startMusic();
    onStart();
  };

  useEffect(() => () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  }, []);

  return (
    <>
      <audio ref={audioRef} src="/audio/musik%20kuis.mp3" loop preload="auto" />
      {!hasStarted && (
        <button
          type="button"
          onClick={handleStart}
          className="mb-5 inline-flex min-h-11 items-center gap-2 rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-bold text-white shadow-md transition hover:bg-blue-700"
        >
          <Play className="h-4 w-4" />
          Mulai Kuis
        </button>
      )}
    </>
  );
}
