"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Star, ShieldCheck, Heart, Sparkles, Users, Quote } from "lucide-react";
import Image from "next/image";
import MandalaSVG from "./MandalaSVG";

export default function AboutExpert() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 md:py-32 px-4 bg-[#FCF9F1] relative overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <MandalaSVG className="absolute -top-40 -left-40 w-[600px] h-[600px] text-gold/10 animate-[spin_120s_linear_infinite]" />
        <MandalaSVG className="absolute -bottom-40 -right-40 w-[800px] h-[800px] text-saffron/5 animate-[spin_180s_linear_infinite_reverse]" />
        <div className="absolute top-1/4 right-10 w-2 h-2 bg-gold rounded-full animate-ping opacity-20"></div>
        <div className="absolute bottom-1/4 left-10 w-3 h-3 bg-saffron rounded-full animate-ping delay-1000 opacity-20"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Left Side: Image with Artistic Frame */}
          <div className="flex-[0.45] w-full lg:w-auto order-2 lg:order-1">
            <div className="relative group">
              {/* Decorative Frame Elements */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-gold/20 via-saffron/10 to-crimson/5 rounded-[60px] blur-2xl group-hover:opacity-100 transition-opacity duration-700"></div>
              
              <div className="relative p-3 bg-white/50 backdrop-blur-sm rounded-[54px] border border-white/20 shadow-2xl overflow-hidden group">
                <div className="relative aspect-[4/5] rounded-[40px] overflow-hidden bg-white">
                  <Image 
                    src="/images/new/expert-maharaj.png" 
                    alt={t.hero.expertName}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 500px"
                  />
                  
                  {/* Overlay Text */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8 md:p-10">
                    <div className="space-y-1">
                      <span className="text-saffron font-black text-xs md:text-sm uppercase tracking-[0.3em] block mb-2 drop-shadow-sm">
                        {t.about.awardWinner}
                      </span>
                      <h3 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter leading-none italic drop-shadow-md">
                        {t.hero.expertName}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Experience Badge */}
              <div className="absolute -top-12 -right-6 md:-right-10 w-40 h-40 md:w-52 md:h-52 bg-white rounded-full p-2 shadow-2xl border-4 border-gold/10 z-20 animate-float">
                <div className="w-full h-full bg-gradient-to-br from-gold via-saffron to-gold rounded-full flex flex-col items-center justify-center text-white text-center border-4 border-white/20">
                  <span className="text-4xl md:text-6xl font-black leading-none drop-shadow-sm">20+</span>
                  <span className="text-[10px] md:text-xs font-black uppercase tracking-widest leading-tight opacity-90">
                    {t.about.yrsExp}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Content & Expertise */}
          <div className="flex-[0.55] space-y-10 order-1 lg:order-2">
            <div>
              <div className="inline-flex items-center gap-3 bg-crimson/10 text-crimson px-6 py-2 rounded-full font-black text-xs uppercase tracking-[0.2em] mb-8 border border-crimson/20">
                <Star size={14} fill="currentColor" />
                {t.about.meetTheMaster}
              </div>
              
              <h2 className="text-5xl md:text-7xl font-black text-crimson mb-8 leading-[0.85] uppercase tracking-tighter">
                {t.about.title}
              </h2>
              
              <div className="space-y-8 text-gray-800">
                <p className="text-xl md:text-2xl font-black leading-tight italic text-gray-900 border-l-4 border-gold pl-6">
                  &quot;{t.about.bio1}&quot;
                </p>
                <p className="text-base md:text-lg font-bold leading-relaxed opacity-70">
                  {t.about.bio2}
                </p>
              </div>
            </div>

            {/* Quote Box - Modern Glassmorphism */}
            <div className="relative p-10 rounded-[40px] bg-white/40 backdrop-blur-md border border-white/40 shadow-xl overflow-hidden group">
              <Quote size={120} className="absolute -top-10 -right-10 text-gold/10 group-hover:scale-110 group-hover:-rotate-12 transition-transform duration-700" />
              <div className="relative z-10">
                <Sparkles size={32} className="text-gold mb-6" />
                <p className="text-xl md:text-3xl font-black text-gray-900 leading-[1.1] mb-6">
                  &quot;{t.about.quote}&quot;
                </p>
                <div className="flex items-center gap-4">
                  <div className="h-px w-12 bg-gold"></div>
                  <footer className="text-xs font-black text-gold uppercase tracking-[0.3em]">— {t.hero.expertName}</footer>
                </div>
              </div>
            </div>

            {/* Expertise Grid */}
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              {[
                { title: t.about.relationshipExp, icon: <Heart size={24} className="text-crimson" fill="currentColor" />, bg: "bg-crimson/5" },
                { title: t.about.negativeEnergyExp, icon: <ShieldCheck size={24} className="text-gold" />, bg: "bg-gold/5" },
                { title: t.about.marriageProblemExp, icon: <Sparkles size={24} className="text-saffron" />, bg: "bg-saffron/5" },
                { title: t.about.businessExp, icon: <Users size={24} className="text-blue-600" />, bg: "bg-blue-50" },
              ].map((item, i) => (
                <div key={i} className={`flex flex-col gap-4 p-8 ${item.bg} rounded-[32px] border border-transparent hover:border-gold/20 hover:bg-white hover:shadow-2xl transition-all duration-500 group`}>
                  <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center shadow-md group-hover:scale-110 group-hover:rotate-6 transition-all border border-gray-50">
                    {item.icon}
                  </div>
                  <span className="font-black text-gray-900 uppercase tracking-wide text-xs md:text-sm leading-tight group-hover:text-crimson transition-colors">
                    {item.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
