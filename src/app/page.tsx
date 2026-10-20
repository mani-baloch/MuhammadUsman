import React from "react";
import SmoothScrollProvider from "@/components/portfolio/SmoothScroll";
import ScrollProgress from "@/components/portfolio/ScrollProgress";
import Header from "@/components/portfolio/Header";
import Hero from "@/components/portfolio/Hero";
import TableOfContents from "@/components/portfolio/TableOfContents";
import SelectedProjects from "@/components/portfolio/SelectedProjects";
import ThreeColumnSection from "@/components/portfolio/ThreeColumnSection";
import AboutSection from "@/components/portfolio/AboutSection";
import ContactPanel from "@/components/portfolio/ContactPanel";
import Footer from "@/components/portfolio/Footer";

export default function Home() {
  return (
    <SmoothScrollProvider>
      <ScrollProgress />
      <main className="relative min-h-screen bg-[#101010] text-[#E8D0B2] overflow-x-hidden selection:bg-[#C99A5B] selection:text-[#101010]">
        {/* Subtle Luxury Ambient Background Glows */}
        <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[500px] bg-gradient-to-b from-[#C99A5B]/5 via-transparent to-transparent blur-[140px] pointer-events-none z-0" />
        <div className="fixed bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-t from-[#C99A5B]/3 via-transparent to-transparent blur-[120px] pointer-events-none z-0" />

        {/* Page Content flowing with reference image layout */}
        <div className="relative z-10 flex flex-col space-y-4 md:space-y-6">
          <Header />
          <Hero />
          <TableOfContents />
          <SelectedProjects />
          <ThreeColumnSection />
          <AboutSection />
          <ContactPanel />
          <Footer />
        </div>
      </main>
    </SmoothScrollProvider>
  );
}
