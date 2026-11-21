"use client";

import React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Calendar, User, Tag } from "lucide-react";
import { Project } from "@/data/portfolioData";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-3xl border border-[#85631A] rounded-2xl bg-[#141414] shadow-2xl overflow-hidden z-10 my-8"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full border border-[#85631A]/50 bg-[#151515]/80 hover:bg-[#C89520] hover:text-[#101010] text-[#E8D0B2] flex items-center justify-center transition-all duration-300"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Project Featured Image */}
          <div className="relative w-full h-64 sm:h-80 md:h-96 bg-[#1a1a1a]">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-[#141414]/30 to-transparent" />
            <div className="absolute bottom-4 left-6 sm:left-8">
              <span className="font-bebas text-3xl sm:text-4xl text-[#C89520] mr-2">
                {project.number}
              </span>
              <h3 className="inline font-bebas text-2xl sm:text-3xl md:text-4xl tracking-wider text-[#E8D0B2]">
                {project.title}
              </h3>
            </div>
          </div>

          {/* Modal Content */}
          <div className="p-6 sm:p-8 space-y-6">
            {/* Meta tags */}
            <div className="flex flex-wrap items-center gap-4 text-xs text-[#B9AA98] border-b border-[#85631A]/30 pb-4">
              <div className="flex items-center gap-1.5">
                <Tag className="w-3.5 h-3.5 text-[#C89520]" />
                <span>{project.category}</span>
              </div>
              <span className="text-[#85631A]">•</span>
              <div className="flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-[#C89520]" />
                <span>{project.client}</span>
              </div>
              <span className="text-[#85631A]">•</span>
              <div className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#C89520]" />
                <span>{project.year}</span>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-2">
              <h4 className="text-xs uppercase tracking-widest text-[#C89520] font-semibold">
                Overview & Architecture
              </h4>
              <p className="text-sm sm:text-base text-[#B9AA98] leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Tech Stack */}
            <div className="space-y-2">
              <h4 className="text-xs uppercase tracking-widest text-[#C89520] font-semibold">
                Technologies Used
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-xs font-mono text-[#E8D0B2] border border-[#85631A]/40 bg-[#181818]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="pt-4 flex items-center justify-between border-t border-[#85631A]/30">
              <span className="text-xs text-[#85631A]">
                Discipline: {project.discipline}
              </span>
              <a
                href={project.liveUrl || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-[#C89520] bg-[#C89520]/10 hover:bg-[#C89520] text-[#E8D0B2] hover:text-[#101010] text-xs font-semibold tracking-wider uppercase transition-all duration-300"
              >
                <span>Live Preview</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
