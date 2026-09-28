import Link from "next/link";
import VideoPlayer from "@/components/VideoPlayer";
import { PlayCircle, ArrowLeft } from "lucide-react";

export default function VideoPage() {
  return (
    <div className="space-y-8 py-4">
      
      {/* Header Banner */}
      <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-cyan-100 text-cyan-800">
            <PlayCircle className="w-3.5 h-3.5 text-cyan-600" />
            <span>Media Visual Pendukung</span>
          </div>
          <h1 className="text-3xl font-bold text-[#17324D]">Video Pembelajaran</h1>
          <p className="text-sm text-slate-600 max-w-xl">
            Video berikut digunakan sebagai media pendukung untuk memperkuat pemahaman tentang ancaman siber dan cara melindungi diri.
          </p>
        </div>

        <Link
          href="/dashboard"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-white hover:bg-slate-50 text-[#17324D] text-sm font-bold border-2 border-slate-200 hover:border-blue-400 shadow-md hover:shadow-lg transition-all hover:scale-105 flex-shrink-0 group"
        >
          <ArrowLeft className="w-4 h-4 text-blue-600 group-hover:-translate-x-1 transition-transform" />
          <span>Kembali ke Dashboard</span>
        </Link>
      </div>

      {/* Video Player Component */}
      <VideoPlayer />

    </div>
  );
}
