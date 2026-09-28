"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import confetti from "canvas-confetti";
import { Trophy, RefreshCw, LayoutDashboard, CheckCircle, BookOpen } from "lucide-react";

interface ScoreCardProps {
  score: number;
  correctCount: number;
  totalCount: number;
  onRetry: () => void;
}

export default function ScoreCard({
  score,
  correctCount,
  totalCount,
  onRetry,
}: ScoreCardProps) {
  const winAudioRef = useRef<HTMLAudioElement | null>(null);
  
  useEffect(() => {
    if (score >= 75) {
      // Trigger confetti animation for high scores
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
    }

    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      const message = score > 80
        ? `Yeay! Nilai kamu ${score}. Kerja bagus dan pertahankan pemahaman keamanan sibernya!`
        : null;

      if (message) {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(message);
        utterance.lang = "id-ID";
        utterance.rate = 0.95;
        utterance.pitch = score > 80 ? 1.15 : 1;
        window.speechSynthesis.speak(utterance);
      }
    }

    if (winAudioRef.current) {
      winAudioRef.current.currentTime = 0;
      winAudioRef.current.volume = 0.45;
      void winAudioRef.current.play().catch(() => undefined);
    }

    return () => {
      if (typeof window !== "undefined" && "speechSynthesis" in window) {
        window.speechSynthesis.cancel();
      }
      if (winAudioRef.current) {
        winAudioRef.current.pause();
        winAudioRef.current.currentTime = 0;
      }
    };
  }, [score]);

  const getFeedback = (scoreVal: number) => {
    if (scoreVal >= 90) {
      return {
        badge: "Sangat Baik! 🌟",
        badgeStyle: "bg-emerald-100 text-emerald-800 border-emerald-300",
        text: "Pemahamanmu tentang keamanan siber sangat baik. Kamu telah menguasai konsep ancaman dan cara pencegahannya dengan sempurna!",
      };
    } else if (scoreVal >= 75) {
      return {
        badge: "Sudah Baik! 👍",
        badgeStyle: "bg-blue-100 text-blue-800 border-blue-300",
        text: "Pemahamanmu sudah baik. Pelajari kembali beberapa materi untuk memperkuat pemahamanmu tentang keamanan digital.",
      };
    } else if (scoreVal >= 60) {
      return {
        badge: "Cukup Baik! 📚",
        badgeStyle: "bg-amber-100 text-amber-800 border-amber-300",
        text: "Kamu sudah memahami beberapa konsep dasar. Coba pelajari kembali materi sebelum mengulang kuis.",
      };
    } else {
      return {
        badge: "Perlu Latihan 💡",
        badgeStyle: "bg-rose-100 text-rose-800 border-rose-300",
        text: "Yuk pelajari kembali materi dan coba kerjakan kuis sekali lagi agar pemahamanmu makin mantap.",
      };
    }
  };

  const feedback = getFeedback(score);

  return (
    <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-2xl text-center max-w-2xl mx-auto space-y-8 animate-in zoom-in-95 duration-300">
      <audio ref={winAudioRef} src="/audio/menang.mp3" preload="auto" />
      
      {/* Trophy Badge */}
      <div className="relative inline-block">
        <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-blue-600 to-[#17324D] text-cyan-300 flex items-center justify-center mx-auto shadow-xl">
          <Trophy className="w-12 h-12" />
        </div>
        <span className="absolute -top-2 -right-2 px-3 py-1 bg-yellow-400 text-slate-950 font-extrabold text-xs rounded-full shadow-md">
          {score >= 75 ? "LULUS" : "REMEDIAL"}
        </span>
      </div>

      {/* Header Title */}
      <div className="space-y-2">
        <h2 className="text-3xl font-extrabold text-[#17324D]">Evaluasi Selesai! 🎉</h2>
        <p className="text-sm text-slate-500 font-medium">
          Berikut adalah ringkasan hasil evaluasi pemahaman keamanan siber Anda.
        </p>
      </div>

      {/* Score Box */}
      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200/80 space-y-4">
        <div className="space-y-1">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Nilai Akhir Kamu:</span>
          <div className="text-6xl font-black text-blue-600 tracking-tight">{score}</div>
        </div>

        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold bg-white border border-slate-200 text-slate-700 shadow-sm">
          <CheckCircle className="w-4 h-4 text-emerald-500" />
          <span>Jawaban Benar: <strong className="text-[#17324D]">{correctCount}</strong> dari {totalCount} soal</span>
        </div>
      </div>

      {/* Feedback Badge & Description */}
      <div className="space-y-3">
        <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-bold border ${feedback.badgeStyle}`}>
          {feedback.badge}
        </span>
        <p className="text-sm text-slate-700 leading-relaxed font-medium px-4">
          &quot;{feedback.text}&quot;
        </p>
      </div>

      {/* Action Buttons */}
      <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
        <button
          onClick={onRetry}
          className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-bold text-sm bg-blue-600 hover:bg-blue-700 text-white shadow-lg transition-all hover:scale-105 flex items-center justify-center gap-2"
        >
          <RefreshCw className="w-4 h-4" />
          <span>Ulangi Kuis</span>
        </button>

        <Link
          href="/materi"
          className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-bold text-sm bg-slate-100 hover:bg-slate-200 text-slate-800 transition-all flex items-center justify-center gap-2"
        >
          <BookOpen className="w-4 h-4" />
          <span>Pelajari Materi Lagi</span>
        </Link>

        <Link
          href="/dashboard"
          className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-bold text-sm bg-[#17324D] hover:bg-slate-900 text-white shadow-md transition-all flex items-center justify-center gap-2"
        >
          <LayoutDashboard className="w-4 h-4 text-cyan-400" />
          <span>Kembali ke Dashboard</span>
        </Link>
      </div>

    </div>
  );
}
