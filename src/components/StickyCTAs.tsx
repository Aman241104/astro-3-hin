"use client";

import { Phone, MessageCircle } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function StickyCTAs() {
  const { t } = useLanguage();

  return (
    <>
      {/* Mobile Bottom Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-[999] p-2 flex gap-2 shadow-[0_-4px_10px_rgba(0,0,0,0.05)]">
        <a 
          href={`https://wa.me/919875958008?text=${encodeURIComponent(t.hero.whatsapp)}`}
          className="flex-1 bg-[#25D366] text-white py-3 rounded-xl flex items-center justify-center gap-2 font-black text-sm active:scale-95 transition-transform"
        >
          <MessageCircle size={18} fill="white" />
          {t.hero.whatsapp.split(" ")[0].toUpperCase()}
        </a>
        <a 
          href="tel:+919875958008"
          className="flex-1 bg-crimson text-white py-3 rounded-xl flex items-center justify-center gap-2 font-black text-sm active:scale-95 transition-transform"
        >
          <Phone size={18} fill="white" />
          {t.hero.call.toUpperCase()}
        </a>
      </div>

    </>
  );
}