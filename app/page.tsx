import React from "react";
import { ArrowUpRight, Plus, Calendar, Activity } from "lucide-react";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto p-10 md:p-16 space-y-16">
      
      {/* HEADER : Plus compact et pro */}
      <header className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6">
        <div>
          <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.4em] opacity-30 font-bold italic mb-4">
            <Activity size={14} />
            <span>01. Operational Cockpit</span>
          </div>
          <h1 className="text-6xl font-extralight tracking-tight text-[#4a261e]">
            Guten Tag, <span className="font-medium italic">Naël.</span>
          </h1>
        </div>
        
        <div className="flex items-center gap-4">
           <div className="px-5 py-3 bg-white/50 border border-[#4a261e]/5 rounded-xl text-[10px] font-bold uppercase tracking-widest opacity-60">
             April 08 • 17:40
           </div>
           <button className="bg-[#4a261e] text-white px-6 py-3.5 rounded-xl text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-[#4a261e]/90 transition-all flex items-center gap-2">
             <Plus size={14} /> Log Entry
           </button>
        </div>
      </header>

      {/* METRICS : focus sur la clarté */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <MetricCard label="Revenue" value="1,260 €" sub="Today's Performance" trend="+12%" />
        <MetricCard label="Orders" value="142" sub="Daily Customers" progress={71} />
        <MetricCard label="Marge" value="67.5%" sub="Recipe Health" color="#90b6da" />
      </section>

      {/* TWO COLUMNS DATA */}
      <section className="grid grid-cols-1 lg:grid-cols-5 gap-12">
        
        {/* LEDGER - 3/5 width */}
        <div className="lg:col-span-3 space-y-8">
          <h3 className="text-[10px] uppercase tracking-[0.4em] opacity-30 font-bold italic">02. Live Ledger</h3>
          <div className="bg-white/30 rounded-[2rem] border border-[#4a261e]/5 overflow-hidden">
            <Row time="14:23" desc="2x Matcha Latte, 1x Cookie" price="13.60 €" />
            <Row time="14:18" desc="1x Sandwich Miso, 1x Espresso" price="11.30 €" />
            <Row time="14:05" desc="3 Dips + Bread, 2x Beer" price="19.50 €" isLast />
          </div>
        </div>

        {/* IA INSIGHT - 2/5 width */}
        <div className="lg:col-span-2 space-y-8">
          <h3 className="text-[10px] uppercase tracking-[0.4em] opacity-30 font-bold italic text-[#90b6da]">03. IA Suggestion</h3>
          <div className="bg-[#4a261e] text-white p-10 rounded-[2.5rem] shadow-2xl shadow-[#4a261e]/20 relative">
             <div className="absolute top-0 right-0 p-8 opacity-10">
               <Sparkles size={60} />
             </div>
             <p className="text-xl font-light leading-relaxed italic opacity-90 relative z-10">
               "La météo annonce du soleil à 16h. Historiquement, tes ventes de **Cold Brew** augmentent de 40% dans ces conditions. Vérifie ton stock de bouteilles."
             </p>
             <div className="mt-8 pt-8 border-t border-white/10 flex justify-between items-center">
                <span className="text-[9px] uppercase tracking-widest opacity-40">Insight #42</span>
                <button className="text-[9px] uppercase tracking-widest font-bold underline decoration-[#90b6da] underline-offset-4">Deep Dive</button>
             </div>
          </div>
        </div>

      </section>
    </div>
  );
}

function MetricCard({ label, value, sub, progress, color, trend }: any) {
  return (
    <div className="p-8 rounded-[2rem] bg-white/40 border border-[#4a261e]/5 hover:bg-white transition-all group">
      <div className="flex justify-between items-start mb-8">
        <p className="text-[9px] uppercase tracking-[0.3em] opacity-40 font-bold">{label}</p>
        {trend && <span className="text-[10px] font-bold text-green-600">{trend}</span>}
      </div>
      <p className="text-5xl font-light tracking-tighter mb-2" style={{ color: color }}>{value}</p>
      <p className="text-[10px] opacity-40 font-medium">{sub}</p>
      {progress && (
        <div className="mt-6 h-1 w-full bg-[#4a261e]/5 rounded-full">
          <div className="h-full bg-[#4a261e]/40 rounded-full" style={{ width: `${progress}%` }}></div>
        </div>
      )}
    </div>
  );
}

function Row({ time, desc, price, isLast }: any) {
  return (
    <div className={`flex justify-between items-center p-8 hover:bg-white/50 transition-all cursor-pointer ${!isLast ? 'border-b border-[#4a261e]/5' : ''}`}>
      <div className="flex gap-6 items-center">
        <span className="text-[10px] font-mono opacity-20 font-bold tracking-tighter">{time}</span>
        <span className="text-lg font-light tracking-tight">{desc}</span>
      </div>
      <span className="text-lg font-medium">{price}</span>
    </div>
  );
}