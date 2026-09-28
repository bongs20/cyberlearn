import Link from "next/link";
import { Shield, Heart, GraduationCap } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#17324D] text-white border-t border-blue-900/40 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          
          {/* Column 1: App Info */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="p-1.5 rounded-lg bg-blue-600 text-cyan-300">
                <Shield className="w-5 h-5" />
              </div>
              <span className="font-bold text-lg text-white">CyberLearn</span>
            </div>
            <p className="text-xs text-blue-200 leading-relaxed">
              Multimedia Pembelajaran Interaktif Ancaman Siber dan Cara Melindungi Diri di Dunia Digital. Dirancang untuk membantu mahasiswa & pelajar memahami dasar keamanan siber.
            </p>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h4 className="text-sm font-semibold text-cyan-300 uppercase tracking-wider mb-3">Navigasi Belajar</h4>
            <ul className="space-y-2 text-xs text-blue-100">
              <li><Link href="/dashboard" className="hover:text-cyan-300 transition-colors">Dashboard Utama</Link></li>
              <li><Link href="/petunjuk" className="hover:text-cyan-300 transition-colors">Petunjuk Penggunaan</Link></li>
              <li><Link href="/materi" className="hover:text-cyan-300 transition-colors">Materi Ancaman Siber</Link></li>
              <li><Link href="/studi-kasus" className="hover:text-cyan-300 transition-colors">Studi Kasus Interaktif</Link></li>
              <li><Link href="/kuis" className="hover:text-cyan-300 transition-colors">Kuis & Evaluasi</Link></li>
            </ul>
          </div>

          {/* Column 3: Academic Metadata */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-cyan-300 uppercase tracking-wider">Identitas Project</h4>
            <div className="bg-blue-950/60 p-3.5 rounded-xl border border-blue-800/60 space-y-2 text-xs">
              <div className="flex items-center gap-2 text-blue-200">
                <GraduationCap className="w-4 h-4 text-cyan-400" />
                <span>Mata Kuliah: Keamanan Komputer</span>
              </div>
              <p className="text-blue-100 font-medium">
                Pembuat: <span className="text-white font-semibold">Naila Nursyifa Nasir</span>
              </p>
              <p className="text-[11px] text-blue-300">
                Project Tugas UTS — Multimedia Pembelajaran Interaktif
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-blue-800/60 flex flex-col sm:flex-row items-center justify-between text-xs text-blue-300 gap-3">
          <p>© {new Date().getFullYear()} CyberLearn — Presented by Naila Nursyifa Nasir</p>
          <p className="flex items-center gap-1">
            Dibuat untuk edukasi keamanan siber <Heart className="w-3.5 h-3.5 text-red-400 fill-red-400" />
          </p>
        </div>

      </div>
    </footer>
  );
}
