"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { Volume2, VolumeX, Play, Pause, RefreshCw } from "lucide-react";
import { useSound } from "@/hooks/useSound";

interface AudioPlayerProps {
  audioPath?: string;
  narrationText: string;
  title?: string;
}

export default function AudioPlayer({
  audioPath,
  narrationText,
  title = "Dengarkan Penjelasan Audio",
}: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isSpeechActive, setIsSpeechActive] = useState(false);
  const [isRealAudioPlaying, setIsRealAudioPlaying] = useState(false);
  const [isAudioValid, setIsAudioValid] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const { playPlay, playClick } = useSound();

  const stopAll = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    if (typeof window !== "undefined" && window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
    setIsPlaying(false);
    setIsSpeechActive(false);
    setIsRealAudioPlaying(false);
  }, []);

  useEffect(() => {
    const timeoutId = window.setTimeout(stopAll, 0);
    return () => window.clearTimeout(timeoutId);
  }, [audioPath, narrationText, stopAll]);

  const speakTextSync = useCallback(() => {
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      if (window.speechSynthesis.paused) {
        window.speechSynthesis.resume();
      }

      const utterance = new SpeechSynthesisUtterance(narrationText);
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
        setIsSpeechActive(true);
        setIsRealAudioPlaying(false);
      };

      utterance.onend = () => {
        setIsPlaying(false);
        setIsSpeechActive(false);
      };

      utterance.onerror = () => {
        setIsPlaying(false);
        setIsSpeechActive(false);
      };

      window.speechSynthesis.speak(utterance);
      if (window.speechSynthesis.paused) {
        window.speechSynthesis.resume();
      }
    } else {
      alert("Fitur narasi suara tidak didukung oleh peramban ini.");
    }
  }, [narrationText]);

  const playAudio = () => {
    stopAll();

    if (audioPath && isAudioValid && audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
          setIsRealAudioPlaying(true);
          setIsSpeechActive(false);
        })
        .catch((err) => {
          console.log("Audio MP3 fallback triggered for mobile:", err);
          speakTextSync();
        });
    } else {
      speakTextSync();
    }
  };

  const togglePlay = () => {
    if (isPlaying) {
      playClick();
      stopAll();
    } else {
      playPlay();
      playAudio();
    }
  };

  return (
    <div className="bg-gradient-to-r from-[#17324D] to-blue-900 text-white p-4 sm:p-5 rounded-2xl shadow-lg border border-blue-700/50 flex flex-col sm:flex-row items-center justify-between gap-4">
      {audioPath && (
        <audio
          ref={audioRef}
          src={audioPath}
          onError={() => setIsAudioValid(false)}
          onEnded={() => setIsPlaying(false)}
          preload="auto"
          crossOrigin="anonymous"
          className="hidden"
        />
      )}

      <div className="flex items-center gap-3 w-full sm:w-auto">
        <div className="p-3 bg-blue-600/80 rounded-xl text-cyan-300 shadow-md">
          {isPlaying ? <Volume2 className="w-6 h-6 animate-pulse" /> : <VolumeX className="w-6 h-6" />}
        </div>
        <div>
          <h4 className="font-semibold text-sm sm:text-base text-white flex items-center gap-2">
            <span>🔊</span> {title}
          </h4>
          <p className="text-xs text-blue-200">
            {isRealAudioPlaying
              ? "Memutar Rekaman Audio MP3 🎙️"
              : isSpeechActive
              ? "Memutar Narasi Suara Otomatis"
              : "Tekan tombol untuk mendengarkan rangkuman penjelasan di HP"}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
        <button
          onClick={togglePlay}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm transition-all shadow-md cursor-pointer ${
            isPlaying
              ? "bg-amber-500 hover:bg-amber-600 text-slate-950"
              : "bg-cyan-400 hover:bg-cyan-300 text-slate-950 hover:scale-105"
          }`}
        >
          {isPlaying ? (
            <>
              <Pause className="w-4 h-4" />
              <span>Jeda Narasi</span>
            </>
          ) : (
            <>
              <Play className="w-4 h-4 fill-slate-950" />
              <span>Dengarkan Penjelasan</span>
            </>
          )}
        </button>

        {isPlaying && (
          <button
            onClick={() => { playClick(); stopAll(); }}
            className="p-2.5 rounded-xl bg-blue-800/80 hover:bg-blue-700 text-blue-200 cursor-pointer"
            title="Hentikan Audio"
          >
            <RefreshCw className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
}

