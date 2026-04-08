import type { Metadata } from "next";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Plus_Jakarta_Sans } from "next/font/google";
import { LayoutDashboard, TrendingUp, Package, Banknote, Sparkles, UserCircle } from "lucide-react";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  variable: "--font-jakarta",
});

export const metadata: Metadata = {
  title: "Aën OS - Cockpit",
  description: "Operating System for Aën",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={jakarta.variable}>
      <body className="flex h-screen bg-[#F9F8F6] text-[#4a261e] font-sans antialiased overflow-hidden">
        
        {/* SIDEBAR - STRUCTURED BUTTONS */}
        <aside className="w-[300px] flex flex-col justify-between border-r border-[#4a261e]/5 z-10 bg-white/40 backdrop-blur-2xl p-8">
          
          <div className="space-y-12">
            {/* LOGO - AGRANDI */}
            <div className="px-4">
              <Link href="/" className="hover:opacity-80 transition-opacity">
                <Image 
                  src="/aen-logo-bleu.png" 
                  alt="Aën Logo" 
                  width={140} 
                  height={50} 
                  priority 
                  className="object-contain" 
                />
              </Link>
            </div>

            {/* NAVIGATION MODULES */}
            <nav className="flex flex-col gap-3">
              <p className="text-[10px] uppercase tracking-[0.3em] opacity-40 font-bold mb-2 px-4">Menu</p>
              
              <NavButton href="/" icon={<LayoutDashboard size={18}/>} label="Cockpit" active />
              <NavButton href="/sales" icon={<TrendingUp size={18}/>} label="Sales & Data" />
              <NavButton href="/stocks" icon={<Package size={18}/>} label="Inventory" />
              <NavButton href="/finance" icon={<Banknote size={18}/>} label="Finance" />
              
              <div className="my-4 border-t border-[#4a261e]/5"></div>
              
              <p className="text-[10px] uppercase tracking-[0.3em] opacity-40 font-bold mb-2 px-4 text-[#90b6da]">Intelligence</p>
              <NavButton 
                href="/ia" 
                icon={<Sparkles size={18}/>} 
                label="Aën IA Internal" 
                variant="ai"
              />
            </nav>
          </div>

          {/* USER PROFILE CARD */}
          <div className="bg-[#4a261e]/5 p-6 rounded-2xl flex items-center gap-4 border border-[#4a261e]/5">
            <div className="w-10 h-10 rounded-full bg-[#4a261e] text-[#F9F8F6] flex items-center justify-center text-xs font-bold shadow-lg">
              MN
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold tracking-tight">Mona & Naël</span>
              <span className="text-[9px] uppercase tracking-widest opacity-50">Admin OS</span>
            </div>
          </div>
        </aside>

        <main className="flex-1 overflow-y-auto scroll-smooth">
          {children}
        </main>
      </body>
    </html>
  );
}

// Composant Bouton Navigation
function NavButton({ href, icon, label, active = false, variant = 'default' }: any) {
  const baseStyles = "flex items-center gap-4 px-4 py-3.5 rounded-xl text-sm font-medium transition-all duration-300 group";
  const activeStyles = active 
    ? "bg-[#4a261e] text-white shadow-md shadow-[#4a261e]/20" 
    : "hover:bg-[#4a261e]/5 hover:translate-x-1 text-[#4a261e]/70 hover:text-[#4a261e]";
  
  const aiStyles = "text-[#90b6da] border border-[#90b6da]/20 hover:bg-[#90b6da] hover:text-white";

  return (
    <Link href={href} className={`${baseStyles} ${variant === 'ai' ? aiStyles : activeStyles}`}>
      <span className={`${active ? 'scale-110' : 'group-hover:scale-110'} transition-transform duration-300`}>
        {icon}
      </span>
      <span className="tracking-wide">{label}</span>
    </Link>
  );
}