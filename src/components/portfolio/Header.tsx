"use client";

import React from "react";
import { portfolioConfig } from "@/data/portfolioData";

export default function Header() {
  const { profile } = portfolioConfig;

  return (
    <header className="w-full pt-8 pb-6 px-6 md:px-12 lg:px-16 max-w-7xl mx-auto flex items-center justify-between z-20 relative">
      {/* Top Left: Monogram Logo & Title */}
      <div className="flex items-center gap-4 group cursor-pointer">
        {/* Luxury Gold Monogram Emblem "MU" */}
        <div className="relative w-11 h-11 flex items-center justify-center rounded-lg border border-[#796143]/60 bg-[#151515] group-hover:border-[#C99A5B] transition-all duration-300 shadow-md">
          <svg
            viewBox="0 0 100 100"
            className="w-7 h-7 text-[#C99A5B] fill-none stroke-current"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {/* Elegant stylized interlocking M and U monogram */}
            {/* Stylized M */}
            <path d="M 22 75 L 22 25 L 38 52 L 54 25 L 54 75" />
            {/* Interlocking U */}
            <path
              d="M 44 38 L 44 65 C 44 76, 76 76, 76 65 L 76 38"
              stroke="#E8D0B2"
              strokeWidth="3.2"
            />
            {/* Refined cross bar & flourish accents */}
            <circle cx="22" cy="25" r="2.5" fill="#C99A5B" />
            <circle cx="54" cy="25" r="2.5" fill="#C99A5B" />
            <circle cx="76" cy="38" r="2" fill="#E8D0B2" />
          </svg>
        </div>

        {/* Header Text */}
        <div className="flex flex-col text-left">
          <span className="text-[11px] md:text-xs font-semibold tracking-[0.2em] text-[#E8D0B2] uppercase leading-tight font-sans">
            {profile.headerTitle1}
          </span>
          <span className="text-[10px] md:text-[11px] font-medium tracking-[0.22em] text-[#B9AA98] uppercase leading-tight mt-0.5">
            {profile.headerTitle2}
          </span>
        </div>
      </div>

      {/* Top Right: Gold Line and Year */}
      <div className="flex items-center gap-3">
        <span className="hidden sm:inline-block w-12 md:w-20 h-[1px] bg-[#C99A5B]/70" />
        <span className="text-sm md:text-base font-semibold tracking-[0.25em] text-[#C99A5B] font-mono">
          {profile.year}
        </span>
      </div>
    </header>
  );
}
