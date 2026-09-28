interface ProgressBarProps {
  label: string;
  percentage: number;
  valueText?: string;
  colorScheme?: "blue" | "green" | "purple" | "amber";
}

export default function ProgressBar({
  label,
  percentage,
  valueText,
  colorScheme = "blue",
}: ProgressBarProps) {
  const barColors = {
    blue: "bg-blue-600",
    green: "bg-emerald-500",
    purple: "bg-purple-600",
    amber: "bg-amber-500",
  };

  const clampedPercent = Math.min(100, Math.max(0, percentage));

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between text-xs font-semibold text-slate-700">
        <span>{label}</span>
        <span className="text-[#17324D]">{valueText || `${Math.round(clampedPercent)}%`}</span>
      </div>
      <div className="w-full bg-slate-200 h-2.5 rounded-full overflow-hidden p-0.5">
        <div
          className={`h-full rounded-full transition-all duration-500 ${barColors[colorScheme]}`}
          style={{ width: `${clampedPercent}%` }}
        />
      </div>
    </div>
  );
}
