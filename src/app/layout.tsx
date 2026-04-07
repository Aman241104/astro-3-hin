"use client";

import { LanguageProvider } from "@/context/LanguageContext";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyCTAs from "@/components/StickyCTAs";

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
        </LanguageProvider>
      </body>
    </html>
  );
}