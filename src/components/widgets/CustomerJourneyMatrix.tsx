"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  TrendingUp,
  Users,
  Target,
  Clock,
  ArrowUpRight,
  ShieldCheck,
  Zap,
  ChevronRight,
  Filter,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface Deal {
  id: string;
  company: string;
  arr: string;
  tier: "Enterprise" | "Mid-Market" | "Growth";
  intentScore: number;
  stage: "Discovery" | "Technical POC" | "Security & Legal" | "Negotiation" | "Closed Won";
  stageProgress: number;
  aiInsights: string;
  recommendedAction: string;
  leadVelocity: string;
  color: string;
}

const DEALS: Deal[] = [
  {
    id: "deal-1",
    company: "HyperScale Cloud Systems",
    arr: "$180,000/yr",
    tier: "Enterprise",
    intentScore: 96,
    stage: "Security & Legal",
    stageProgress: 80,
    aiInsights: "SOC-2 Type II report reviewed. 14 team members active in sandbox.",
    recommendedAction: "Trigger automated Docusign SLA bundle with volume discount.",
    leadVelocity: "+42% faster than avg",
    color: "#00F0FF",
  },
  {
    id: "deal-2",
    company: "Vanguard Global Data",
    arr: "$94,000/yr",
    tier: "Enterprise",
    intentScore: 88,
    stage: "Technical POC",
    stageProgress: 55,
    aiInsights: "API throughput benchmark exceeded 25,000 req/s. RAG benchmark passed.",
    recommendedAction: "Schedule executive alignment with VP of Infrastructure.",
    leadVelocity: "+28% faster than avg",
    color: "#D4FF00",
  },
  {
    id: "deal-3",
    company: "Quantum Analytics Corp",
    arr: "$48,000/yr",
    tier: "Mid-Market",
    intentScore: 92,
    stage: "Negotiation",
    stageProgress: 90,
    aiInsights: "Budget approved by CFO. Comparison matrix favored Aetheris over legacy CRM.",
    recommendedAction: "Send final enterprise license agreement with 3-year term incentive.",
    leadVelocity: "+60% faster than avg",
    color: "#00FF9D",
  },
];

