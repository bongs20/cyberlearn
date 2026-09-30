"use client";

import { useState } from "react";
import { QuizQuestion as QuizQuestionType } from "@/data/questions";
import { ArrowRight, HelpCircle } from "lucide-react";
import { useSound } from "@/hooks/useSound";

interface QuizQuestionProps {
  question: QuizQuestionType;
  questionNumber: number;
  totalQuestions: number;
  onNext: (selectedAnswerId: string) => void;
}

export default function QuizQuestion({
  question,
  questionNumber,
  totalQuestions,
  onNext,
}: QuizQuestionProps) {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const { playSelect, playClick } = useSound();

  const handleAnswerClick = (answerId: string) => {
    setSelectedId(answerId);
    playSelect();
  };

  const handleNext = () => {
    if (!selectedId) return;
    playClick();
    onNext(selectedId);
    setSelectedId(null);
  };

  return (
    <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xl space-y-6">
      
      {/* Header Progress Counter */}
      <div className="flex items-center justify-between border-b border-slate-100 pb-4">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-blue-100 text-blue-800">
          <HelpCircle className="w-3.5 h-3.5 text-blue-600" />
          Kuis Evaluasi
        </span>
        <span className="text-xs font-bold text-[#17324D] bg-slate-100 px-3 py-1 rounded-full">
          Soal {questionNumber} dari {totalQuestions}
        </span>
      </div>

      {/* Progress Bar Visual */}
      <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
        <div
          className="bg-blue-600 h-full transition-all duration-300 rounded-full"
          style={{ width: `${(questionNumber / totalQuestions) * 100}%` }}
        />
      </div>

      {/* Question Text */}
      <h3 className="text-lg sm:text-xl font-bold text-[#17324D] leading-snug">
        {question.question}
      </h3>

      {/* Options List */}
      <div className="space-y-3">
        {question.options.map((opt) => {
          const isSelected = selectedId === opt.id;
          return (
            <button
              key={opt.id}
              onClick={() => handleAnswerClick(opt.id)}
              className={`w-full text-left p-4 rounded-xl border transition-all text-sm flex items-center justify-between gap-3 ${
                isSelected
                  ? "bg-blue-600 border-blue-600 text-white font-semibold shadow-md scale-[1.01]"
                  : "bg-white text-slate-800 border-slate-200 hover:border-blue-400 hover:bg-slate-50"
              }`}
            >
              <span>{opt.text}</span>
              <div
                className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                  isSelected ? "border-white bg-cyan-400" : "border-slate-300"
                }`}
              >
                {isSelected && <div className="w-2 h-2 rounded-full bg-slate-950" />}
              </div>
            </button>
          );
        })}
      </div>

      {/* Next Button */}
      <div className="pt-4 flex justify-end">
        <button
          onClick={handleNext}
          disabled={!selectedId}
          className={`px-8 py-3.5 rounded-xl font-bold text-sm transition-all flex items-center gap-2.5 ${
            selectedId
              ? "bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:scale-105 cursor-pointer"
              : "bg-slate-200 text-slate-400 cursor-not-allowed"
          }`}
        >
          <span>{questionNumber === totalQuestions ? "Lihat Hasil Evaluasi 🎉" : "Soal Selanjutnya"}</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
}
