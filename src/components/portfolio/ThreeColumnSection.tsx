"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Layout,
  Palette,
  Sparkles,
  Code2,
  Layers,
  ShieldCheck,
} from "lucide-react";
import { portfolioConfig } from "@/data/portfolioData";

export default function ThreeColumnSection() {
  const { services, tools, testimonials } = portfolioConfig;

  // Map service icon names to Lucide icons
  const getServiceIcon = (name: string) => {
    switch (name) {
      case "Layout":
        return <Layout className="w-4 h-4 text-[#C89520]" />;
      case "PenTool":
        return <Palette className="w-4 h-4 text-[#C89520]" />;
      case "Sparkles":
        return <Sparkles className="w-4 h-4 text-[#C89520]" />;
      case "Code":
        return <Code2 className="w-4 h-4 text-[#C89520]" />;
      case "Layers":
        return <Layers className="w-4 h-4 text-[#C89520]" />;
      case "ShieldCheck":
        return <ShieldCheck className="w-4 h-4 text-[#C89520]" />;
      default:
        return <Sparkles className="w-4 h-4 text-[#C89520]" />;
    }
  };

  // Render authentic tool icon SVGs
  const renderToolIcon = (tool: (typeof tools)[0]) => {
    switch (tool.id) {
      case "figma":
        return (
          <svg
            className="w-5 h-5 text-[#C89520] fill-current"
            viewBox="0 0 38 57"
          >
            <path d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z" />
            <path d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0z" />
            <path d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19z" />
            <path d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z" />
            <path d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z" />
          </svg>
        );
      case "webflow":
        return (
          <svg
            className="w-5 h-5 text-[#C89520] fill-current"
            viewBox="0 0 100 100"
          >
            <path d="M92 34.6c-.6 0-1.1.2-1.5.7l-15.6 19.3-8.8-19.3c-.4-.9-1.2-1.4-2.2-1.4h-5.2c-.6 0-1.1.3-1.4.8l-12.7 20-8.8-20c-.4-.9-1.2-1.4-2.2-1.4H8c-.8 0-1.4.7-1.4 1.5 0 .2 0 .4.1.6l17.7 34.5c.4.9 1.2 1.4 2.2 1.4h7.5c.7 0 1.3-.4 1.6-1l10.8-17.7 6.9 17.6c.4.9 1.2 1.4 2.2 1.4h7.7c.7 0 1.3-.4 1.6-1l28.6-35.4c.5-.7 0-1.5-.7-1.5z" />
          </svg>
        );
      case "wordpress":
        return (
          <svg
            className="w-5 h-5 text-[#C89520] fill-current"
            viewBox="0 0 122.5 122.5"
          >
            <path d="M61.3 0C27.4 0 0 27.4 0 61.3c0 33.8 27.4 61.3 61.3 61.3 33.8 0 61.3-27.4 61.3-61.3C122.5 27.4 95.1 0 61.3 0zm0 116.7c-30.6 0-55.5-24.8-55.5-55.5 0-12.6 4.2-24.3 11.4-33.6l32.2 88.3c-8.8 4.6-18.7 7.2-29.2 7.2l1.1-6.4zm44.1-21.9l-19.3-56c4.6-.2 8.7-.6 8.7-.6 2.6-.2 2.3-4-.3-4 0 0-7.8.6-12.9.6-4.8 0-12.8-.6-12.8-.6-2.6 0-2.8 3.8-.3 4 0 0 3.8.5 8.1.6l12.1 33.1-17.2 51.5c-11.2-6.5-19.5-16.7-23.3-28.9L58.5 39.5c4.6-.2 8.7-.6 8.7-.6 2.6-.2 2.3-4-.3-4 0 0-7.8.6-12.8.6-4.8 0-12.9-.6-12.9-.6-2.6 0-2.8 3.8-.3 4 0 0 3.8.5 8.1.6l20.4 56.1c-14.7 9.8-32.2 15.6-51.1 15.6 0 0 24.3 3.8 46.5-6.6l17.7-51.2 16.9 46.5c-4 2.8-8.4 5.1-13.2 6.7 18.2-3.8 33.5-14.7 42.4-29.8z" />
          </svg>
        );
      case "photoshop":
        return (
          <span className="font-bebas text-lg font-bold text-[#C89520] tracking-normal">
            Ps
          </span>
        );
      case "illustrator":
        return (
          <span className="font-bebas text-lg font-bold text-[#C89520] tracking-normal">
            Ai
          </span>
        );
      case "gsap":
        return (
          <span className="font-bebas text-base font-bold text-[#C89520] tracking-widest">
            GSAP
          </span>
        );
      default:
        return <Sparkles className="w-4 h-4 text-[#C89520]" />;
    }
  };

  return (
    <section
      id="services"
      className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16 py-12 z-20 relative"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-0 items-start">
        {/* Column A: SERVICES */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7 }}
          className="flex flex-col space-y-6 md:pr-6 lg:pr-8"
        >
          {/* Header */}
          <div className="flex items-center gap-2 pb-2">
            <h3 className="font-bebas text-2xl sm:text-3xl tracking-widest text-[#E8D0B2] uppercase">
              SERVICES
            </h3>
            <span className="text-[#C89520] text-sm">✦</span>
          </div>

          {/* Service items */}
          <div className="flex flex-col space-y-5">
            {services.map((service) => (
              <div
                key={service.id}
                className="group flex items-start gap-3.5 transition-all duration-300"
              >
                {/* Icon box */}
                <div className="w-8 h-8 rounded-lg border border-[#85631A]/50 bg-[#161616] flex items-center justify-center shrink-0 group-hover:border-[#C89520] group-hover:bg-[#C89520]/10 transition-all duration-300">
                  {getServiceIcon(service.iconName)}
                </div>

                {/* Content */}
                <div className="flex flex-col space-y-0.5">
                  <h4 className="font-bebas text-base sm:text-lg tracking-wider text-[#E8D0B2] group-hover:text-[#C89520] transition-colors uppercase">
                    {service.title}
                  </h4>
                  <p className="text-xs text-[#B9AA98] leading-relaxed font-sans">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Column B: TOOLS I USE */}
        <motion.div
          id="skills"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="flex flex-col space-y-6 md:border-l md:border-[#85631A]/40 md:px-6 lg:px-8"
        >
          {/* Header */}
          <div className="flex items-center gap-2 pb-2">
            <h3 className="font-bebas text-2xl sm:text-3xl tracking-widest text-[#E8D0B2] uppercase">
              TOOLS I USE
            </h3>
          </div>

          {/* 3x2 Grid of Circular Dark Gold-Bordered Badges */}
          <div className="grid grid-cols-3 gap-y-7 gap-x-4 pt-2">
            {tools.map((tool) => (
              <div
                key={tool.id}
                className="group flex flex-col items-center text-center cursor-default"
              >
                {/* Circular container */}
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border border-[#85631A]/60 bg-[#151515] flex items-center justify-center group-hover:border-[#C89520] group-hover:scale-105 group-hover:shadow-[0_0_20px_rgba(200,149,32,0.25)] transition-all duration-300">
                  {renderToolIcon(tool)}
                </div>

                {/* Tool label underneath */}
                <span className="text-[11px] sm:text-xs font-medium tracking-wider text-[#B9AA98] group-hover:text-[#E8D0B2] uppercase mt-2.5 transition-colors">
                  {tool.name}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Column C: TESTIMONIALS */}
        <motion.div
          id="testimonials"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col space-y-6 md:border-l md:border-[#85631A]/40 md:pl-6 lg:pl-8"
        >
          {/* Header */}
          <div className="flex items-center gap-2 pb-2">
            <h3 className="font-bebas text-2xl sm:text-3xl tracking-widest text-[#E8D0B2] uppercase">
              TESTIMONIALS
            </h3>
            <span className="text-[#C89520] text-sm">✦</span>
          </div>

          {/* Testimonial entries */}
          <div className="flex flex-col space-y-6">
            {testimonials.map((item) => (
              <div
                key={item.id}
                className="flex items-start gap-4 p-4 rounded-xl border border-[#85631A]/30 bg-[#151515]/60 hover:border-[#85631A]/70 transition-all duration-300 group"
              >
                {/* Circular client portrait avatar */}
                <div className="relative w-12 h-12 rounded-full overflow-hidden border border-[#85631A]/70 shrink-0 mt-0.5 group-hover:border-[#C89520] transition-colors">
                  <Image
                    src={item.avatar}
                    alt={item.name}
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                </div>

                {/* Testimonial Quote & Author */}
                <div className="flex flex-col space-y-2">
                  <p className="text-xs sm:text-[13px] text-[#B9AA98] leading-relaxed italic font-sans">
                    &ldquo;{item.quote}&rdquo;
                  </p>

                  <div className="pt-0.5">
                    <span className="text-xs font-semibold text-[#E8D0B2] block tracking-wide">
                      — {item.name}
                    </span>
                    <span className="text-[11px] font-medium text-[#85631A] block">
                      {item.role}, {item.company}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
