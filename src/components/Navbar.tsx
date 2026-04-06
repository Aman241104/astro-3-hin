"use client";

import { Phone, Star } from "lucide-react";
import Link from "next/link";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "@/context/LanguageContext";

export default function Navbar() {
  const { t } = useLanguage();

  return (
    <header className="fixed top-0 w-full z-[1000] bg-white shadow-sm border-b border-gold/20">
      {/* Top Marquee - Ultra slim */}
      <div className="bg-crimson text-white h-6 flex items-center overflow-hidden border-b border-white/10">
        <div className="whitespace-nowrap animate-marquee font-bold text-[10px] uppercase tracking-[0.2em]">
          🔥 RECENT SUCCESS: Rahul got ex-back in 24 hrs! | 🙏 Pooja stopped divorce! | ✨ Ankit solved relationship issues! | 🧿 Maya found love back!
        </div>
      </div>

      {/* Main Nav - Compact */}
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-crimson rounded-full flex items-center justify-center">
            <Star className="text-white w-5 h-5 animate-pulse" fill="white" />
          </div>
          <div className="flex flex-col leading-none">
            <div className="font-black text-crimson text-xl md:text-2xl uppercase tracking-tighter">
              {t.navbar.logo.split(" ")[0]} <span className="text-saffron italic">{t.navbar.logo.split(" ").slice(1).join(" ")}</span>
            </div>
            <div className="text-[9px] font-black text-gray-500 tracking-[0.25em] mt-1 uppercase">
              Vedic Specialist
            </div>
          </div>
        </Link>

        {/* CTA - Emphasized */}
        <div className="flex gap-2 md:gap-4 items-center">
          <LanguageSwitcher />
          <div className="hidden lg:flex flex-col text-right mr-2">
            <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">{t.navbar.callNow}</span>
            <span className="text-crimson font-black text-lg">+91 9875958008</span>
          </div>
          <a
            href="tel:+919875958008"
            className="bg-gold hover:bg-gold/90 text-crimson px-3 md:px-5 py-2.5 rounded-full font-black flex items-center gap-2 text-xs md:text-sm shadow-[0_4px_14px_rgba(255,215,0,0.5)] active:scale-95 transition-transform"
          >
            <Phone size={14} fill="currentColor" />
            <span className="hidden sm:block uppercase tracking-wide">{t.navbar.callNow}</span>
          </a>
        </div>
      </div>
    </header>
  );
}