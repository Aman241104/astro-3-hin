"use client";

import Image from "next/image";
import { Phone, Lock, Star, ShieldCheck, Globe } from "lucide-react";

export default function TrustBanner() {
  return (
    <section className="bg-gradient-to-b from-white to-[#FCF9F1] py-12 md:py-20 px-4 border-b border-gold/10 shadow-sm relative z-20 overflow-hidden">
      {/* Subtle Background Mandala */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 opacity-[0.03] pointer-events-none">
        <svg viewBox="0 0 100 100" className="w-[400px] h-[400px] text-gold animate-[spin_180s_linear_infinite]">
          <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="0.5" fill="none" />
          <path d="M50 5 L50 95 M5 50 L95 50" stroke="currentColor" strokeWidth="0.2" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 items-stretch">
          
          {/* Left Section: Branding & Identity */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left bg-white/50 backdrop-blur-sm p-8 rounded-[40px] border border-gold/10 shadow-xl group hover:shadow-2xl transition-all duration-500">
            <div className="flex flex-col items-center lg:items-start gap-4 mb-6">
              <div className="relative w-32 h-32 md:w-40 md:h-40 shrink-0">
                <div className="absolute inset-0 bg-gold/10 rounded-full blur-2xl group-hover:bg-gold/20 transition-colors"></div>
                <div className="relative w-full h-full filter drop-shadow-[0_10px_20px_rgba(212,175,55,0.3)] flex items-center justify-center">
                  <Image 
                    src="/—Pngtree—3d ganesha mandap decor on_17265442.png" 
                    alt="Lord Ganesha" 
                    fill 
                    className="object-contain group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
              <div className="flex flex-col items-center lg:items-start">
                <div className="flex items-center gap-2 mb-1">
                  <Star size={14} className="text-gold fill-gold" />
                  <span className="text-crimson font-black text-xs md:text-sm uppercase tracking-[0.2em]">Best Online Astro</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-black text-crimson uppercase tracking-tighter leading-none italic">
                  ASTRO <span className="text-gold">PAWAN</span> <br /> SWAMI
                </h2>
              </div>
            </div>
            
            <div className="mt-auto w-full">
              <div className="inline-flex items-center gap-2 bg-crimson/5 text-crimson px-5 py-2.5 rounded-2xl font-black text-[10px] md:text-xs uppercase tracking-widest border border-crimson/10 shadow-sm w-full justify-center">
                 <ShieldCheck size={14} />
                 Love And Family Problem Expert
              </div>
            </div>
          </div>

          {/* Middle Section: Global Trust & Stats */}
          <div className="flex flex-col items-center text-center bg-white/50 backdrop-blur-sm p-8 rounded-[40px] border border-gold/10 shadow-xl group hover:shadow-2xl transition-all duration-500">
            <div className="inline-flex items-center gap-2 bg-gold/10 text-gold px-4 py-1.5 rounded-full font-black text-[10px] uppercase tracking-widest mb-6 border border-gold/20">
               <Globe size={12} />
               World Famous No.1 Astro
            </div>
            
            <h3 className="text-gray-900 font-black text-2xl md:text-4xl uppercase tracking-tighter mb-8 leading-tight">
              TRUSTED BY <br /> <span className="text-gold">MILLIONS</span> GLOBALLY
            </h3>
            
            <div className="grid grid-cols-2 gap-4 w-full mb-8">
               <div className="bg-white p-4 rounded-3xl border border-gray-100 shadow-sm flex flex-col items-center justify-center gap-1 group-hover:border-gold/20 transition-colors">
                  <div className="bg-[#2ECC71]/10 p-2 rounded-xl">
                    <Lock size={18} className="text-[#2ECC71] fill-[#2ECC71]" />
                  </div>
                  <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest leading-none mt-1">Highly</span>
                  <span className="text-[10px] font-black text-gray-900 uppercase tracking-widest leading-none">Secure</span>
               </div>
               <div className="bg-white p-4 rounded-3xl border border-gray-100 shadow-sm flex flex-col items-center justify-center gap-1 group-hover:border-gold/20 transition-colors">
                  <div className="flex gap-1">
                     {["🇺🇸", "🇬🇧", "🇦🇪", "🇨🇦"].map((f, i) => (
                       <span key={i} className="text-lg filter drop-shadow-sm">{f}</span>
                     ))}
                  </div>
                  <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest leading-none mt-1">Serving</span>
                  <span className="text-[10px] font-black text-gray-900 uppercase tracking-widest leading-none">120+ Countries</span>
               </div>
            </div>

            <div className="mt-auto w-full">
              <div className="bg-gradient-to-r from-gold to-saffron px-6 py-3 rounded-2xl shadow-lg border-b-4 border-black/10">
                 <span className="font-black text-crimson text-xs md:text-sm uppercase tracking-wide flex items-center justify-center gap-2">
                   <Star size={14} fill="currentColor" />
                   20+ Years Experience
                 </span>
              </div>
            </div>
          </div>

          {/* Right Section: Contact & CTA */}
          <div className="flex flex-col items-center text-center bg-crimson p-8 rounded-[40px] shadow-xl group hover:shadow-2xl transition-all duration-500 relative overflow-hidden">
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[radial-gradient(circle_at_center,_white_1px,_transparent_1px)] bg-[size:20px_20px]"></div>

            <h4 className="text-white/80 font-black text-xs md:text-sm uppercase tracking-widest mb-6 relative z-10">
              Need Expert Spiritual Guidance?
            </h4>

            <div className="flex flex-col items-center gap-6 mb-8 relative z-10 w-full">
               <div className="flex items-center gap-4 group/phone">
                 <div className="bg-white p-3 rounded-2xl shadow-xl group-hover/phone:scale-110 transition-transform">
                    <Phone size={24} className="text-crimson fill-crimson" />
                 </div>
                 <a 
                   href="tel:+919875958008"
                   className="text-3xl md:text-5xl font-black text-white tracking-tighter hover:text-gold transition-colors whitespace-nowrap"
                 >
                   +91-9875958008
                 </a>
               </div>

               <a 
                 href="https://wa.me/919875958008"
                 className="flex items-center gap-3 bg-[#25D366] px-8 py-4 rounded-3xl shadow-xl hover:scale-105 transition-all w-full justify-center group/wa"
               >
                 <Image 
                   src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
                   alt="WhatsApp" 
                   width={24} 
                   height={24}
                   className="brightness-0 invert group-hover/wa:rotate-12 transition-transform"
                 />
                 <span className="font-black text-white uppercase tracking-widest">Chat On WhatsApp</span>
               </a>
            </div>

            <div className="mt-auto w-full relative z-10">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl group-hover:bg-white/20 transition-all">
                 <p className="text-white text-xs md:text-sm font-black uppercase tracking-widest leading-tight">
                   Get Guaranteed Solution <br /> To All Life Queries
                 </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
