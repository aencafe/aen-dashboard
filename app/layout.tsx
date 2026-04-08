import type { Metadata } from "next";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aën OS - Workspace",
  description: "Operating System for Aën",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex h-screen bg-[#F5F3E9] text-[#3A2724] font-sans antialiased overflow-hidden selection:bg-[#638BB0] selection:text-white">
        
        {/* SIDEBAR - HIGH END SAAS */}
        <aside className="w-[260px] bg-[#F5F3E9] flex flex-col justify-between border-r border-[#3A2724]/5 z-10">
          
          <div>
            {/* LOGO AREA */}
            <div className="h-24 px-8 flex items-center">
              <Link href="/" className="transition-opacity hover:opacity-80">
                <Image 
                  src="/Aën bleu.png" 
                  alt="Aën Logo" 
                  width={90} 
                  height={30} 
                  priority 
                  className="object-contain" 
                />
              </Link>
            </div>

            {/* NAVIGATION WITH INLINE SVGS */}
            <nav className="flex flex-col px-4 gap-1 mt-4">
              
              <Link href="/" className="flex items-center gap-3 px-4 py-2.5 rounded-lg bg-white text-[#3A2724] shadow-[0_2px_8px_rgba(58,39,36,0.04)] font-medium text-sm border border-[#3A2724]/5 transition-all">
                <svg className="w-4 h-4 text-[#638BB0]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                Cockpit
              </Link>

              <Link href="/sales" className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-[#3A2724]/60 hover:bg-[#3A2724]/5 hover:text-[#3A2724] font-medium text-sm transition-all">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                Sales & Data
              </Link>

              <Link href="/stocks" className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-[#3A2724]/60 hover:bg-[#3A2724]/5 hover:text-[#3A2724] font-medium text-sm transition-all">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>
                Inventory
              </Link>

              <Link href="/finance" className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-[#3A2724]/60 hover:bg-[#3A2724]/5 hover:text-[#3A2724] font-medium text-sm transition-all">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>
                Finance
              </Link>

            </nav>
          </div>

          {/* USER PROFILE - BOTTOM */}
          <div className="p-4 border-t border-[#3A2724]/5 m-4 bg-white rounded-xl shadow-[0_2px_10px_rgba(58,39,36,0.02)] border border-[#3A2724]/5">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#638BB0] to-[#88a9c7] flex items-center justify-center text-white text-xs font-semibold shadow-inner">
                MN
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-semibold text-[#3A2724] leading-tight">Mona & Naël</span>
                <span className="text-[10px] uppercase tracking-wider text-[#3A2724]/40 font-bold">Admin</span>
              </div>
            </div>
          </div>
        </aside>

        {/* MAIN CONTENT AREA */}
        <main className="flex-1 overflow-y-auto">
          {children}
        </main>
      </body>
    </html>
  );
}