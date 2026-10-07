"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Megaphone,
  Sparkles,
  Twitter,
  Linkedin,
  Mail,
  Search,
  Copy,
  Check,
  Zap,
  Sliders,
  BarChart2,
  RefreshCw,
  TrendingUp,
} from "lucide-react";
import { cn } from "@/lib/utils";

type ChannelType = "linkedin" | "twitter" | "google" | "email";
type ToneType = "visionary" | "direct" | "storyteller" | "urgency";

interface ChannelContent {
  headline: string;
  body: string;
  cta: string;
  predictedCtr: string;
  viralityScore: number;
  tags: string[];
}

const CAMPAIGN_DATA: Record<ToneType, Record<ChannelType, ChannelContent>> = {
  visionary: {
    linkedin: {
      headline: "The Autonomous Enterprise is no longer a forecast—it's today's benchmark.",
      body: "We spent the last 18 months re-engineering foundation model orchestration. The result? 14x faster operational cycles, sub-100ms multi-agent decisions, and zero hallucinations across mission-critical workflows.\n\nLegacy SaaS built dashboards. Aetheris builds autonomous intelligence.",
      cta: "Explore the technical whitepaper & benchmark audit →",
      predictedCtr: "4.8%",
      viralityScore: 94,
      tags: ["#ArtificialIntelligence", "#AutonomousEnterprise", "#DeepTech", "#FutureOfWork"],
    },
    twitter: {
      headline: "Autonomous agents just changed SaaS forever. 🧵👇",
      body: "1/ Traditional SaaS gives you buttons to click.\n2/ Aetheris gives you autonomous neural systems that negotiate, score, code, and execute in real-time.\n3/ Here is the benchmark data that proves 14x speedups across 50,000 live nodes:",
      cta: "Read the thread breakdown & open-source SDK benchmarks (link below)",
      predictedCtr: "6.2%",
      viralityScore: 98,
      tags: ["#AI", "#BuildInPublic", "#SaaS", "#TechTrends"],
    },
    google: {
      headline: "Next-Gen Autonomous AI Platform | Sub-100ms Multi-Agent Engine",
      body: "Deploy autonomous workflows with zero fine-tuning overhead. 99.99% reliability SLA with confidential computing enclaves. Start sandbox testing today.",
      cta: "Claim 100k Free Token Sandbox →",
      predictedCtr: "8.4%",
      viralityScore: 89,
      tags: ["High Intent", "B2B SaaS", "Exact Match"],
    },
    email: {
      headline: "Exclusive Architecture Preview: The Spatial AI Runtime",
      body: "Hi Alex,\n\nMost AI platforms hit a wall at high concurrency. We solved it with hierarchical token caching and decentralized vector routing.\n\nWe'd love to provision a private sandbox cluster for your engineering team to test against your hardest internal benchmarks.",
      cta: "Schedule Private Sandbox Deployment",
      predictedCtr: "5.6%",
      viralityScore: 85,
      tags: ["Executive Briefing", "Personalized Outreach", "High Conversion"],
    },
  },
  direct: {
    linkedin: {
      headline: "Stop paying for 10 separate AI tools that don't talk to each other.",
      body: "Aetheris unifies vector search, autonomous workflow triggers, voice telephony, and guardrails in a single unified API edge.\n\nCut your LLM bill by 60% while speeding up inference by 3.5x.",
      cta: "Calculate your team's cost savings with our ROI calculator →",
      predictedCtr: "5.1%",
      viralityScore: 91,
      tags: ["#CostOptimization", "#B2BTech", "#EngineeringLeaders"],
    },
    twitter: {
      headline: "Cutting LLM infrastructure bills by 60% in 3 lines of code.",
      body: "Tired of bloated inference bills? We benchmarked Aetheris against standard gateway proxies:\n• 62% token cost reduction\n• 40ms avg latency drop\n• 100% prompt firewall coverage",
      cta: "Install the SDK: npm i @aetheris/core",
      predictedCtr: "7.1%",
      viralityScore: 95,
      tags: ["#DevOps", "#WebDev", "#TypeScript"],
    },
    google: {
      headline: "Reduce LLM Cloud Spend by 60% | Unified AI Developer Platform",
      body: "Cut token costs and eliminate latency bottlenecks. Enterprise-grade caching, vector search & security guardrails in one SDK.",
      cta: "Deploy Free Sandbox in 2 Minutes →",
      predictedCtr: "9.2%",
      viralityScore: 87,
      tags: ["Cost Savings", "Performance", "Developer Tooling"],
    },
    email: {
      headline: "Cut your LLM pipeline costs by 60% this quarter",
      body: "Hi Alex,\n\nIf your team is running high-volume vector searches or agent loops, token cache misses are costing you thousands every week.\n\nAetheris reduces token consumption by 60% using predictive semantic cache hits.",
      cta: "View Live Benchmark Comparison",
      predictedCtr: "6.8%",
      viralityScore: 88,
      tags: ["Direct ROI", "CFO Approved", "DevOps"],
    },
  },
  storyteller: {
    linkedin: {
      headline: "We tested 1,000,000 synthetic customer interactions. Here's what broke.",
      body: "When you scale autonomous agents, latency compounds. A 200ms delay in voice causes awkward pauses. A 500ms delay in CRM scoring drops lead conversion by 34%.\n\nThat's why we rebuilt the runtime engine from the metal up.",
      cta: "Read our engineering retrospective and architectural post-mortem →",
      predictedCtr: "5.8%",
      viralityScore: 96,
      tags: ["#EngineeringCulture", "#SystemsDesign", "#TechDeepDive"],
    },
    twitter: {
      headline: "What happens when 1,000 autonomous agents talk simultaneously?",
      body: "Most servers crash. Context windows overflow. Costs skyrocket.\n\nHere is how we solved concurrency using decentralized vector routing and state trees: 🧵",
      cta: "Full deep-dive in thread 👇",
      predictedCtr: "8.0%",
      viralityScore: 99,
      tags: ["#DeepTech", "#SystemArchitecture", "#AIResearch"],
    },
    google: {
      headline: "Why Top AI Startups Are Migrating to Aetheris | Full Case Studies",
      body: "Discover how high-growth startups scaled from 1k to 50M agent transactions per day with zero downtime.",
      cta: "Read Customer Architecture Stories →",
      predictedCtr: "7.9%",
      viralityScore: 90,
      tags: ["Case Study", "Social Proof", "Enterprise"],
    },
    email: {
      headline: "Behind the scenes of our sub-100ms multi-agent engine",
      body: "Hi Alex,\n\nWhen we founded Aetheris, our goal was simple: make autonomous agents feel instantaneous.\n\nHere's the technical breakdown of how we achieved 85ms end-to-end voice telephony latency.",
      cta: "Read the Technical Paper",
      predictedCtr: "6.1%",
      viralityScore: 89,
      tags: ["Behind The Scenes", "Founder Story", "Tech Lead"],
    },
  },
  urgency: {
    linkedin: {
      headline: "Your competitors are already automating 70% of routine workflows.",
      body: "Waiting another quarter to deploy autonomous agent pipelines isn't conservative—it's giving away market share.\n\nAetheris lets you deploy production-ready AI agents in under 48 hours.",
      cta: "Book your priority migration slot before Q4 slots fill up →",
      predictedCtr: "6.4%",
      viralityScore: 93,
      tags: ["#CompetitiveAdvantage", "#ExecutiveStrategy", "#GrowthHacking"],
    },
    twitter: {
      headline: "The window to build an AI moat is closing. Fast.",
      body: "In 2024, AI was a feature.\nIn 2026, AI is the entire operational nervous system.\n\nDeploy your first autonomous team co-pilot today before your competition does.",
      cta: "Get Started Free (No credit card needed)",
      predictedCtr: "7.8%",
      viralityScore: 97,
      tags: ["#StartupGrowth", "#AIStrategy", "#FastExecution"],
    },
    google: {
      headline: "Deploy Autonomous AI Agents in 48 Hours | Limited Sandbox Access",
      body: "Outpace competition with pre-built multi-agent templates. Instant integration with Salesforce, HubSpot, Slack, and PostgreSQL.",
      cta: "Claim Your Sandbox Tier Now →",
      predictedCtr: "9.6%",
      viralityScore: 92,
      tags: ["Immediate Start", "High Conversion", "Time Sensitive"],
    },
    email: {
      headline: "Priority Invitation: Early Access Sandbox Token Allocation",
      body: "Hi Alex,\n\nWe've opened 50 enterprise sandbox slots for teams building high-throughput autonomous agents.\n\nYour spot includes 250k complimentary inference tokens and direct Slack channel access to our core systems engineers.",
      cta: "Activate Your Priority Allocation",
      predictedCtr: "7.4%",
      viralityScore: 91,
      tags: ["Exclusive Access", "Time Sensitive", "VIP Invitation"],
    },
  },
};

