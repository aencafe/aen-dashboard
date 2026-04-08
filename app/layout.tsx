import type { Metadata } from "next";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  variable: "--font-jakarta",
});

export const metadata: Metadata = {
  title: "Aën OS - Workspace",
  description: "Operating System for Aën",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={jakarta.variable}>
      <body className="flex h-screen bg-[#F9F8F6] text-[#4a261e] font-sans antialiased overflow-hidden">
        
        {/* SIDEBAR */}
        <aside className="w-[280px] flex flex-col justify-between border-r border-[#4a261e]/10 z-10 bg-[#F9F8F6]/80 backdrop-blur-xl">
          <div>
            <div className="pt-12 pb-8 px-10">
              <Link href="/" className="hover:opacity-70 transition-opacity">
                <Image 
                  src="/aen-logo-bleu.png" 
                  alt="Aën Logo" 
                  width={100} 
                  height={35} 
                  priority 
                  className="object-contain" 
                />
              </Link>
            </div>

            <nav className="flex flex-col mt-8 px-10 gap-6 text-xl font-light">
              <Link href="/" className="transition-all duration-300 hover:italic hover:tracking-wide">
                Cockpit
              </Link>
              <Link href="/sales" className="opacity-60 transition-all duration-300 hover:opacity-100 hover:italic hover:tracking-wide">
                Sales & Data
              </Link>
              <Link href="/stocks" className="opacity-60 transition-all duration-300 hover:opacity-100 hover:italic hover:tracking-wide">
                Inventory
              </Link>
              <Link href="/finance" className="opacity-60 transition-all duration-300 hover:opacity-100 hover:italic hover:tracking-wide">
                Finance
              </Link>
            </nav>
          </div>

          {/* USER PROFILE */}
          <div className="p-10 mb-4">
            <h4 className="text-[10px] uppercase tracking-[0.4em] mb-4 opacity-60 italic">Session</h4>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[#90b6da] flex items-center justify-center text-[#4a261e] text-xs font-semibold shadow-sm">
                MN
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-medium">Mona & Naël</span>
                <span className="text-[10px] uppercase tracking-[0.2em] font-bold opacity-70 mt-0.5">Founders</span>
              </div>
            </div>
          </div>
        </aside>

        <main className="flex-1 overflow-y-auto">
          {children}
        </main>
      </body>
    </html>
  );
}