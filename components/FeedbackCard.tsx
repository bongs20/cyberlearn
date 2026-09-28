import { CheckCircle2, AlertTriangle, Info, XCircle } from "lucide-react";

interface FeedbackCardProps {
  type: "success" | "warning" | "info" | "danger";
  title: string;
  description: string;
}

export default function FeedbackCard({ type, title, description }: FeedbackCardProps) {
  const styles = {
    success: {
      container: "bg-emerald-50 border-emerald-300 text-emerald-950",
      icon: <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />,
    },
    warning: {
      container: "bg-amber-50 border-amber-300 text-amber-950",
      icon: <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0" />,
    },
    info: {
      container: "bg-blue-50 border-blue-300 text-blue-950",
      icon: <Info className="w-5 h-5 text-blue-600 flex-shrink-0" />,
    },
    danger: {
      container: "bg-rose-50 border-rose-300 text-rose-950",
      icon: <XCircle className="w-5 h-5 text-rose-600 flex-shrink-0" />,
    },
  };

  const selectedStyle = styles[type];

  return (
    <div className={`p-4 rounded-xl border ${selectedStyle.container} flex items-start gap-3 text-sm leading-relaxed shadow-sm`}>
      <div className="mt-0.5">{selectedStyle.icon}</div>
      <div className="space-y-0.5">
        <h5 className="font-bold">{title}</h5>
        <p className="text-xs sm:text-sm opacity-90">{description}</p>
      </div>
    </div>
  );
}
