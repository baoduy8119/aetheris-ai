"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ShieldAlert, ShieldCheck, Lock, Terminal, AlertTriangle, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const SECURITY_EVENTS = [
  { id: 1, type: "BLOCKED", source: "192.168.4.12", rule: "Prompt Injection (Jailbreak attempt)", score: "99.4%", time: "Just now", status: "crimson" },
  { id: 2, type: "PASSED", source: "10.0.12.88", rule: "Semantic Policy Validation", score: "0.2%", time: "1.2s ago", status: "emerald" },
  { id: 3, type: "REDACTED", source: "172.16.0.4", rule: "PII Masking (SSN / Credit Card)", score: "100%", time: "2.8s ago", status: "amber" },
  { id: 4, type: "BLOCKED", source: "45.33.18.9", rule: "Vector Hallucination Anomaly", score: "94.8%", time: "4.1s ago", status: "crimson" },
];

export const SecurityThreatStream = ({ className }: { className?: string }) => {
  const [events, setEvents] = useState(SECURITY_EVENTS);

  return (
    <div
      className={cn(
        "flex flex-col w-full h-full min-h-[380px] bg-[#0A0C10] border border-white/10 rounded-2xl overflow-hidden font-mono shadow-2xl spatial-shadow-md",
        className
      )}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/5 bg-[#12151E]">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-accent-crimson/20 border border-accent-crimson/40 flex items-center justify-center">
            <ShieldAlert className="w-4 h-4 text-accent-crimson" />
          </div>
          <div>
            <h4 className="text-xs font-semibold text-white">LLM Guardrail Sentinel</h4>
            <p className="text-[10px] text-white/50">Zero-Trust Vector Security & WAF</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-accent-emerald animate-pulse" />
          <span className="text-[11px] text-accent-emerald">ENFORCED</span>
        </div>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-3 gap-2 p-4 border-b border-white/5 bg-[#0D0F16]">
        <div className="p-2.5 rounded-lg bg-surface-1 border border-white/5">
          <span className="text-[10px] text-white/40 block">Threats Blocked</span>
          <span className="text-base font-bold text-accent-crimson">14,290</span>
        </div>
        <div className="p-2.5 rounded-lg bg-surface-1 border border-white/5">
          <span className="text-[10px] text-white/40 block">PII Sanitized</span>
          <span className="text-base font-bold text-accent-amber">8,410</span>
        </div>
        <div className="p-2.5 rounded-lg bg-surface-1 border border-white/5">
          <span className="text-[10px] text-white/40 block">Filter Latency</span>
          <span className="text-base font-bold text-accent-cyan">&lt; 1.8ms</span>
        </div>
      </div>

      {/* Event Stream List */}
      <div className="p-4 space-y-2.5 flex-1 overflow-y-auto custom-scrollbar">
        {events.map((ev, i) => (
          <motion.div
            key={ev.id}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className="p-3 rounded-xl bg-surface-1 border border-white/5 flex items-center justify-between text-xs hover:bg-surface-2 transition-colors"
          >
            <div className="flex items-center gap-3">
              <span
                className={cn(
                  "px-2 py-0.5 rounded text-[10px] font-bold border",
                  ev.status === "crimson" && "bg-accent-crimson/10 text-accent-crimson border-accent-crimson/30",
                  ev.status === "emerald" && "bg-accent-emerald/10 text-accent-emerald border-accent-emerald/30",
                  ev.status === "amber" && "bg-accent-amber/10 text-accent-amber border-accent-amber/30"
                )}
              >
                {ev.type}
              </span>
              <div>
                <p className="text-white font-medium text-xs">{ev.rule}</p>
                <span className="text-[10px] text-white/40">IP: {ev.source} • Score: {ev.score}</span>
              </div>
            </div>
            <span className="text-[10px] text-white/40">{ev.time}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
