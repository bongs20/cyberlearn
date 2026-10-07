"use client";

import { useEffect, useRef } from "react";

interface WelcomeAudioProps {
  audioPath: string;
}

export default function WelcomeAudio({ audioPath }: WelcomeAudioProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const hasStartedRef = useRef(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const welcomeText =
      "Selamat datang di multimedia pembelajaran interaktif Mengenal Ancaman Siber. Mari belajar mengenali ancaman digital dan cara melindungi diri.";

    const speakWelcome = () => {
      if (hasStartedRef.current || typeof window === "undefined" || !("speechSynthesis" in window)) return;
      hasStartedRef.current = true;
      window.speechSynthesis.cancel();
      if (window.speechSynthesis.paused) {
        window.speechSynthesis.resume();
      }

      const utterance = new SpeechSynthesisUtterance(welcomeText);
      utterance.lang = "id-ID";
      utterance.rate = 0.95;
      utterance.volume = 1.0;

      const voices = window.speechSynthesis.getVoices();
      const idVoice = voices.find((v) => v.lang.includes("id") || v.lang.includes("ID"));
      if (idVoice) {
        utterance.voice = idVoice;
      }

      window.speechSynthesis.speak(utterance);
    };

    const startAudio = () => {
      if (hasStartedRef.current) return;

      audio.currentTime = 0;
      audio
        .play()
        .then(() => {
          hasStartedRef.current = true;
        })
        .catch(() => speakWelcome());
    };

    audio.volume = 1;
    startAudio();

    window.addEventListener("pointerdown", startAudio, { once: true });
    window.addEventListener("touchstart", startAudio, { once: true });
    window.addEventListener("keydown", startAudio, { once: true });
    window.addEventListener("click", startAudio, { once: true });

    return () => {
      audio.pause();
      audio.currentTime = 0;
      window.removeEventListener("pointerdown", startAudio);
      window.removeEventListener("touchstart", startAudio);
      window.removeEventListener("keydown", startAudio);
      window.removeEventListener("click", startAudio);
      if (typeof window !== "undefined" && "speechSynthesis" in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, [audioPath]);

  return <audio ref={audioRef} src={audioPath} autoPlay preload="auto" className="hidden" aria-hidden="true" />;
}



