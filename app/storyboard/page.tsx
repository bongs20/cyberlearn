"use client";

import Link from "next/link";
import { 
  Home, 
  BookOpen, 
  PlayCircle, 
  Lightbulb, 
  ClipboardCheck, 
  Volume2, 
  ArrowLeft, 
  Printer, 
  Sparkles,
  Trophy,
  CheckCircle2,
  Lock,
  Layers,
  HelpCircle,
  Award
} from "lucide-react";

export default function StoryboardPage() {
  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  return (
    <div className="space-y-10 py-6 max-w-7xl mx-auto print:py-0 print:space-y-6">
      
      {/* Top Header / Title Bar */}
      <div className="bg-gradient-to-r from-[#17324D] to-blue-900 text-white p-6 sm:p-8 rounded-3xl shadow-xl border border-blue-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 print:rounded-none print:shadow-none print:border-none">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 bg-blue-950/80 px-3 py-1 rounded-full border border-blue-700/60">
              LEMBAR STORYBOARD VISUAL
            </span>
            <span className="text-xs text-blue-200">Multimedia Pembelajaran (Semester 5)</span>
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white">
            Storyboard Website CyberLearn 🎬
          </h1>
          <p className="text-sm text-blue-100 max-w-2xl">
            Rancangan visual antarmuka (UI/UX) dan alur interaktivitas multimedia pembelajaran <em>&quot;Mengenal Ancaman Siber&quot;</em> oleh <strong>Naila Nursyifa Nasir</strong>.
          </p>
        </div>

        <div className="flex items-center gap-3 print:hidden">
          <button
            onClick={handlePrint}
            className="px-5 py-2.5 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-sm shadow-md transition-all hover:scale-105 inline-flex items-center gap-2 cursor-pointer"
          >
            <Printer className="w-4 h-4" />
            <span>Cetak / Simpan PDF</span>
          </button>
          <Link
            href="/dashboard"
            className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/20 transition-all inline-flex items-center gap-1.5"
          >
            <ArrowLeft className="w-4 h-4 text-cyan-300" />
            <span>Dashboard</span>
          </Link>
        </div>
      </div>

      {/* Grid of Storyboard Frames */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 print:grid-cols-1 print:gap-8">

        {/* ======================================================== */}
        {/* FRAME 01: HALAMAN BERANDA */}
        {/* ======================================================== */}
        <div className="bg-white rounded-3xl border-2 border-slate-200 shadow-md overflow-hidden flex flex-col justify-between print:break-inside-avoid">
          {/* Frame Header */}
          <div className="bg-[#17324D] text-white p-4 flex items-center justify-between border-b border-blue-900">
            <div className="flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-cyan-400 text-slate-950 font-black text-xs flex items-center justify-center">01</span>
              <h3 className="font-bold text-sm text-white">FRAME 1: Halaman Beranda (Landing Page)</h3>
            </div>
            <span className="text-[11px] font-semibold text-cyan-300 bg-white/10 px-2.5 py-0.5 rounded-full">app/page.tsx</span>
          </div>

          {/* Frame Visual Mockup Canvas */}
          <div className="p-5 bg-slate-100 flex-1">
            <div className="bg-gradient-to-br from-[#17324D] via-[#1a3857] to-[#0f2236] rounded-2xl p-5 text-white shadow-inner border border-blue-950 relative overflow-hidden space-y-4">
              {/* Mini Navbar */}
              <div className="flex items-center justify-between border-b border-white/10 pb-2 text-[10px]">
                <div className="font-bold text-cyan-300 flex items-center gap-1">🛡️ CyberLearn</div>
                <div className="flex gap-2 text-slate-300">
                  <span className="text-white font-bold">Beranda</span>
                  <span>Dashboard</span>
                  <span>Materi</span>
                  <span>Video</span>
                  <span>Kuis</span>
                </div>
              </div>

              {/* Hero Section Mockup */}
              <div className="grid grid-cols-12 gap-3 items-center pt-2">
                <div className="col-span-7 space-y-2">
                  <span className="text-[9px] font-bold text-cyan-300 bg-blue-950 px-2 py-0.5 rounded-full border border-blue-600 inline-block">
                    MULTIMEDIA INTERAKTIF
                  </span>
                  <h4 className="text-sm font-black text-white leading-tight">Mengenal Ancaman Siber</h4>
                  <p className="text-[9px] text-blue-200 line-clamp-2">Pelajari jenis ancaman siber dan cara melindungi diri melalui materi visual & studi kasus.</p>
                  <div className="flex gap-2 pt-1">
                    <span className="text-[9px] bg-gradient-to-r from-blue-600 to-cyan-400 text-slate-950 font-bold px-3 py-1 rounded-md shadow">
                      MULAI BELAJAR →
                    </span>
                    <span className="text-[9px] bg-white/10 text-white font-medium px-2 py-1 rounded-md">
                      Petunjuk
                    </span>
                  </div>
                </div>

                {/* Right Visual Stack */}
                <div className="col-span-5 space-y-1.5">
                  <div className="bg-white/10 p-1.5 rounded-lg border border-white/20 text-[8px] flex items-center gap-1.5">
                    <span className="bg-cyan-400 text-slate-950 p-1 rounded font-bold">🛡️</span>
                    <div><strong>Perlindungan Data</strong></div>
                  </div>
                  <div className="bg-white/10 p-1.5 rounded-lg border border-white/20 text-[8px] flex items-center gap-1.5 translate-x-1">
                    <span className="bg-purple-400 text-slate-950 p-1 rounded font-bold">🔒</span>
                    <div><strong>Deteksi Dini Phishing</strong></div>
                  </div>
                </div>
              </div>

              {/* Audio Narration Bar Indicator */}
              <div className="bg-white/10 p-2 rounded-xl border border-white/15 flex items-center justify-between text-[9px]">
                <div className="flex items-center gap-1.5">
                  <Volume2 className="w-3.5 h-3.5 text-cyan-300 animate-pulse" />
                  <span>Narasi Suara Sambutan Otomatis (/audio/intro.mp3)</span>
                </div>
                <span className="text-cyan-300 font-bold">🎙️ Voiceover</span>
              </div>
            </div>
          </div>

          {/* Frame Description & Specs */}
          <div className="p-4 bg-white border-t border-slate-200 text-xs space-y-1.5 text-slate-700">
            <div className="flex items-center gap-2"><strong className="text-[#17324D]">Elemen:</strong> Hero Section, Slogan, Attribution Nama, 3 Card Stack Visual, 5 Tujuan Pembelajaran.</div>
            <div className="flex items-center gap-2"><strong className="text-[#17324D]">Audio / SFX:</strong> Suara Narasi Pembuka (`intro.mp3`), `click.mp3` saat klik tombol.</div>
            <div className="flex items-center gap-2"><strong className="text-[#17324D]">Aksi / Navigasi:</strong> Tombol Mulai $\rightarrow$ Dashboard (`/dashboard`), Tombol Petunjuk $\rightarrow$ `/petunjuk`.</div>
          </div>
        </div>

        {/* ======================================================== */}
        {/* FRAME 02: HALAMAN PETUNJUK */}
        {/* ======================================================== */}
        <div className="bg-white rounded-3xl border-2 border-slate-200 shadow-md overflow-hidden flex flex-col justify-between print:break-inside-avoid">
          {/* Frame Header */}
          <div className="bg-[#17324D] text-white p-4 flex items-center justify-between border-b border-blue-900">
            <div className="flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-amber-400 text-slate-950 font-black text-xs flex items-center justify-center">02</span>
              <h3 className="font-bold text-sm text-white">FRAME 2: Halaman Petunjuk Penggunaan</h3>
            </div>
            <span className="text-[11px] font-semibold text-amber-300 bg-white/10 px-2.5 py-0.5 rounded-full">app/petunjuk/page.tsx</span>
          </div>

          {/* Frame Visual Mockup Canvas */}
          <div className="p-5 bg-slate-100 flex-1">
            <div className="bg-white rounded-2xl p-4 shadow-inner border border-slate-300 space-y-3">
              {/* Header Box */}
              <div className="flex items-center justify-between border-b pb-2">
                <div>
                  <span className="text-[8px] font-bold bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full">Panduan Pengguna</span>
                  <h5 className="font-bold text-xs text-[#17324D] mt-0.5">Petunjuk Penggunaan Multimedia</h5>
                </div>
                <span className="text-[8px] font-bold border border-slate-200 px-2 py-1 rounded-lg">← Dashboard</span>
              </div>

              {/* 8 Steps Grid Mockup */}
              <div className="grid grid-cols-2 gap-1.5 text-[8px]">
                <div className="bg-slate-50 p-2 rounded-lg border border-slate-200 flex gap-1.5 items-center">
                  <span className="w-4 h-4 rounded bg-blue-600 text-white font-bold flex items-center justify-center text-[8px] flex-shrink-0">1</span>
                  <span>Mulai dari Dashboard</span>
                </div>
                <div className="bg-slate-50 p-2 rounded-lg border border-slate-200 flex gap-1.5 items-center">
                  <span className="w-4 h-4 rounded bg-blue-600 text-white font-bold flex items-center justify-center text-[8px] flex-shrink-0">2</span>
                  <span>Pilih Menu Materi</span>
                </div>
                <div className="bg-slate-50 p-2 rounded-lg border border-slate-200 flex gap-1.5 items-center">
                  <span className="w-4 h-4 rounded bg-blue-600 text-white font-bold flex items-center justify-center text-[8px] flex-shrink-0">3</span>
                  <span>Pelajari 4 Jenis Ancaman</span>
                </div>
                <div className="bg-slate-50 p-2 rounded-lg border border-slate-200 flex gap-1.5 items-center">
                  <span className="w-4 h-4 rounded bg-blue-600 text-white font-bold flex items-center justify-center text-[8px] flex-shrink-0">4</span>
                  <span>Dengarkan Narasi Suara</span>
                </div>
                <div className="bg-slate-50 p-2 rounded-lg border border-slate-200 flex gap-1.5 items-center">
                  <span className="w-4 h-4 rounded bg-blue-600 text-white font-bold flex items-center justify-center text-[8px] flex-shrink-0">5</span>
                  <span>Kerjakan Studi Kasus</span>
                </div>
                <div className="bg-slate-50 p-2 rounded-lg border border-slate-200 flex gap-1.5 items-center">
                  <span className="w-4 h-4 rounded bg-blue-600 text-white font-bold flex items-center justify-center text-[8px] flex-shrink-0">6</span>
                  <span>Baca Feedback Jawaban</span>
                </div>
                <div className="bg-slate-50 p-2 rounded-lg border border-slate-200 flex gap-1.5 items-center">
                  <span className="w-4 h-4 rounded bg-blue-600 text-white font-bold flex items-center justify-center text-[8px] flex-shrink-0">7</span>
                  <span>Selesaikan 10 Soal Kuis</span>
                </div>
                <div className="bg-slate-50 p-2 rounded-lg border border-slate-200 flex gap-1.5 items-center">
                  <span className="w-4 h-4 rounded bg-blue-600 text-white font-bold flex items-center justify-center text-[8px] flex-shrink-0">8</span>
                  <span>Dapatkan Nilai & Badge</span>
                </div>
              </div>

              {/* Bottom CTA */}
              <div className="text-center pt-1">
                <span className="inline-block text-[9px] font-bold bg-blue-600 text-white px-4 py-1.5 rounded-lg shadow">
                  Saya Paham, Mulai Belajar Sekarang!
                </span>
              </div>
            </div>
          </div>

          {/* Frame Description & Specs */}
          <div className="p-4 bg-white border-t border-slate-200 text-xs space-y-1.5 text-slate-700">
            <div className="flex items-center gap-2"><strong className="text-[#17324D]">Elemen:</strong> 8 Langkah Prosedural Bernomor, Ikon Alur, Tombol Aksi Bawah.</div>
            <div className="flex items-center gap-2"><strong className="text-[#17324D]">Audio / SFX:</strong> `click.mp3` saat mengklik tombol kembali & mulai.</div>
            <div className="flex items-center gap-2"><strong className="text-[#17324D]">Aksi / Navigasi:</strong> Kembali ke Dashboard (`/dashboard`).</div>
          </div>
        </div>

        {/* ======================================================== */}
        {/* FRAME 03: DASHBOARD UTAMA */}
        {/* ======================================================== */}
        <div className="bg-white rounded-3xl border-2 border-slate-200 shadow-md overflow-hidden flex flex-col justify-between print:break-inside-avoid">
          {/* Frame Header */}
          <div className="bg-[#17324D] text-white p-4 flex items-center justify-between border-b border-blue-900">
            <div className="flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-blue-500 text-white font-black text-xs flex items-center justify-center">03</span>
              <h3 className="font-bold text-sm text-white">FRAME 3: Halaman Dashboard Utama</h3>
            </div>
            <span className="text-[11px] font-semibold text-cyan-300 bg-white/10 px-2.5 py-0.5 rounded-full">app/dashboard/page.tsx</span>
          </div>

          {/* Frame Visual Mockup Canvas */}
          <div className="p-5 bg-slate-100 flex-1">
            <div className="space-y-3">
              {/* Banner with centered Quiz Result Badge */}
              <div className="bg-gradient-to-r from-[#17324D] to-blue-900 rounded-2xl p-4 text-white flex flex-col sm:flex-row items-center justify-between gap-3 shadow">
                <div className="space-y-1 text-center sm:text-left">
                  <span className="text-[8px] font-bold text-cyan-300 bg-blue-950 px-2 py-0.5 rounded-full">DASHBOARD</span>
                  <h5 className="font-bold text-xs text-white">Mari Mulai Belajar! 👋</h5>
                  <p className="text-[8px] text-blue-200">Jelajahi materi, studi kasus, & kuis.</p>
                </div>

                {/* Centered Quiz Result Box */}
                <div className="bg-white/10 p-2.5 rounded-xl border border-white/20 text-center w-28 flex-shrink-0 shadow">
                  <span className="text-[7px] font-bold text-cyan-300 uppercase block">Nilai Kuis Terakhir</span>
                  <div className="text-xl font-black text-white">90</div>
                  <span className="text-[7px] text-blue-200">dari 100 poin</span>
                </div>
              </div>

              {/* Progress Belajar Row */}
              <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-sm space-y-1.5">
                <div className="text-[9px] font-bold text-[#17324D] flex items-center gap-1">
                  <Award className="w-3 h-3 text-blue-600" />
                  <span>Progress Belajar Kamu</span>
                </div>
                <div className="grid grid-cols-3 gap-2 text-[8px]">
                  <div>
                    <div className="flex justify-between text-slate-500"><span>Materi:</span> <strong>100%</strong></div>
                    <div className="w-full bg-slate-200 h-1.5 rounded-full mt-0.5"><div className="bg-blue-600 h-1.5 rounded-full w-full"></div></div>
                  </div>
                  <div>
                    <div className="flex justify-between text-slate-500"><span>Kasus:</span> <strong>8/8</strong></div>
                    <div className="w-full bg-slate-200 h-1.5 rounded-full mt-0.5"><div className="bg-purple-600 h-1.5 rounded-full w-full"></div></div>
                  </div>
                  <div>
                    <div className="flex justify-between text-slate-500"><span>Kuis:</span> <strong>90/100</strong></div>
                    <div className="w-full bg-slate-200 h-1.5 rounded-full mt-0.5"><div className="bg-emerald-500 h-1.5 rounded-full w-[90%]"></div></div>
                  </div>
                </div>
              </div>

              {/* 4 Main Cards Grid */}
              <div className="grid grid-cols-4 gap-2 text-[8px]">
                <div className="bg-white p-2 rounded-xl border border-slate-200 shadow-sm text-center">
                  <div className="w-6 h-6 mx-auto rounded-lg bg-amber-100 text-amber-800 font-bold flex items-center justify-center mb-1">❓</div>
                  <strong className="text-[#17324D] block">1. Petunjuk</strong>
                </div>
                <div className="bg-white p-2 rounded-xl border border-slate-200 shadow-sm text-center">
                  <div className="w-6 h-6 mx-auto rounded-lg bg-blue-100 text-blue-800 font-bold flex items-center justify-center mb-1">📖</div>
                  <strong className="text-[#17324D] block">2. Materi</strong>
                </div>
                <div className="bg-white p-2 rounded-xl border border-slate-200 shadow-sm text-center">
                  <div className="w-6 h-6 mx-auto rounded-lg bg-cyan-100 text-cyan-800 font-bold flex items-center justify-center mb-1">▶️</div>
                  <strong className="text-[#17324D] block">3. Video</strong>
                </div>
                <div className="bg-white p-2 rounded-xl border border-slate-200 shadow-sm text-center">
                  <div className="w-6 h-6 mx-auto rounded-lg bg-purple-100 text-purple-800 font-bold flex items-center justify-center mb-1">📝</div>
                  <strong className="text-[#17324D] block">4. Kuis</strong>
                </div>
              </div>
            </div>
          </div>

          {/* Frame Description & Specs */}
          <div className="p-4 bg-white border-t border-slate-200 text-xs space-y-1.5 text-slate-700">
            <div className="flex items-center gap-2"><strong className="text-[#17324D]">Elemen:</strong> Kotak Nilai Kuis (Tengah di mobile), 3 Progress Bar, 4 Menu Pembelajaran Utama.</div>
            <div className="flex items-center gap-2"><strong className="text-[#17324D]">Audio / SFX:</strong> `select.mp3` saat memilih kartu menu, `click.mp3` saat kembali.</div>
            <div className="flex items-center gap-2"><strong className="text-[#17324D]">Aksi / Navigasi:</strong> Menuju `/petunjuk`, `/materi`, `/video`, atau `/kuis`.</div>
          </div>
        </div>

        {/* ======================================================== */}
        {/* FRAME 04: DETAIL MATERI PEMBELAJARAN */}
        {/* ======================================================== */}
        <div className="bg-white rounded-3xl border-2 border-slate-200 shadow-md overflow-hidden flex flex-col justify-between print:break-inside-avoid">
          {/* Frame Header */}
          <div className="bg-[#17324D] text-white p-4 flex items-center justify-between border-b border-blue-900">
            <div className="flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-cyan-500 text-slate-950 font-black text-xs flex items-center justify-center">04</span>
              <h3 className="font-bold text-sm text-white">FRAME 4: Halaman Detail Materi (4 Topik)</h3>
            </div>
            <span className="text-[11px] font-semibold text-cyan-300 bg-white/10 px-2.5 py-0.5 rounded-full">app/materi/[slug]/page.tsx</span>
          </div>

          {/* Frame Visual Mockup Canvas */}
          <div className="p-5 bg-slate-100 flex-1">
            <div className="space-y-2.5">
              {/* Header Box: Image + Title + Return Buttons */}
              <div className="bg-white p-3 rounded-2xl border border-slate-200 flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <div className="w-12 h-9 bg-slate-200 rounded-lg flex items-center justify-center text-xs">🖼️</div>
                  <div>
                    <span className="text-[7px] font-bold bg-blue-100 text-blue-800 px-1.5 py-0.5 rounded-full">DETAIL MATERI</span>
                    <h5 className="font-bold text-xs text-[#17324D]">Phishing</h5>
                  </div>
                </div>
                <div className="flex gap-1 text-[7px] font-bold">
                  <span className="border border-slate-200 px-2 py-1 rounded-md">← Materi</span>
                  <span className="bg-blue-600 text-white px-2 py-1 rounded-md">Studi Kasus 💡</span>
                </div>
              </div>

              {/* Audio Narration Bar */}
              <div className="bg-gradient-to-r from-[#17324D] to-blue-900 text-white p-2 rounded-xl flex items-center justify-between text-[8px]">
                <div className="flex items-center gap-1.5">
                  <span className="p-1 rounded bg-blue-600">🔊</span>
                  <span>Dengarkan Penjelasan Phishing</span>
                </div>
                <span className="bg-cyan-400 text-slate-950 font-bold px-2 py-0.5 rounded shadow">▶ Putar Narasi</span>
              </div>

              {/* Content Grid: Apa Itu & Cara Kerja */}
              <div className="grid grid-cols-2 gap-2 text-[8px]">
                <div className="bg-white p-2.5 rounded-xl border border-slate-200">
                  <strong className="text-blue-600 block mb-1">❓ Apa itu Phishing?</strong>
                  <p className="text-slate-600">Upaya penipuan untuk mencuri data pribadi melalui tautan dan pesan palsu.</p>
                </div>
                <div className="bg-white p-2.5 rounded-xl border border-slate-200">
                  <strong className="text-purple-600 block mb-1">⚙️ Cara Kerja</strong>
                  <p className="text-slate-600">1. Kirim pesan palsu → 2. Korban klik link → 3. Data dicuri.</p>
                </div>
              </div>

              {/* Protection Card */}
              <div className="bg-emerald-50 border border-emerald-200 p-2.5 rounded-xl text-[8px] space-y-1">
                <strong className="text-emerald-950 block">🛡️ Cara Melindungi Diri:</strong>
                <div className="grid grid-cols-2 gap-1 text-slate-700">
                  <span>✔ Periksa domain URL</span>
                  <span>✔ Jangan berikan OTP</span>
                </div>
              </div>
            </div>
          </div>

          {/* Frame Description & Specs */}
          <div className="p-4 bg-white border-t border-slate-200 text-xs space-y-1.5 text-slate-700">
            <div className="flex items-center gap-2"><strong className="text-[#17324D]">Elemen:</strong> Header Gambar, Box Audio Narasi, Definisi, Cara Kerja, Skenario Nyata, Checklist Proteksi.</div>
            <div className="flex items-center gap-2"><strong className="text-[#17324D]">Audio / SFX:</strong> Suara Narasi Penjelasan (`phising.mp3`, `malware.mp3`, dll), `play.mp3` saat play.</div>
            <div className="flex items-center gap-2"><strong className="text-[#17324D]">Aksi / Navigasi:</strong> Tombol *"Studi Kasus Phishing"* $\rightarrow$ `/studi-kasus?category=Phishing`.</div>
          </div>
        </div>

        {/* ======================================================== */}
        {/* FRAME 05: STUDI KASUS INTERAKTIF */}
        {/* ======================================================== */}
        <div className="bg-white rounded-3xl border-2 border-slate-200 shadow-md overflow-hidden flex flex-col justify-between print:break-inside-avoid">
          {/* Frame Header */}
          <div className="bg-[#17324D] text-white p-4 flex items-center justify-between border-b border-blue-900">
            <div className="flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-purple-500 text-white font-black text-xs flex items-center justify-center">05</span>
              <h3 className="font-bold text-sm text-white">FRAME 5: Halaman Studi Kasus Interaktif</h3>
            </div>
            <span className="text-[11px] font-semibold text-purple-300 bg-white/10 px-2.5 py-0.5 rounded-full">app/studi-kasus/page.tsx</span>
          </div>

          {/* Frame Visual Mockup Canvas */}
          <div className="p-5 bg-slate-100 flex-1">
            <div className="space-y-2.5">
              {/* Category Filter Tabs */}
              <div className="flex gap-1.5 text-[8px] font-bold overflow-hidden">
                <span className="bg-blue-600 text-white px-2.5 py-1 rounded-lg">Semua Kasus</span>
                <span className="bg-white text-slate-600 px-2 py-1 rounded-lg border">Phishing</span>
                <span className="bg-white text-slate-600 px-2 py-1 rounded-lg border">Malware</span>
                <span className="bg-white text-slate-600 px-2 py-1 rounded-lg border">Password Attack</span>
              </div>

              {/* Case Study Card Mockup */}
              <div className="bg-white p-3.5 rounded-2xl border border-slate-200 shadow-sm space-y-2 text-[8px]">
                <div className="flex justify-between items-center border-b pb-1">
                  <span className="font-bold text-blue-800 bg-blue-100 px-2 py-0.5 rounded-full">Kategori: Phishing</span>
                  <span className="text-slate-400">Studi Kasus 1</span>
                </div>

                <h6 className="font-bold text-[#17324D] text-[9px]">Kasus Phishing 1: Pesan Verifikasi Akun Bank</h6>
                <div className="bg-slate-50 p-2 rounded-lg text-slate-700">
                  Kamu menerima SMS bank yang mendesak verifikasi dalam 1 jam via link mencurigakan...
                </div>

                {/* Multiple choice options */}
                <div className="space-y-1">
                  <div className="p-1.5 rounded-lg border border-slate-200 bg-white">A. Langsung klik link tersebut</div>
                  <div className="p-1.5 rounded-lg border border-blue-600 bg-blue-600 text-white font-bold flex justify-between">
                    <span>C. Abaikan link, periksa domain, hubungi call center resmi</span>
                    <span>✔</span>
                  </div>
                </div>

                {/* Feedback Panel */}
                <div className="bg-emerald-50 border border-emerald-300 p-2 rounded-xl text-emerald-950">
                  <strong className="block text-[8px] text-emerald-900">🎉 Feedback: Penjelasan Jawaban Tepat</strong>
                  <p className="text-[7.5px] text-emerald-800">Memeriksa domain dan konfirmasi via saluran resmi adalah tindakan paling tepat.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Frame Description & Specs */}
          <div className="p-4 bg-white border-t border-slate-200 text-xs space-y-1.5 text-slate-700">
            <div className="flex items-center gap-2"><strong className="text-[#17324D]">Elemen:</strong> Filter Kategori, Kartu Kasus (Tanpa Simbol #), Pilihan Opsi, Panel Pembahasan & Tips Keamanan.</div>
            <div className="flex items-center gap-2"><strong className="text-[#17324D]">Audio / SFX:</strong> Suara Jawaban Benar (`benar.mp3`), Suara Jawaban Salah (`salah.mp3`), `select.mp3` tab filter.</div>
            <div className="flex items-center gap-2"><strong className="text-[#17324D]">Aksi / Navigasi:</strong> Kirim Jawaban $\rightarrow$ Evaluasi otomatis, Tombol Mulai Kuis Evaluasi $\rightarrow$ `/kuis`.</div>
          </div>
        </div>

        {/* ======================================================== */}
        {/* FRAME 06: KUIS EVALUASI & HASIL */}
        {/* ======================================================== */}
        <div className="bg-white rounded-3xl border-2 border-slate-200 shadow-md overflow-hidden flex flex-col justify-between print:break-inside-avoid">
          {/* Frame Header */}
          <div className="bg-[#17324D] text-white p-4 flex items-center justify-between border-b border-blue-900">
            <div className="flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-emerald-400 text-slate-950 font-black text-xs flex items-center justify-center">06</span>
              <h3 className="font-bold text-sm text-white">FRAME 6: Kuis Evaluasi & Hasil ScoreCard</h3>
            </div>
            <span className="text-[11px] font-semibold text-emerald-300 bg-white/10 px-2.5 py-0.5 rounded-full">app/kuis & ScoreCard</span>
          </div>

          {/* Frame Visual Mockup Canvas */}
          <div className="p-5 bg-slate-100 flex-1">
            <div className="space-y-2.5">
              {/* Question Screen Mini Mockup */}
              <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-sm space-y-1.5 text-[8px]">
                <div className="flex justify-between items-center text-slate-500">
                  <span className="font-bold text-blue-700 bg-blue-100 px-2 py-0.5 rounded-full">Kuis Evaluasi</span>
                  <span className="font-bold">Soal 4 dari 10</span>
                </div>
                <div className="w-full bg-slate-200 h-1 rounded-full"><div className="bg-blue-600 h-1 rounded-full w-[40%]"></div></div>
                <p className="font-bold text-[#17324D] text-[8.5px]">Serangan menebak password otomatis disebut...</p>
                <div className="grid grid-cols-2 gap-1 text-[7.5px]">
                  <span className="bg-blue-600 text-white p-1 rounded font-semibold">A. Brute Force Attack</span>
                  <span className="bg-slate-50 p-1 rounded border">B. Password Attack</span>
                </div>
              </div>

              {/* Result ScoreCard Mini Mockup */}
              <div className="bg-white p-3 rounded-xl border border-slate-200 text-center space-y-1.5 shadow">
                <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-blue-600 to-[#17324D] text-cyan-300 flex items-center justify-center mx-auto text-xs">
                  🏆
                </div>
                <div className="text-[8px] font-bold text-slate-500">Nilai Akhir: <strong className="text-blue-600 text-sm">90</strong> / 100</div>
                <span className="inline-block text-[7px] font-bold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full border border-emerald-300">
                  Sangat Baik! 🌟 LULUS
                </span>
                <div className="flex justify-center gap-1 text-[7px] font-bold pt-0.5">
                  <span className="bg-blue-600 text-white px-2 py-0.5 rounded">Ulangi Kuis</span>
                  <span className="bg-[#17324D] text-white px-2 py-0.5 rounded">Dashboard</span>
                </div>
              </div>
            </div>
          </div>

          {/* Frame Description & Specs */}
          <div className="p-4 bg-white border-t border-slate-200 text-xs space-y-1.5 text-slate-700">
            <div className="flex items-center gap-2"><strong className="text-[#17324D]">Elemen:</strong> Counter Soal, Progress Bar Soal, 4 Opsi Pilihan Ganda, Trophy Badge, Confetti, Kartu Skor.</div>
            <div className="flex items-center gap-2"><strong className="text-[#17324D]">Audio / SFX:</strong> `musik kuis.mp3` (backsound), `select.mp3`, `complete.mp3` (selesai), voice ucapan selamat.</div>
            <div className="flex items-center gap-2"><strong className="text-[#17324D]">Aksi / Navigasi:</strong> Hitung skor otomatis, simpan ke LocalStorage, tombol Ulangi Kuis / Dashboard.</div>
          </div>
        </div>

      </div>

    </div>
  );
}
