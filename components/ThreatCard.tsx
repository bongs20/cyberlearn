import Link from "next/link";
import Image from "next/image";
import { LucideIcon, ArrowRight } from "lucide-react";

interface ThreatCardProps {
  title: string;
  shortDesc: string;
  slug: string;
  imagePath: string;
  icon: LucideIcon;
  colorScheme: "blue" | "red" | "purple" | "amber";
}

export default function ThreatCard({
  title,
  shortDesc,
  slug,
  imagePath,
  icon: Icon,
  colorScheme = "blue",
}: ThreatCardProps) {

  const schemes = {
    blue: {
      badge: "bg-blue-100 text-blue-800",
      iconBg: "bg-blue-600 text-white",
      border: "hover:border-blue-500",
      btn: "text-blue-600 hover:text-blue-800",
    },
    red: {
      badge: "bg-rose-100 text-rose-800",
      iconBg: "bg-rose-600 text-white",
      border: "hover:border-rose-500",
      btn: "text-rose-600 hover:text-rose-800",
    },
    purple: {
      badge: "bg-purple-100 text-purple-800",
      iconBg: "bg-purple-600 text-white",
      border: "hover:border-purple-500",
      btn: "text-purple-600 hover:text-purple-800",
    },
    amber: {
      badge: "bg-amber-100 text-amber-800",
      iconBg: "bg-amber-600 text-white",
      border: "hover:border-amber-500",
      btn: "text-amber-700 hover:text-amber-900",
    },
  };

  const scheme = schemes[colorScheme];

  return (
    <div className={`bg-white rounded-xl p-4 border border-slate-200 shadow-sm transition-all duration-300 card-hover flex flex-col justify-between ${scheme.border}`}>
      <div>
        <div className="material-visual relative mb-4 flex w-full items-center justify-center overflow-hidden rounded-2xl bg-slate-100">
          <Image
            src={imagePath}
            alt={`Ilustrasi ${title}`}
            width={1536}
            height={1024}
            sizes="(min-width: 768px) 50vw, 100vw"
            className="material-image h-auto w-full max-w-full rounded-2xl object-contain"
          />
        </div>

        <div className="flex items-center justify-between mb-3">
          <div className={`p-2.5 rounded-xl shadow-md ${scheme.iconBg}`}>
            <Icon className="w-5 h-5" />
          </div>
          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider ${scheme.badge}`}>
            Materi
          </span>
        </div>

        <h3 className="text-lg sm:text-xl font-bold text-[#17324D] mb-2">
          {title}
        </h3>

        <p className="text-[13px] sm:text-sm text-slate-600 leading-relaxed mb-4">
          {shortDesc}
        </p>
      </div>

      <Link
        href={`/materi/${slug}`}
        className={`inline-flex min-h-11 items-center justify-between font-semibold text-sm py-2 px-3.5 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors ${scheme.btn}`}
      >
        <span>Pelajari Selengkapnya</span>
        <ArrowRight className="w-4 h-4 ml-1" />
      </Link>
    </div>
  );
}
