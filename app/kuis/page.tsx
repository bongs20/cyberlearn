"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import QuizQuestion from "@/components/QuizQuestion";
import ScoreCard from "@/components/ScoreCard";
import QuizAtmosphere from "@/components/QuizAtmosphere";
import { QUIZ_QUESTIONS } from "@/data/questions";
import { CheckCircle2, ClipboardCheck, ShieldCheck } from "lucide-react";

export default function KuisPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, string>>({});
  const [isCompleted, setIsCompleted] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [finalScore, setFinalScore] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);

  const router = useRouter();

  const handleNextQuestion = (selectedAnswerId: string) => {
    const question = QUIZ_QUESTIONS[currentIndex];
    const updatedAnswers = { ...userAnswers, [question.id]: selectedAnswerId };
    setUserAnswers(updatedAnswers);

    if (currentIndex < QUIZ_QUESTIONS.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      // Last question submitted -> calculate total score
      let score = 0;
      let correct = 0;

      QUIZ_QUESTIONS.forEach((q) => {
        if (updatedAnswers[q.id] === q.correctAnswerId) {
          score += 10;
          correct += 1;
        }
      });

      setFinalScore(score);
      setCorrectCount(correct);
      setIsCompleted(true);

      // Save evaluation score in localStorage
      if (typeof window !== "undefined") {
        localStorage.setItem("cyberlearn_quiz_score", score.toString());
        localStorage.setItem("cyberlearn_quiz_correct", correct.toString());
      }
    }
  };

  const handleRetry = () => {
    setCurrentIndex(0);
    setUserAnswers({});
    setIsCompleted(false);
    setHasStarted(false);
    setFinalScore(0);
    setCorrectCount(0);
  };

  return (
    <div className="max-w-3xl mx-auto py-6">
      {!isCompleted ? (
        <>
          <div hidden={hasStarted} className="mb-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-xl sm:p-8">
              <div className="mb-5 flex items-start gap-4">
                <div className="rounded-2xl bg-blue-600 p-3 text-white shadow-md">
                  <ClipboardCheck className="h-7 w-7" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-blue-600">Evaluasi Pembelajaran</p>
                  <h1 className="text-2xl font-extrabold text-[#17324D] sm:text-3xl">Kuis Keamanan Siber</h1>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    Uji pemahaman Anda tentang ancaman siber dan cara melindungi diri di dunia digital.
                  </p>
                </div>
              </div>

              <div className="grid gap-3 border-t border-slate-100 pt-5 sm:grid-cols-3">
                <div className="flex items-center gap-2 text-sm font-medium text-slate-700">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600" />
                  {QUIZ_QUESTIONS.length} soal pilihan ganda
                </div>
                <div className="flex items-center gap-2 text-sm font-medium text-slate-700">
                  <ShieldCheck className="h-5 w-5 text-blue-600" />
                  Satu jawaban setiap soal
                </div>
                <div className="flex items-center gap-2 text-sm font-medium text-slate-700">
                  <ClipboardCheck className="h-5 w-5 text-purple-600" />
                  Hasil tampil di akhir
                </div>
              </div>
              <div className="mt-6 flex justify-center border-t border-slate-100 pt-5">
                <QuizAtmosphere hasStarted={hasStarted} onStart={() => setHasStarted(true)} />
              </div>
          </div>
          {hasStarted && (
            <QuizQuestion
              question={QUIZ_QUESTIONS[currentIndex]}
              questionNumber={currentIndex + 1}
              totalQuestions={QUIZ_QUESTIONS.length}
              onNext={handleNextQuestion}
            />
          )}
        </>
      ) : (
        <ScoreCard
          score={finalScore}
          correctCount={correctCount}
          totalCount={QUIZ_QUESTIONS.length}
          onRetry={handleRetry}
        />
      )}
    </div>
  );
}
