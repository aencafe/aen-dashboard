import React from "react";

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto p-12 flex flex-col gap-12">
      
      {/* HEADER ÉPURÉ */}
      <header className="flex justify-between items-end pb-6 border-b border-[#3A2724]/20">
        <div>
          <h1 className="text-4xl font-light tracking-tight text-[#3A2724]">Cockpit</h1>
          <p className="text-sm text-[#3A2724]/60 mt-2 font-medium">Overview of today's performance.</p>
        </div>
        <button className="bg-[#D94814] text-white px-5 py-2.5 rounded text-sm font-bold tracking-wide hover:bg-[#3A2724] transition-colors">
          + New Entry
        </button>
      </header>

      {/* KPI GRID - CARTES PURES */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Carte CA */}
        <div className="bg-white p-6 rounded-xl border border-[#3A2724]/10 flex flex-col justify-between h-40">
          <h3 className="text-xs font-bold text-[#3A2724]/50 uppercase tracking-widest">Revenue (Today)</h3>
          <div>
            <p className="text-4xl font-light text-[#3A2724]">-- €</p>
            <p className="text-xs text-[#638BB0] font-medium mt-1">+0% vs yesterday</p>
          </div>
        </div>

        {/* Carte Marge */}
        <div className="bg-white p-6 rounded-xl border border-[#3A2724]/10 flex flex-col justify-between h-40">
          <h3 className="text-xs font-bold text-[#3A2724]/50 uppercase tracking-widest">Gross Margin (Theo)</h3>
          <div>
            <p className="text-4xl font-light text-[#3A2724]">67.5%</p>
            <p className="text-xs text-[#3A2724]/40 font-medium mt-1">Based on standard recipes</p>
          </div>
        </div>

        {/* Carte Stock */}
        <div className="bg-white p-6 rounded-xl border border-[#3A2724]/10 flex flex-col justify-between h-40">
          <h3 className="text-xs font-bold text-[#3A2724]/50 uppercase tracking-widest">Inventory Status</h3>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2 h-2 rounded-full bg-[#638BB0]"></span>
              <p className="text-lg font-medium text-[#3A2724]">Optimal</p>
            </div>
            <p className="text-xs text-[#3A2724]/40 font-medium">No stockouts predicted.</p>
          </div>
        </div>

      </div>

      {/* AËN BRAIN - ÉDITORIAL */}
      <div className="bg-[#3A2724] p-10 rounded-2xl flex flex-col md:flex-row justify-between items-center gap-8">
         <div className="max-w-xl text-[#F5F3E9]">
            <h2 className="text-2xl font-light mb-2 flex items-center gap-3">
              Aën Brain <span className="text-[#638BB0] text-sm border border-[#638BB0] px-2 py-0.5 rounded-full">AI Module</span>
            </h2>
            <p className="text-[#F5F3E9]/70 text-sm leading-relaxed">
              Your analytical engine is offline. Connect your real-time sales data to activate pattern recognition, rush-hour analysis, and automated inventory depletion.
            </p>
         </div>
         <button className="bg-[#F5F3E9] text-[#3A2724] px-6 py-3 rounded text-sm font-bold whitespace-nowrap hover:bg-[#638BB0] hover:text-white transition-colors">
            Connect SumUp
         </button>
      </div>

    </div>
  );
}