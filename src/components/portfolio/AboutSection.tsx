"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, CheckCircle2, ArrowRight } from "lucide-react";
import { portfolioConfig } from "@/data/portfolioData";

export default function AboutSection() {
  const { profile } = portfolioConfig;

  return (
    <section
      id="about"
      className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16 py-12 z-20 relative"
    >
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.8 }}
        className="w-full border border-[#796143]/50 rounded-2xl bg-[#141414]/90 backdrop-blur-md p-6 sm:p-10 md:p-12 relative overflow-hidden shadow-2xl"
      >
        {/* Subtle decorative gold light */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#C99A5B]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          {/* Left Column: Heading and Editorial Introduction */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2">
              <span className="font-bebas text-lg text-[#C99A5B] tracking-widest">
                01
              </span>
              <span className="text-[#796143]">/</span>
              <span className="text-xs font-semibold tracking-[0.25em] text-[#C99A5B] uppercase">
                ABOUT MUHAMMAD USMAN
              </span>
              <span className="text-[#C99A5B] text-xs">✦</span>
            </div>

            <h3 className="font-bebas text-3xl sm:text-4xl lg:text-5xl tracking-wide text-[#E8D0B2] uppercase leading-[1.05]">
              CRAFTING DIGITAL EXPERIENCES
              <br />
              <span className="text-[#C99A5B]">WITH ELEGANCE & PURPOSE</span>
            </h3>

            <p className="text-sm sm:text-base text-[#B9AA98] leading-relaxed max-w-2xl font-sans">
              {profile.aboutBio}
            </p>

            {/* Core Values */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                "Pixel-perfect UI/UX design & typography",
                "High-performance Next.js & React architecture",
                "Conversion-optimized responsive layouts",
                "Seamless client collaboration worldwide",
              ].map((point) => (
                <div key={point} className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#C99A5B] shrink-0" />
                  <span className="text-xs text-[#E8D0B2]/90 font-medium tracking-wide">
                    {point}
                  </span>
                </div>
              ))}
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-[#C99A5B] bg-[#C99A5B] text-[#101010] hover:bg-[#E8D0B2] text-xs font-bold tracking-widest uppercase transition-all duration-300 shadow-[0_4px_20px_rgba(201,154,91,0.25)]"
              >
                <span>START A PROJECT</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              <a
                href="#work"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-[#796143]/60 bg-[#161616] text-[#E8D0B2] hover:border-[#C99A5B] hover:text-[#C99A5B] text-xs font-semibold tracking-widest uppercase transition-all duration-300"
              >
                <span>EXPLORE WORK</span>
              </a>
            </div>
          </div>

          {/* Right Column: Key Stats in Gold Outlined Grid */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {profile.stats.map((stat, index) => (
              <div
                key={stat.label}
                className="border border-[#796143]/40 rounded-xl p-5 bg-[#171717]/80 flex flex-col justify-center items-center text-center hover:border-[#C99A5B]/80 transition-all duration-300 group"
              >
                <span className="font-bebas text-3xl sm:text-4xl text-[#C99A5B] group-hover:scale-105 transition-transform duration-300">
                  {stat.value}
                </span>
                <span className="text-[11px] sm:text-xs font-medium tracking-widest text-[#B9AA98] uppercase mt-1">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
