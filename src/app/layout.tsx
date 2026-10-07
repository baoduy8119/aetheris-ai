import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Syne, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/animations/SmoothScrollProvider";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-clash-display",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AETHERIS — Next-Gen Spatial AI & Tech Startup Ecosystem",
  description:
    "An ultra-premium, heavily animated Next.js template tailored for AI SaaS, Autonomous Agents, Developer APIs, and High-Tech Startups.",
  keywords: [
    "AI SaaS",
    "Spatial UI",
    "Next.js 14 Template",
    "GSAP Animations",
    "Framer Motion",
    "Tech Brutalism",
    "AI Startup",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${syne.variable} ${jetbrainsMono.variable} dark`}
    >
      <body className="bg-void text-[#f5f5f7] antialiased selection:bg-accent-lime selection:text-void relative min-h-screen overflow-x-hidden">
        <div className="noise-overlay" aria-hidden="true" />
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
