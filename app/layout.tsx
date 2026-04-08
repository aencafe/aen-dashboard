import type { Metadata } from "next";
import React from "react"; // 👈 L'import qui enlève les erreurs rouges
import Link from "next/link"; // 👈 La vraie navigation Next.js
import Image from "next/image";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aën OS - Cockpit",
  description: "Centralized Operating System for Aën Café",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex h-screen bg-[#F5F3E9] text-[#3A2724] font-sans antialiased overflow-hidden">
        
        {/* SIDEBAR PREMIUM */}
        <aside className="w-72 bg-[#3A2724] text-[#F5F3E9] flex flex-col justify-between shadow-2xl z-10 relative">
          
          <div className="absolute top-0 left-0 w-full h-40 bg-[#638BB0]/10 blur-[50px] pointer-events-none rounded-full"></div>

          <div className="relative z-10">
            {/* LOGO HEADER */}
            <div className="p-10 flex flex-col items-center justify-center border-b border-[#F5F3E9]/10">
              <Link href="/" className="transition-transform hover:scale-105 active:scale-95">
                <Image 
                  src="/Aën bleu.png" 
                  alt="Aën Café Logo" 
                  width={150} 
                  height={50} 
                  priority 
                  className="object-contain" 
                />
              </Link>
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#638BB0]/70 mt-3 -mb-2">
                OPERATING SYSTEM
              </span>
            </div>

            {/* ENGLISH NAVIGATION */}
            <nav className="flex flex-col mt-8 px-4 gap-2.5">
              <Link href="/" className="px-5 py-3 rounded-xl bg-[#F5F3E9]/10 text-[#F5F3E9] font-medium transition-all shadow-sm flex items-center gap-3">
                <span className="text-sm">Cockpit</span>
              </Link>
              <Link href="/sales" className="px-5 py-3 rounded-xl hover:bg-[#F5F3E9]/5 text-[#F5F3E9]/60 hover:text-[#F5F3E9] transition-all flex items-center gap-3">
                <span className="text-sm">Sales & Data</span>
              </Link>
              <Link href="/stocks" className="px-5 py-3 rounded-xl hover:bg-[#F5F3E9]/5 text-[#F5F3E9]/60 hover:text-[#F5F3E9] transition-all flex items-center gap-3">
                <span className="text-sm">Inventory & Recipes</span>
              </Link>
              <Link href="/finance" className="px-5 py-3 rounded-xl hover:bg-[#F5F3E9]/5 text-[#F5F3E9]/60 hover:text-[#F5F3E9] transition-all flex items-center gap-3">
                <span className="text-sm">Finance</span>
              </Link>
            </nav>
          </div>

          {/* Admin Profile */}
          <div className="p-6 border-t border-[#F5F3E9]/10 relative z-10">
            <div className="flex items-center gap-4 bg-[#F5F3E9]/5 p-3 rounded-2xl">
              <div className="w-10 h-10 rounded-full bg-[#638BB0] flex items-center justify-center text-white text-sm font-bold shadow-lg ring-2 ring-[#F5F3E9]/10">
                MN
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-medium">Mona & Naël</span>
                <span className="text-xs text-[#F5F3E9]/50">Administrators</span>
              </div>
            </div>
          </div>
        </aside>

        {/* MAIN CONTENT ZONE */}
        <main className="flex-1 overflow-y-auto bg-[#F5F3E9]">
          {children}
        </main>
      </body>
    </html>
  );
}