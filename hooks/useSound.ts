"use client";

import { useCallback } from "react";
import { useSoundContext } from "@/contexts/SoundContext";

/**
 * Reusable hook untuk memutar sound effect.
 *
 * Usage:
 *   const { playClick, playSelect, playCorrect, playWrong, playComplete, playPlay } = useSound();
 */
export function useSound() {
  const { playSound } = useSoundContext();

  const playClick    = useCallback(() => playSound("click"),    [playSound]);
  const playSelect   = useCallback(() => playSound("select"),   [playSound]);
  const playPlay     = useCallback(() => playSound("play"),     [playSound]);
  const playCorrect  = useCallback(() => playSound("correct"),  [playSound]);
  const playWrong    = useCallback(() => playSound("wrong"),    [playSound]);
  const playComplete = useCallback(() => playSound("complete"), [playSound]);

  return { playClick, playSelect, playPlay, playCorrect, playWrong, playComplete };
}
