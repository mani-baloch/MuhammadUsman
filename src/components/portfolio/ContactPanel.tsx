"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Phone,
  Globe,
  MapPin,
  Send,
  CheckCircle,
  Copy,
  Check,
} from "lucide-react";
import { portfolioConfig } from "@/data/portfolioData";

export default function ContactPanel() {
  const { contact, socials } = portfolioConfig;
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setIsFormOpen(false);
      setFormData({ name: "", email: "", message: "" });
    }, 2500);
  };

  const getSocialIcon = (iconName: string) => {
    switch (iconName) {
      case "Linkedin":
        return (
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
          </svg>
        );
      case "Instagram":
        return (
          <svg className="w-4 h-4 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
          </svg>
        );
      case "Dribbble":
        return (
          <svg className="w-4 h-4 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
            <path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94" />
            <path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32" />
            <path d="M8.56 2.75c4.37 6 6 9.42 8 17.72" />
          </svg>
        );
      case "Behance":
        return (
          <span className="font-bebas text-sm font-bold tracking-normal">
            Bē
          </span>
        );
      default:
        return <Globe className="w-4 h-4" />;
    }
  };

  return (
    <section
      id="contact"
      className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16 py-12 z-20 relative"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.8 }}
        className="w-full border border-[#796143]/60 rounded-2xl bg-[#141414]/95 shadow-[0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-md relative overflow-hidden p-6 sm:p-10 md:p-12"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center relative z-10">
          {/* Left Side: Headline and Flowing Gold Wave Art */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div>
              <h2 className="font-bebas text-3xl sm:text-4xl lg:text-[44px] tracking-wide text-[#E8D0B2] uppercase leading-[0.95]">
                {contact.heading1}
                <br />
                {contact.heading2}
              </h2>
            </div>

            {/* Flowing liquid gold ribbon artwork */}
            <div className="relative w-full h-24 sm:h-28 rounded-xl overflow-hidden border border-[#796143]/30 bg-[#0d0d0d]">
              <Image
                src="/images/contact-wave.jpg"
                alt="Luxury gold wave abstract artwork"
                fill
                sizes="(max-width: 768px) 100vw, 400px"
                className="object-cover opacity-80 hover:opacity-100 transition-opacity duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#141414]/70 to-transparent" />
            </div>

            {/* Quick Inquiry CTA */}
            <div>
              <button
                onClick={() => setIsFormOpen(true)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-[#C99A5B] bg-[#C99A5B]/10 hover:bg-[#C99A5B] text-[#E8D0B2] hover:text-[#101010] text-xs font-semibold tracking-widest uppercase transition-all duration-300"
              >
                <Send className="w-3.5 h-3.5" />
                <span>DROP A QUICK MESSAGE</span>
              </button>
            </div>
          </div>

          {/* Middle Section: Contact Details with Icons */}
          <div className="lg:col-span-4 flex flex-col space-y-4 lg:border-l lg:border-[#796143]/40 lg:pl-8">
            {/* Email */}
            <div
              onClick={() => copyToClipboard(contact.email, "email")}
              className="group flex items-center justify-between p-2.5 rounded-lg hover:bg-[#181818] cursor-pointer transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full border border-[#796143]/50 bg-[#171717] flex items-center justify-center shrink-0 group-hover:border-[#C99A5B] transition-colors">
                  <Mail className="w-3.5 h-3.5 text-[#C99A5B]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-widest text-[#796143] font-medium">
                    Email
                  </span>
                  <span className="text-xs sm:text-[13px] text-[#E8D0B2] group-hover:text-[#C99A5B] transition-colors font-mono">
                    {contact.email}
                  </span>
                </div>
              </div>
              <div className="text-[#B9AA98] group-hover:text-[#C99A5B] transition-colors text-xs">
                {copiedKey === "email" ? (
                  <Check className="w-4 h-4 text-emerald-400" />
                ) : (
                  <Copy className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100" />
                )}
              </div>
            </div>

            {/* WhatsApp */}
            <div
              onClick={() => copyToClipboard(contact.whatsapp, "phone")}
              className="group flex items-center justify-between p-2.5 rounded-lg hover:bg-[#181818] cursor-pointer transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full border border-[#796143]/50 bg-[#171717] flex items-center justify-center shrink-0 group-hover:border-[#C99A5B] transition-colors">
                  <Phone className="w-3.5 h-3.5 text-[#C99A5B]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-widest text-[#796143] font-medium">
                    WhatsApp
                  </span>
                  <span className="text-xs sm:text-[13px] text-[#E8D0B2] group-hover:text-[#C99A5B] transition-colors font-mono">
                    {contact.whatsapp}
                  </span>
                </div>
              </div>
              <div className="text-[#B9AA98] group-hover:text-[#C99A5B] transition-colors text-xs">
                {copiedKey === "phone" ? (
                  <Check className="w-4 h-4 text-emerald-400" />
                ) : (
                  <Copy className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100" />
                )}
              </div>
            </div>

            {/* Website */}
            <div
              onClick={() => copyToClipboard(contact.website, "website")}
              className="group flex items-center justify-between p-2.5 rounded-lg hover:bg-[#181818] cursor-pointer transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full border border-[#796143]/50 bg-[#171717] flex items-center justify-center shrink-0 group-hover:border-[#C99A5B] transition-colors">
                  <Globe className="w-3.5 h-3.5 text-[#C99A5B]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-widest text-[#796143] font-medium">
                    Website
                  </span>
                  <span className="text-xs sm:text-[13px] text-[#E8D0B2] group-hover:text-[#C99A5B] transition-colors font-mono">
                    {contact.website}
                  </span>
                </div>
              </div>
              <div className="text-[#B9AA98] group-hover:text-[#C99A5B] transition-colors text-xs">
                {copiedKey === "website" ? (
                  <Check className="w-4 h-4 text-emerald-400" />
                ) : (
                  <Copy className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100" />
                )}
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-3 p-2.5">
              <div className="w-8 h-8 rounded-full border border-[#796143]/50 bg-[#171717] flex items-center justify-center shrink-0">
                <MapPin className="w-3.5 h-3.5 text-[#C99A5B]" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-widest text-[#796143] font-medium">
                  Location
                </span>
                <span className="text-xs sm:text-[13px] text-[#E8D0B2] font-mono">
                  {contact.location}
                </span>
              </div>
            </div>
          </div>

          {/* Right Side: LET'S CONNECT & Socials */}
          <div className="lg:col-span-3 flex flex-col justify-center items-start lg:items-end space-y-4 lg:border-l lg:border-[#796143]/40 lg:pl-8">
            <h3 className="font-bebas text-xl sm:text-2xl tracking-widest text-[#E8D0B2] uppercase">
              {contact.connectTitle}
            </h3>

            {/* Social Icons Grid */}
            <div className="flex items-center gap-3">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-[#796143]/60 bg-[#151515] hover:border-[#C99A5B] hover:text-[#C99A5B] hover:scale-110 text-[#E8D0B2] flex items-center justify-center transition-all duration-300 shadow-sm"
                  aria-label={social.name}
                >
                  {getSocialIcon(social.icon)}
                </a>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Message Modal */}
      <AnimatePresence>
        {isFormOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsFormOpen(false)}
              className="fixed inset-0 bg-black/85 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-lg border border-[#796143] rounded-2xl bg-[#141414] p-6 sm:p-8 shadow-2xl z-10"
            >
              <div className="flex items-center justify-between border-b border-[#796143]/40 pb-4 mb-6">
                <div>
                  <h3 className="font-bebas text-2xl text-[#E8D0B2] tracking-wider">
                    SEND A MESSAGE
                  </h3>
                  <p className="text-xs text-[#B9AA98]">
                    Reach Muhammad Usman for custom web design & development
                  </p>
                </div>
                <button
                  onClick={() => setIsFormOpen(false)}
                  className="text-[#B9AA98] hover:text-[#C99A5B] transition-colors"
                >
                  ✕
                </button>
              </div>

              {isSubmitted ? (
                <div className="py-8 flex flex-col items-center text-center space-y-3">
                  <CheckCircle className="w-12 h-12 text-[#C99A5B]" />
                  <h4 className="font-bebas text-2xl text-[#E8D0B2]">
                    MESSAGE RECEIVED
                  </h4>
                  <p className="text-xs text-[#B9AA98]">
                    Thank you! Muhammad Usman will respond to you promptly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-[11px] uppercase tracking-widest text-[#B9AA98] mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="e.g. Alexander Vance"
                      className="w-full px-4 py-2.5 rounded-lg border border-[#796143]/50 bg-[#1a1a1a] text-sm text-[#E8D0B2] placeholder-[#796143] focus:outline-none focus:border-[#C99A5B]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-widest text-[#B9AA98] mb-1.5">
                      Your Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="you@company.com"
                      className="w-full px-4 py-2.5 rounded-lg border border-[#796143]/50 bg-[#1a1a1a] text-sm text-[#E8D0B2] placeholder-[#796143] focus:outline-none focus:border-[#C99A5B]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-widest text-[#B9AA98] mb-1.5">
                      Project Details
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Tell me about your brand, project timeline, and design requirements..."
                      className="w-full px-4 py-2.5 rounded-lg border border-[#796143]/50 bg-[#1a1a1a] text-sm text-[#E8D0B2] placeholder-[#796143] focus:outline-none focus:border-[#C99A5B] resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-lg border border-[#C99A5B] bg-[#C99A5B] hover:bg-[#E8D0B2] text-[#101010] text-xs font-bold tracking-widest uppercase transition-all duration-300"
                  >
                    SEND INQUIRY
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
