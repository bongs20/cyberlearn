"use client";

import { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import CaseStudyCard from "@/components/CaseStudyCard";
import { CASE_STUDIES } from "@/data/cases";
import { Lightbulb, ArrowLeft, CheckCircle2, Filter } from "lucide-react";

function StudiKasusContent() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category");

  const categories = ["Semua Kasus", "Phishing", "Malware", "Password Attack", "Social Engineering"];

  const [activeTab, setActiveTab] = useState<string>("Semua Kasus");
  const [solvedCount, setSolvedCount] = useState<number>(0);

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      if (categoryParam) {
        const matched = categories.find(
          (cat) => cat.toLowerCase() === categoryParam.toLowerCase()
        );
        if (matched) {
          setActiveTab(matched);
        }
      }
    }, 0);

    return () => window.clearTimeout(timeoutId);
  }, [categoryParam]);

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      const saved = localStorage.getItem("cyberlearn_cases_count");
      if (saved) {
        setSolvedCount(parseInt(saved, 10));
      }
    }, 0);

    return () => window.clearTimeout(timeoutId);
  }, []);

  const handleCaseSolved = () => {
    setSolvedCount((prev) => {
      const newCount = Math.min(CASE_STUDIES.length, prev + 1);
      if (typeof window !== "undefined") {
        localStorage.setItem("cyberlearn_cases_count", newCount.toString());
      }
      return newCount;
    });
  };

  const filteredCases = activeTab === "Semua Kasus"
    ? CASE_STUDIES
    : CASE_STUDIES.filter((item) => item.category.toLowerCase() === activeTab.toLowerCase());

  return (
    <div className="space-y-8 py-4">
      
      {/* Header Banner */}
      <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-purple-100 text-purple-800">
            <Lightbulb className="w-3.5 h-3.5 text-purple-600" />
            <span>Latihan Analisis Mandiri</span>
          </div>
          <h1 className="text-3xl font-bold text-[#17324D]">Studi Kasus Interaktif</h1>
          <p className="text-sm text-slate-600 max-w-xl">
            Uji kemampuan analisamu dengan memilih tindakan paling tepat untuk menghadapi skenario ancaman siber sehari-hari.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="px-4 py-2 rounded-xl bg-purple-50 border border-purple-200 text-purple-900 text-xs font-bold flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-purple-600" />
            <span>{solvedCount} / {CASE_STUDIES.length} Kasus Diselesaikan</span>
          </div>

          <Link
            href="/dashboard"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-white hover:bg-slate-50 text-[#17324D] text-sm font-bold border-2 border-slate-200 hover:border-blue-400 shadow-md hover:shadow-lg transition-all hover:scale-105 flex-shrink-0 group"
          >
            <ArrowLeft className="w-4 h-4 text-blue-600 group-hover:-translate-x-1 transition-transform" />
            <span>Dashboard</span>
          </Link>
        </div>
      </div>

      {/* Category Filter Tabs */}
      <div className="bg-white p-3 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-2 overflow-x-auto no-scrollbar">
        <div className="flex items-center gap-1.5 text-xs font-bold text-slate-400 px-3 py-1.5 border-r border-slate-200 flex-shrink-0">
          <Filter className="w-3.5 h-3.5 text-blue-600" />
          <span>Filter:</span>
        </div>

        {categories.map((cat) => {
          const isActive = activeTab === cat;
          return (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex-shrink-0 ${
                isActive
                  ? "bg-blue-600 text-white shadow-md scale-105"
                  : "bg-slate-50 text-slate-600 hover:bg-slate-100 hover:text-slate-900"
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Filtered Cases Count indicator */}
      <div className="flex items-center justify-between text-xs font-semibold text-slate-500 px-1">
        <span>Menampilkan <strong className="text-[#17324D]">{filteredCases.length}</strong> kasus {activeTab !== "Semua Kasus" && `kategori ${activeTab}`}</span>
        {activeTab !== "Semua Kasus" && (
          <button
            onClick={() => setActiveTab("Semua Kasus")}
            className="text-blue-600 hover:underline"
          >
            Tampilkan Semua Kasus
          </button>
        )}
      </div>

      {/* Case Studies List */}
      <div className="space-y-8">
        {filteredCases.map((caseItem) => (
          <CaseStudyCard key={caseItem.id} caseItem={caseItem} onSolved={handleCaseSolved} />
        ))}
      </div>

      {/* Navigation to Quiz */}
      <div className="bg-gradient-to-r from-[#17324D] to-blue-900 p-8 rounded-3xl text-white shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-1 text-center sm:text-left">
          <h3 className="text-xl font-bold text-white">Sudah Selesai Menganalisis Semua Kasus?</h3>
          <p className="text-xs sm:text-sm text-blue-200">
            Uji pemahaman akhirmu melalui kuis 10 soal untuk mendapatkan nilai evaluasi!
          </p>
        </div>

        <Link
          href="/kuis"
          className="px-8 py-3.5 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-extrabold text-sm shadow-lg transition-all hover:scale-105 flex-shrink-0"
        >
          Mulai Kuis Evaluasi →
        </Link>
      </div>

    </div>
  );
}

export default function StudiKasusPage() {
  return (
    <Suspense fallback={<div className="py-12 text-center text-slate-500 font-medium">Memuat Studi Kasus...</div>}>
      <StudiKasusContent />
    </Suspense>
  );
}
