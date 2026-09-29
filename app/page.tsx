import Link from "next/link";
import { Shield, Lock, Laptop, ArrowRight, BookOpenCheck, Sparkles } from "lucide-react";
import WelcomeAudio from "@/components/WelcomeAudio";

export default function LandingPage() {
  return (
    <div className="space-y-16 py-4 sm:py-8">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#17324D] via-[#1a3857] to-[#0f2236] rounded-3xl p-8 sm:p-12 lg:p-16 text-white shadow-2xl border border-blue-900/50">
        
        {/* Glow Effects */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Label Small */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-600/80 border border-blue-400/40 text-cyan-300 text-xs font-bold uppercase tracking-wider shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
              <span>MULTIMEDIA PEMBELAJARAN INTERAKTIF</span>
            </div>

            {/* Big Title & Subtitle */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight text-white">
                Mengenal <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-200 to-purple-300">Ancaman Siber</span>
              </h1>
              <p className="text-xl sm:text-2xl font-semibold text-cyan-400">
                Cara Melindungi Diri di Dunia Digital
              </p>
            </div>

            {/* Short Description */}
            <p className="text-sm sm:text-base text-blue-100 max-w-2xl leading-relaxed">
              Pelajari berbagai ancaman siber yang sering ditemukan di dunia digital dan cara sederhana untuk melindungi diri melalui materi visual, video, studi kasus interaktif, dan kuis evaluasi.
            </p>

            {/* Author Attribution */}
            <div className="pt-2 flex items-center justify-center lg:justify-start gap-3">
              <div className="px-4 py-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 text-xs font-medium text-blue-200">
                Presented by <strong className="text-white font-bold">Naila Nursyifa Nasir</strong>
              </div>
              <span className="text-xs text-blue-300 hidden sm:inline">• Keamanan Komputer</span>
            </div>

            {/* Primary Action Button */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link
                href="/dashboard"
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-slate-950 font-extrabold text-base shadow-xl hover:shadow-cyan-500/25 transition-all hover:scale-105 flex items-center justify-center gap-3 group"
              >
                <span>MULAI BELAJAR</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
              </Link>

              <Link
                href="/petunjuk"
                className="w-full sm:w-auto px-6 py-4 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm backdrop-blur-md transition-all flex items-center justify-center gap-2"
              >
                <BookOpenCheck className="w-4 h-4 text-cyan-300" />
                <span>Petunjuk Penggunaan</span>
              </Link>
            </div>

          </div>

          {/* Hero Right Visual Cards */}
          <div className="lg:col-span-5 relative flex justify-center">
            
            {/* Interactive Cybersecurity Visual Stack */}
            <div className="relative w-full max-w-sm space-y-4">
              
              {/* Card 1: Shield Protection */}
              <div className="bg-white/10 backdrop-blur-xl p-5 rounded-2xl border border-white/20 shadow-2xl flex items-center gap-4 transform hover:-translate-y-1 transition-transform">
                <div className="p-3.5 rounded-xl bg-cyan-400 text-slate-950 shadow-md">
                  <Shield className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="font-bold text-base text-white">Perlindungan Data</h3>
                  <p className="text-xs text-blue-200">Menjaga identitas & kata sandi tetap aman.</p>
                </div>
              </div>

              {/* Card 2: Threat Detection */}
              <div className="bg-white/10 backdrop-blur-xl p-5 rounded-2xl border border-white/20 shadow-2xl flex items-center gap-4 transform translate-x-3 hover:translate-x-4 transition-transform">
                <div className="p-3.5 rounded-xl bg-purple-400 text-slate-950 shadow-md">
                  <Lock className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="font-bold text-base text-white">Deteksi Dini Phishing</h3>
                  <p className="text-xs text-blue-200">Mengenali tautan & email mencurigakan.</p>
                </div>
              </div>

              {/* Card 3: Laptop Security */}
              <div className="bg-white/10 backdrop-blur-xl p-5 rounded-2xl border border-white/20 shadow-2xl flex items-center gap-4 transform hover:-translate-y-1 transition-transform">
                <div className="p-3.5 rounded-xl bg-yellow-400 text-slate-950 shadow-md">
                  <Laptop className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="font-bold text-base text-white">Keamanan Perangkat</h3>
                  <p className="text-xs text-blue-200">Pencegahan infeksi malware & trojan.</p>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      <WelcomeAudio audioPath="/audio/intro.mp3" />

      {/* Learning Goals Section */}
      <section className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-sm space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-extrabold text-blue-600 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full">
            Tujuan Pembelajaran
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#17324D]">
            Apa Yang Akan Kamu Pelajari?
          </h2>
          <p className="text-sm text-slate-600">
            Setelah menyelesaikan multimedia interaktif ini, kamu diharapkan mampu:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
          
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
            <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-600 font-bold flex items-center justify-center text-sm">1</div>
            <h4 className="font-bold text-[#17324D] text-base">Pengertian Ancaman Siber</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Menjelaskan definisi dasar dan dampak ancaman siber pada kehidupan digital.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
            <div className="w-8 h-8 rounded-lg bg-cyan-100 text-cyan-700 font-bold flex items-center justify-center text-sm">2</div>
            <h4 className="font-bold text-[#17324D] text-base">Identifikasi Jenis Ancaman</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Mengidentifikasi 4 jenis ancaman siber utama yang sering menyerang pengguna.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
            <div className="w-8 h-8 rounded-lg bg-purple-100 text-purple-700 font-bold flex items-center justify-center text-sm">3</div>
            <h4 className="font-bold text-[#17324D] text-base">Karakteristik Modus Peretasan</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Menjelaskan kebiasaan Phishing, Malware, Password Attack, & Social Engineering.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
            <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-800 font-bold flex items-center justify-center text-sm">4</div>
            <h4 className="font-bold text-[#17324D] text-base">Tindakan Perlindungan Diri</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Menerapkan langkah-langkah nyata untuk mengamankan akun dan perangkat.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2 md:col-span-2 lg:col-span-2">
            <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 font-bold flex items-center justify-center text-sm">5</div>
            <h4 className="font-bold text-[#17324D] text-base">Analisis Studi Kasus Realistis</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Menganalisis skenario studi kasus sehari-hari dan mengambil tindakan pencegahan yang tepat secara mandiri.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}
