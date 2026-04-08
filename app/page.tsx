import React from "react";
import { ArrowUpRight, Plus, Calendar, Clock } from "lucide-react";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto p-12 md:p-20 space-y-24">
      
      {/* HEADER SECTION */}
      <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
        <div className="space-y-6">
          <div className="flex items-center gap-4 text-[11px] uppercase tracking-[0.5em] opacity-40 font-bold italic">
            <span>01. Dashboard Overview</span>
            <span className="h-px w-12 bg-[#4a261e]/20"></span>
          </div>
          <h1 className="text-6xl font-extralight tracking-tight leading-none">
            Live <span className="font-medium italic">Ops.</span>
          </h1>
        </div>
        
        <div className="flex gap-4">
          <div className="hidden lg:flex items-center gap-6 px-6 py-4 bg-white/40 border border-[#4a261e]/5 rounded-2xl text-xs font-medium">
            <div className="flex items-center gap-2">
              <Calendar size={14} className="opacity-40" /> <span>April 08, 2026</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={14} className="opacity-40" /> <span>14:45</span>
            </div>
          </div>
          <button className="bg-[#4a261e] text-[#F9F8F6] px-8 py-4 rounded-2xl text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-[#4a261e]/90 transition-all shadow-xl shadow-[#4a261e]/10 flex items-center gap-3">
            <Plus size={16} /> New Entry
          </button>
        </div>
      </header>

      {/* BIG STATS GRID */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <MetricCard 
          label="Daily Traffic" 
          value="142" 
          detail="Target: 200" 
          progress={71} 
        />
        <MetricCard 
          label="Net Revenue" 
          value="1,260.00 €" 
          detail="+12.4% vs yesterday" 
          isHighlight
        />
        <MetricCard 
          label="Staff Efficiency" 
          value="94%" 
          detail="3 baristas on duty" 
          color="#90b6da"
        />
      </section>

      {/* TRANSACTIONS & ACTIVITY */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        
        {/* LEDGER */}
        <div className="space-y-10">
          <h3 className="text-[11px] uppercase tracking-[0.5em] opacity-40 font-bold italic">02. Recent Ledger</h3>
          <div className="divide-y divide-[#4a261e]/5">
            <Row time="14:23" desc="2x Matcha Latte, 1x Cookie" price="13.60 €" />
            <Row time="14:18" desc="1x Sandwich Miso, 1x Espresso" price="11.30 €" />
            <Row time="14:05" desc="3 Dips + Bread, 2x Beer" price="19.50 €" />
          </div>
        </div>

        {/* QUICK INSIGHT AREA */}
        <div className="bg-white p-12 rounded-[3rem] border border-[#4a261e]/5 shadow-sm space-y-8">
          <h3 className="text-[11px] uppercase tracking-[0.5em] opacity-40 font-bold italic">03. Real-time Analysis</h3>
          <div className="space-y-6">
            <div className="flex justify-between items-end h-32 gap-2">
              {[30, 45, 25, 60, 90, 100, 70, 40, 50, 85].map((h, i) => (
                <div 
                  key={i} 
                  className="w-full bg-[#4a261e]/5 rounded-t-lg transition-all duration-700 hover:bg-[#90b6da]" 
                  style={{ height: `${h}%` }}
                ></div>
              ))}
            </div>
            <p className="text-sm leading-relaxed opacity-70 italic font-light">
              "Peak hour detected. Conversion rate on **Add-ons** (cookies/cakes) is higher than average today. Suggest a pairing for every coffee order."
            </p>
          </div>
        </div>

      </section>
    </div>
  );
}

// Composants de contenu aérés
function MetricCard({ label, value, detail, progress, isHighlight, color }: any) {
  return (
    <div className={`p-10 rounded-[2.5rem] transition-all duration-500 border border-[#4a261e]/5 ${isHighlight ? 'bg-white shadow-xl translate-y-[-4px]' : 'bg-white/40 hover:bg-white'}`}>
      <p className="text-[10px] uppercase tracking-[0.3em] opacity-40 font-bold mb-10 flex justify-between">
        {label} <ArrowUpRight size={14} />
      </p>
      <p className="text-6xl font-light tracking-tighter mb-4" style={{ color: color }}>{value}</p>
      <p className="text-xs opacity-50 font-medium tracking-wide">{detail}</p>
      {progress && (
        <div className="mt-8 h-1 w-full bg-[#4a261e]/5 rounded-full overflow-hidden">
          <div className="h-full bg-[#4a261e] transition-all duration-1000" style={{ width: `${progress}%` }}></div>
        </div>
      )}
    </div>
  );
}

function Row({ time, desc, price }: any) {
  return (
    <div className="group flex justify-between items-center py-8 cursor-pointer transition-all hover:translate-x-2">
      <div className="flex gap-8 items-center">
        <span className="text-[10px] font-mono opacity-30 font-bold">{time}</span>
        <span className="text-xl font-light group-hover:italic transition-all">{desc}</span>
      </div>
      <span className="text-xl font-medium tracking-tight">{price}</span>
    </div>
  );
}