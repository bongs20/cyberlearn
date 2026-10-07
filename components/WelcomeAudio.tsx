"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { Volume2, VolumeX, Play, Pause } from "lucide-react";
import { useSound } from "@/hooks/useSound";

interface WelcomeAudioProps {
  audioPath: string;
}

export default function WelcomeAudio({ audioPath }: WelcomeAudioProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isAudioValid, setIsAudioValid] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const { playClick, playPlay } = useSound();

  const welcomeText =
    "Selamat datang di multimedia pembelajaran interaktif Mengenal Ancaman Siber. Mari belajar mengenali ancaman digital dan cara melindungi diri.";

  const stopAudio = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.cancel();
    }
    setIsPlaying(false);
  }, []);

  const speakWelcomeSync = useCallback(() => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) {
      alert("Fitur narasi suara tidak didukung di perangkat ini.");
      return;
    }

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

    utterance.onstart = () => {
      setIsPlaying(true);
    };

    utterance.onend = () => {
      setIsPlaying(false);
    };

    utterance.onerror = (e) => {
      console.warn("Speech error:", e);
      setIsPlaying(false);
    };

    window.speechSynthesis.speak(utterance);
    
    if (window.speechSynthesis.paused) {
      window.speechSynthesis.resume();
    }
  }, [welcomeText]);

  const handleToggle = () => {
    if (isPlaying) {
      playClick();
      stopAudio();
      return;
    }

    playPlay();

    if (!isAudioValid || !audioPath) {
      speakWelcomeSync();
      return;
    }

    const audio = audioRef.current;
    if (audio) {
      audio.currentTime = 0;
      audio
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch(() => {
          speakWelcomeSync();
        });
    } else {
      speakWelcomeSync();
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.getVoices();
      if (window.speechSynthesis.onvoiceschanged !== undefined) {
        window.speechSynthesis.onvoiceschanged = () => {
          window.speechSynthesis.getVoices();
        };
      }
    }

    return () => {
      stopAudio();
    };
  }, [stopAudio]);

  return (
    <div className="w-full max-w-4xl mx-auto my-4 px-2">
      <audio
        ref={audioRef}
        src={audioPath}
        onError={() => setIsAudioValid(false)}
        onEnded={() => setIsPlaying(false)}
        preload="auto"
        className="hidden"
      />
      <div className="bg-gradient-to-r from-[#17324D] to-blue-900 text-white p-4 sm:p-5 rounded-2xl shadow-xl border border-cyan-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-blue-600/80 rounded-xl text-cyan-300 shadow-md">
            {isPlaying ? (
              <Volume2 className="w-6 h-6 animate-pulse text-cyan-300" />
            ) : (
              <VolumeX className="w-6 h-6 text-blue-300" />
            )}
          </div>
          <div>
            <h4 className="font-bold text-sm sm:text-base text-white flex items-center gap-2">
              <span>🎙️</span> Narasi Suara Sambutan
            </h4>
            <p className="text-xs text-blue-200">
              {isPlaying
                ? "Sedang memutar suara penjelasan sambutan..."
                : "Tekan tombol untuk mendengarkan narasi suara sambutan di HP"}
            </p>
          </div>
        </div>

        <button
          onClick={handleToggle}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-extrabold text-sm transition-all shadow-md cursor-pointer ${
            isPlaying
              ? "bg-amber-400 hover:bg-amber-300 text-slate-950"
              : "bg-cyan-400 hover:bg-cyan-300 text-slate-950 hover:scale-105"
          }`}
        >
          {isPlaying ? (
            <>
              <Pause className="w-4 h-4 fill-slate-950" />
              <span>Jeda Suara</span>
            </>
          ) : (
            <>
              <Play className="w-4 h-4 fill-slate-950" />
              <span>Putar Suara Sambutan</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}


