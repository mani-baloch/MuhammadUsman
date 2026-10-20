"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { portfolioConfig, Project } from "@/data/portfolioData";
import ProjectModal from "./ProjectModal";

export default function SelectedProjects() {
  const { projects } = portfolioConfig;
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <section id="work" className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16 py-12 z-20 relative">
      {/* Section Header */}
      <div className="flex items-center justify-between gap-4 mb-8">
        <h2 className="font-bebas text-2xl sm:text-3xl lg:text-[34px] tracking-widest text-[#E8D0B2] uppercase whitespace-nowrap">
          SELECTED PROJECTS
        </h2>

        {/* Thin Gold Line spanning the gap */}
        <div className="hidden sm:block flex-1 h-[1px] bg-[#796143]/50 mx-4" />

        {/* View All link */}
        <a
          href="#work"
          className="group flex items-center gap-1.5 text-xs sm:text-sm font-semibold tracking-wider text-[#C99A5B] hover:text-[#E8D0B2] uppercase transition-colors shrink-0"
        >
          <span>VIEW ALL PROJECTS</span>
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </a>
      </div>

      {/* 4-Column Desktop Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-5 lg:gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            onClick={() => setActiveProject(project)}
            className="group cursor-pointer flex flex-col"
          >
            {/* Project Thumbnail with fine border and subtle hover scale */}
            <div className="relative w-full aspect-[16/10] sm:aspect-[4/3] lg:aspect-[16/10] rounded-xl overflow-hidden border border-[#796143]/45 bg-[#171717] transition-all duration-500 group-hover:border-[#C99A5B] group-hover:shadow-[0_10px_30px_rgba(201,154,91,0.15)]">
              <Image
                src={project.image}
                alt={`${project.title} — ${project.category}`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Subtle hover overlay with indicator icon */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="w-10 h-10 rounded-full bg-[#101010]/90 border border-[#C99A5B] flex items-center justify-center transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  <ArrowUpRight className="w-4 h-4 text-[#C99A5B]" />
                </div>
              </div>
            </div>

            {/* Project Details Outside the Thumbnail (matching reference layout!) */}
            <div className="mt-3.5 space-y-1">
              {/* Number and Title */}
              <div className="flex items-baseline gap-2">
                <span className="font-bebas text-lg sm:text-xl text-[#C99A5B] font-normal shrink-0">
                  {project.number}
                </span>
                <h3 className="font-bebas text-base sm:text-lg lg:text-[19px] tracking-wider text-[#E8D0B2] group-hover:text-[#C99A5B] transition-colors truncate">
                  {project.title}
                </h3>
              </div>

              {/* Category & Discipline (2 lines) */}
              <div className="pl-6 space-y-0.5">
                <p className="text-[11px] sm:text-xs text-[#B9AA98] leading-tight font-sans">
                  {project.category}
                </p>
                <p className="text-[10px] sm:text-[11px] font-medium tracking-wide text-[#796143] uppercase leading-tight">
                  {project.discipline}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Detail Modal */}
      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </section>
  );
}
