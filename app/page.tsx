export default function Home() {
  return (
    <div className="flex flex-col gap-6">
      <header className="flex justify-between items-center pb-4 border-b border-aen-marron/20">
        <div>
          <h1 className="text-3xl font-bold">Cockpit</h1>
          <p className="text-sm opacity-70">Aperçu en temps réel de l'activité du café.</p>
        </div>
      </header>
      <div className="bg-white p-6 rounded-lg shadow-sm border border-aen-marron/10">
        <h3 className="font-semibold text-lg mb-2">Base propre installée 🚀</h3>
        <p className="text-aen-marron opacity-70">Aën OS est prêt à recevoir les données.</p>
      </div>
    </div>
  );
}