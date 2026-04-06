"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Search, Sparkles } from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";

export default function WorkingProcess() {
  const { t } = useLanguage();

  const steps = [
    {
      title: t.workingProcess.s1Title,
      desc: t.workingProcess.s1Desc,
      icon: <WhatsAppIcon className="text-white" size={32} />,
      color: "bg-[#25D366]",
      shadow: "shadow-[#25D366]/40"
    },
    {
      title: t.workingProcess.s2Title,
      desc: t.workingProcess.s2Desc,
      icon: <Search className="text-white" size={32} />,
      color: "bg-gold",
      shadow: "shadow-gold/40"
    },
    {
      title: t.workingProcess.s3Title,
      desc: t.workingProcess.s3Desc,
      icon: <Sparkles className="text-white" size={32} />,
      color: "bg-crimson",
      shadow: "shadow-crimson/40"
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-[#FFFCF7] px-4 relative overflow-hidden">
      {/* Background Ornaments */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none">
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-saffron/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20 md:mb-32">
          <div className="inline-block bg-crimson/10 text-crimson px-6 py-2 rounded-full font-black text-xs md:text-sm uppercase tracking-[0.4em] mb-6 border border-crimson/20">
             Easy Process
          </div>
          <h2 className="text-4xl md:text-8xl font-black text-crimson mb-8 uppercase tracking-tighter leading-none">{t.workingProcess.title}</h2>
          <p className="text-gray-600 font-black uppercase tracking-[0.2em] text-xs md:text-xl italic max-w-3xl mx-auto leading-relaxed opacity-80">{t.workingProcess.sub}</p>
          <div className="w-40 h-1.5 bg-gradient-to-r from-transparent via-gold/40 to-transparent mx-auto mt-10 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20 relative">
          {/* Connecting Curved Lines (Desktop) */}
          <div className="hidden md:block absolute top-1/4 left-[15%] w-[70%] h-1 border-t-4 border-dashed border-gold/20 -z-10"></div>
          
          {steps.map((s, i) => (
            <div key={i} className="group relative">
              {/* Step Card */}
              <div className="relative z-10 bg-white p-10 md:p-14 rounded-[40px] md:rounded-[60px] border border-gold/10 shadow-2xl shadow-gold/5 transition-all duration-700 hover:-translate-y-4 hover:shadow-gold/20 flex flex-col items-center text-center">
                
                {/* Step Icon with Pulse */}
                <div className="relative mb-10">
                  <div className={`absolute inset-0 ${s.color} rounded-3xl blur-2xl opacity-20 group-hover:opacity-40 transition-opacity`}></div>
                  <div className={`w-20 h-20 md:w-28 md:h-28 rounded-[28px] md:rounded-[36px] ${s.color} ${s.shadow} flex items-center justify-center relative z-10 border-4 border-white group-hover:rotate-6 transition-all duration-500`}>
                    <div className="scale-125 md:scale-150">{s.icon}</div>
                  </div>
                  
                  {/* Number Badge */}
                  <div className="absolute -top-4 -right-4 w-10 h-10 md:w-14 md:h-14 bg-white rounded-full flex items-center justify-center shadow-xl border-4 border-gold/10 z-20">
                    <span className="text-xl md:text-2xl font-black text-gold">0{i + 1}</span>
                  </div>
                </div>

                <h3 className="text-2xl md:text-4xl font-black text-gray-900 mb-6 uppercase tracking-tighter leading-none group-hover:text-crimson transition-colors italic">
                  {s.title.split(":")[1] || s.title}
                </h3>
                
                <p className="text-base md:text-2xl text-gray-600 font-bold leading-relaxed italic opacity-80 group-hover:opacity-100 transition-opacity">
                  {s.desc}
                </p>

                {/* Decorative Accent */}
                <div className="mt-8 w-12 h-1 bg-gray-100 group-hover:w-24 group-hover:bg-gold transition-all duration-700 rounded-full"></div>
              </div>

              {/* Background Glow */}
              <div className={`absolute -inset-4 rounded-[60px] ${s.color} opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-5 -z-0`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
