import type { Metadata } from "next";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aën OS",
  description: "Operating System for Aën Café",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex h-screen bg-[#F5F3E9] text-[#3A2724] font-sans antialiased overflow-hidden">
        
        {/* SIDEBAR EDITORIAL */}
        <aside className="w-72 bg-[#3A2724] text-[#F5F3E9] flex flex-col justify-between border-r border-[#3A2724] z-10">
          
          <div>
            {/* LOGO HEADER PURE */}
            <div className="pt-12 pb-8 px-8 flex flex-col items-start">
              <Link href="/" className="mb-2">
                <Image 
                  src="/Aën bleu.png" 
                  alt="Aën Café Logo" 
                  width={110} 
                  height={40} 
                  priority 
                  className="object-contain" 
                />
              </Link>
              <span className="text-[9px] font-bold tracking-[0.2em] uppercase text-[#638BB0] opacity-80">
                Operating System
              </span>
            </div>

            {/* MINIMALIST NAVIGATION */}
            <nav className="flex flex-col mt-6 px-4 gap-1">
              <Link href="/" className="px-4 py-2.5 rounded-lg bg-[#F5F3E9] text-[#3A2724] font-medium text-sm transition-colors">
                Cockpit
              </Link>
              <Link href="/sales" className="px-4 py-2.5 rounded-lg text-[#F5F3E9]/60 hover:text-[#F5F3E9] hover:bg-[#F5F3E9]/5 font-medium text-sm transition-colors">
                Sales & Data
              </Link>
              <Link href="/stocks" className="px-4 py-2.5 rounded-lg text-[#F5F3E9]/60 hover:text-[#F5F3E9] hover:bg-[#F5F3E9]/5 font-medium text-sm transition-colors">
                Inventory & Recipes
              </Link>
              <Link href="/finance" className="px-4 py-2.5 rounded-lg text-[#F5F3E9]/60 hover:text-[#F5F3E9] hover:bg-[#F5F3E9]/5 font-medium text-sm transition-colors">
                Finance
              </Link>
            </nav>
          </div>

          {/* ADMIN PROFILE */}
          <div className="p-6">
            <div className="flex items-center gap-3 pt-6 border-t border-[#F5F3E9]/10">
              <div className="w-8 h-8 rounded bg-[#638BB0] flex items-center justify-center text-white text-xs font-bold">
                MN
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-medium leading-tight">Mona & Naël</span>
                <span className="text-[10px] uppercase tracking-wider text-[#F5F3E9]/50">Founders</span>
              </div>
            </div>
          </div>
        </aside>

        {/* MAIN CONTENT */}
        <main className="flex-1 overflow-y-auto">
          {children}
        </main>
      </body>
    </html>
  );
}