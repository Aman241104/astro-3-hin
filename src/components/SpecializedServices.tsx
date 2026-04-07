"use client";

import Image from "next/image";
import { Phone, Shield, Sparkles, TrendingUp, Home } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function SpecializedServices() {
  const { t } = useLanguage();

  const services = [
    {
      title: t.services.blackMagic.title,
      desc: t.services.blackMagic.desc,
      icon: <Shield size={24} />,
      img: "/images/services/black-magic-3842692124.png",
      bg: "bg-indigo-50/50"
    },
    {
      title: t.services.muthkarni.title,
      desc: t.services.muthkarni.desc,
      icon: <Sparkles size={24} />,
      img: "/images/services/muthkarni-3842830963.png",
      bg: "bg-purple-50/50"
    },
    {
      title: t.services.businessProblem.title,
      desc: t.services.businessProblem.desc,
      icon: <TrendingUp size={24} />,
      img: "/images/business-problem-solution.png",
      bg: "bg-blue-50/50"
    },
    {
      title: t.services.familyProblem.title,
      desc: t.services.familyProblem.desc,
      icon: <Home size={24} />,
      img: "/images/family-problem-solution.png",
      bg: "bg-emerald-50/50"
    },
  ];

  return (
    <section className="py-20 bg-[#FDFBF7]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block bg-gold/10 text-gold px-6 py-2 rounded-full font-black text-xs uppercase tracking-[0.3em] mb-4 border border-gold/20">
             Exclusive Expertise
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 uppercase tracking-tighter mb-4">
            ADDITIONAL <span className="text-crimson">SPECIALIZED</span> SERVICES
          </h2>
          <p className="text-gray-500 font-bold max-w-2xl mx-auto">Unique spiritual solutions for complex life hurdles and negative energy removal.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <div key={idx} className={`${service.bg} rounded-[40px] border border-white p-2 shadow-xl hover:shadow-2xl transition-all duration-500 group`}>
              <div className="relative h-48 w-full rounded-[32px] overflow-hidden mb-6">
                <Image 
                  src={service.img} 
                  alt={service.title} 
                  fill 
                  className="object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-crimson shadow-lg group-hover:bg-crimson group-hover:text-white transition-all">
                  {service.icon}
                </div>
              </div>
              
              <div className="px-6 pb-6">
                <h3 className="text-xl font-black text-gray-900 uppercase tracking-tight mb-3 group-hover:text-crimson transition-colors leading-tight">{service.title}</h3>
                <p className="text-xs font-bold text-gray-500 mb-6 leading-relaxed line-clamp-3">{service.desc}</p>
                
                <a 
                  href="tel:+919875958008"
                  className="inline-flex items-center gap-2 text-crimson font-black text-xs uppercase tracking-widest hover:gap-4 transition-all"
                >
                  <Phone size={14} fill="currentColor" />
                  {t.services.getSolution}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
