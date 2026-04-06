import { Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-24 md:pb-8 px-4 border-t-8 border-gold">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12 mb-12">
        <div className="flex-1">
          <h2 className="text-3xl font-black uppercase tracking-tighter mb-4 text-crimson">Astro <span className="text-saffron">Pawan Swami</span></h2>
          <p className="text-gray-400 font-bold mb-6 max-w-sm">World renowned Vedic astrologer providing 100% guaranteed solutions within 24 hours.</p>
          <a href="tel:+919875958008" className="inline-flex items-center gap-3 bg-white text-gray-900 px-6 py-3 rounded-full font-black uppercase tracking-widest hover:scale-105 transition-transform">
            <Phone size={18} className="text-crimson" /> +91-9875958008
          </a>
        </div>
        
        <div className="flex-1">
          <h3 className="font-black uppercase tracking-widest text-saffron mb-4 flex items-center gap-2">
            <MapPin size={18} /> Serving Globally
          </h3>
          <p className="text-xs font-bold text-gray-400 leading-relaxed uppercase tracking-widest">
            Mumbai • Delhi • Bangalore • Hyderabad • Ahmedabad • Chennai • Kolkata • Pune • Jaipur • USA • UK • UAE • Canada • Australia
          </p>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto border-t border-white/10 pt-8 text-center text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em]">
        <p className="mb-2">© 2026 Astro Pawan Swami. All Rights Reserved.</p>
        <p className="opacity-50 italic">Disclaimer: Astrology is based on faith. Individual results may vary.</p>
      </div>
    </footer>
  );
}