"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { portfolioConfig } from "@/data/portfolioData";

export default function TableOfContents() {
  const { toc } = portfolioConfig;

  // Split into 2 columns of 3 items each
  const col1 = toc.slice(0, 3);
  const col2 = toc.slice(3, 6);

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16 py-6 z-20 relative">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8 }}
        className="w-full border border-[#85631A]/60 rounded-2xl bg-[#141414]/95 shadow-[0_15px_40px_rgba(0,0,0,0.6)] backdrop-blur-md overflow-hidden relative"
      >
        <div className="grid grid-cols-1 md:grid-cols-12 items-center p-6 sm:p-8 md:p-10 gap-8 md:gap-4 lg:gap-6">
          {/* Left Column: Heading & Description */}
          <div className="md:col-span-4 lg:col-span-3 flex flex-col justify-center space-y-3 md:border-r md:border-[#85631A]/30 md:pr-4 lg:pr-6">
            <h2 className="font-bebas text-3xl sm:text-4xl lg:text-[40px] tracking-wider text-[#E8D0B2] uppercase leading-[0.95]">
              TABLE OF
              <br />
              CONTENTS
            </h2>

            <div className="flex items-start gap-2 pt-1">
              <span className="text-[#C89520] text-base leading-none select-none">
                ✦
              </span>
              <p className="text-xs text-[#B9AA98] leading-relaxed max-w-[240px]">
                Explore my work, skills, and creative process that turns ideas
                into meaningful digital experiences.
              </p>
            </div>
          </div>

          {/* Center Column: Two-Column Numbered Navigation */}
          <div className="md:col-span-5 lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-3 md:gap-4 relative px-0 sm:px-2 md:px-4">
            {/* Column 1 (01 - 03) */}
            <div className="flex flex-col space-y-4 md:space-y-5">
              {col1.map((item) => (
                <a
                  key={item.number}
                  href={item.href}
                  className="group flex items-center transition-all duration-300 py-0.5"
                >
                  <span className="font-bebas text-2xl sm:text-3xl text-[#C89520] w-9 sm:w-10 shrink-0 group-hover:text-[#E8D0B2] group-hover:scale-105 transition-all">
                    {item.number}
                  </span>
                  <span className="text-xs sm:text-sm font-semibold tracking-[0.18em] text-[#E8D0B2] uppercase group-hover:text-[#C89520] group-hover:translate-x-1 transition-all">
                    {item.title}
                  </span>
                </a>
              ))}
            </div>

            {/* Subtle Middle Vertical Divider with Star */}
            <div className="hidden sm:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center pointer-events-none">
              <span className="w-[1px] h-8 md:h-10 bg-[#85631A]/40" />
              <span className="text-[#C89520] text-xs my-1 select-none">✦</span>
              <span className="w-[1px] h-8 md:h-10 bg-[#85631A]/40" />
            </div>

            {/* Column 2 (04 - 06) */}
            <div className="flex flex-col space-y-4 md:space-y-5 sm:pl-6 md:pl-8">
              {col2.map((item) => (
                <a
                  key={item.number}
                  href={item.href}
                  className="group flex items-center transition-all duration-300 py-0.5"
                >
                  <span className="font-bebas text-2xl sm:text-3xl text-[#C89520] w-9 sm:w-10 shrink-0 group-hover:text-[#E8D0B2] group-hover:scale-105 transition-all">
                    {item.number}
                  </span>
                  <span className="text-xs sm:text-sm font-semibold tracking-[0.18em] text-[#E8D0B2] uppercase group-hover:text-[#C89520] group-hover:translate-x-1 transition-all">
                    {item.title}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Right Column: Abstract Black & Gold Botanical Artwork */}
          <div className="md:col-span-3 lg:col-span-3 flex justify-center md:justify-end items-center">
            <div className="relative w-44 h-44 sm:w-52 sm:h-52 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-xl overflow-hidden border border-[#85631A]/50 shadow-inner group">
              <Image
                src="/images/toc-botanical.jpg"
                alt="Curated botanical 3D luxury artwork"
                fill
                sizes="(max-width: 768px) 200px, 192px"
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#141414]/60 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
