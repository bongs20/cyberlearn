"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import AudioPlayer from "@/components/AudioPlayer";
import { ThreatMaterial } from "@/data/materials";
import { ArrowLeft, Lightbulb, CheckCircle2, AlertTriangle, ShieldCheck, HelpCircle, Layers } from "lucide-react";
import { useSound } from "@/hooks/useSound";

interface ThreatDetailTemplateProps {
  material: ThreatMaterial;
}

export default function ThreatDetailTemplate({ material }: ThreatDetailTemplateProps) {
  const { playClick, playSelect } = useSound();
  
  useEffect(() => {
    // Save progress in localStorage when user views detail page
    if (typeof window !== "undefined") {
      const readSet = JSON.parse(localStorage.getItem("cyberlearn_read_materi") || "[]");
      if (!readSet.includes(material.id)) {
        readSet.push(material.id);
        localStorage.setItem("cyberlearn_read_materi", JSON.stringify(readSet));
        localStorage.setItem("cyberlearn_materi_count", readSet.length.toString());
      }
    }
  }, [material.id]);

  return (
    <div className="space-y-8 py-4">
      
      {/* Top Navigation & Header */}
      <div className="flex flex-col items-stretch gap-5 bg-white p-4 sm:p-8 rounded-3xl border border-slate-200 shadow-sm">
        <div className="flex min-w-0 flex-row items-center gap-3 sm:gap-4">
          <div className="material-visual relative h-24 min-h-[6rem] w-32 min-w-[8rem] flex-shrink-0 overflow-hidden rounded-3xl bg-slate-100 sm:h-36 sm:min-h-[9rem] sm:w-52 sm:min-w-0">
            <Image
              src={material.imagePath}
              alt={`Ilustrasi ${material.title}`}
              fill
              priority
              sizes="(min-width: 640px) 160px, 128px"
              className="material-image object-contain"
            />
          </div>
          <div className="min-w-0 space-y-2 text-left">
            <span className="inline-block max-w-full whitespace-normal text-xs font-bold px-3 py-1 rounded-full bg-blue-100 text-blue-800 uppercase tracking-wider">
              Detail Materi
            </span>
            <h1 className="break-words text-xl sm:text-3xl md:text-4xl font-extrabold text-[#17324D] leading-tight">
              {material.title}
            </h1>
          </div>
        </div>

        <div className="flex w-full flex-col items-stretch gap-3 sm:flex-row sm:items-center">
          <Link
            href="/materi"
            onClick={playClick}
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-center text-xs font-bold text-[#17324D] shadow-sm transition-all hover:scale-105 hover:border-blue-400 hover:bg-slate-50 hover:shadow-md group sm:flex-1"
          >
            <ArrowLeft className="w-4 h-4 text-blue-600 group-hover:-translate-x-1 transition-transform" />
            <span>Kembali ke Materi</span>
          </Link>

          <Link
            href={`/studi-kasus?category=${encodeURIComponent(material.title)}`}
            onClick={playSelect}
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-2.5 text-center text-xs font-bold text-white shadow-md transition-all hover:scale-105 hover:bg-blue-700 sm:flex-1"
          >
            <Lightbulb className="w-4 h-4 text-yellow-300" />
            <span className="break-words">Studi Kasus {material.title}</span>
          </Link>
        </div>
      </div>

      {/* Audio Narration Component */}
      <AudioPlayer
        audioPath={material.audioPath}
        narrationText={material.narrationText}
        title={`Dengarkan Penjelasan ${material.title}`}
      />

      {/* Content Section 1: Apa Itu & Cara Kerja */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Apa itu? */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4">
          <div className="flex min-w-0 items-start gap-2 border-b border-slate-100 pb-3 text-blue-600 font-bold text-base sm:text-lg">
            <HelpCircle className="w-5 h-5 text-blue-600" />
            <h2 className="min-w-0 break-words text-[#17324D]">Apa itu {material.title}?</h2>
          </div>
          <p className="text-sm text-slate-700 leading-relaxed font-medium">
            {material.definition}
          </p>
        </div>

        {/* Bagaimana cara kerjanya? */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4">
          <div className="flex min-w-0 items-start gap-2 border-b border-slate-100 pb-3 text-base font-bold text-purple-600 sm:text-lg">
            <Layers className="w-5 h-5 text-purple-600" />
            <h2 className="min-w-0 break-words text-[#17324D]">Bagaimana cara kerjanya?</h2>
          </div>
          <ul className="space-y-2.5">
            {material.howItWorks.map((step, idx) => (
              <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <span className="w-5 h-5 rounded-full bg-purple-100 text-purple-700 font-extrabold text-[11px] flex items-center justify-center flex-shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>

      {/* Content Section 2: Ciri-ciri & Contoh Sederhana */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Ciri-ciri */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4">
          <div className="flex min-w-0 items-start gap-2 border-b border-slate-100 pb-3 text-base font-bold text-amber-600 sm:text-lg">
            <AlertTriangle className="w-5 h-5 text-amber-600" />
            <h2 className="min-w-0 break-words text-[#17324D]">Ciri-ciri yang perlu diperhatikan</h2>
          </div>
          <ul className="space-y-2.5">
            {material.characteristics.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <span className="w-2 h-2 rounded-full bg-amber-500 flex-shrink-0 mt-1.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Contoh Sederhana */}
        <div className="bg-gradient-to-br from-slate-900 to-[#17324D] text-white p-6 sm:p-8 rounded-3xl border border-slate-800 shadow-xl space-y-4">
          <div className="flex items-center justify-between border-b border-slate-700 pb-3">
            <h2 className="text-lg font-bold text-cyan-300 flex items-center gap-2">
              <span>💡</span> Contoh Skenario Dunia Nyata
            </h2>
            <span className="text-[10px] font-bold bg-cyan-400 text-slate-950 px-2.5 py-0.5 rounded-full">
              Skenario
            </span>
          </div>

          <div className="space-y-2">
            <h3 className="font-bold text-base text-white">{material.example.scenario}</h3>
            <p className="text-xs sm:text-sm text-blue-100 leading-relaxed bg-white/10 p-4 rounded-xl border border-white/10">
              &quot;{material.example.detail}&quot;
            </p>
          </div>
        </div>

      </div>

      {/* Content Section 3: Cara Melindungi Diri */}
      <div className="bg-emerald-50 border border-emerald-200 p-6 sm:p-8 rounded-3xl shadow-sm space-y-6">
        <div className="flex items-center gap-3 border-b border-emerald-200 pb-4">
          <div className="p-2.5 rounded-xl bg-emerald-600 text-white shadow-md">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <h2 className="break-words text-lg font-bold text-emerald-950 sm:text-xl">Cara Melindungi Diri Dari {material.title}</h2>
            <p className="text-xs text-emerald-700">Terapkan langkah-langkah pencegahan praktis berikut ini:</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {material.protectionWays.map((way, idx) => (
            <div key={idx} className="bg-white p-4 rounded-2xl border border-emerald-200/80 shadow-xs flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
              <span className="text-xs sm:text-sm text-slate-800 font-medium leading-relaxed">{way}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Navigation Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-200">
        <Link
          href="/materi"
          onClick={playClick}
          className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-white hover:bg-slate-50 text-[#17324D] font-bold text-sm border-2 border-slate-200 hover:border-blue-400 shadow-md hover:shadow-lg transition-all hover:scale-105 text-center flex items-center justify-center gap-2.5 group"
        >
          <ArrowLeft className="w-4 h-4 text-blue-600 group-hover:-translate-x-1 transition-transform" />
          <span>Kembali ke Daftar Materi</span>
        </Link>

        <Link
          href={`/studi-kasus?category=${encodeURIComponent(material.title)}`}
          onClick={playSelect}
          className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-lg transition-all hover:scale-105 text-center flex items-center justify-center gap-2"
        >
          <span>Uji Pemahaman Studi Kasus {material.title}</span>
          <span>→</span>
        </Link>
      </div>

    </div>
  );
}
