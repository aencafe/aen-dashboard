"use client"; // Nécessaire pour les interactions au clic

import React from "react";
import { INVENTORY_MOCK, InventoryItem } from "@/lib/data/inventory-mock";
import { 
  AlertCircle, 
  Plus, 
  Search, 
  ArrowDown, 
  Filter,
  Zap
} from "lucide-react";

export default function InventoryPage() {
  // On identifie l'item le plus critique pour l'alerte
  const criticalItem = INVENTORY_MOCK.find(item => item.currentStock < item.minThreshold);

  return (
    <div className="max-w-7xl mx-auto p-10 md:p-16 space-y-12">
      
      {/* HEADER SECTION */}
      <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div className="space-y-4">
          <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.4em] opacity-30 font-bold italic">
            <span>02. Supply Chain</span>
          </div>
          <h1 className="text-6xl font-extralight tracking-tight text-[#4a261e]">
            Inventory <span className="font-medium italic">Status.</span>
          </h1>
        </div>
        
        <div className="flex gap-4">
          <div className="relative group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 opacity-20 group-hover:opacity-100 transition-opacity" size={16} />
            <input 
              type="text" 
              placeholder="Search ingredient..." 
              className="bg-white/40 border border-[#4a261e]/5 rounded-xl pl-12 pr-6 py-4 text-xs font-medium focus:outline-none focus:bg-white transition-all w-64 text-[#4a261e]"
            />
          </div>
          <button className="bg-[#4a261e] text-white px-8 py-4 rounded-xl text-[10px] uppercase tracking-[0.2em] font-bold shadow-xl shadow-[#4a261e]/10 flex items-center gap-3 transition-transform hover:scale-[1.02]">
            <Plus size={16} /> Add Product
          </button>
        </div>
      </header>

      {/* ALERT & VALUE AREA */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {criticalItem ? (
          <div className="lg:col-span-2 bg-orange-50/50 border border-orange-200 p-8 rounded-[2.5rem] flex items-center justify-between group">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 rounded-2xl bg-white text-orange-600 flex items-center justify-center shadow-sm border border-orange-100 group-hover:rotate-6 transition-transform">
                <AlertCircle size={28} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-orange-900 leading-tight">Critical Reorder Required</h3>
                <p className="text-sm text-orange-800/60 font-medium">
                  {criticalItem.name} is below safety threshold ({criticalItem.minThreshold.toLocaleString()} {criticalItem.unit})
                </p>
              </div>
            </div>
            <button className="bg-orange-600 text-white px-6 py-3 rounded-xl text-[10px] font-bold uppercase tracking-widest shadow-lg shadow-orange-600/20 hover:bg-orange-700 transition-colors">
              Order Now
            </button>
          </div>
        ) : (
          <div className="lg:col-span-2 bg-green-50/50 border border-green-200 p-8 rounded-[2.5rem] flex items-center gap-6">
            <div className="w-16 h-16 rounded-2xl bg-white text-green-600 flex items-center justify-center border border-green-100">
              <Zap size={28} />
            </div>
            <p className="font-medium text-green-900 italic opacity-70 italic">All stocks are within safety parameters. Good job, Naël.</p>
          </div>
        )}

        <div className="bg-[#90b6da]/10 border border-[#90b6da]/20 p-8 rounded-[2.5rem] flex flex-col justify-center">
          <p className="text-[10px] uppercase tracking-[0.3em] font-bold opacity-40 mb-2 text-[#4a261e]">Total Storage Value</p>
          <p className="text-4xl font-light text-[#4a261e]">~ 2,840.00 €</p>
        </div>
      </section>

      {/* INVENTORY TABLE */}
      <section className="bg-white/30 border border-[#4a261e]/5 rounded-[3rem] overflow-hidden backdrop-blur-sm shadow-sm">
        <div className="p-10 border-b border-[#4a261e]/5 flex justify-between items-center opacity-40 text-[#4a261e]">
           <span className="text-[10px] font-bold uppercase tracking-widest">Ingredient & Supplier</span>
           <div className="flex gap-20 pr-12">
             <span className="text-[10px] font-bold uppercase tracking-widest w-32 text-center">Health</span>
             <span className="text-[10px] font-bold uppercase tracking-widest w-24 text-right">Available</span>
             <span className="text-[10px] font-bold uppercase tracking-widest w-32 text-center">Quick Adjust</span>
           </div>
        </div>

        <div className="divide-y divide-[#4a261e]/5">
          {INVENTORY_MOCK.map((item) => (
            <StockRow key={item.id} item={item} />
          ))}
        </div>
      </section>
    </div>
  );
}

// Sous-composant pour les lignes de stock
function StockRow({ item }: { item: InventoryItem }) {
  const isLow = item.currentStock < item.minThreshold;
  const percentage = Math.min((item.currentStock / item.targetStock) * 100, 100);

  return (
    <div className="group flex flex-col lg:flex-row justify-between items-center p-10 hover:bg-white transition-all cursor-pointer text-[#4a261e]">
      <div className="flex flex-col">
        <h4 className="text-2xl font-light tracking-tight group-hover:italic transition-all duration-300">
          {item.name}
        </h4>
        <span className="text-[10px] uppercase tracking-[0.2em] font-bold opacity-30 mt-1">{item.supplier}</span>
      </div>

      <div className="flex items-center gap-12 lg:gap-20">
        {/* VISUAL BAR */}
        <div className="hidden lg:block w-32">
          <div className="h-1.5 w-full bg-[#4a261e]/5 rounded-full overflow-hidden">
            <div 
              className={`h-full transition-all duration-1000 ${isLow ? 'bg-orange-500' : 'bg-[#4a261e]/30'}`} 
              style={{ width: `${percentage}%` }}
            ></div>
          </div>
        </div>

        {/* QUANTITY */}
        <div className="text-right min-w-[120px]">
          <p className={`text-2xl font-light ${isLow ? 'text-orange-600 font-medium' : ''}`}>
            {item.currentStock.toLocaleString()} <span className="text-[10px] opacity-40 uppercase font-bold ml-1">{item.unit}</span>
          </p>
          <p className="text-[9px] uppercase tracking-widest font-bold opacity-30">In Storage</p>
        </div>

        {/* QUICK ACTIONS - Les boutons +500 / +1000 */}
        <div className="flex gap-2">
           <button 
             onClick={(e) => { e.stopPropagation(); alert(`Ajout de 500${item.unit} à ${item.name}`); }}
             className="px-3 py-2 rounded-lg border border-[#4a261e]/10 text-[10px] font-bold hover:bg-[#4a261e] hover:text-white transition-all"
           >
             +500
           </button>
           <button 
             onClick={(e) => { e.stopPropagation(); alert(`Ajout de 1000${item.unit} à ${item.name}`); }}
             className="px-3 py-2 rounded-lg border border-[#4a261e]/10 text-[10px] font-bold hover:bg-[#4a261e] hover:text-white transition-all"
           >
             +1000
           </button>
        </div>

        <button className="w-12 h-12 rounded-xl border border-[#4a261e]/5 flex items-center justify-center hover:bg-white hover:shadow-md transition-all group-hover:scale-110">
          <ArrowDown size={18} className="opacity-40" />
        </button>
      </div>
    </div>
  );
}