"use client";

import React, { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/core/Button";
import { Badge } from "@/components/core/Badge";
import { TiltCard } from "@/components/animations/TiltCard";
import { motion } from "framer-motion";
import {
  Check,
  Zap,
  Sparkles,
  ShieldCheck,
  HelpCircle,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const PRICING_PLANS = [
  {
    id: "developer",
    name: "Developer Edge",
    badge: "Free Sandbox",
    monthlyPrice: 0,
    annualPrice: 0,
    description: "Ideal for prototyping autonomous agent workflows and indie hacking.",
    features: [
      "100,000 Free Monthly Tokens",
      "Access to 3 Pre-Trained Agent Templates",
      "Community Discord Support",
      "Single-Region Edge Deployment",
      "Sub-25ms Median Query Latency",
    ],
    buttonText: "Launch Sandbox",
    buttonVariant: "obsidian-glass" as const,
    highlight: false,
  },
  {
    id: "pro",
    name: "Scale Cluster",
    badge: "Most Popular",
    monthlyPrice: 79,
    annualPrice: 64,
    description: "Designed for high-growth startups deploying multi-agent swarms in production.",
    features: [
      "25,000,000 Monthly High-Speed Tokens",
      "Unlimited Autonomous Sub-Agents",
      "Multi-GPU Diffusion & 48kHz Voice API",
      "Global Anycast Edge Mesh (300+ PoPs)",
      "Dedicated Slack Channel Support",
      "Automated Vector Memory Compaction",
    ],
    buttonText: "Deploy Scale Cluster",
    buttonVariant: "primary-lime" as const,
    highlight: true,
  },
  {
    id: "enterprise",
    name: "Enterprise Sovereign",
    badge: "SOC-2 / HIPAA",
    monthlyPrice: 299,
    annualPrice: 249,
    description: "Custom dedicated hardware enclaves for sovereign enterprise security.",
    features: [
      "Unlimited Token Concurrency",
      "Post-Quantum Kyber-1024 Encryption",
      "Custom Fine-Tuned Model Weights",
      "99.99% Uptime SLA Guarantee",
      "24/7 Dedicated Staff AI Engineers",
      "Air-Gapped On-Premises Deployment",
    ],
    buttonText: "Contact Sovereign Team",
    buttonVariant: "cyber-cyan" as const,
    highlight: false,
  },
];

const FAQS = [
  {
    q: "How does AETHERIS measure token throughput and concurrency?",
    a: "Tokens are metered per standard tokenizer specifications across our unified inference edge. Unlike traditional providers, our hierarchical cache eliminates billing for repeated prompt context.",
  },
  {
    q: "Can I bring my own fine-tuned model weights or LoRAs?",
    a: "Yes. The Enterprise and Scale tiers allow zero-overhead deployment of custom Hugging Face weights, GGUF checkpoints, and custom LoRA adapters directly into your edge cluster.",
  },
  {
    q: "Are enterprise prompts stored or used for training?",
    a: "Never. All data processed through AETHERIS is protected under strict zero-retention policies and processed within confidential hardware enclaves.",
  },
];

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <main className="min-h-screen bg-void text-[#f5f5f7] relative overflow-hidden">
      <Header />

      {/* Pricing Hero */}
      <section className="relative pt-28 sm:pt-36 md:pt-48 pb-14 sm:pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-accent-lime/10 rounded-full blur-[180px] pointer-events-none -z-10" />

        <div className="space-y-4 sm:space-y-6 max-w-3xl mx-auto">
          <Badge variant="lime">TRANSPARENT VALUE METRICS</Badge>
          <h1 className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl text-white tracking-tight leading-tight">
            Predictable Pricing for <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-lime to-accent-cyan">
              Hyper-Scale Intelligence
            </span>
          </h1>
          <p className="text-neutral-400 text-sm sm:text-lg font-sans">
            Start free, scale seamlessly without hidden fees or surprise concurrency caps.
          </p>

          {/* Billing Switcher Toggle */}
          <div className="flex items-center justify-center gap-4 pt-4">
            <span className={`text-xs font-mono ${!isAnnual ? "text-white" : "text-neutral-500"}`}>
              Monthly Billing
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="w-14 h-8 rounded-full bg-surface-2 p-1 border border-border-hairline relative transition-colors cursor-pointer"
            >
              <motion.div
                className="w-6 h-6 rounded-full bg-accent-lime shadow-glow-lime"
                animate={{ x: isAnnual ? 24 : 0 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            </button>
            <span className={`text-xs font-mono flex items-center gap-1.5 ${isAnnual ? "text-white" : "text-neutral-500"}`}>
              Annual Billing
              <span className="px-2 py-0.5 rounded-full bg-accent-lime/10 text-accent-lime text-[10px] font-bold border border-accent-lime/20">
                SAVE 20%
              </span>
            </span>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto text-left">
          {PRICING_PLANS.map((plan) => (
            <TiltCard
              key={plan.id}
              glowColor={plan.highlight ? "lime" : "white"}
              className={`h-full p-8 flex flex-col justify-between ${
                plan.highlight
                  ? "bg-surface-1 border-accent-lime/40 shadow-glow-lime"
                  : "bg-surface-1/70"
              }`}
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="font-display font-bold text-xl text-white">
                    {plan.name}
                  </span>
                  <span
                    className={`font-mono text-[10px] px-2.5 py-1 rounded-full border ${
                      plan.highlight
                        ? "bg-accent-lime/10 text-accent-lime border-accent-lime/30"
                        : "bg-surface-2 text-neutral-400 border-border-hairline"
                    }`}
                  >
                    {plan.badge}
                  </span>
                </div>

                <div className="flex items-baseline gap-2">
                  <span className="font-display font-extrabold text-4xl sm:text-5xl text-white">
                    ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                  </span>
                  <span className="font-mono text-xs text-neutral-400">/ month</span>
                </div>

                <p className="text-xs text-neutral-400 font-sans leading-relaxed">
                  {plan.description}
                </p>

                <div className="pt-4 border-t border-border-hairline space-y-3">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-neutral-400 block">
                    Included Capabilities:
                  </span>
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-neutral-300">
                      <Check className="w-4 h-4 text-accent-lime shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-8">
                <Link href="/auth/register">
                  <Button variant={plan.buttonVariant} size="md" className="w-full">
                    {plan.buttonText}
                  </Button>
                </Link>
              </div>
            </TiltCard>
          ))}
        </div>

        {/* FAQ Accordion Section */}
        <div className="mt-28 max-w-4xl mx-auto text-left space-y-6">
          <h3 className="font-display font-bold text-2xl sm:text-3xl text-white text-center mb-8">
            Frequently Asked Questions
          </h3>
          <div className="space-y-4">
            {FAQS.map((faq, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-surface-1 border border-border-hairline space-y-2"
              >
                <h4 className="font-display font-semibold text-base text-white flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-accent-lime shrink-0" />
                  {faq.q}
                </h4>
                <p className="text-neutral-400 text-xs sm:text-sm font-sans leading-relaxed pl-6">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
