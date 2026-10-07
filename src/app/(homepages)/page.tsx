"use client";

import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/core/Button";
import { Badge } from "@/components/core/Badge";
import { MagneticWrapper } from "@/components/animations/MagneticWrapper";
import { TiltCard } from "@/components/animations/TiltCard";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, LayoutDashboard, Megaphone, Terminal, Landmark, Radio, ShieldAlert } from "lucide-react";
import Link from "next/link";

const DEMOS = [
  {
    title: "AI CRM & Sales",
    description: "Next-gen predictive CRM with workflow automation.",
    href: "/home-ai-crm",
    icon: LayoutDashboard,
    color: "cyan"
  },
  {
    title: "AI Marketing Studio",
    description: "Generative copy, images, and social media tools.",
    href: "/home-ai-marketing",
    icon: Megaphone,
    color: "amber"
  },
  {
    title: "Developer Tools",
    description: "API infrastructure, RAG vector search, and code generation.",
    href: "/home-ai-dev-tools",
    icon: Terminal,
    color: "lime"
  },
  {
    title: "FinTech Intelligence",
    description: "Predictive markets, smart wallets, and fraud detection.",
    href: "/home-ai-finance",
    icon: Landmark,
    color: "emerald"
  },
  {
    title: "Autonomous Voice AI",
    description: "Ultra-low latency speech agents with full-duplex telephony.",
    href: "/home-ai-voice-agent",
    icon: Radio,
    color: "violet"
  },
  {
    title: "Cyber Security & Guardrails",
    description: "Zero-trust prompt injection firewall and PII sanitization.",
    href: "/home-ai-security",
    icon: ShieldAlert,
    color: "crimson"
  }
];

export default function HomeIndex() {
  return (
    <main className="min-h-screen bg-void text-[#f5f5f7] relative overflow-hidden">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 sm:pt-36 md:pt-48 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col items-center text-center">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[750px] h-[500px] bg-accent-cyan/10 rounded-full blur-[180px] pointer-events-none -z-10" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Badge variant="cyan" className="mb-4 sm:mb-6">
            <Sparkles className="w-4 h-4 mr-2" /> MULTIPURPOSE AI SAAS TEMPLATE
          </Badge>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display font-extrabold text-4xl sm:text-7xl lg:text-8xl tracking-tight text-white leading-[1.08] mb-4 sm:mb-6"
        >
          Build your SaaS <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan via-white to-accent-lime">
            10x Faster.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-neutral-400 text-base sm:text-xl max-w-2xl mx-auto font-sans leading-relaxed mb-8 sm:mb-10"
        >
          Aetheris is the ultimate premium Next.js template for modern AI startups. Packed with GSAP animations, Framer Motion, and beautiful pre-built components.
        </motion.p>
        
        <motion.div 
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.7, delay: 0.3 }}
           className="w-full sm:w-auto"
        >
          <MagneticWrapper className="w-full sm:w-auto">
            <Button variant="primary" size="lg" className="w-full sm:w-auto justify-center bg-white text-black hover:bg-white/90">
              Purchase Template
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </MagneticWrapper>
        </motion.div>
      </section>

      {/* Demos Grid Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-3 sm:mb-4">Choose a Demo</h2>
          <p className="text-white/50 text-sm sm:text-base">Start with a professionally designed layout tailored to your niche.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {DEMOS.map((demo, idx) => (
            <motion.div
              key={demo.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <Link href={demo.href} className="block group">
                <TiltCard className="p-5 sm:p-8 bg-surface-1 border border-white/5 rounded-2xl sm:rounded-3xl hover:bg-surface-2 transition-colors flex flex-col h-full">
                   <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 bg-accent-${demo.color}/10 border border-accent-${demo.color}/20`}>
                     <demo.icon className={`w-6 h-6 sm:w-7 sm:h-7 text-accent-${demo.color}`} />
                   </div>
                   <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 group-hover:text-white transition-colors">{demo.title}</h3>
                   <p className="text-white/60 mb-6 sm:mb-8 flex-1 text-sm sm:text-base">{demo.description}</p>
                   
                   <div className="flex items-center text-xs sm:text-sm font-medium text-white/40 group-hover:text-white transition-colors">
                     View Demo <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                   </div>
                </TiltCard>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
