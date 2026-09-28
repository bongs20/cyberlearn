import Link from "next/link";
import ThreatCard from "@/components/ThreatCard";
import { BookOpen, ArrowLeft, ShieldAlert, KeyRound, Bug, Users, Volume2 } from "lucide-react";
import { MATERIALS_DATA } from "@/data/materials";

export default function MateriOverviewPage() {
  return (
    <div className="space-y-10 py-4">
      
      {/* Header Banner */}
      <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-blue-100 text-blue-800">
            <BookOpen className="w-3.5 h-3.5 text-blue-600" />
            <span>Modul Pembelajaran</span>
          </div>
          <h1 className="text-3xl font-bold text-[#17324D]">Kenali Ancaman Siber</h1>
          <p className="text-sm text-slate-600 max-w-2xl leading-relaxed">
            Ancaman siber adalah berbagai tindakan atau aktivitas yang dapat mengganggu, merusak, mencuri, atau memperoleh akses tidak sah terhadap data dan sistem digital.
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

      {/* 4 Threat Cards Grid */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-[#17324D]">Pilih Topik Ancaman Siber:</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <ThreatCard
            title={MATERIALS_DATA.phishing.title}
            shortDesc={MATERIALS_DATA.phishing.shortDesc}
            slug={MATERIALS_DATA.phishing.slug}
            imagePath={MATERIALS_DATA.phishing.imagePath}
            icon={ShieldAlert}
            colorScheme="blue"
          />

          <ThreatCard
            title={MATERIALS_DATA.malware.title}
            shortDesc={MATERIALS_DATA.malware.shortDesc}
            slug={MATERIALS_DATA.malware.slug}
            imagePath={MATERIALS_DATA.malware.imagePath}
            icon={Bug}
            colorScheme="red"
          />

          <ThreatCard
            title={MATERIALS_DATA.passwordAttack ? MATERIALS_DATA["password-attack"].title : "Password Attack"}
            shortDesc={MATERIALS_DATA["password-attack"].shortDesc}
            slug={MATERIALS_DATA["password-attack"].slug}
            imagePath={MATERIALS_DATA["password-attack"].imagePath}
            icon={KeyRound}
            colorScheme="purple"
          />

          <ThreatCard
            title={MATERIALS_DATA["social-engineering"].title}
            shortDesc={MATERIALS_DATA["social-engineering"].shortDesc}
            slug={MATERIALS_DATA["social-engineering"].slug}
            imagePath={MATERIALS_DATA["social-engineering"].imagePath}
            icon={Users}
            colorScheme="amber"
          />

        </div>
      </div>

    </div>
  );
}
