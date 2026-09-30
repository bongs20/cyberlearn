"use client";

import { Volume2, VolumeX } from "lucide-react";
import { useSoundContext } from "@/contexts/SoundContext";

export default function SoundToggle() {
  const { soundEnabled, toggleSound, playSound } = useSoundContext();

  const handleToggle = () => {
    // Play click BEFORE toggling so it's heard when turning ON
    if (!soundEnabled) playSound("click");
    toggleSound();
  };

  return (
    <button
      onClick={handleToggle}
      title={soundEnabled ? "Sound ON — Klik untuk matikan suara" : "Sound OFF — Klik untuk nyalakan suara"}
      aria-label={soundEnabled ? "Matikan sound effect" : "Nyalakan sound effect"}
      className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-all border ${
        soundEnabled
          ? "bg-cyan-500/20 border-cyan-400/40 text-cyan-300 hover:bg-cyan-500/30"
          : "bg-white/10 border-white/10 text-blue-300 hover:bg-white/20"
      }`}
    >
      {soundEnabled ? (
        <Volume2 className="w-3.5 h-3.5" />
      ) : (
        <VolumeX className="w-3.5 h-3.5" />
      )}
      <span className="hidden sm:inline">{soundEnabled ? "ON" : "OFF"}</span>
    </button>
  );
}
