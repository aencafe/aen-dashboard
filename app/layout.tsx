import type { Metadata } from "next";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Plus_Jakarta_Sans } from "next/font/google";
import { 
  LayoutDashboard, 
  TrendingUp, 
  Package, 
  Banknote, 
  Sparkles, 
  ChefHat, 
  Users, 
  FolderArchive 
} from "lucide-react";
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
        
        {/* SIDEBAR FIXED HEIGHT */}
        <aside className="w-[280px] h-full flex flex-col border-r border-[#4a261e]/5 z-10 bg-white/40 backdrop-blur-2xl">
          
          {/* TOP SECTION: LOGO & NAV */}
          <div className="flex-1 flex flex-col min-h-0">
            <div className="pt-12 pb-10 px-8">
              <Link href="/" className="hover:opacity-80 transition-opacity">
                <Image 
                  src="/aen-logo-bleu.png" 
                  alt="Aën Logo" 
                  width={130} 
                  height={45} 
                  priority 
                  className="object-contain" 
                />
              </Link>
            </div>

            {/* NAV SCROLLABLE IF NEEDED */}
            <nav className="flex-1 overflow-y-auto px-6 space-y-1 custom-scrollbar">
              <p className="text-[9px] uppercase tracking-[0.4em] opacity-30 font-bold mb-4 px-3">Main Ops</p>
              
              <NavButton href="/" icon={<LayoutDashboard size={18}/>} label="Cockpit" active />
              <NavButton href="/sales" icon={<TrendingUp size={18}/>} label="Sales & Data" />
              <NavButton href="/stocks" icon={<Package size={18}/>} label="Inventory" />
              <NavButton href="/recipes" icon={<ChefHat size={18}/>} label="Recipes & Costing" />
              <NavButton href="/team" icon={<Users size={18}/>} label="Team & Schedule" />
              
              <div className="py-4"></div>
              
              <p className="text-[9px] uppercase tracking-[0.4em] opacity-30 font-bold mb-4 px-3">Management</p>
              <NavButton href="/finance" icon={<Banknote size={18}/>} label="Finance" />
              <NavButton href="/archives" icon={<FolderArchive size={18}/>} label="Archives" />
              
              <div className="py-4"></div>
              
              <p className="text-[9px] uppercase tracking-[0.4em] font-bold mb-4 px-3 text-[#90b6da]">Intelligence</p>
              <NavButton 
                href="/ia" 
                icon={<Sparkles size={18}/>} 
                label="Aën IA Internal" 
                variant="ai"
              />
            </nav>
          </div>

          {/* USER PROFILE - STICKY BOTTOM */}
          <div className="p-6 border-t border-[#4a261e]/5 bg-white/20">
            <div className="bg-[#4a261e] p-4 rounded-2xl flex items-center gap-3 shadow-lg shadow-[#4a261e]/10">
              <div className="w-9 h-9 rounded-full bg-[#F9F8F6]/10 flex items-center justify-center text-[#F9F8F6] text-[10px] font-bold border border-white/10">
                NC
              </div>
              <div className="flex flex-col overflow-hidden">
                <span className="text-xs font-bold text-white tracking-tight truncate">Naël Chekaf</span>
                <span className="text-[8px] uppercase tracking-widest text-white/50 font-medium">Founder Session</span>
              </div>
            </div>
          </div>
        </aside>

        <main className="flex-1 overflow-y-auto bg-transparent">
          {children}
        </main>
      </body>
    </html>
  );
}

function NavButton({ href, icon, label, active = false, variant = 'default' }: any) {
  const baseStyles = "flex items-center gap-3.5 px-3 py-3 rounded-xl text-sm font-medium transition-all duration-300 group";
  const activeStyles = active 
    ? "bg-[#4a261e] text-white shadow-sm" 
    : "hover:bg-[#4a261e]/5 text-[#4a261e]/60 hover:text-[#4a261e]";
  
  const aiStyles = "text-[#90b6da] border border-[#90b6da]/10 hover:bg-[#90b6da] hover:text-white hover:border-transparent";

  return (
    <Link href={href} className={`${baseStyles} ${variant === 'ai' ? aiStyles : activeStyles}`}>
      <span className={`${active ? 'scale-100' : 'group-hover:scale-110 opacity-70 group-hover:opacity-100'} transition-all`}>
        {icon}
      </span>
      <span className="tracking-tight">{label}</span>
    </Link>
  );
}