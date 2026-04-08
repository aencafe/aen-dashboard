import "./globals.css";

export const metadata = {
  title: "Aën OS - Dashboard",
  description: "Système de gestion centralisé pour Aën Café",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="flex h-screen overflow-hidden antialiased">
        <aside className="w-64 bg-aen-marron text-aen-beige flex flex-col p-6">
          <div className="text-2xl font-bold mb-10 tracking-widest text-aen-orange">
            AËN OS
          </div>
          <nav className="flex flex-col gap-4">
            <a href="/" className="hover:text-aen-orange transition-colors">Dashboard</a>
            <a href="/sales" className="hover:text-aen-orange transition-colors">Ventes</a>
            <a href="/stocks" className="hover:text-aen-orange transition-colors">Stocks & Recettes</a>
          </nav>
        </aside>
        <main className="flex-1 overflow-y-auto p-8">
          {children}
        </main>
      </body>
    </html>
  );
}