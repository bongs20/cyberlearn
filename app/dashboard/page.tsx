"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import LearningCard from "@/components/LearningCard";
import ProgressBar from "@/components/ProgressBar";
import { CircleHelp, BookOpen, PlayCircle, ClipboardCheck, Award, Home } from "lucide-react";

export default function DashboardPage() {
  const [progress, setProgress] = useState({
    materiPercent: 0,
    casesSolved: 0,
    quizScore: 0,
    quizTaken: false,
  });

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      const savedQuizScore = localStorage.getItem("cyberlearn_quiz_score");
      const savedCasesCount = localStorage.getItem("cyberlearn_cases_count");
      const savedMateriCount = localStorage.getItem("cyberlearn_materi_count");

      const quizScoreNum = savedQuizScore ? parseInt(savedQuizScore, 10) : 0;
      const casesCountNum = savedCasesCount ? parseInt(savedCasesCount, 10) : 0;
      const materiCountNum = savedMateriCount ? parseInt(savedMateriCount, 10) : 0;

      setProgress({
        materiPercent: Math.min(100, Math.round((materiCountNum / 4) * 100)),
        casesSolved: casesCountNum,
        quizScore: quizScoreNum,
        quizTaken: savedQuizScore !== null,
      });
    }, 0);

    return () => window.clearTimeout(timeoutId);
  }, []);

  return (
    <div className="space-y-10 py-4">
      
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-[#17324D] to-blue-900 rounded-3xl p-6 sm:p-8 md:p-10 text-white shadow-xl border border-blue-800 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-6">
        <div className="space-y-3 w-full md:w-auto">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 bg-blue-950/80 px-3 py-1 rounded-full border border-blue-700/60">
              DASHBOARD PEMBELAJARAN
            </span>
            <Link
              href="/"
              className="text-xs font-semibold text-blue-200 hover:text-white bg-white/10 hover:bg-white/20 px-3 py-1 rounded-full border border-white/10 transition-colors inline-flex items-center gap-1"
            >
              <Home className="w-3 h-3 text-cyan-300" />
              <span>Kembali ke Beranda</span>
            </Link>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-white">Mari Mulai Belajar! 👋</h1>
          <p className="text-sm text-blue-100 max-w-xl leading-relaxed">
            Jelajahi materi, simak video, selesaikan studi kasus, dan uji pemahamanmu melalui kuis.
          </p>
        </div>

        {/* Quick Quiz Result Badge if completed */}
        {progress.quizTaken && (
          <div className="w-full md:w-auto md:flex-shrink-0 flex justify-center">
            <div className="bg-white/10 backdrop-blur-md px-8 py-5 rounded-2xl border border-white/20 text-center w-[200px] shadow-lg">
              <span className="text-[11px] font-bold text-cyan-300 uppercase tracking-wider block">Nilai Kuis Terakhir</span>
              <div className="text-5xl font-extrabold text-white mt-2">{progress.quizScore}</div>
              <span className="text-[11px] text-blue-200 mt-1 block">dari 100 poin</span>
            </div>
          </div>
        )}
      </div>

      {/* Progress Belajar Section */}
      <section className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4">
        <div className="flex items-center gap-2">
          <Award className="w-5 h-5 text-blue-600" />
          <h2 className="text-lg font-bold text-[#17324D]">Progress Belajar Kamu</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
          <ProgressBar
            label="Materi Dibaca"
            percentage={progress.materiPercent}
            valueText={`${progress.materiPercent}% (${Math.round((progress.materiPercent / 100) * 4)}/4 Ancaman)`}
            colorScheme="blue"
          />
          <ProgressBar
            label="Studi Kasus Selesai"
            percentage={(progress.casesSolved / 8) * 100}
            valueText={`${progress.casesSolved}/8 Kasus Selesai`}
            colorScheme="purple"
          />
          <ProgressBar
            label="Hasil Kuis / Evaluasi"
            percentage={progress.quizScore}
            valueText={progress.quizTaken ? `${progress.quizScore}/100 Poin` : "Belum Mengerjakan"}
            colorScheme="green"
          />
        </div>
      </section>

      {/* Main Interactive Menu Cards Grid (Sesuai Flowchart: 4 Pilihan Menu) */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-[#17324D]">Pilih Menu Utama</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1: Petunjuk */}
          <LearningCard
            title="1. Petunjuk"
            description="Pelajari cara menggunakan multimedia pembelajaran ini secara efektif."
            href="/petunjuk"
            icon={CircleHelp}
            badge="Panduan"
            accentColor="yellow"
          />

          {/* Card 2: Materi */}
          <LearningCard
            title="2. Materi"
            description="Pelajari 4 jenis ancaman siber utama beserta karakteristik & pencegahannya."
            href="/materi"
            icon={BookOpen}
            badge="4 Topik Utama"
            accentColor="blue"
          />

          {/* Card 3: Video Pembelajaran */}
          <LearningCard
            title="3. Video Pembelajaran"
            description="Simak video pembelajaran visual untuk memperkuat pemahaman keamanan siber."
            href="/video"
            icon={PlayCircle}
            badge="Media Video"
            accentColor="cyan"
          />

          {/* Card 4: Kuis / Evaluasi */}
          <LearningCard
            title="4. Kuis / Evaluasi"
            description="Uji pemahaman akhirmu melalui kuis 10 soal dan dapatkan penilaian otomatis."
            href="/kuis"
            icon={ClipboardCheck}
            badge="10 Soal Evaluasi"
            accentColor="purple"
          />

        </div>
      </section>

    </div>
  );
}
