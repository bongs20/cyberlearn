import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingCyberBackground from "@/components/FloatingCyberBackground";
import "./globals.css";

export const metadata: Metadata = {
  title: "CyberLearn — Mengenal Ancaman Siber dan Cara Melindungi Diri",
  description: "Multimedia Pembelajaran Interaktif Keamanan Komputer / Keamanan Informasi disajikan oleh Naila Nursyifa Nasir.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className="min-h-screen flex flex-col bg-[#EAF5FF] text-slate-800 antialiased selection:bg-cyan-300 selection:text-slate-900 relative">
        <FloatingCyberBackground />
        <Navbar />
        <main className="relative z-10 flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </main>
        <div className="relative z-10">
          <Footer />
        </div>
      </body>
    </html>
  );
}
