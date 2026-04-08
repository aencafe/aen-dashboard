import "./globals.css";

export const metadata = {
  title: "Aën OS - Cockpit",
  description: "Système de gestion centralisé pour Aën Café",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="flex h-screen bg-[#F5F3E9] text-[#3A2724] font-sans antialiased overflow-hidden">
        
        {/* SIDEBAR PREMIUM */}
        <aside className="w-72 bg-[#3A2724] text-[#F5F3E9] flex flex-col justify-between shadow-2xl z-10">
          <div>
            {/* En-tête / Logo */}
            <div className="p-8 flex items-center justify-center border-b border-[#F5F3E9]/10">
              <span className="text-4xl font-light tracking-[0.2em] text-[#F5F3E9]">AËN</span>
              <span className="text-xs font-bold tracking-widest text-[#D94814] ml-2 mt-3">OS</span>
            </div>

            {/* Menu de navigation */}
            <nav className="flex flex-col mt-8 px-4 gap-2">
              <a href="/" className="px-4 py-3 rounded-xl bg-[#F5F3E9]/10 text-[#F5F3E9] font-medium transition-all shadow-sm">
                Cockpit
              </a>
              <a href="/sales" className="px-4 py-3 rounded-xl hover:bg-[#F5F3E9]/5 text-[#F5F3E9]/60 hover:text-[#F5F3E9] transition-all">
                Ventes & Data
              </a>
              <a href="/stocks" className="px-4 py-3 rounded-xl hover:bg-[#F5F3E9]/5 text-[#F5F3E9]/60 hover:text-[#F5F3E9] transition-all">
                Stocks & Recettes
              </a>
              <a href="/finance" className="px-4 py-3 rounded-xl hover:bg-[#F5F3E9]/5 text-[#F5F3E9]/60 hover:text-[#F5F3E9] transition-all">
                Finance
              </a>
            </nav>
          </div>

          {/* Profil Admin */}
          <div className="p-6 border-t border-[#F5F3E9]/10">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[#D94814] flex items-center justify-center text-white text-sm font-bold shadow-lg">
                MN
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-medium">Mona & Naël</span>
                <span className="text-xs text-[#F5F3E9]/50">Administrateurs</span>
              </div>
            </div>
          </div>
        </aside>

        {/* ZONE DE TRAVAIL */}
        <main className="flex-1 overflow-y-auto bg-[#F5F3E9]">
          {children}
        </main>
      </body>
    </html>
  );
}