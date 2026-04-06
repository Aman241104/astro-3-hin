"use client";

import { useLanguage } from "@/context/LanguageContext";
import { CheckCircle2, Zap, Shield, Heart, Sparkles } from "lucide-react";
import MandalaSVG from "./MandalaSVG";

export default function Benefits() {
  const { t } = useLanguage();

  const benefits = [
    {
      title: t.benefits.b1Title,
      desc: t.benefits.b1Desc,
      icon: <Heart className="text-crimson" fill="currentColor" />,
      color: "from-crimson/20 to-transparent"
    },
    {
      title: t.benefits.b2Title,
      desc: t.benefits.b2Desc,
      icon: <Shield className="text-gold" fill="currentColor" />,
      color: "from-gold/20 to-transparent"
    },
    {
      title: t.benefits.b3Title,
      desc: t.benefits.b3Desc,
      icon: <Zap className="text-saffron" fill="currentColor" />,
      color: "from-saffron/20 to-transparent"
    }
  ];

  return (
    <section className="py-24 md:py-32 px-4 bg-white overflow-hidden relative">
      <MandalaSVG className="absolute top-0 right-0 w-[1000px] h-[1000px] text-gold opacity-[0.03] translate-x-1/2 -translate-y-1/2 animate-[spin_400s_linear_infinite]" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Left Side: The Science */}
          <div className="flex-[1.2]">
            <div className="inline-block bg-[#FDF2F2] text-crimson px-6 py-2 rounded-full font-black text-xs md:text-sm uppercase tracking-[0.3em] mb-8 border border-crimson/10 shadow-sm">
               Ancient Wisdom
            </div>
            <h2 className="text-4xl md:text-7xl font-black text-crimson mb-12 uppercase tracking-tighter leading-[0.9]">
               {t.benefits.title}
            </h2>
            
            <div className="grid gap-8">
               {benefits.map((b, i) => (
                 <div key={i} className="flex gap-6 md:gap-8 group p-6 rounded-3xl transition-all duration-500 hover:bg-cream/30 hover:shadow-xl hover:shadow-gold/5 border border-transparent hover:border-gold/10">
                    <div className="w-16 h-16 md:w-20 md:h-20 shrink-0 rounded-2xl bg-white shadow-lg flex items-center justify-center group-hover:scale-110 group-hover:-rotate-6 transition-all border border-gray-100 relative overflow-hidden">
                       <div className={`absolute inset-0 bg-gradient-to-br ${b.color} opacity-50`}></div>
                       <div className="scale-125 md:scale-150 relative z-10">{b.icon}</div>
                    </div>
                    <div className="pt-2">
                       <h3 className="text-xl md:text-3xl font-black text-gray-900 mb-3 uppercase tracking-tight leading-none group-hover:text-crimson transition-colors">{b.title}</h3>
                       <p className="text-base md:text-xl text-gray-600 font-bold leading-relaxed opacity-80">{b.desc}</p>
                    </div>
                 </div>
               ))}
            </div>
          </div>

          {/* Right Side: Why Choose Us Card */}
          <div className="flex-1 relative group">
            <div className="absolute -inset-4 bg-crimson/5 rounded-[60px] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            
            <div className="relative bg-crimson rounded-[50px] p-10 md:p-14 text-white overflow-hidden border-[10px] border-white shadow-2xl h-full flex flex-col">
               {/* Decorative Background */}
               <MandalaSVG className="absolute -top-20 -right-20 w-80 h-80 text-white opacity-[0.05] animate-spin-slow" />
               <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/20 to-transparent"></div>

               <h3 className="text-3xl md:text-5xl font-black mb-12 border-b-4 border-saffron/30 pb-8 uppercase tracking-tighter leading-none relative z-10">
                 {t.benefits.gTitle}
               </h3>
               
               <ul className="space-y-6 md:space-y-8 relative z-10 flex-grow">
                  {[
                    t.benefits.g1,
                    t.benefits.g2,
                    t.benefits.g3,
                    t.benefits.g4,
                    t.benefits.g5,
                    t.benefits.g6,
                  ].map((text, i) => (
                    <li key={i} className="flex items-start gap-5 group/item">
                      <div className="mt-1 bg-saffron rounded-lg p-1 group-hover/item:scale-125 transition-transform shadow-lg shadow-saffron/20">
                        <CheckCircle2 size={20} className="text-crimson stroke-[3px]" />
                      </div>
                      <span className="font-black text-lg md:text-2xl tracking-tighter uppercase leading-none opacity-95 group-hover/item:text-saffron transition-colors">
                        {text}
                      </span>
                    </li>
                  ))}
               </ul>

               <div className="mt-12 relative z-10">
                 <a 
                   href="tel:+919875958008"
                   className="group/btn block w-full bg-saffron text-crimson py-6 md:py-8 rounded-[30px] font-black text-xl md:text-3xl shadow-xl hover:bg-white hover:text-crimson transition-all hover:scale-[1.02] active:scale-95 uppercase tracking-tighter flex items-center justify-center gap-4 overflow-hidden relative"
                 >
                   <span className="relative z-10">{t.benefits.startJourney}</span>
                   <Sparkles size={24} className="relative z-10 animate-pulse" />
                   <div className="absolute inset-0 bg-white translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500"></div>
                 </a>
               </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
