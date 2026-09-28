"use client";

import { useState } from "react";
import { PlayCircle, ShieldCheck, ExternalLink } from "lucide-react";

const speakVideoTitle = (title: string, index: number) => {
  if (typeof window === "undefined" || !("speechSynthesis" in window)) {
    return;
  }

  window.speechSynthesis.cancel();

  const label = `Video ${index === 0 ? "Pertama" : index === 1 ? "Kedua" : index === 2 ? "Ketiga" : index === 3 ? "Keempat" : "Kelima"}`;
  const utterance = new SpeechSynthesisUtterance(`${label}. ${title}`);
  utterance.lang = "id-ID";
  utterance.rate = 0.9;
  utterance.pitch = 1.1;
  utterance.volume = 1;

  window.speechSynthesis.speak(utterance);
};

interface VideoItem {
  id: string;
  title: string;
  description: string;
  youtubeId: string;
  duration: string;
}

const DEFAULT_VIDEOS: VideoItem[] = [
  {
    id: "1",
    title: "Mengenal Jenis Ancaman Siber & Keamanan Informasi",
    description: "Penjelasan komprehensif mengenai dasar ancaman siber di dunia modern, bagaimana hacker bekerja, dan prinsip dasar pertahanan diri.",
    youtubeId: "inWWhr5tnEA", // Educational cybersecurity video placeholder
    duration: "10:15",
  },
  {
    id: "2",
    title: "Phishing: Kenali dan Hindari Penipuannya",
    description: "Video pembelajaran tentang cara mengenali tanda-tanda phishing dan melindungi data pribadi dari tautan atau pesan palsu.",
    youtubeId: "blI9Q7ml8rU",
    duration: "01:38",
  },
  {
    id: "3",
    title: "Malware dan Cara Melindungi Perangkat",
    description: "Penjelasan mengenai malware, dampaknya terhadap perangkat, serta langkah-langkah dasar untuk mencegah infeksi.",
    youtubeId: "06Sc9GphB7Q",
    duration: "01:41",
  },
  {
    id: "4",
    title: "Password Attack dan Keamanan Kata Sandi",
    description: "Pelajari cara kerja serangan terhadap kata sandi dan kebiasaan yang membantu menjaga akun tetap aman.",
    youtubeId: "k2AX7-0cs4o",
    duration: "01:17",
  },
  {
    id: "5",
    title: "Social Engineering: Waspada Manipulasi",
    description: "Video tentang teknik manipulasi psikologis dan cara melakukan verifikasi sebelum memberikan informasi atau akses.",
    youtubeId: "2AoQBj3LTDM",
    duration: "02:19",
  },
];

export default function VideoPlayer() {
  const [activeVideo, setActiveVideo] = useState<VideoItem>(DEFAULT_VIDEOS[0]);

  const handleSelectVideo = (video: VideoItem, index: number) => {
    setActiveVideo(video);
    speakVideoTitle(video.title, index);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      
      {/* Main Video Embed Area */}
      <div className="lg:col-span-2 space-y-4">
        <div className="relative aspect-video w-full bg-slate-900 rounded-2xl overflow-hidden shadow-xl border border-slate-700">
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${activeVideo.youtubeId}?autoplay=0&rel=0`}
            title={activeVideo.title}
            className="w-full h-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-100 text-blue-800 flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
              Media Pembelajaran Resmi
            </span>
            <span className="text-xs text-slate-500 font-medium">Durasi: {activeVideo.duration}</span>
          </div>

          <h2 className="text-2xl font-bold text-[#17324D]">{activeVideo.title}</h2>
          <p className="text-sm text-slate-600 leading-relaxed">{activeVideo.description}</p>

          <div className="pt-2 flex items-center gap-3 text-xs text-slate-500">
            <span>Video ini dapat diputar langsung di atas atau dibuka di tab baru.</span>
            <a
              href={`https://www.youtube.com/watch?v=${activeVideo.youtubeId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-blue-600 font-semibold hover:underline"
            >
              <span>Buka di YouTube</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>

      {/* Video Playlist Selector */}
      <div className="space-y-4">
        <h3 className="text-lg font-bold text-[#17324D] flex items-center gap-2">
          <PlayCircle className="w-5 h-5 text-blue-600" />
          Daftar Video Pembelajaran
        </h3>

        <div className="space-y-3">
          {DEFAULT_VIDEOS.map((vid, idx) => {
            const isSelected = vid.id === activeVideo.id;
            return (
              <button
                key={vid.id}
                onClick={() => handleSelectVideo(vid, idx)}
                className={`w-full text-left p-4 rounded-xl border transition-all flex items-start gap-3.5 ${
                  isSelected
                    ? "bg-blue-600 text-white border-blue-600 shadow-lg scale-[1.02]"
                    : "bg-white text-slate-800 border-slate-200 hover:border-blue-400 hover:bg-slate-50"
                }`}
              >
                <div className={`mt-0.5 p-2 rounded-lg font-bold text-xs ${isSelected ? "bg-white/20 text-cyan-300" : "bg-blue-100 text-blue-800"}`}>
                  0{idx + 1}
                </div>
                <div className="space-y-1">
                  <h4 className={`text-sm font-semibold line-clamp-2 ${isSelected ? "text-white" : "text-[#17324D]"}`}>
                    {vid.title}
                  </h4>
                  <p className={`text-xs ${isSelected ? "text-blue-100" : "text-slate-500"}`}>
                    Durasi: {vid.duration}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>

    </div>
  );
}
