"use client";

import Image from "next/image";
import { Phone, MessageCircle, Heart, Sparkles, Star } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import ZodiacWheel from "./ZodiacWheel";
import CosmicSnapshot from "./CosmicSnapshot";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#FFFDF5]">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-crimson/5 skew-x-12 translate-x-24 hidden lg:block"></div>
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-gold/10 rounded-full blur-3xl animate-pulse"></div>
      
      <div className="max-w-7xl mx-auto px-4 w-full py-12 lg:py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* Content Side */}
          <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-2xl shadow-sm border border-gold/20 mb-8 animate-bounce-in">
              <Heart size={16} className="text-crimson animate-pulse" fill="currentColor" />
              <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-gray-600">
                #1 Relationship & Love Specialist
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-gray-900 leading-[0.85] mb-6 uppercase tracking-tighter">
              Bring Back <br />
              <span className="text-crimson italic relative">
                Your Love
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-gold/40" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 25 0 50 5 T 100 5" fill="none" stroke="currentColor" strokeWidth="2" />
                </svg>
              </span>
              <br />
              Permanently
            </h1>

            <p className="text-lg md:text-2xl text-gray-600 font-bold mb-10 max-w-xl mx-auto lg:mx-0 leading-tight uppercase italic tracking-tight">
              Stop Divorce, Solve Relationship Conflicts & Reunite with Your Partner in <span className="text-crimson underline decoration-gold underline-offset-4">24 Hours</span>.
            </p>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10 max-w-lg mx-auto lg:mx-0">
               <div className="bg-white p-4 rounded-3xl border border-gold/10 shadow-sm flex flex-col items-center lg:items-start group hover:border-crimson transition-colors">
                  <Star className="text-gold mb-2 group-hover:scale-110 transition-transform" fill="currentColor" size={20} />
                  <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest">Success Rate</span>
                  <span className="text-lg font-black text-gray-900 tracking-tighter">99.9%</span>
               </div>
               <div className="bg-white p-4 rounded-3xl border border-gold/10 shadow-sm flex flex-col items-center lg:items-start group hover:border-crimson transition-colors">
                  <Heart className="text-crimson mb-2 group-hover:scale-110 transition-transform" fill="currentColor" size={20} />
                  <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest">Reunited</span>
                  <span className="text-lg font-black text-gray-900 tracking-tighter">50K+ Pairs</span>
               </div>
               <div className="bg-white p-4 rounded-3xl border border-gold/10 shadow-sm flex flex-col items-center lg:items-start group hover:border-crimson transition-colors hidden md:flex">
                  <Sparkles className="text-saffron mb-2 group-hover:scale-110 transition-transform" fill="currentColor" size={20} />
                  <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest">Guaranteed</span>
                  <span className="text-lg font-black text-gray-900 tracking-tighter">In 24 Hrs</span>
               </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a 
                href="https://wa.me/919875958008"
                className="w-full sm:w-auto bg-[#25D366] text-white px-10 py-5 rounded-[24px] font-black text-xl flex items-center justify-center gap-3 hover:scale-105 transition-all shadow-[0_20px_40px_rgba(37,211,102,0.3)] group"
              >
                <MessageCircle size={24} fill="white" />
                CHAT ON WHATSAPP
              </a>
              <a 
                href="tel:+919875958008"
                className="w-full sm:w-auto bg-crimson text-white px-10 py-5 rounded-[24px] font-black text-xl flex items-center justify-center gap-3 hover:scale-105 transition-all shadow-[0_20px_40px_rgba(220,20,60,0.3)] border-b-4 border-black/10 active:border-b-0 active:mt-1"
              >
                <Phone size={24} fill="white" />
                CALL NOW
              </a>
            </div>
          </div>

          {/* Image Side */}
          <div className="flex-1 w-full relative order-1 lg:order-2">
            <div className="relative aspect-square max-w-[550px] mx-auto">
              {/* Rotating Background */}
              <div className="absolute inset-0 opacity-10 animate-[spin_100s_linear_infinite] scale-125">
                <ZodiacWheel />
              </div>
              
              {/* Love Couple Image */}
              <div className="relative w-full h-full rounded-[60px] overflow-hidden border-8 border-white shadow-2xl group">
                <Image 
                  src="/images/hero-couple-new.png" 
                  alt="Relationship Success" 
                  fill 
                  className="object-cover group-hover:scale-110 transition-transform duration-1000"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-crimson/60 via-transparent to-transparent"></div>
                
                {/* Overlapping Info Card */}
                <div className="absolute bottom-8 left-8 right-8">
                   <div className="bg-white/90 backdrop-blur-md p-6 rounded-[32px] border border-white/20 shadow-xl">
                      <div className="flex items-center gap-4 mb-4">
                         <div className="flex -space-x-3">
                            {[1, 2, 3].map(i => (
                              <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                                <Image src={`https://i.pravatar.cc/100?img=${i+10}`} alt="user" width={40} height={40} />
                              </div>
                            ))}
                         </div>
                         <div className="text-[10px] font-black uppercase tracking-widest text-gray-500">
                           Trusted by 500+ couples this week
                         </div>
                      </div>
                      <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                         <div className="h-full bg-crimson w-[98%] animate-pulse"></div>
                      </div>
                   </div>
                </div>
              </div>

              {/* Floating Element: 100% Satisfaction */}
              <div className="absolute -top-6 -right-6 bg-gold text-crimson p-6 rounded-full shadow-2xl border-4 border-white rotate-12 hover:rotate-0 transition-transform cursor-default z-20">
                <div className="text-3xl font-black italic leading-none">100%</div>
                <div className="text-[10px] font-black uppercase tracking-widest">Safe & Private</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}