export function CustomerJourneyMatrix({ className }: { className?: string }) {
  const [selectedDeal, setSelectedDeal] = useState<Deal>(DEALS[0]);
  const [activeFilter, setActiveFilter] = useState<string>("all");

  return (
    <div
      className={cn(
        "relative w-full rounded-2xl bg-[#0B0D13] border border-white/10 p-4 sm:p-5 md:p-6 overflow-hidden shadow-2xl font-sans",
        className
      )}
    >
      {/* Ambient background glow */}
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-accent-cyan/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 pb-4 sm:pb-5 border-b border-white/10">
        <div className="flex items-center gap-2.5 sm:gap-3">
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-accent-cyan/10 border border-accent-cyan/30 flex items-center justify-center text-accent-cyan shrink-0">
            <Target className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>
          <div>
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
              <h3 className="text-sm sm:text-base font-bold text-white font-display">Predictive Deal Velocity Matrix</h3>
              <span className="px-2 py-0.5 rounded-full text-[9px] sm:text-[10px] font-mono font-semibold bg-accent-cyan/20 text-accent-cyan border border-accent-cyan/30">
                Live AI Scoring
              </span>
            </div>
            <p className="text-[11px] sm:text-xs text-white/50 font-mono">
              Real-time pipeline intent probability & automated closing signals
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg bg-white/5 border border-white/10 text-[11px] sm:text-xs text-white/70 font-mono">
            <TrendingUp className="w-3.5 h-3.5 text-accent-cyan" />
            <span>Avg Win Rate: <strong className="text-accent-cyan">78.4%</strong></span>
          </div>
        </div>
      </div>

      {/* Main Grid: Deal List & Live Deal Intelligence Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 mt-5">
        {/* Left Column: Active Deal Stream */}
        <div className="lg:col-span-6 space-y-3">
          <div className="flex items-center justify-between text-xs text-white/40 font-mono px-1">
            <span>KEY PIPELINE OPPORTUNITIES</span>
            <span>INTENT PROBABILITY</span>
          </div>

          {DEALS.map((deal) => {
            const isSelected = selectedDeal.id === deal.id;
            return (
              <motion.button
                key={deal.id}
                onClick={() => setSelectedDeal(deal)}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className={cn(
                  "w-full text-left p-4 rounded-xl border transition-all duration-200 flex flex-col gap-2.5",
                  isSelected
                    ? "bg-[#141824] border-accent-cyan/50 shadow-[0_0_20px_rgba(0,240,255,0.15)]"
                    : "bg-[#10131B]/80 border-white/5 hover:border-white/20 hover:bg-[#121622]"
                )}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-sm text-white">{deal.company}</span>
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/10 text-white/70">
                        {deal.tier}
                      </span>
                    </div>
                    <span className="text-xs text-accent-cyan font-mono font-bold mt-0.5 block">
                      {deal.arr}
                    </span>
                  </div>

                  {/* Intent Score Badge */}
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-accent-cyan/10 border border-accent-cyan/30 text-accent-cyan font-mono text-xs font-bold">
                    <Zap className="w-3 h-3" />
                    <span>{deal.intentScore}%</span>
                  </div>
                </div>

                {/* Progress Mini Bar */}
                <div className="space-y-1">
                  <div className="flex justify-between text-[10px] font-mono text-white/50">
                    <span>Stage: <strong className="text-white/80">{deal.stage}</strong></span>
                    <span>{deal.stageProgress}%</span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-white/10 overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-500"
                      style={{
                        width: `${deal.stageProgress}%`,
                        backgroundColor: deal.color,
                        boxShadow: `0 0 10px ${deal.color}`,
                      }}
                    />
                  </div>
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* Right Column: AI Deep Insights & Deal Orchestration */}
        <div className="lg:col-span-6 flex flex-col justify-between p-5 rounded-xl bg-[#121622] border border-white/10 relative overflow-hidden">
          {/* Subtle background radar circles */}
          <div className="absolute -bottom-10 -right-10 w-44 h-44 rounded-full border border-accent-cyan/10 pointer-events-none" />
          <div className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full border border-accent-cyan/5 pointer-events-none" />

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent-cyan animate-ping" />
                <span className="text-xs font-mono text-accent-cyan font-bold tracking-wider uppercase">
                  AI Deal Co-Pilot Analysis
                </span>
              </div>
              <span className="text-[11px] font-mono text-white/40">
                {selectedDeal.leadVelocity}
              </span>
            </div>

            <div>
              <h4 className="text-lg font-bold text-white font-display">
                {selectedDeal.company}
              </h4>
              <p className="text-xs text-accent-cyan font-mono font-medium">
                Annual Deal Value: {selectedDeal.arr} • Stage: {selectedDeal.stage}
              </p>
            </div>

            {/* AI Insight Card */}
            <div className="p-3.5 rounded-lg bg-[#0C0E14] border border-white/10 space-y-1.5">
              <div className="flex items-center gap-2 text-xs font-semibold text-white/80">
                <Sparkles className="w-3.5 h-3.5 text-accent-cyan" />
                <span>Behavioral & Telemetry Signals</span>
              </div>
              <p className="text-xs text-white/60 leading-relaxed font-mono">
                {selectedDeal.aiInsights}
              </p>
            </div>

            {/* Recommended Action */}
            <div className="p-3.5 rounded-lg bg-accent-cyan/5 border border-accent-cyan/20 space-y-1.5">
              <div className="flex items-center gap-2 text-xs font-semibold text-accent-cyan">
                <Zap className="w-3.5 h-3.5" />
                <span>Automated Next Best Action</span>
              </div>
              <p className="text-xs text-white/80 leading-relaxed font-sans">
                {selectedDeal.recommendedAction}
              </p>
            </div>
          </div>

          {/* Action Trigger Button */}
          <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between gap-3">
            <span className="text-[11px] font-mono text-white/40">
              Confidence Index: <strong className="text-accent-cyan font-bold">99.2%</strong>
            </span>
            <button className="px-4 py-2 rounded-lg bg-accent-cyan text-void text-xs font-bold font-mono hover:bg-accent-cyan/90 transition-all flex items-center gap-1.5 shadow-[0_0_15px_rgba(0,240,255,0.4)]">
              <span>Execute AI Action</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
