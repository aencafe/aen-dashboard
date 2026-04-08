import React from "react";

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto p-12 md:p-16 flex flex-col gap-12">
      
      {/* HEADER FAÇON "SITE WEB" */}
      <header className="flex justify-between items-end pb-8 border-b border-[#4a261e]/10">
        <div>
          <h2 className="text-[10px] uppercase tracking-[0.4em] mb-4 opacity-60 italic">01. Overview</h2>
          <h1 className="text-4xl md:text-5xl font-light tracking-tight text-[#4a261e]">Live Operations</h1>
        </div>
        
        {/* TON BOUTON EXACT */}
        <button className="border border-[#4a261e] bg-transparent text-[#4a261e] px-6 py-3 text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-[#4a261e] hover:text-white transition-all duration-300">
          + Add Entry
        </button>
      </header>

      {/* WIDGETS FAÇON "FUNDING TRACKER" */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-[#4a261e]/20 p-8 md:p-12 rounded-sm border border-[#4a261e]/20 bg-white/40 backdrop-blur-md shadow-xl transition-colors duration-500">
        
        <div className="pt-6 md:pt-0 flex flex-col justify-center">
            <p className="text-[10px] uppercase tracking-[0.3em] opacity-70 mb-4">Daily Customers</p>
            <p className="text-5xl md:text-6xl font-light mb-4">142</p>
            <p className="text-[10px] font-bold tracking-[0.2em] text-green-700 uppercase">Above Break-Even</p>
        </div>

        <div className="pt-6 md:pt-0 flex flex-col justify-center">
            <p className="text-[10px] uppercase tracking-[0.3em] opacity-70 mb-4">Net Revenue</p>
            <p className="text-4xl md:text-5xl font-light mb-4">1,260 €</p>
            <p className="text-xs opacity-60 mt-auto italic">Avg. Ticket: 8.87 €</p>
        </div>

        <div className="pt-6 md:pt-0 flex flex-col justify-center">
            <p className="text-[10px] uppercase tracking-[0.3em] opacity-70 mb-4">Gross Margin</p>
            <p className="text-4xl md:text-5xl font-semibold mb-4 text-[#90b6da]">67.5 %</p>
            <p className="text-xs opacity-60 mt-auto italic">Based on recipe COGS</p>
        </div>

      </div>

      {/* RECENT TRANSACTIONS (Inspiré de ton "Allocation Details") */}
      <div className="mt-8">
        <h4 className="text-[10px] uppercase tracking-[0.4em] mb-8 opacity-60 italic">02. Transactions</h4>
        
        <div className="flex flex-col gap-2 text-sm font-light w-full">
            
            <div className="flex justify-between items-center border-b border-[#4a261e]/10 pb-4 mb-2">
                <span className="flex items-center gap-4">
                  <span className="text-[10px] tracking-widest font-bold opacity-50 w-12">14:23</span>
                  <span className="font-normal text-lg">2x Matcha Latte, 1x Cookie</span>
                </span>
                <span className="font-normal text-lg">13.60 € <span className="opacity-70 text-xs ml-4 border border-[#4a261e]/20 px-2 py-1">Card</span></span>
            </div>

            <div className="flex justify-between items-center border-b border-[#4a261e]/10 pb-4 mb-2">
                <span className="flex items-center gap-4">
                  <span className="text-[10px] tracking-widest font-bold opacity-50 w-12">14:18</span>
                  <span className="font-normal text-lg">1x Sandwich, 1x Espresso</span>
                </span>
                <span className="font-normal text-lg">11.30 € <span className="opacity-70 text-xs ml-4 border border-[#4a261e]/20 px-2 py-1">Cash</span></span>
            </div>

            <div className="flex justify-between items-center border-b border-[#4a261e]/10 pb-4 mb-2">
                <span className="flex items-center gap-4">
                  <span className="text-[10px] tracking-widest font-bold opacity-50 w-12">14:05</span>
                  <span className="font-normal text-lg">3 Dips + Bread, 2x Assila Beer</span>
                </span>
                <span className="font-normal text-lg">19.50 € <span className="opacity-70 text-xs ml-4 border border-[#4a261e]/20 px-2 py-1">Card</span></span>
            </div>

        </div>
      </div>

    </div>
  );
}