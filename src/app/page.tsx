"use client";

import Hero from "@/components/Hero";
import PromotionalBanner from "@/components/PromotionalBanner";
import ServicesGrid from "@/components/ServicesGrid";
import ActionBanner from "@/components/ActionBanner";
import LeadForm from "@/components/LeadForm";
import FAQ from "@/components/FAQ";
import TrustBar from "@/components/TrustBar";
import CategoryBar from "@/components/CategoryBar";
import WorkingProcess from "@/components/WorkingProcess";
import Benefits from "@/components/Benefits";
import AboutExpert from "@/components/AboutExpert";
import TrustBanner from "@/components/TrustBanner";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import { useLanguage } from "@/context/LanguageContext";
import { Heart, Users, Briefcase, ShieldCheck } from "lucide-react";

export default function Home() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen pt-[88px] md:pt-[104px] bg-white">
      <Hero />
      <ServicesGrid />
      
      {/* Dual Banners Replacement for OtherProblems */}
      <ActionBanner 
        title="LOVE MARRIAGE SPECIALIST"
        subtitle="Permanent Solutions for Intercaste & Family Marriage Conflicts"
        image="/images/love-marriage-new.png"
        services={[
          { title: "Love Marriage specialist", icon: <Heart size={18} className="text-gold" fill="currentColor" /> },
          { title: "Extra Marital Affair", icon: <Users size={18} className="text-gold" fill="currentColor" /> }
        ]}
      />

      <ActionBanner 
        title="RELATIONSHIP PROBLEM SOLUTIONS"
        subtitle="Expert Guidance to Resolve All Life & Career Hurdles"
        image="/images/business-problem-solution.png"
        reverse
        services={[
          { title: "Marriage problem solution", icon: <ShieldCheck size={18} className="text-gold" /> },
          { title: "Business problem solution", icon: <Briefcase size={18} className="text-gold" /> }
        ]}
      />
      
      <div className="bg-white">
        <TrustBar />
      </div>

      <CategoryBar />

      <PromotionalBanner text={t.hero.freeConsult} />
      
      <TrustBanner />
      
      <PromotionalBanner text="100% GUARANTEED RESULT IN 24 HOURS • CALL NOW" secondary />
      
      <AboutExpert />
      
      <Benefits />
      
      <WorkingProcess />
      
      <PromotionalBanner text={t.footer.ctaTitle} />
      
      <LeadForm />
      
      <FAQ />

      <WhatsAppWidget />
    </main>
  );
}