"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Shield, Lock, Menu, X, BookOpen, PlayCircle, Lightbulb, ClipboardCheck, LayoutDashboard, Home } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Beranda", href: "/", icon: Home },
    { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    { name: "Materi", href: "/materi", icon: BookOpen },
    { name: "Video", href: "/video", icon: PlayCircle },
    { name: "Studi Kasus", href: "/studi-kasus", icon: Lightbulb },
    { name: "Kuis", href: "/kuis", icon: ClipboardCheck },
  ];

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true;
    if (path === "/dashboard" && pathname === "/dashboard") return true;
    if (path !== "/" && path !== "/dashboard" && pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <nav className="sticky top-0 z-50 glass-nav text-white border-b border-blue-900/40 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo & Branding */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="p-2 rounded-xl bg-blue-600/90 text-cyan-300 shadow-md group-hover:scale-105 transition-transform">
              <Shield className="w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl tracking-tight flex items-center gap-1 text-white">
                Cyber<span className="text-cyan-400">Learn</span>
                <Lock className="w-3.5 h-3.5 text-cyan-400 inline ml-0.5" />
              </span>
              <span className="text-[10px] text-blue-200 tracking-wider font-medium">MULTIMEDIA INTERAKTIF</span>
            </div>
          </Link>

          {/* Desktop Navigation Menu */}
          <div className="hidden md:flex items-center gap-1.5">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-sm font-medium transition-all ${
                    active
                      ? "bg-blue-600 text-white shadow-md font-semibold"
                      : "text-blue-100 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  <Icon className={`w-4 h-4 ${active ? "text-cyan-300" : "text-blue-300"}`} />
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-blue-100 hover:bg-white/10 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#17324D] border-b border-blue-800 px-4 pt-2 pb-4 space-y-1 shadow-xl animate-in slide-in-from-top duration-200">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                  active
                    ? "bg-blue-600 text-white font-semibold"
                    : "text-blue-100 hover:bg-white/10"
                }`}
              >
                <Icon className={`w-5 h-5 ${active ? "text-cyan-300" : "text-blue-300"}`} />
                {link.name}
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
}
