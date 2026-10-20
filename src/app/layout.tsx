import type { Metadata } from "next";
import { Bebas_Neue, Inter, Alex_Brush } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const alexBrush = Alex_Brush({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-signature",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Muhammad Usman — Creative Web Designer & Frontend Developer",
  description:
    "Luxury editorial portfolio of Muhammad Usman, Creative Web Designer & Frontend Developer based in Pakistan. Specializing in modern, high-converting digital experiences, UI/UX design, and clean performant code.",
  keywords: [
    "Muhammad Usman",
    "Web Designer",
    "Frontend Developer",
    "UI/UX Designer",
    "Luxury Portfolio",
    "Next.js Developer",
    "Pakistan",
  ],
  authors: [{ name: "Muhammad Usman" }],
  openGraph: {
    title: "Muhammad Usman — Creative Web Designer & Frontend Developer",
    description:
      "I design and build modern, high-converting websites that blend creativity with strategy to help brands stand out and grow.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${bebasNeue.variable} ${inter.variable} ${alexBrush.variable} dark scroll-smooth`}
    >
      <body
        suppressHydrationWarning
        className="min-h-screen bg-[#101010] text-[#E8D0B2] antialiased selection:bg-[#C99A5B] selection:text-[#101010]"
      >
        {children}
      </body>
    </html>
  );
}
