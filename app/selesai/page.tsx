"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, Check, ShieldCheck } from "lucide-react";
import { useSound } from "@/hooks/useSound";

export default function SelesaiPage() {
  const router = useRouter();
  const { playClick } = useSound();
  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    const completed = sessionStorage.getItem("cyberlearn_evaluation_completed") === "true";

    if (!completed) {
      router.replace("/hasil");
      return;
    }

    const authorizationTimer = window.setTimeout(() => setIsAuthorized(true), 0);
    return () => window.clearTimeout(authorizationTimer);
  }, [router]);

  if (!isAuthorized) {
    return null;
  }

  const handleDashboard = () => {
    playClick();
    router.push("/dashboard");
  };

  return (
    <section className="relative isolate mx-auto flex min-h-[min(680px,calc(100vh-9rem))] max-w-5xl items-center justify-center overflow-hidden rounded-3xl bg-[#0f2236] px-5 py-12 text-center shadow-2xl sm:px-10">
      <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full border border-cyan-400/20 bg-blue-500/10 blur-2xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-20 h-72 w-72 rounded-full border border-blue-400/20 bg-cyan-400/10 blur-3xl" />
      <div className="relative z-10 flex max-w-2xl flex-col items-center">
        <div className="completion-reveal relative mb-8 flex h-32 w-32 items-center justify-center rounded-[2rem] border border-cyan-300/40 bg-blue-600/20 text-cyan-300 shadow-[0_0_55px_rgba(34,211,238,0.2)] sm:h-40 sm:w-40">
          <div className="absolute inset-3 rounded-[1.5rem] border border-cyan-300/20" />
          <ShieldCheck className="h-16 w-16 sm:h-20 sm:w-20" strokeWidth={1.5} />
          <span className="absolute -bottom-3 -right-3 flex h-11 w-11 items-center justify-center rounded-full border-4 border-[#0f2236] bg-cyan-300 text-[#0f2236] shadow-lg">
            <Check className="h-5 w-5" strokeWidth={3} />
          </span>
        </div>

        <div className="completion-reveal completion-reveal-delay">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-cyan-300">CyberLearn</p>
          <h1 className="text-3xl font-black tracking-tight text-white sm:text-5xl">PEMBELAJARAN SELESAI</h1>
        </div>

        <p className="completion-reveal completion-reveal-delay-more mt-6 max-w-xl text-base leading-relaxed text-blue-100 sm:text-lg">
          Selamat! Kamu telah menyelesaikan multimedia pembelajaran CyberLearn.
        </p>
        <p className="completion-reveal completion-reveal-delay-more mt-3 max-w-xl text-sm leading-relaxed text-blue-200/80 sm:text-base">
          Kamu telah mempelajari berbagai ancaman siber dan cara melindungi diri di dunia digital.
        </p>

        <button
          type="button"
          onClick={handleDashboard}
          className="completion-reveal completion-reveal-delay-more mt-9 inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-300 px-6 py-3.5 text-sm font-extrabold text-[#0f2236] shadow-lg shadow-cyan-950/30 transition-all hover:scale-105 hover:bg-cyan-200 focus:outline-none focus:ring-2 focus:ring-cyan-200 focus:ring-offset-2 focus:ring-offset-[#0f2236]"
        >
          <ArrowLeft className="h-4 w-4" />
          Kembali ke Dashboard
        </button>
      </div>
    </section>
  );
}