export function MultiChannelCampaignStudio({ className }: { className?: string }) {
  const [selectedChannel, setSelectedChannel] = useState<ChannelType>("linkedin");
  const [selectedTone, setSelectedTone] = useState<ToneType>("visionary");
  const [copied, setCopied] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);

  const currentContent = CAMPAIGN_DATA[selectedTone][selectedChannel];

  const handleCopy = () => {
    const fullText = `${currentContent.headline}\n\n${currentContent.body}\n\n${currentContent.cta}\n\n${currentContent.tags.join(" ")}`;
    navigator.clipboard?.writeText(fullText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleRegenerate = () => {
    setIsGenerating(true);
    setTimeout(() => setIsGenerating(false), 400);
  };

  return (
    <div
      className={cn(
        "relative w-full rounded-2xl bg-[#0C0E14] border border-white/10 p-4 sm:p-5 md:p-6 overflow-hidden shadow-2xl font-sans",
        className
      )}
    >
      {/* Ambient Glow */}
      <div className="absolute top-0 right-10 w-72 h-72 bg-accent-amber/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 pb-4 sm:pb-5 border-b border-white/10">
        <div className="flex items-center gap-2.5 sm:gap-3">
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-accent-amber/10 border border-accent-amber/30 flex items-center justify-center text-accent-amber shrink-0">
            <Megaphone className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>
          <div>
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
              <h3 className="text-sm sm:text-base font-bold text-white font-display">Multi-Channel AI Campaign Synthesizer</h3>
              <span className="px-2 py-0.5 rounded-full text-[9px] sm:text-[10px] font-mono font-semibold bg-accent-amber/20 text-accent-amber border border-accent-amber/30">
                Live Co-Pilot
              </span>
            </div>
            <p className="text-[11px] sm:text-xs text-white/50 font-mono">
              Auto-calibrated brand tone, viral coefficient scoring & instant multi-format distribution
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleRegenerate}
            disabled={isGenerating}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-white/70 font-mono hover:bg-white/10 hover:text-white transition-all"
          >
            <RefreshCw className={cn("w-3.5 h-3.5 text-accent-amber", isGenerating && "animate-spin")} />
            <span>Resynthesize</span>
          </button>
        </div>
      </div>

      {/* Controls Row: Channel Tabs & Tone Selector */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mt-5">
        {/* Channel Selector */}
        <div className="md:col-span-7 flex flex-wrap items-center gap-2">
          {[
            { id: "linkedin", label: "LinkedIn Post", icon: Linkedin },
            { id: "twitter", label: "X / Twitter Thread", icon: Twitter },
            { id: "google", label: "Google Ad Copy", icon: Search },
            { id: "email", label: "Outbound Email", icon: Mail },
          ].map((tab) => {
            const Icon = tab.icon;
            const isSelected = selectedChannel === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setSelectedChannel(tab.id as ChannelType)}
                className={cn(
                  "flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all duration-200 border",
                  isSelected
                    ? "bg-accent-amber/15 border-accent-amber/50 text-accent-amber shadow-[0_0_12px_rgba(255,107,0,0.2)]"
                    : "bg-[#121622]/80 border-white/5 text-white/60 hover:text-white hover:border-white/15"
                )}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tone Selector */}
        <div className="md:col-span-5 flex items-center justify-start md:justify-end gap-1.5">
          <span className="text-[11px] font-mono text-white/40 mr-1 flex items-center gap-1">
            <Sliders className="w-3 h-3" /> Tone:
          </span>
          {[
            { id: "visionary", label: "Visionary" },
            { id: "direct", label: "Direct ROI" },
            { id: "storyteller", label: "Story" },
            { id: "urgency", label: "Urgency" },
          ].map((tone) => {
            const isSelected = selectedTone === tone.id;
            return (
              <button
                key={tone.id}
                onClick={() => setSelectedTone(tone.id as ToneType)}
                className={cn(
                  "px-2.5 py-1 rounded-md text-[11px] font-mono transition-all",
                  isSelected
                    ? "bg-white/20 text-white font-bold border border-white/30"
                    : "text-white/40 hover:text-white/80 hover:bg-white/5"
                )}
              >
                {tone.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Content Preview & Analytics Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 mt-5">
        {/* Left Column: Live Content Editor / Preview */}
        <div className="lg:col-span-8 p-5 rounded-xl bg-[#121622] border border-white/10 flex flex-col justify-between relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${selectedChannel}-${selectedTone}`}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="space-y-4"
            >
              {/* Channel specific format badge */}
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono uppercase text-accent-amber font-bold tracking-wider flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  Live Preview • {selectedChannel.toUpperCase()}
                </span>
                <span className="text-[10px] font-mono text-white/40">
                  Ready to Publish • 100% Brand Compliant
                </span>
              </div>

              {/* Generated Content Box */}
              <div className="space-y-3 font-sans">
                <h4 className="text-sm md:text-base font-bold text-white leading-snug">
                  {currentContent.headline}
                </h4>
                <div className="text-xs md:text-sm text-white/70 whitespace-pre-line leading-relaxed font-sans bg-[#0A0C10] p-4 rounded-lg border border-white/5">
                  {currentContent.body}
                </div>
                <div className="text-xs text-accent-amber font-mono font-semibold pt-1">
                  {currentContent.cta}
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 pt-2">
                {currentContent.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[10px] font-mono text-white/60"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Copy Button */}
          <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between">
            <span className="text-[11px] font-mono text-white/40">
              Format: <strong className="text-white/80">{selectedChannel}</strong> • Tone: <strong className="text-white/80">{selectedTone}</strong>
            </span>
            <button
              onClick={handleCopy}
              className="px-3.5 py-1.5 rounded-lg bg-accent-amber text-void text-xs font-bold font-mono hover:bg-accent-amber/90 transition-all flex items-center gap-1.5 shadow-[0_0_15px_rgba(255,107,0,0.3)]"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-void" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? "Copied to Clipboard!" : "Copy Campaign"}</span>
            </button>
          </div>
        </div>

        {/* Right Column: Predictive Virality & CTR Metrics */}
        <div className="lg:col-span-4 p-5 rounded-xl bg-[#10131B] border border-white/10 flex flex-col justify-between space-y-4">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <span className="text-xs font-mono font-bold text-white flex items-center gap-1.5">
                <BarChart2 className="w-3.5 h-3.5 text-accent-amber" />
                Predictive Analytics
              </span>
              <span className="text-[10px] font-mono text-accent-amber">AI Estimator</span>
            </div>

            <div className="space-y-4 mt-4">
              {/* CTR Prediction */}
              <div className="p-3.5 rounded-lg bg-[#141824] border border-white/5 space-y-1">
                <div className="flex justify-between text-xs font-mono text-white/50">
                  <span>Projected CTR</span>
                  <span className="text-accent-amber font-bold font-mono">{currentContent.predictedCtr}</span>
                </div>
                <div className="text-[10px] text-white/40 font-mono">
                  +185% above industry benchmark (avg 1.8%)
                </div>
              </div>

              {/* Virality Coefficient */}
              <div className="p-3.5 rounded-lg bg-[#141824] border border-white/5 space-y-1.5">
                <div className="flex justify-between text-xs font-mono text-white/50">
                  <span>Virality Score</span>
                  <span className="text-white font-bold">{currentContent.viralityScore} / 100</span>
                </div>
                <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-accent-amber to-accent-lime"
                    initial={{ width: 0 }}
                    animate={{ width: `${currentContent.viralityScore}%` }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
                <div className="text-[10px] text-white/40 font-mono">
                  High algorithmic reach probability
                </div>
              </div>

              {/* Brand Consistency */}
              <div className="p-3 rounded-lg bg-accent-amber/5 border border-accent-amber/20 text-xs text-white/70 space-y-1">
                <div className="flex items-center gap-1.5 text-accent-amber font-mono text-[11px] font-bold">
                  <Zap className="w-3 h-3" />
                  Autonomous Brand Guard
                </div>
                <p className="text-[11px] text-white/60 font-sans leading-relaxed">
                  Passed 0/0 tone violations, prohibited jargon filters, and compliance checks.
                </p>
              </div>
            </div>
          </div>

          <div className="pt-2 text-center text-[10px] font-mono text-white/30">
            Powered by Aetheris Generative Synthesis Engine
          </div>
        </div>
      </div>
    </div>
  );
}
