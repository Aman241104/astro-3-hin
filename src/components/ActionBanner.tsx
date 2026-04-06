"use client";

import Image from "next/image";
import { MessageCircle, Star, Heart, Users, Briefcase, ShieldCheck } from "lucide-react";

interface ActionBannerProps {
  title: string;
  subtitle: string;
  image: string;
  services: { title: string; icon: React.ReactNode }[];
  reverse?: boolean;
}

export default function ActionBanner({ title, subtitle, image, services, reverse = false }: ActionBannerProps) {
  return (
    <section className="relative overflow-hidden bg-[#800000] border-y border-white/10">
      {/* Intense Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.15] pointer-events-none">
         <div className="absolute inset-0" style={{ 
           backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.4) 1px, transparent 1px)',
           backgroundSize: '40px 40px'
         }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 w-full relative z-10 py-12 md:py-20 flex flex-col md:flex-row items-center gap-12 lg:gap-20">
         
         {/* Banner Image */}
         <div className={`w-full max-w-[400px] md:max-w-[500px] relative ${reverse ? 'md:order-2' : 'md:order-1'}`}>
            <div className="relative aspect-[4/3] rounded-[40px] md:rounded-[60px] overflow-hidden border-[10px] border-gold shadow-[0_30px_60px_rgba(0,0,0,0.5)] scale-105 group">
               <Image 
                 src={image} 
                 alt={title} 
                 fill 
                 className="object-cover group-hover:scale-110 transition-transform duration-1000"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-crimson/40 to-transparent"></div>
            </div>
            
            {/* WhatsApp Badge */}
            <div className="absolute -bottom-6 -left-4 bg-white rounded-full p-2 shadow-2xl z-20 animate-pulse">
               <div className="bg-[#25D366] p-4 rounded-full">
                  <MessageCircle size={28} className="text-white fill-white" />
               </div>
            </div>

            {/* Satisfaction Badge */}
            <div className={`absolute -top-6 ${reverse ? '-left-4' : '-right-4'} bg-gold text-crimson p-4 rounded-full shadow-2xl z-20 border-4 border-white rotate-12`}>
               <div className="font-black text-xl leading-none">100%</div>
               <div className="text-[8px] font-black uppercase tracking-widest">Result</div>
            </div>
         </div>

         {/* Content Side */}
         <div className={`flex-1 text-center md:text-left ${reverse ? 'md:order-1' : 'md:order-2'}`}>
            <div className="inline-block bg-gold/20 text-gold px-4 py-1 rounded-full font-black text-[10px] uppercase tracking-[0.3em] mb-6 border border-gold/30">
               Highly Effective Solutions
            </div>
            
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-white uppercase tracking-tighter leading-[0.85] mb-4 drop-shadow-xl">
              {title.split(" ").slice(0, -1).join(" ")} <br />
              <span className="text-gold italic">{title.split(" ").pop()}</span>
            </h2>
            
            <p className="text-white/80 font-bold text-lg md:text-xl mb-8 uppercase tracking-wide">
              {subtitle}
            </p>

            <div className="flex flex-wrap justify-center md:justify-start gap-3 md:gap-4 mb-10">
               {services.map((s, idx) => (
                 <div key={idx} className="bg-white/10 backdrop-blur-md border border-white/20 px-6 py-3 rounded-2xl flex items-center gap-3 hover:bg-white/20 transition-all cursor-default group">
                    {s.icon}
                    <span className="text-xs md:text-sm font-black text-white uppercase tracking-widest">{s.title}</span>
                 </div>
               ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
               <a 
                 href="https://wa.me/919875958008"
                 className="w-full sm:w-auto bg-[#25D366] text-white px-10 py-5 rounded-2xl font-black text-lg flex items-center justify-center gap-3 hover:scale-105 transition-all shadow-lg active:scale-95"
               >
                 <MessageCircle size={24} fill="white" />
                 WHATSAPP NOW
               </a>
               <a 
                 href="tel:+919875958008"
                 className="w-full sm:w-auto bg-white text-crimson px-10 py-5 rounded-2xl font-black text-lg flex items-center justify-center gap-3 hover:scale-105 transition-all shadow-lg active:scale-95"
               >
                 <Star size={24} className="fill-crimson" />
                 CONSULT FREE
               </a>
            </div>
         </div>

      </div>
    </section>
  );
}
