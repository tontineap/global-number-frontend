import React, { useState } from 'react';

// 🚀 CONFIGURATION AUTOMATIQUE : 
// Si tu es sur ton PC, il utilise localhost. Si le site est en ligne, il utilise Render !
const BACKEND_URL = window.location.hostname === "localhost" 
  ? "http://localhost:5000" 
  : "https://global-number-backend-vfaa.onrender.com";

const COUNTRIES_DATA = [
  { id: 1, name: "France", code: "+33", flag: "🇫🇷", type: "Mobile (Premium)", tiktok: true, paypal: true, price: "5.000 XOF" },
  { id: 2, name: "États-Unis", code: "+1", flag: "🇺🇸", type: "Vrai Mobile", tiktok: true, paypal: true, price: "5.000 XOF" },
  { id: 3, name: "Royaume-Uni", code: "+44", flag: "🇬🇧", type: "VoIP Haute Qualité", tiktok: true, paypal: true, price: "5.000 XOF" },
  { id: 4, name: "Sénégal", code: "+221", flag: "🇸🇳", type: "Mobile Local", tiktok: false, paypal: true, price: "7.500 XOF" },
  { id: 5, name: "Côte d'Ivoire", code: "+225", flag: "🇨🇮", type: "Mobile Local", tiktok: false, paypal: true, price: "7.500 XOF" },
  { id: 6, name: "Canada", code: "+1", flag: "🇨🇦", type: "VoIP", tiktok: true, paypal: true, price: "5.000 XOF" },
];

export default function App() {
  const [filter, setFilter] = useState('all'); // all, tiktok, paypal

  // Le filtre est maintenant tout propre et réparé !
  const filteredCountries = COUNTRIES_DATA.filter(country => {
    if (filter === 'tiktok') return country.tiktok;
    if (filter === 'paypal') return country.paypal;
    return true;
  });

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans">
      {/* Header / Barre de navigation */}
      <header className="border-b border-slate-800 bg-slate-900/50 backdrop-blur sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-black bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              GLOBAL NUM
            </span>
          </div>
          <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold px-5 py-2 rounded-xl transition shadow-lg shadow-cyan-500/20 text-sm">
            Mon Espace (Connexion)
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight leading-tight">
            Propulsez votre Business au-delà des <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Frontières</span>
          </h1>
          <p className="text-slate-400 text-lg">
            Achetez des numéros de téléphone internationaux haut de gamme pour activer vos comptes TikTok Monétisables, PayPal, WhatsApp Business et Stripe depuis l'Afrique.
          </p>
        </div>

        {/* Filtres par objectifs business */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button 
            onClick={() => setFilter('all')}
            className={`px-6 py-3 rounded-xl font-medium transition text-sm ${filter === 'all' ? 'bg-slate-800 border-2 border-cyan-500 text-white' : 'bg-slate-800/50 text-slate-400 hover:text-white border-2 border-transparent'}`}
          >
            Tous les pays
          </button>
          <button 
            onClick={() => setFilter('tiktok')}
            className={`px-6 py-3 rounded-xl font-medium transition text-sm flex items-center gap-2 ${filter === 'tiktok' ? 'bg-slate-800 border-2 border-pink-500 text-white' : 'bg-slate-800/50 text-slate-400 hover:text-white border-2 border-transparent'}`}
          >
            🎵 Pack TikTok Monétisation
          </button>
          <button 
            onClick={() => setFilter('paypal')}
            className={`px-6 py-3 rounded-xl font-medium transition text-sm flex items-center gap-2 ${filter === 'paypal' ? 'bg-slate-800 border-2 border-blue-500 text-white' : 'bg-slate-800/50 text-slate-400 hover:text-white border-2 border-transparent'}`}
          >
            💼 Pack PayPal / Stripe
          </button>
        </div>

        {/* Grille des pays */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCountries.map((country) => (
            <div key={country.id} className="bg-slate-800/40 border border-slate-800 hover:border-slate-700 rounded-2xl p-6 transition flex flex-col justify-between relative group overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-2xl group-hover:bg-cyan-500/10 transition"></div>
              
              <div>
                {/* Pays et Drapeau */}
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl" role="img" aria-label={country.name}>{country.flag}</span>
                    <div>
                      <h3 className="font-bold text-xl text-white">{country.name}</h3>
                      <span className="text-xs text-slate-400 font-mono">{country.code} • {country.type}</span>
                    </div>
                  </div>
                </div>

                {/* Badges d'Éligibilité */}
                <div className="flex gap-2 mb-6">
                  {country.tiktok ? (
                    <span className="bg-pink-500/10 text-pink-400 border border-pink-500/20 text-xs px-2.5 py-1 rounded-md font-semibold">
                      ✓ TikTok Bêta
                    </span>
                  ) : (
                    <span className="bg-slate-700/30 text-slate-500 border border-slate-700/30 text-xs px-2.5 py-1 rounded-md font-semibold line-through">
                      ✕ TikTok Bêta
                    </span>
                  )}
                  {country.paypal && (
                    <span className="bg-blue-500/10 text-blue-400 border border-blue-500/20 text-xs px-2.5 py-1 rounded-md font-semibold">
                      ✓ PayPal Actif
                    </span>
                  )}
                </div>
              </div>

              {/* Prix et Action */}
              <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                <div>
                  <span className="text-xs text-slate-500 block uppercase font-bold tracking-wider">Abonnement / mois</span>
                  <span className="text-xl font-black text-cyan-400">{country.price}</span>
                </div>
                
                <button 
                  onClick={async () => {
                    const email = prompt("Entrez votre adresse email pour recevoir votre numéro :");
                    if (!email) return;

                    try {
                      // Utilisation de la variable BACKEND_URL pour s'adapter partout automatiquement
                      const response = await fetch(`${BACKEND_URL}/api/payments/checkout`, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ packId: country.id, userEmail: email })
                      });
                      const data = await response.json();
                      if (data.success) {
                        // Redirection vers l'URL de paiement générée par le backend
                        window.location.href = data.paymentUrl;
                      } else {
                        alert("Erreur lors de l'initiation du paiement");
                      }
                    } catch (err) {
                      alert("Impossible de contacter le serveur de paiement.");
                    }
                  }}
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-black px-5 py-2.5 rounded-xl text-sm transition shadow-lg shadow-cyan-500/20"
                >
                  Réserver
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}