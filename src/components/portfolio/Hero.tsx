"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { portfolioConfig } from "@/data/portfolioData";

export default function Hero() {
  const { profile } = portfolioConfig;

  return (
    <section className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16 pt-2 pb-12 overflow-visible">
      {/* Container holding the massive PORTFOLIO typography and overlapping portrait */}
      <div className="relative w-full flex flex-col items-center justify-start min-h-[560px] md:min-h-[690px] lg:min-h-[780px]">
        {/* Background Massive Condensed Text: "PORTFOLIO" (Vertically elongated like reference) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="w-full text-center select-none pointer-events-none z-0 mt-0 overflow-visible"
        >
          <h1
            className="font-bebas text-[22vw] sm:text-[21vw] md:text-[200px] lg:text-[240px] xl:text-[270px] leading-[0.76] tracking-[0.05em] sm:tracking-[0.08em] md:tracking-[0.11em] text-[#E8D0B2] opacity-90 transition-all font-normal whitespace-nowrap transform scale-y-[1.32] md:scale-y-[1.44] origin-top"
            style={{
              textShadow: "0 10px 40px rgba(0,0,0,0.85)",
            }}
          >
            {profile.heroHeading}
          </h1>
        </motion.div>

        {/* Central Overlapping Portrait of Muhammad Usman with full broad shoulders & style */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="absolute top-0 sm:-top-2 md:-top-4 z-10 w-[320px] sm:w-[410px] md:w-[520px] lg:w-[600px] xl:w-[640px] h-[430px] sm:h-[550px] md:h-[680px] lg:h-[760px] xl:h-[820px] pointer-events-none"
        >
          {/* Subtle warm backlight glow behind subject */}
          <div className="absolute inset-0 -top-8 bg-gradient-to-b from-[#C99A5B]/20 via-transparent to-transparent blur-3xl rounded-full transform -translate-y-6" />

          {/* Portrait Image with natural gradient blend into the dark canvas */}
          <div className="relative w-full h-full">
            <Image
              src="/images/hero-portrait-styled.png"
              alt="Muhammad Usman — Web Designer & Digital Creator"
              fill
              priority
              sizes="(max-width: 640px) 320px, (max-width: 768px) 410px, (max-width: 1024px) 520px, 640px"
              className="object-contain object-top drop-shadow-[0_20px_50px_rgba(0,0,0,0.9)]"
            />
            {/* Smooth bottom fade mask so blazer blends seamlessly into the dark page */}
            <div className="absolute inset-x-0 bottom-0 h-32 md:h-44 bg-gradient-to-t from-[#101010] via-[#101010]/80 to-transparent pointer-events-none" />
          </div>
        </motion.div>

        {/* Lower Left & Lower Right Content Row */}
        <div className="relative z-20 w-full mt-auto pt-[270px] sm:pt-[330px] md:pt-[400px] lg:pt-[470px] grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-4 items-end">
          {/* Lower Left Hero Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="md:col-span-5 lg:col-span-4 flex flex-col text-left space-y-3"
          >
            <div>
              <span className="block font-bebas text-lg md:text-xl tracking-[0.25em] text-[#C99A5B] uppercase leading-none">
                {profile.heroLeftSubtitle}
              </span>
              <h2 className="font-bebas text-2xl md:text-3xl lg:text-[34px] tracking-widest text-[#E8D0B2] uppercase leading-tight mt-1">
                {profile.heroLeftTitle}
              </h2>
            </div>

            <p className="text-xs md:text-[13px] leading-relaxed text-[#B9AA98] max-w-[320px] font-sans">
              {profile.heroDescription}
            </p>

            {/* Signature Area */}
            <div className="pt-2">
              <span className="font-signature text-3xl md:text-4xl lg:text-[42px] text-[#C99A5B] block transform -rotate-1 origin-left select-none drop-shadow-[0_2px_10px_rgba(201,154,91,0.2)]">
                {profile.name}
              </span>
              <span className="block text-[9px] md:text-[10px] font-semibold tracking-[0.35em] text-[#B9AA98]/80 uppercase mt-1">
                {profile.name}
              </span>
            </div>
          </motion.div>

          {/* Center Spacer for desktop portrait clearance */}
          <div className="hidden md:block md:col-span-2 lg:col-span-4 pointer-events-none" />

          {/* Lower Right Hero Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="md:col-span-5 lg:col-span-4 flex flex-col items-start md:items-end text-left md:text-right space-y-4"
          >
            {/* Tagline with accent line */}
            <div className="flex flex-col items-start md:items-end">
              <span className="w-10 h-[2px] bg-[#C99A5B] mb-2.5 inline-block" />
              <p className="text-xs md:text-sm font-semibold tracking-[0.16em] text-[#E8D0B2] uppercase leading-relaxed font-sans max-w-[240px]">
                {profile.heroRightTagline1}
                <br />
                {profile.heroRightTagline2}
                <br />
                {profile.heroRightTagline3}
              </p>
            </div>

            {/* Location & Availability */}
            <div className="flex items-center md:justify-end gap-2.5 pt-2">
              <div className="w-6 h-6 rounded-full border border-[#796143]/60 bg-[#151515] flex items-center justify-center shrink-0">
                <MapPin className="w-3.5 h-3.5 text-[#C99A5B]" />
              </div>
              <div className="text-[10px] md:text-[11px] font-medium tracking-[0.2em] text-[#B9AA98] uppercase leading-tight text-left md:text-right">
                <div>BASED IN PAKISTAN</div>
                <div className="text-[#C99A5B]/90 font-semibold">
                  AVAILABLE WORLDWIDE
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
