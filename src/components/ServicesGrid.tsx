"use client";

import Image from "next/image";
import { Heart, Handshake, Users, Briefcase, Zap, ShieldAlert, Phone } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function ServicesGrid() {
  const { t } = useLanguage();

  const services = [
    {
      title: t.services.loveMarriage.title,
      desc: t.services.loveMarriage.desc,
      icon: <Heart size={24} />,
      bg: "bg-red-50",
      img: "/images/services/love-marriage-3842579264.png"
    },
    {
      title: t.services.getLoveBack.title,
      desc: t.services.getLoveBack.desc,
      icon: <Users size={24} />,
      bg: "bg-pink-50",
      img: "/images/services/get-love-back.png"
    },
    {
      title: t.services.stopDivorce.title,
      desc: t.services.stopDivorce.desc,
      icon: <Handshake size={24} />,
      bg: "bg-rose-50",
      img: "/images/services/stop-divorce-3842628694.png"
    },
    {
      title: t.services.relationshipProblem.title,
      desc: t.services.relationshipProblem.desc,
      icon: <Briefcase size={24} />,
      bg: "bg-amber-50",
      img: "/images/business-problem-solution.png"
    },
    {
      title: t.services.extraMarital.title,
      desc: t.services.extraMarital.desc,
      icon: <Zap size={24} />,
      bg: "bg-orange-50",
      img: "/images/extra-marital-new.png"
    },
    {
      title: t.services.husbandWife.title,
      desc: t.services.husbandWife.desc,
      icon: <ShieldAlert size={24} />,
      bg: "bg-yellow-50",
      img: "/images/new/relationship-issue.png"
    },
  ];

  return (
    <section className="py-16 md:py-24 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-black text-gray-900 uppercase tracking-tighter mb-4">
          {t.services.title.split(" ").slice(0, -1).join(" ")} <span className="text-crimson">{t.services.title.split(" ").pop()}</span>
        </h2>
        <p className="text-gray-500 font-bold max-w-2xl mx-auto mb-6">{t.services.subTitle}</p>
        <div className="w-24 h-1.5 bg-gold mx-auto rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {services.map((service, idx) => (
          <div key={idx} className={`${service.bg} rounded-[32px] border border-white/50 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden group flex flex-col`}>
            {/* Service Image Container */}
            <div className="relative h-48 w-full overflow-hidden">
              <Image 
                src={service.img} 
                alt={service.title} 
                fill 
                className="object-cover group-hover:scale-110 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm p-2 rounded-xl shadow-lg text-crimson group-hover:bg-crimson group-hover:text-white transition-all duration-300">
                {service.icon}
              </div>
            </div>

            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-xl font-black text-gray-900 uppercase tracking-tight mb-3 group-hover:text-crimson transition-colors">{service.title}</h3>
              <p className="text-sm font-bold text-gray-600 mb-6 leading-relaxed flex-1">{service.desc}</p>
              
              <a 
                href="tel:+919875958008"
                className="w-full inline-flex items-center justify-center gap-2 bg-white text-crimson px-6 py-3 rounded-2xl font-black text-xs uppercase tracking-widest group-hover:bg-crimson group-hover:text-white hover:bg-crimson hover:text-white transition-all shadow-md active:scale-[0.98] border border-crimson/10"
              >
                <Phone size={14} /> {t.services.getSolution}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}