"use client";

import Link from "next/link";
import { CircleHelp, ArrowLeft, CheckCircle2, Play, BookOpen, Lightbulb, ClipboardCheck } from "lucide-react";
import { useSound } from "@/hooks/useSound";

export default function PetunjukPage() {
  const { playClick } = useSound();
  const steps = [
    { num: 1, text: "Mulai petualangan belajarmu dari Halaman Dashboard.", icon: Play },
    { num: 2, text: "Pilih menu Materi untuk mempelajari konsep dasar keamanan siber.", icon: BookOpen },
    { num: 3, text: "Pilih salah satu jenis ancaman siber (Phishing, Malware, Password Attack, atau Social Engineering).", icon: CheckCircle2 },
    { num: 4, text: "Pelajari cara kerja, ciri-ciri, dan cara pencegahannya secara seksama. Kamu juga dapat mendengarkan narasi suara.", icon: CheckCircle2 },
    { num: 5, text: "Lanjutkan ke menu Studi Kasus untuk melatih daya analisamu.", icon: Lightbulb },
    { num: 6, text: "Jawab pertanyaan studi kasus dan pelajari feedback interaktif yang muncul secara langsung.", icon: Lightbulb },
    { num: 7, text: "Setelah siap, kerjakan Kuis / Evaluasi pilihan ganda sejumlah 10 soal.", icon: ClipboardCheck },
    { num: 8, text: "Lihat hasil evaluasi akhir dan badge pemahamanmu!", icon: CheckCircle2 },
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-8 py-4">
      
      {/* Page Header */}
      <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-800">
            <CircleHelp className="w-3.5 h-3.5 text-amber-600" />
            <span>Panduan Pengguna</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-[#17324D]">Petunjuk Penggunaan Multimedia</h1>
        </div>

        <Link
          href="/dashboard"
          onClick={playClick}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-white hover:bg-slate-50 text-[#17324D] text-sm font-bold border-2 border-slate-200 hover:border-blue-400 shadow-md hover:shadow-lg transition-all hover:scale-105 group"
        >
          <ArrowLeft className="w-4 h-4 text-blue-600 group-hover:-translate-x-1 transition-transform" />
          <span>Kembali ke Dashboard</span>
        </Link>
      </div>

      {/* Steps List */}
      <div className="bg-white p-6 sm:p-10 rounded-3xl border border-slate-200 shadow-sm space-y-6">
        <h2 className="text-lg font-bold text-[#17324D] border-b border-slate-100 pb-3">
          Alur Pembelajaran Yang Disarankan:
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {steps.map((step) => {
            return (
              <div
                key={step.num}
                className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-4 hover:border-blue-300 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-600 text-white font-extrabold flex items-center justify-center flex-shrink-0 text-sm shadow-md">
                  {step.num}
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-slate-700 font-medium leading-relaxed">
                    {step.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action button at bottom */}
        <div className="pt-6 border-t border-slate-100 flex justify-center">
          <Link
            href="/dashboard"
            onClick={playClick}
            className="px-8 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-lg transition-all hover:scale-105"
          >
            Saya Paham, Mulai Belajar Sekarang!
          </Link>
        </div>

      </div>

    </div>
  );
}
