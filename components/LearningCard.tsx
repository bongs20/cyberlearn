import Link from "next/link";
import { LucideIcon } from "lucide-react";

interface LearningCardProps {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
  badge?: string;
  accentColor?: "blue" | "cyan" | "purple" | "yellow";
}

export default function LearningCard({
  title,
  description,
  href,
  icon: Icon,
  badge,
  accentColor = "blue",
}: LearningCardProps) {
  
  const accentClasses = {
    blue: "bg-blue-600/10 text-blue-600 group-hover:bg-blue-600 group-hover:text-white",
    cyan: "bg-cyan-500/10 text-cyan-700 group-hover:bg-cyan-500 group-hover:text-slate-950",
    purple: "bg-purple-500/10 text-purple-700 group-hover:bg-purple-600 group-hover:text-white",
    yellow: "bg-amber-500/10 text-amber-700 group-hover:bg-amber-500 group-hover:text-slate-950",
  };

  return (
    <Link
      href={href}
      className="group relative bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 card-hover flex flex-col justify-between w-full"
    >
      {badge && (
        <span className="absolute top-4 right-4 px-2.5 py-1 text-[11px] font-semibold bg-blue-100 text-blue-800 rounded-full">
          {badge}
        </span>
      )}
      <div>
        <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-colors ${accentClasses[accentColor]}`}>
          <Icon className="w-7 h-7" />
        </div>
        <h3 className="text-xl font-bold text-[#17324D] mb-2 group-hover:text-blue-600 transition-colors">
          {title}
        </h3>
        <p className="text-sm text-slate-600 leading-relaxed mb-4">
          {description}
        </p>
      </div>

      <div className="flex items-center gap-1.5 text-xs font-semibold text-blue-600 group-hover:translate-x-1 transition-transform">
        <span>Buka Menu</span>
        <span>→</span>
      </div>
    </Link>
  );
}
