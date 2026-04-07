"use client";

import Hero from "@/components/Hero";
import ServicesGrid from "@/components/ServicesGrid";
import SpecializedServices from "@/components/SpecializedServices";
import AboutExpert from "@/components/AboutExpert";
import WorkingProcess from "@/components/WorkingProcess";
import FAQ from "@/components/FAQ";
import ActionBanner from "@/components/ActionBanner";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import TrustBanner from "@/components/TrustBanner";
import PromotionalBanner from "@/components/PromotionalBanner";
import Benefits from "@/components/Benefits";
import LeadForm from "@/components/LeadForm";
import { useLanguage } from "@/context/LanguageContext";
import { Heart, Users, Briefcase, ShieldCheck } from "lucide-react";

export default function Home() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen pt-[88px] md:pt-[104px] bg-white">
      <Hero />
      <ServicesGrid />

      <PromotionalBanner text="HIGHLY EFFECTIVE RESULTS • CALL NOW" secondary />

      {/* Dual Banners Replacement for OtherProblems */}
      <ActionBanner
        title="LOVE MARRIAGE SPECIALIST"
        subtitle="Effective Solutions for Intercaste & Family Marriage Conflicts"
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

      <SpecializedServices />

      <AboutExpert />

      <TrustBanner />

      <Benefits />

      <WorkingProcess />

      <PromotionalBanner text={t.footer.ctaTitle} />

      <LeadForm />

      <FAQ />

      <WhatsAppWidget />
    </main>
  );
}
