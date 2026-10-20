export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  discipline: string;
  image: string;
  description: string;
  tags: string[];
  year: string;
  client: string;
  link?: string;
  liveUrl?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface ToolItem {
  id: string;
  name: string;
  shortCode?: string;
  type: "svg" | "text" | "custom";
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export const portfolioConfig = {
  profile: {
    name: "Muhammad Usman",
    role: "Web Designer & Frontend Developer",
    headerTitle1: "WEB DESIGNER",
    headerTitle2: "& DIGITAL CREATOR",
    heroHeading: "PORTFOLIO",
    heroLeftSubtitle: "CREATIVE",
    heroLeftTitle: "WEB DESIGNER",
    heroDescription:
      "I design and build modern, high-converting websites that blend creativity with strategy to help brands stand out and grow.",
    heroRightTagline1: "DESIGN THAT",
    heroRightTagline2: "INSPIRES. CODE",
    heroRightTagline3: "THAT PERFORMS.",
    location: "Pakistan",
    locationDisplay: "BASED IN PAKISTAN\nAVAILABLE WORLDWIDE",
    year: "2026",
    availability: "Available for freelance projects worldwide",
    aboutBio:
      "I'm Muhammad Usman, a web designer and frontend developer focused on creating modern, responsive, and visually engaging digital experiences. I combine thoughtful design with clean code to help businesses establish a strong online presence.",
    stats: [
      { label: "Years Experience", value: "5+" },
      { label: "Projects Completed", value: "40+" },
      { label: "Client Satisfaction", value: "100%" },
      { label: "Global Clients", value: "12+" },
    ],
  },
  contact: {
    email: "hello@muhammadusman.dev",
    whatsapp: "+92 300 1234567",
    website: "www.muhammadusman.dev",
    location: "Pakistan",
    heading1: "LET'S CREATE",
    heading2: "SOMETHING AMAZING",
    connectTitle: "LET'S CONNECT",
  },
  toc: [
    { number: "01", title: "ABOUT ME", href: "#about" },
    { number: "02", title: "SERVICES", href: "#services" },
    { number: "03", title: "SKILLS", href: "#skills" },
    { number: "04", title: "SELECTED WORK", href: "#work" },
    { number: "05", title: "TESTIMONIALS", href: "#testimonials" },
    { number: "06", title: "CONTACT", href: "#contact" },
  ],
  projects: [
    {
      id: "luxora-watches",
      number: "01",
      title: "LUXORA WATCHES",
      category: "E-commerce Website",
      discipline: "UI/UX Design",
      image: "/images/project-luxora.jpg",
      description:
        "A luxury timepiece e-commerce platform crafted with high-precision typography, interactive 3D product previews, fluid micro-interactions, and a frictionless checkout flow.",
      tags: ["Next.js", "Tailwind CSS", "Shopify API", "Framer Motion"],
      year: "2026",
      client: "Luxora Geneva",
      liveUrl: "https://example.com/luxora",
    },
    {
      id: "interior-studio",
      number: "02",
      title: "INTERIOR STUDIO",
      category: "Corporate Website",
      discipline: "Web Design",
      image: "/images/project-interior.jpg",
      description:
        "A minimalist, warm neutral architectural portfolio for an interior design studio, highlighting curated living spaces, texture-rich photography, and custom spatial concepts.",
      tags: ["Next.js", "TypeScript", "GSAP", "Tailwind CSS"],
      year: "2025",
      client: "Kai Studio",
      liveUrl: "https://example.com/interior",
    },
    {
      id: "fitzone-gym",
      number: "03",
      title: "FITZONE GYM",
      category: "Landing Page",
      discipline: "UI/UX Design",
      image: "/images/project-fitzone.jpg",
      description:
        "High-octane fitness brand landing page featuring high-contrast dark aesthetic visuals, dynamic video reels, tiered membership conversion funnel, and interactive class booking.",
      tags: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
      year: "2025",
      client: "FitzZone Athletic Club",
      liveUrl: "https://example.com/fitzone",
    },
    {
      id: "cafe-aurora",
      number: "04",
      title: "CAFÉ AURORA",
      category: "Restaurant Website",
      discipline: "Web Design",
      image: "/images/project-cafe.jpg",
      description:
        "Editorial culinary website for a Michelin-starred restaurant, featuring immersive seasonal tasting menu galleries, wine cellar pairings, and seamless table reservation integration.",
      tags: ["Next.js", "Tailwind CSS", "OpenTable API", "TypeScript"],
      year: "2024",
      client: "Café Aurora Paris",
      liveUrl: "https://example.com/cafe-aurora",
    },
  ] as Project[],
  services: [
    {
      id: "web-design",
      title: "WEB DESIGN",
      description: "Modern and responsive website design",
      iconName: "Layout",
    },
    {
      id: "ui-ux",
      title: "UI/UX DESIGN",
      description: "User-centered design for better experiences",
      iconName: "PenTool",
    },
    {
      id: "branding",
      title: "BRANDING",
      description: "Visual identity that builds recognition",
      iconName: "Sparkles",
    },
    {
      id: "web-dev",
      title: "WEBSITE DEVELOPMENT",
      description: "Clean, optimized, performance-driven websites",
      iconName: "Code",
    },
    {
      id: "cms-dev",
      title: "CMS DEVELOPMENT",
      description: "WordPress and custom CMS solutions",
      iconName: "Layers",
    },
    {
      id: "maintenance",
      title: "MAINTENANCE",
      description: "Ongoing support and website care",
      iconName: "ShieldCheck",
    },
  ] as Service[],
  tools: [
    { id: "figma", name: "Figma", type: "custom" },
    { id: "webflow", name: "Webflow", type: "custom" },
    { id: "wordpress", name: "WordPress", type: "custom" },
    { id: "photoshop", name: "Photoshop", shortCode: "Ps", type: "text" },
    { id: "illustrator", name: "Illustrator", shortCode: "Ai", type: "text" },
    { id: "gsap", name: "GSAP", type: "custom" },
  ] as ToolItem[],
  testimonials: [
    {
      id: "riya",
      quote:
        "Muhammad understood our vision perfectly and delivered a website that elevated our brand.",
      name: "Riya Shah",
      role: "Founder",
      company: "Auréa Studio",
      avatar: "/images/testimonial-riya.jpg",
    },
    {
      id: "karan",
      quote:
        "Professional, creative, and incredibly reliable. The whole process was seamless.",
      name: "Karan Malhotra",
      role: "Marketing Director",
      company: "FitzZone",
      avatar: "/images/testimonial-karan.jpg",
    },
  ] as Testimonial[],
  socials: [
    { name: "LinkedIn", url: "https://linkedin.com", icon: "Linkedin" },
    { name: "Behance", url: "https://behance.net", icon: "Behance" },
    { name: "Instagram", url: "https://instagram.com", icon: "Instagram" },
    { name: "Dribbble", url: "https://dribbble.com", icon: "Dribbble" },
  ] as SocialLink[],
};
