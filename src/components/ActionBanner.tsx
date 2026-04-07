"use client";

import Image from "next/image";
import { MessageCircle, Star, Heart, Users, Briefcase, ShieldCheck, Sparkles } from "lucide-react";
import MandalaSVG from "./MandalaSVG";

interface ActionBannerProps {
  title: string;
  subtitle: string;
  image: string;
  services: { title: string; icon: React.ReactNode }[];
  reverse?: boolean;
}

export default function ActionBanner({ title, subtitle, image, services, reverse = false }: ActionBannerProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#4a0000] via-[#800000] to-[#2a0000] border-y border-white/10">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
         <MandalaSVG className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[900px] md:h-[900px] text-gold opacity-[0.07] animate-[spin_120s_linear_infinite]" />
         
         {/* Subtle Stars */}
         {[...Array(20)].map((_, i) => (
           <div 
             key={i}
             className="absolute bg-white rounded-full animate-pulse"
             style={{
               top: `${Math.random() * 100}%`,
               left: `${Math.random() * 100}%`,
               width: `${Math.random() * 2 + 1}px`,
               height: `${Math.random() * 2 + 1}px`,
               animationDelay: `${Math.random() * 5}s`,
               opacity: Math.random() * 0.3 + 0.1
             }}
           />
         ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 w-full relative z-10 py-16 md:py-24 flex flex-col md:flex-row items-center gap-12 lg:gap-24">
         
         {/* Banner Image */}
         <div className={`w-full max-w-[400px] md:max-w-[500px] relative ${reverse ? 'md:order-2' : 'md:order-1'}`}>
            <div className="relative aspect-[4/3] rounded-[40px] md:rounded-[60px] overflow-hidden border-[10px] border-white/10 shadow-[0_40px_80px_rgba(0,0,0,0.6)] group">
               <Image 
                 src={image} 
                 alt={title} 
                 fill 
                 className="object-cover group-hover:scale-110 transition-transform duration-1000"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            </div>
            
            {/* WhatsApp Badge */}
            <div className="absolute -bottom-6 -left-4 bg-white rounded-full p-2 shadow-2xl z-20 animate-float">
               <div className="bg-[#25D366] p-4 rounded-full shadow-[0_0_20px_rgba(37,211,102,0.4)]">
                  <MessageCircle size={28} className="text-white fill-white" />
               </div>
            </div>

            {/* Satisfaction Badge - Golden Seal */}
            <div className={`absolute -top-10 ${reverse ? '-left-6' : '-right-6'} w-28 h-28 bg-gradient-to-br from-gold via-saffron to-gold p-1 rounded-full shadow-[0_0_30px_rgba(255,215,0,0.3)] z-20 rotate-12 flex items-center justify-center border-4 border-white/20`}>
               <div className="w-full h-full rounded-full border-2 border-white/30 flex flex-col items-center justify-center text-crimson text-center">
                  <Sparkles size={16} className="mb-1" />
                  <div className="font-black text-xl leading-none">HIGH</div>
                  <div className="text-[8px] font-black uppercase tracking-widest">SUCCESS</div>
               </div>
            </div>
         </div>

         {/* Content Side */}
         <div className={`flex-1 text-center md:text-left ${reverse ? 'md:order-1' : 'md:order-2'}`}>
            <div className="inline-flex items-center gap-2 bg-gold/20 text-gold px-5 py-2 rounded-full font-black text-[10px] uppercase tracking-[0.3em] mb-8 border border-gold/30 backdrop-blur-sm">
               <Star size={12} fill="currentColor" />
               Highly Effective Solutions
            </div>
            
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-white uppercase tracking-tighter leading-[0.85] mb-6 drop-shadow-2xl">
              {title.split(" ").slice(0, -1).join(" ")} <br />
              <span className="text-gold italic drop-shadow-[0_0_15px_rgba(255,215,0,0.3)]">{title.split(" ").pop()}</span>
            </h2>
            
            <p className="text-white/90 font-bold text-lg md:text-2xl mb-10 uppercase tracking-wide max-w-xl mx-auto md:mx-0">
              {subtitle}
            </p>

            <div className="flex flex-wrap justify-center md:justify-start gap-3 md:gap-4 mb-12">
               {services.map((s, idx) => (
                 <div key={idx} className="bg-white/5 backdrop-blur-md border border-white/10 px-6 py-4 rounded-[24px] flex items-center gap-3 hover:bg-white/10 transition-all cursor-default group hover:border-gold/30">
                    <div className="p-2 rounded-xl bg-white/5 group-hover:bg-gold/20 transition-colors">
                      {s.icon}
                    </div>
                    <span className="text-xs md:text-sm font-black text-white uppercase tracking-widest leading-none">{s.title}</span>
                 </div>
               ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-5">
               <a 
                 href="https://wa.me/919875958008"
                 className="w-full sm:w-auto bg-[#25D366] text-white px-12 py-6 rounded-[24px] font-black text-xl flex items-center justify-center gap-3 hover:scale-105 hover:shadow-[0_0_30px_rgba(37,211,102,0.4)] transition-all active:scale-95 group"
               >
                 <MessageCircle size={24} fill="white" className="group-hover:rotate-12 transition-transform" />
                 WHATSAPP NOW
               </a>
               <a 
                 href="tel:+919875958008"
                 className="w-full sm:w-auto bg-white text-crimson px-12 py-6 rounded-[24px] font-black text-xl flex items-center justify-center gap-3 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-all active:scale-95 group"
               >
                 <Star size={24} className="fill-crimson group-hover:scale-110 transition-transform" />
                 CONSULT FREE
               </a>
            </div>
         </div>

      </div>
    </section>
  );
}
