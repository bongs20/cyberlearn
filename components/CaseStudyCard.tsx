"use client";

import { useEffect, useRef, useState } from "react";
import { CaseStudy } from "@/data/cases";
import { CheckCircle2, XCircle, HelpCircle, ArrowRight } from "lucide-react";

interface CaseStudyCardProps {
  caseItem: CaseStudy;
  onSolved?: () => void;
}

export default function CaseStudyCard({ caseItem, onSolved }: CaseStudyCardProps) {
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const correctAudioRef = useRef<HTMLAudioElement | null>(null);
  const wrongAudioRef = useRef<HTMLAudioElement | null>(null);
  const soundPlayedRef = useRef(false);
  const isCorrect = selectedOptionId === caseItem.correctOptionId;

  useEffect(() => {
    if (!submitted || soundPlayedRef.current) return;

    const audio = isCorrect
      ? (correctAudioRef.current ??= new Audio("/audio/benar.mp3"))
      : (wrongAudioRef.current ??= new Audio("/audio/salah.mp3"));

    audio.currentTime = 0;
    audio.volume = 0.5;
    void audio.play().catch(() => undefined);
    soundPlayedRef.current = true;
  }, [submitted, isCorrect]);

  const handleSelect = (optionId: string) => {
    if (submitted) return; // Prevent changing after submission
    setSelectedOptionId(optionId);
  };

  const handleSubmit = () => {
    if (!selectedOptionId) return;
    setSubmitted(true);
    if (onSolved) onSolved();
  };

  const handleReset = () => {
    setSelectedOptionId(null);
    setSubmitted(false);
    soundPlayedRef.current = false;
  };

  return (
    <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-md space-y-6">
      
      {/* Category Badge & Title */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-4">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-blue-100 text-blue-800 w-fit">
          <HelpCircle className="w-3.5 h-3.5 text-blue-600" />
          Kategori: {caseItem.category}
        </span>
        <span className="text-xs text-slate-500 font-medium">Studi Kasus #{caseItem.id}</span>
      </div>

      {/* Title & Scenario */}
      <div>
        <h3 className="text-xl font-bold text-[#17324D] mb-3">{caseItem.title}</h3>
        <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/80 text-sm text-slate-700 leading-relaxed">
          {caseItem.scenario}
        </div>
      </div>

      {/* Options List */}
      <div className="space-y-3">
        <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
          Pilih Tindakan Yang Tepat:
        </p>

        {caseItem.options.map((opt) => {
          const isSelected = selectedOptionId === opt.id;
          let optionStyle = "bg-white border-slate-200 text-slate-800 hover:border-blue-400 hover:bg-slate-50";

          if (submitted) {
            if (opt.id === caseItem.correctOptionId) {
              optionStyle = "bg-emerald-50 border-emerald-500 text-emerald-950 font-semibold";
            } else if (isSelected && !isCorrect) {
              optionStyle = "bg-rose-50 border-rose-500 text-rose-950 font-semibold";
            } else {
              optionStyle = "bg-slate-50 border-slate-200 text-slate-400 opacity-60";
            }
          } else if (isSelected) {
            optionStyle = "bg-blue-600 border-blue-600 text-white font-semibold shadow-md";
          }

          return (
            <button
              key={opt.id}
              onClick={() => handleSelect(opt.id)}
              disabled={submitted}
              className={`w-full text-left p-4 rounded-xl border transition-all text-sm flex items-start justify-between gap-3 ${optionStyle}`}
            >
              <span>{opt.text}</span>
              {submitted && opt.id === caseItem.correctOptionId && (
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
              )}
              {submitted && isSelected && !isCorrect && (
                <XCircle className="w-5 h-5 text-rose-600 flex-shrink-0 mt-0.5" />
              )}
            </button>
          );
        })}
      </div>

      {/* Submit Button / Feedback Result */}
      {!submitted ? (
        <div className="pt-2 flex justify-end">
          <button
            onClick={handleSubmit}
            disabled={!selectedOptionId}
            className={`px-6 py-3 rounded-xl font-bold text-sm transition-all flex items-center gap-2 ${
              selectedOptionId
                ? "bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:scale-105 cursor-pointer"
                : "bg-slate-200 text-slate-400 cursor-not-allowed"
            }`}
          >
            <span>Kirim Jawaban</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      ) : (
        <div className="pt-2 space-y-4 animate-in fade-in duration-300">
          <div
            className={`p-5 rounded-2xl border text-sm leading-relaxed space-y-3 ${
              isCorrect
                ? "bg-emerald-50 border-emerald-300 text-emerald-950"
                : "bg-amber-50 border-amber-300 text-amber-950"
            }`}
          >
            <div className="flex items-center gap-2 font-bold text-base border-b pb-2.5 border-slate-200/80">
              {isCorrect ? (
                <>
                  <CheckCircle2 className="w-6 h-6 text-emerald-600 flex-shrink-0" />
                  <span className="text-emerald-900">Feedback: Penjelasan Jawaban Tepat 🎉</span>
                </>
              ) : (
                <>
                  <XCircle className="w-6 h-6 text-amber-600 flex-shrink-0" />
                  <span className="text-amber-900">Pembahasan: Penjelasan & Tips Keamanan 💡</span>
                </>
              )}
            </div>

            {isCorrect ? (
              <p className="text-xs sm:text-sm font-medium leading-relaxed">
                {caseItem.explanation.correct}
              </p>
            ) : (
              <div className="space-y-3 text-xs sm:text-sm">
                
                {/* Highlight Jawaban Yang Benar */}
                <div className="bg-emerald-100/90 p-3 rounded-xl border border-emerald-300 text-emerald-950">
                  <strong className="text-emerald-900 font-bold flex items-center gap-1.5 mb-1">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Jawaban Yang Seharusnya Tepat:</span>
                  </strong>
                  <p className="text-emerald-950 font-semibold leading-relaxed">
                    {caseItem.options.find((o) => o.id === caseItem.correctOptionId)?.text}
                  </p>
                </div>

                {/* Penjelasan Pilihan Salah */}
                <div>
                  <strong className="text-amber-950 font-bold block mb-0.5">
                    📌 Penjelasan Mengapa Pilihan {selectedOptionId} Kurang Tepat:
                  </strong>
                  <p className="text-amber-900 font-medium leading-relaxed">
                    {selectedOptionId && caseItem.explanation.incorrectByOption[selectedOptionId]
                      ? caseItem.explanation.incorrectByOption[selectedOptionId]
                      : "Pilihan ini tidak disarankan karena dapat membahayakan keamanan data dan perangkatmu."}
                  </p>
                </div>

                {/* Tips Keamanan */}
                <div className="bg-white/90 p-3.5 rounded-xl border border-amber-200 text-amber-950 shadow-xs">
                  <strong className="text-amber-950 font-bold flex items-center gap-1.5 mb-1">
                    <span>💡</span> Tips Keamanan Pencegahan Khusus Pilihan {selectedOptionId}:
                  </strong>
                  <p className="text-slate-800 font-semibold leading-relaxed">
                    {selectedOptionId && caseItem.explanation.tipsByOption[selectedOptionId]
                      ? caseItem.explanation.tipsByOption[selectedOptionId]
                      : "Selalu berhati-hati dan verifikasi ulang setiap aktivitas digital yang mencurigakan."}
                  </p>
                </div>

              </div>
            )}
          </div>

          <div className="flex justify-end">
            <button
              onClick={handleReset}
              className="text-xs font-semibold text-blue-600 hover:text-blue-800 underline px-3 py-1.5 cursor-pointer"
            >
              Coba Lagi Kasus Ini
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
