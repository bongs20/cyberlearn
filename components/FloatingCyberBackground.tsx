"use client";

import { usePathname } from "next/navigation";

export type CyberPreset = "dashboard" | "phishing" | "malware" | "password" | "social" | "general";

interface FloatingEmojiItem {
  symbol: string;
  fontSize: string;
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
  animationClass: string;
  delay: string;
  opacity: number;
  glowColor: string;
}

interface FloatingCyberBackgroundProps {
  preset?: CyberPreset;
}

export default function FloatingCyberBackground({ preset }: FloatingCyberBackgroundProps) {
  const pathname = usePathname();

  // Auto-detect preset based on pathname if not explicitly passed
  let activePreset = preset;
  if (!activePreset) {
    if (pathname.includes("phishing")) activePreset = "phishing";
    else if (pathname.includes("malware")) activePreset = "malware";
    else if (pathname.includes("password")) activePreset = "password";
    else if (pathname.includes("social")) activePreset = "social";
    else if (pathname === "/" || pathname.includes("dashboard")) activePreset = "dashboard";
    else activePreset = "general";
  }

  // Exact page-specific emojis requested by user
  const itemsMap: Record<CyberPreset, FloatingEmojiItem[]> = {
    // Halaman Dashboard: 🛡️ 🔐 💻 ⚠️
    dashboard: [
      { symbol: "🛡️", fontSize: "60px", top: "8%", left: "3%", animationClass: "animate-cyber-float-1", delay: "0s", opacity: 0.85, glowColor: "rgba(0, 212, 255, 0.7)" },
      { symbol: "🔐", fontSize: "56px", top: "16%", right: "4%", animationClass: "animate-cyber-float-2", delay: "1s", opacity: 0.85, glowColor: "rgba(139, 92, 246, 0.7)" },
      { symbol: "💻", fontSize: "58px", top: "46%", left: "2%", animationClass: "animate-cyber-float-3", delay: "2s", opacity: 0.80, glowColor: "rgba(22, 119, 255, 0.7)" },
      { symbol: "⚠️", fontSize: "54px", bottom: "24%", right: "4%", animationClass: "animate-cyber-float-1", delay: "1.5s", opacity: 0.90, glowColor: "rgba(255, 176, 32, 0.8)" },
      { symbol: "🛡️", fontSize: "52px", bottom: "8%", left: "4%", animationClass: "animate-cyber-float-2", delay: "3s", opacity: 0.85, glowColor: "rgba(0, 212, 255, 0.7)" },
      { symbol: "💻", fontSize: "54px", top: "72%", right: "5%", animationClass: "animate-cyber-float-3", delay: "0.5s", opacity: 0.80, glowColor: "rgba(22, 119, 255, 0.7)" },
    ],

    // Halaman Phishing: 🎣 ✉️ 🔗 ⚠️
    phishing: [
      { symbol: "🎣", fontSize: "64px", top: "8%", left: "3%", animationClass: "animate-cyber-float-1", delay: "0s", opacity: 0.90, glowColor: "rgba(255, 176, 32, 0.8)" },
      { symbol: "✉️", fontSize: "56px", top: "18%", right: "4%", animationClass: "animate-cyber-float-2", delay: "1s", opacity: 0.85, glowColor: "rgba(0, 212, 255, 0.7)" },
      { symbol: "🔗", fontSize: "58px", top: "50%", left: "2%", animationClass: "animate-cyber-float-3", delay: "2s", opacity: 0.85, glowColor: "rgba(139, 92, 246, 0.8)" },
      { symbol: "⚠️", fontSize: "54px", bottom: "20%", right: "4%", animationClass: "animate-cyber-float-1", delay: "2.8s", opacity: 0.90, glowColor: "rgba(255, 59, 92, 0.8)" },
      { symbol: "🎣", fontSize: "56px", bottom: "8%", left: "4%", animationClass: "animate-cyber-float-2", delay: "3.5s", opacity: 0.85, glowColor: "rgba(255, 176, 32, 0.8)" },
    ],

    // Halaman Malware: 🦠 💻 ⚠️ 🧬
    malware: [
      { symbol: "🦠", fontSize: "66px", top: "9%", left: "3%", animationClass: "animate-cyber-float-1", delay: "0s", opacity: 0.90, glowColor: "rgba(255, 59, 92, 0.8)" },
      { symbol: "💻", fontSize: "58px", top: "22%", right: "4%", animationClass: "animate-cyber-float-2", delay: "1.2s", opacity: 0.80, glowColor: "rgba(255, 176, 32, 0.7)" },
      { symbol: "⚠️", fontSize: "54px", top: "52%", left: "2%", animationClass: "animate-cyber-float-3", delay: "2.2s", opacity: 0.90, glowColor: "rgba(255, 59, 92, 0.8)" },
      { symbol: "🧬", fontSize: "60px", bottom: "22%", right: "4%", animationClass: "animate-cyber-float-1", delay: "1.8s", opacity: 0.85, glowColor: "rgba(24, 199, 142, 0.8)" },
      { symbol: "🦠", fontSize: "56px", bottom: "9%", left: "4%", animationClass: "animate-cyber-float-2", delay: "3.5s", opacity: 0.85, glowColor: "rgba(255, 59, 92, 0.8)" },
    ],

    // Halaman Password Attack: 🔐 🔑 🔓 🛡️
    password: [
      { symbol: "🔐", fontSize: "62px", top: "8%", left: "3%", animationClass: "animate-cyber-float-1", delay: "0s", opacity: 0.85, glowColor: "rgba(139, 92, 246, 0.8)" },
      { symbol: "🔑", fontSize: "56px", top: "20%", right: "4%", animationClass: "animate-cyber-float-2", delay: "1s", opacity: 0.85, glowColor: "rgba(0, 212, 255, 0.8)" },
      { symbol: "🔓", fontSize: "58px", top: "48%", left: "2%", animationClass: "animate-cyber-float-3", delay: "2.2s", opacity: 0.85, glowColor: "rgba(255, 176, 32, 0.8)" },
      { symbol: "🛡️", fontSize: "54px", bottom: "20%", right: "4%", animationClass: "animate-cyber-float-1", delay: "2.8s", opacity: 0.85, glowColor: "rgba(22, 119, 255, 0.7)" },
      { symbol: "🔑", fontSize: "52px", bottom: "9%", left: "4%", animationClass: "animate-cyber-float-2", delay: "3.6s", opacity: 0.85, glowColor: "rgba(139, 92, 246, 0.8)" },
    ],

    // Halaman Social Engineering: 👤 💬 🎭 ⚠️
    social: [
      { symbol: "👤", fontSize: "60px", top: "8%", left: "3%", animationClass: "animate-cyber-float-1", delay: "0s", opacity: 0.85, glowColor: "rgba(0, 212, 255, 0.8)" },
      { symbol: "💬", fontSize: "54px", top: "18%", right: "4%", animationClass: "animate-cyber-float-2", delay: "1.2s", opacity: 0.85, glowColor: "rgba(22, 119, 255, 0.7)" },
      { symbol: "🎭", fontSize: "60px", top: "50%", left: "2%", animationClass: "animate-cyber-float-3", delay: "2.4s", opacity: 0.90, glowColor: "rgba(139, 92, 246, 0.8)" },
      { symbol: "⚠️", fontSize: "54px", bottom: "22%", right: "4%", animationClass: "animate-cyber-float-1", delay: "1.8s", opacity: 0.90, glowColor: "rgba(255, 176, 32, 0.8)" },
      { symbol: "👤", fontSize: "52px", bottom: "9%", left: "4%", animationClass: "animate-cyber-float-2", delay: "3.2s", opacity: 0.80, glowColor: "rgba(0, 212, 255, 0.7)" },
    ],

    // General: 🛡️ 🔐 💻 ⚠️
    general: [
      { symbol: "🛡️", fontSize: "60px", top: "8%", left: "3%", animationClass: "animate-cyber-float-1", delay: "0s", opacity: 0.85, glowColor: "rgba(22, 119, 255, 0.7)" },
      { symbol: "🔐", fontSize: "54px", top: "20%", right: "4%", animationClass: "animate-cyber-float-2", delay: "1.4s", opacity: 0.85, glowColor: "rgba(139, 92, 246, 0.8)" },
      { symbol: "💻", fontSize: "56px", top: "52%", left: "2%", animationClass: "animate-cyber-float-3", delay: "2.2s", opacity: 0.80, glowColor: "rgba(0, 212, 255, 0.7)" },
      { symbol: "⚠️", fontSize: "52px", bottom: "22%", right: "4%", animationClass: "animate-cyber-float-1", delay: "3s", opacity: 0.90, glowColor: "rgba(255, 176, 32, 0.8)" },
    ],
  };

  const currentItems = itemsMap[activePreset || "general"] || itemsMap.general;

  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none"
      aria-hidden="true"
    >
      {currentItems.map((item, idx) => {
        return (
          <div
            key={idx}
            className={`absolute ${item.animationClass} transition-all duration-700 flex items-center justify-center`}
            style={{
              top: item.top,
              bottom: item.bottom,
              left: item.left,
              right: item.right,
              animationDelay: item.delay,
              opacity: item.opacity,
              fontSize: item.fontSize,
              filter: `drop-shadow(0 0 18px ${item.glowColor}) drop-shadow(0 0 8px ${item.glowColor})`,
              lineHeight: 1,
            }}
          >
            <span>{item.symbol}</span>
          </div>
        );
      })}
    </div>
  );
}
