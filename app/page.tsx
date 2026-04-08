import React from "react"; // 👈 L'import anti-erreur

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto p-12 flex flex-col gap-10">
      
      {/* Dashboard Header */}
      <header className="flex justify-between items-end pb-6 border-b border-[#3A2724]/10">
        <div>
          <p className="text-xs font-bold text-[#638BB0] tracking-widest uppercase mb-2">Overview</p>
          <h1 className="text-4xl font-light tracking-tight text-[#3A2724]">Hello Naël.</h1>
        </div>
        <button className="bg-[#3A2724] text-[#F5F3E9] px-6 py-3 rounded-full text-sm font-medium hover:bg-[#3A2724]/90 transition-all shadow-lg flex items-center gap-2">
          + New Entry
        </button>
      </header>

      {/* KPIs Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        <div className="bg-white/60 backdrop-blur-md p-8 rounded-3xl border border-[#3A2724]/5 shadow-sm hover:shadow-md transition-all">
          <h3 className="text-xs font-bold text-[#3A2724]/50 uppercase tracking-widest mb-3">Revenue (Today)</h3>
          <div className="flex items-baseline gap-3">
            <p className="text-5xl font-light text-[#638BB0]">-- €</p>
            <span className="text-sm text-[#3A2724]/40 font-medium">+0% vs yesterday</span>
          </div>
        </div>

        <div className="bg-white/60 backdrop-blur-md p-8 rounded-3xl border border-[#3A2724]/5 shadow-sm hover:shadow-md transition-all">
          <h3 className="text-xs font-bold text-[#3A2724]/50 uppercase tracking-widest mb-3">Gross Margin (Theoretical)</h3>
          <p className="text-5xl font-light text-[#3A2724]">67.5%</p>
          <p className="text-sm text-[#3A2724]/40 mt-2">Based on recipes</p>
        </div>

        <div className="bg-white/60 backdrop-blur-md p-8 rounded-3xl border border-[#638BB0]/20 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-20 h-20 bg-[#638BB0]/5 rounded-bl-full"></div>
          <h3 className="text-xs font-bold text-[#638BB0] uppercase tracking-widest mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#638BB0] animate-pulse"></span> Stock Alerts
          </h3>
          <p className="text-xl font-medium text-[#3A2724] mt-2">All clear.</p>
          <p className="text-sm text-[#3A2724]/60 mt-1">No stockouts predicted.</p>
        </div>

      </div>

      {/* AI Module */}
      <div className="mt-4 bg-gradient-to-br from-[#3A2724] to-[#251816] p-10 rounded-[2.5rem] shadow-2xl text-[#F5F3E9] relative overflow-hidden">
         <div className="absolute -top-20 -right-20 w-96 h-96 bg-[#638BB0] opacity-10 blur-[100px] rounded-full pointer-events-none"></div>
         
         <div className="relative z-10">
            <h2 className="text-3xl font-light mb-3">Aën Brain <span className="text-[#638BB0] text-xl">✨</span></h2>
            <p className="text-[#F5F3E9]/70 max-w-xl mb-8 leading-relaxed">
              Your analytical assistant is ready. It is waiting for real sales data to begin identifying your rush hours and cross-referencing recipe profitability.
            </p>
            <button className="bg-[#F5F3E9] text-[#3A2724] px-6 py-3 rounded-full text-sm font-bold hover:bg-white transition-all shadow-lg">
              Connect SumUp API
            </button>
         </div>
      </div>

    </div>
  );
}