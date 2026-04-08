import React from "react";
import { Sparkles, ArrowUpRight, Plus, ReceiptText } from "lucide-react";

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto p-8 md:p-16 flex flex-col gap-16">
      
      {/* HEADER : Status & Action */}
      <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 pb-10 border-b border-[#4a261e]/5">
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <h2 className="text-[10px] uppercase tracking-[0.4em] opacity-40 italic">01. Overview</h2>
            <span className="h-[1px] w-8 bg-[#4a261e]/20"></span>
            <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-green-600/80 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span> Open • Berlin
            </span>
          </div>
          <h1 className="text-5xl font-light tracking-tight">Live Operations</h1>
        </div>
        
        <button className="group relative overflow-hidden border border-[#4a261e] px-8 py-4 text-[10px] uppercase tracking-[0.3em] font-bold transition-all duration-500 hover:text-white">
          <span className="relative z-10 flex items-center gap-2">
            <Plus size={14} /> Add Entry
          </span>
          <div className="absolute inset-0 bg-[#4a261e] translate-y-[101%] group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
        </button>
      </header>

      {/* CORE WIDGETS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Stat Card 1: Customers */}
        <div className="group p-10 rounded-2xl border border-[#4a261e]/5 bg-white/40 hover:bg-white transition-all duration-500 shadow-sm hover:shadow-xl">
            <p className="text-[10px] uppercase tracking-[0.3em] opacity-50 mb-8 flex justify-between items-center">
              Daily Flow <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </p>
            <div className="flex items-baseline gap-2">
              <p className="text-7xl font-light tracking-tighter">142</p>
              <p className="text-sm opacity-40 font-light">/ 200</p>
            </div>
            <div className="mt-6 w-full h-[2px] bg-[#4a261e]/5 rounded-full overflow-hidden">
                <div className="h-full bg-[#4a261e]/40 w-[71%]"></div>
            </div>
            <p className="mt-4 text-[9px] font-bold tracking-[0.1em] text-[#4a261e]/60 uppercase italic text-right">Target 71% reached</p>
        </div>

        {/* Stat Card 2: Revenue */}
        <div className="group p-10 rounded-2xl border border-[#4a261e]/5 bg-white/40 hover:bg-white transition-all duration-500 shadow-sm hover:shadow-xl">
            <p className="text-[10px] uppercase tracking-[0.3em] opacity-50 mb-8">Net Revenue</p>
            <p className="text-5xl font-light tracking-tighter">1,260.00 €</p>
            <p className="mt-4 text-xs opacity-50 font-light italic">Avg. ticket: 8.87 €</p>
            <div className="mt-8 flex gap-1">
              {[4,7,5,8,9,6,10].map((v, i) => (
                <div key={i} className="flex-1 h-8 bg-[#4a261e]/5 rounded-t-sm group-hover:bg-[#4a261e]/10 transition-colors" style={{ height: `${v*4}px` }}></div>
              ))}
            </div>
        </div>

        {/* Stat Card 3: Margin */}
        <div className="group p-10 rounded-2xl border border-[#4a261e]/5 bg-[#90b6da]/10 hover:bg-[#90b6da]/20 transition-all duration-500 shadow-sm">
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#4a261e]/60 mb-8">Gross Margin</p>
            <p className="text-6xl font-semibold tracking-tighter text-[#4a261e]">67.5%</p>
            <p className="mt-6 text-[10px] font-bold tracking-[0.1em] uppercase bg-[#4a261e]/10 py-1 px-3 rounded-full inline-block">Healthy</p>
        </div>

      </div>

      {/* LOWER SECTION: Transactions & AI */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
        
        {/* Transactions List */}
        <div className="lg:col-span-2 space-y-10">
          <div className="flex justify-between items-center">
            <h4 className="text-[10px] uppercase tracking-[0.4em] opacity-40 italic">02. Recent Ledger</h4>
            <span className="text-[10px] font-bold opacity-30 tracking-widest uppercase underline cursor-pointer hover:opacity-100 transition-opacity">View All</span>
          </div>
          
          <div className="space-y-1">
            <TransactionRow time="14:23" items="2x Matcha Latte, 1x Cookie" price="13.60" type="Card" />
            <TransactionRow time="14:18" items="1x Sandwich Miso, 1x Espresso" price="11.30" type="Cash" />
            <TransactionRow time="14:05" items="3 Dips + Bread, 2x Assila Beer" price="19.50" type="Card" />
            <TransactionRow time="13:52" items="1x Flat White, 1x Cake of the day" price="8.70" type="Card" />
          </div>
        </div>

        {/* AI INSIGHTS MODULE (The Brain) */}
        <div className="bg-[#4a261e] text-white p-10 rounded-[2rem] space-y-8 relative overflow-hidden ai-glow">
          <div className="flex items-center gap-3 text-[#90b6da]">
            <Sparkles size={18} />
            <span className="text-[10px] uppercase tracking-[0.4em] font-bold">Aën IA Insight</span>
          </div>
          
          <p className="text-lg font-light leading-relaxed italic opacity-90">
            "Le rush de 15h00 approche. Historiquement, le **Sandwich Miso** est votre top-seller le jeudi. Assurez-vous d'avoir relancé une fournée de pain."
          </p>

          <button className="w-full py-4 border border-white/20 text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-white hover:text-[#4a261e] transition-all duration-500">
            Ask for more
          </button>
        </div>

      </div>
    </div>
  );
}

// Composant Interne pour les lignes de transaction
function TransactionRow({ time, items, price, type }: any) {
  return (
    <div className="group flex justify-between items-center py-6 border-b border-[#4a261e]/5 hover:px-4 hover:bg-white transition-all duration-300 cursor-pointer">
      <div className="flex items-center gap-6">
        <span className="text-[10px] font-bold opacity-30 tracking-widest font-mono">{time}</span>
        <span className="text-lg font-light group-hover:italic transition-all">{items}</span>
      </div>
      <div className="flex items-center gap-6">
        <span className="text-xl font-light tracking-tight">{price} €</span>
        <span className="text-[9px] uppercase tracking-[0.2em] opacity-40 border border-[#4a261e]/20 px-3 py-1 rounded-full group-hover:border-[#4a261e] group-hover:opacity-100 transition-all">
          {type}
        </span>
      </div>
    </div>
  );
}