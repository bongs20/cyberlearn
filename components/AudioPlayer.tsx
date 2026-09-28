"use client";

import { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX, Play, Pause, RefreshCw, Sparkles } from "lucide-react";

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
  const [isEnhanced, setIsEnhanced] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const sourceNodeRef = useRef<MediaElementAudioSourceNode | null>(null);

  const setupWebAudioFilter = () => {
    if (!audioRef.current || audioCtxRef.current) return;

    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = new AudioCtx();
      audioCtxRef.current = ctx;

      const source = ctx.createMediaElementSource(audioRef.current);
      sourceNodeRef.current = source;

      // Filter 1: Highpass to eliminate low-frequency room noise & mic rumble (< 80Hz)
      const highPass = ctx.createBiquadFilter();
      highPass.type = "highpass";
      highPass.frequency.value = 80;

      // Filter 2: Peaking filter to enhance vocal presence & clarity (3000Hz)
      const vocalClarity = ctx.createBiquadFilter();
      vocalClarity.type = "peaking";
      vocalClarity.frequency.value = 3000;
      vocalClarity.Q.value = 1.2;
      vocalClarity.gain.value = 3.5;

      // Compressor: Smooth out volume spikes and normalize voice levels
      const compressor = ctx.createDynamicsCompressor();
      compressor.threshold.value = -24;
      compressor.knee.value = 30;
      compressor.ratio.value = 12;
      compressor.attack.value = 0.003;
      compressor.release.value = 0.25;

      // Connect nodes: Source -> HighPass -> VocalClarity -> Compressor -> Output
      source.connect(highPass);
      highPass.connect(vocalClarity);
      vocalClarity.connect(compressor);
      compressor.connect(ctx.destination);
    } catch (e) {
      console.log("Web Audio API Filter not supported or already attached:", e);
    }
  };

  const stopAll = () => {
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
  };

  useEffect(() => {
    const timeoutId = window.setTimeout(stopAll, 0);

    return () => window.clearTimeout(timeoutId);
  }, [audioPath, narrationText]);

  const togglePlay = () => {
    if (isPlaying) {
      stopAll();
    } else {
      playAudio();
    }
  };

  const playAudio = () => {
    stopAll();

    // Try HTML5 Audio element first if audioPath exists
    if (audioPath && audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
          setIsRealAudioPlaying(true);
          setIsSpeechActive(false);
        })
        .catch((err) => {
          console.log("Audio MP3 fallback triggered:", err);
          speakText();
        });
    } else {
      speakText();
    }
  };

  const speakText = () => {
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.cancel();

      const utterance = new SpeechSynthesisUtterance(narrationText);
      utterance.lang = "id-ID";
      utterance.rate = 0.95;

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
    } else {
      alert("Fitur narasi suara tidak didukung oleh peramban ini.");
    }
  };

  return (
    <div className="bg-gradient-to-r from-[#17324D] to-blue-900 text-white p-4 sm:p-5 rounded-2xl shadow-lg border border-blue-700/50 flex flex-col sm:flex-row items-center justify-between gap-4">
      
      {/* HTML5 audio element for MP3 */}
      {audioPath && (
        <audio
          ref={audioRef}
          src={audioPath}
          onEnded={() => setIsPlaying(false)}
          preload="auto"
          crossOrigin="anonymous"
        />
      )}

      {/* Info & Title */}
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
              ? "Memutar Narasi Suara Otomatis (Web Speech API)"
              : "Klik tombol untuk mendengarkan rangkuman penjelasan"}
          </p>
        </div>
      </div>

      {/* Play Controls & Enhancer Toggle */}
      <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
        
        {/* Voice enhancement toggle removed per request */}

        {/* Play / Pause Button */}
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
            onClick={stopAll}
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
