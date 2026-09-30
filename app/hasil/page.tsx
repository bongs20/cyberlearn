"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import ScoreCard from "@/components/ScoreCard";
import { useSound } from "@/hooks/useSound";

export default function HasilPage() {
  const [score, setScore] = useState<number | null>(null);
  const [correctCount, setCorrectCount] = useState<number>(0);
  const router = useRouter();
  const { playClick } = useSound();

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      const savedScore = localStorage.getItem("cyberlearn_quiz_score");
      const savedCorrect = localStorage.getItem("cyberlearn_quiz_correct");

      if (savedScore !== null) {
        setScore(parseInt(savedScore, 10));
        setCorrectCount(savedCorrect ? parseInt(savedCorrect, 10) : Math.round(parseInt(savedScore, 10) / 10));
      }
    }, 0);

    return () => window.clearTimeout(timeoutId);
  }, []);

  const handleRetry = () => {
    playClick();
    router.push("/kuis");
  };

  if (score === null) {
    return (
      <div className="max-w-xl mx-auto py-12 text-center bg-white p-8 rounded-3xl border border-slate-200 shadow-lg space-y-4">
        <h2 className="text-xl font-bold text-[#17324D]">Belum Ada Hasil Kuis</h2>
        <p className="text-sm text-slate-600">
          Kamu belum mengerjakan kuis evaluasi. Silakan kerjakan kuis terlebih dahulu untuk melihat nilai.
        </p>
        <button
          onClick={() => { playClick(); router.push("/kuis"); }}
          className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md transition-all"
        >
          Kerjakan Kuis Sekarang
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto py-6">
      <ScoreCard
        score={score}
        correctCount={correctCount}
        totalCount={10}
        onRetry={handleRetry}
      />
    </div>
  );
}
