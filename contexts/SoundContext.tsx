"use client";

import React, { createContext, useContext, useState, useRef, useCallback, useEffect } from "react";

type SoundType = "click" | "select" | "play" | "correct" | "wrong" | "complete";

interface SoundContextValue {
  soundEnabled: boolean;
  toggleSound: () => void;
  playSound: (type: SoundType) => void;
}

const SoundContext = createContext<SoundContextValue>({
  soundEnabled: true,
  toggleSound: () => {},
  playSound: () => {},
});

const SOUND_CONFIG: Record<SoundType, { src: string; volume: number }> = {
  click:    { src: "/audio/click.mp3",    volume: 0.30 },
  select:   { src: "/audio/select.mp3",   volume: 0.28 },
  play:     { src: "/audio/play.mp3",     volume: 0.32 },
  correct:  { src: "/audio/correct.mp3",  volume: 0.40 },
  wrong:    { src: "/audio/wrong.mp3",    volume: 0.38 },
  complete: { src: "/audio/complete.mp3", volume: 0.42 },
};

/** Debounce per-type: minimum ms between plays of the same sound */
const DEBOUNCE_MS = 300;

export function SoundProvider({ children }: { children: React.ReactNode }) {
  const [soundEnabled, setSoundEnabled] = useState(true);
  const audioCache = useRef<Partial<Record<SoundType, HTMLAudioElement>>>({});
  const lastPlayed = useRef<Partial<Record<SoundType, number>>>({});
  const hasInteracted = useRef(false);

  /** Pre-load audio elements once */
  useEffect(() => {
    if (typeof window === "undefined") return;
    (Object.keys(SOUND_CONFIG) as SoundType[]).forEach((type) => {
      const el = new Audio(SOUND_CONFIG[type].src);
      el.preload = "auto";
      el.volume = SOUND_CONFIG[type].volume;
      audioCache.current[type] = el;
    });
  }, []);

  const playSound = useCallback(
    (type: SoundType) => {
      if (!soundEnabled) return;
      if (typeof window === "undefined") return;

      const now = Date.now();
      const last = lastPlayed.current[type] ?? 0;
      if (now - last < DEBOUNCE_MS) return; // debounce rapid clicks
      lastPlayed.current[type] = now;

      hasInteracted.current = true;

      const audio = audioCache.current[type];
      if (!audio) return;

      audio.currentTime = 0;
      void audio.play().catch(() => {
        // Browser may block if user hasn't interacted yet — silently ignore
      });
    },
    [soundEnabled]
  );

  const toggleSound = useCallback(() => {
    setSoundEnabled((prev) => !prev);
  }, []);

  return (
    <SoundContext.Provider value={{ soundEnabled, toggleSound, playSound }}>
      {children}
    </SoundContext.Provider>
  );
}

export function useSoundContext() {
  return useContext(SoundContext);
}
