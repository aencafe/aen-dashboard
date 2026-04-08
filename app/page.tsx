import React from "react";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto p-10 flex flex-col gap-8">
      
      {/* HEADER */}
      <header className="flex justify-between items-end pb-2">
        <div>
          <p className="text-[11px] font-bold text-[#638BB0] tracking-[0.2em] uppercase mb-1">Live Overview</p>
          <h1 className="text-3xl font-medium tracking-tight text-[#3A2724]">Good morning, Naël.</h1>
        </div>
        <div className="flex gap-3">
          <button className="bg-white text-[#3A2724] px-4 py-2 rounded-lg text-sm font-medium border border-[#3A2724]/10 shadow-sm hover:bg-gray-50 transition-all flex items-center gap-2">
            <svg className="w-4 h-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" /></svg>
            Export
          </button>
          <button className="bg-[#3A2724] text-white px-4 py-2 rounded-lg text-sm font-medium shadow-md hover:bg-[#3A2724]/90 transition-all">
            + Add Entry
          </button>
        </div>
      </header>

      {/* KPI METRICS (4 Columns) */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        
        <div className="bg-white p-5 rounded-2xl shadow-[0_4px_20px_rgba(58,39,36,0.03)] border border-[#3A2724]/5 flex flex-col justify-between">
          <h3 className="text-[11px] font-bold text-[#3A2724]/40 uppercase tracking-wider mb-4 flex justify-between items-center">
            Net Revenue
            <span className="w-2 h-2 rounded-full bg-green-500"></span>
          </h3>
          <div>
            <p className="text-3xl font-light tracking-tight text-[#3A2724]"><span className="text-[#3A2724]/30">€</span> 1,240.50</p>
            <p className="text-xs text-green-600 font-medium mt-2 flex items-center gap-1">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" /></svg>
              12.5% vs yesterday
            </p>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl shadow-[0_4px_20px_rgba(58,39,36,0.03)] border border-[#3A2724]/5 flex flex-col justify-between">
          <h3 className="text-[11px] font-bold text-[#3A2724]/40 uppercase tracking-wider mb-4">Avg. Ticket</h3>
          <div>
            <p className="text-3xl font-light tracking-tight text-[#3A2724]"><span className="text-[#3A2724]/30">€</span> 8.87</p>
            <p className="text-xs text-[#3A2724]/40 font-medium mt-2">Target: € 9.00</p>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl shadow-[0_4px_20px_rgba(58,39,36,0.03)] border border-[#3A2724]/5 flex flex-col justify-between">
          <h3 className="text-[11px] font-bold text-[#3A2724]/40 uppercase tracking-wider mb-4">Orders Today</h3>
          <div>
            <p className="text-3xl font-light tracking-tight text-[#3A2724]">140</p>
            <p className="text-xs text-[#3A2724]/40 font-medium mt-2">50 morning / 90 afternoon</p>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl shadow-[0_4px_20px_rgba(58,39,36,0.03)] border border-[#3A2724]/5 flex flex-col justify-between">
          <h3 className="text-[11px] font-bold text-[#3A2724]/40 uppercase tracking-wider mb-4">Est. Margin</h3>
          <div>
            <p className="text-3xl font-light tracking-tight text-[#638BB0]">67.5<span className="text-2xl text-[#638BB0]/50">%</span></p>
            <p className="text-xs text-[#3A2724]/40 font-medium mt-2">Based on recipes COGS</p>
          </div>
        </div>

      </div>

      {/* BOTTOM SECTION (Split 2/3 - 1/3) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-2">
        
        {/* RECENT OPERATIONS (Left) */}
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-[0_4px_20px_rgba(58,39,36,0.03)] border border-[#3A2724]/5 p-6 flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-sm font-semibold text-[#3A2724]">Recent Transactions</h2>
            <button className="text-xs font-medium text-[#638BB0] hover:underline">View all</button>
          </div>
          
          <div className="flex-1 flex flex-col gap-4">
            {/* Fake Transaction Items based on your menu */}
            {[
              { time: "14:23", items: "2x Matcha Latte, 1x Cookie", price: "€ 13.60", method: "Card" },
              { time: "14:18", items: "1x Sandwich, 1x Espresso", price: "€ 11.30", method: "Cash" },
              { time: "14:05", items: "3 Dips + Bread, 2x Assila Beer", price: "€ 19.50", method: "Card" },
              { time: "13:50", items: "1x Cappuccino", price: "€ 4.30", method: "Card" },
            ].map((tx, i) => (
              <div key={i} className="flex justify-between items-center py-3 border-b border-[#3A2724]/5 last:border-0">
                <div className="flex items-center gap-4">
                  <span className="text-xs font-medium text-[#3A2724]/40 w-10">{tx.time}</span>
                  <span className="text-sm font-medium text-[#3A2724]">{tx.items}</span>
                </div>
                <div className="flex items-center gap-6">
                  <span className="text-xs text-[#3A2724]/50 bg-[#F5F3E9] px-2 py-1 rounded-md">{tx.method}</span>
                  <span className="text-sm font-semibold text-[#3A2724] w-16 text-right">{tx.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* AËN BRAIN TERMINAL (Right) */}
        <div className="bg-[#3A2724] rounded-2xl shadow-xl border border-[#3A2724] flex flex-col overflow-hidden relative">
          
          {/* Header AI */}
          <div className="px-5 py-4 border-b border-white/10 bg-black/20 flex justify-between items-center z-10">
            <div className="flex items-center gap-2">
              <span className="text-lg">✨</span>
              <h2 className="text-sm font-semibold text-white tracking-wide">Aën Brain</h2>
            </div>
            <span className="flex items-center gap-1.5 text-[10px] uppercase tracking-wider font-bold text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded-full">
              <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse"></span> Online
            </span>
          </div>

          {/* Chat Body */}
          <div className="flex-1 p-5 flex flex-col gap-4 relative z-10">
            <div className="bg-white/5 rounded-xl p-3 border border-white/10">
              <p className="text-xs text-white/80 leading-relaxed">
                System connected. I noticed your <strong className="text-white">Matcha Latte</strong> margin dropped to 65% this week. Would you like me to analyze the supplier cost variance?
              </p>
            </div>
          </div>

          {/* Input Area */}
          <div className="p-4 bg-black/10 z-10">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Ask Aën Brain..." 
                className="w-full bg-white/10 border border-white/20 rounded-lg py-2.5 pl-3 pr-10 text-sm text-white placeholder-white/40 focus:outline-none focus:ring-1 focus:ring-[#638BB0] transition-all"
                disabled
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </button>
            </div>
          </div>

          {/* Glow effect background */}
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-[#D94814] opacity-20 blur-[80px] pointer-events-none"></div>

        </div>

      </div>

    </div>
  );
}