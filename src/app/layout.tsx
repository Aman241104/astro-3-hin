"use client";

import { LanguageProvider } from "@/context/LanguageContext";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyCTAs from "@/components/StickyCTAs";
import SocialProofToast from "@/components/SocialProofToast";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased font-sans">
        <LanguageProvider>
          <Navbar />
          {children}
          <Footer />
          <StickyCTAs />
          <SocialProofToast />
        </LanguageProvider>
      </body>
    </html>
  );
}