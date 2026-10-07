"use client";

import React, { useEffect, useState } from "react";
import { Zap } from "lucide-react";
import { cn } from "@/lib/utils";
import { WorkflowNode } from "@/components/widgets/workflow/WorkflowNode";
import { WorkflowConnections } from "@/components/widgets/workflow/WorkflowConnections";

const CONNECTIONS = [
  {
    id: "wf-conn-1",
    path: "M 150 160 C 230 160, 320 160, 400 160",
    gradientId: "wfGrad1",
    packetColor: "#00F0FF",
    duration: "2.2s",
    pulseGlowId: "wfGlow",
  },
  {
    id: "wf-conn-2",
    path: "M 400 160 C 490 160, 560 95, 650 95",
    gradientId: "wfGrad2",
    packetColor: "#FF6B00",
    duration: "2.4s",
    pulseGlowId: "wfGlow",
  },
  {
    id: "wf-conn-3",
    path: "M 400 160 C 490 160, 560 235, 650 235",
    gradientId: "wfGrad3",
    packetColor: "#00FF9D",
    duration: "2.6s",
    pulseGlowId: "wfGlow",
  },
];

export const WorkflowAutomation = ({ className }: { className?: string }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div
      className={cn(
        "relative w-full h-full min-h-[340px] bg-[#0C0E14] border border-white/10 rounded-2xl overflow-hidden font-mono select-none shadow-2xl",
        className
      )}
    >
      {/* Header Bar */}
      <div className="absolute top-0 left-0 w-full flex items-center justify-between px-3 sm:px-5 py-2.5 sm:py-3 border-b border-white/5 bg-[#121622]/95 backdrop-blur-md z-20">
        <div className="flex items-center gap-2 sm:gap-2.5 truncate mr-2">
          <div className="w-6 h-6 rounded-lg bg-accent-lime/10 flex items-center justify-center border border-accent-lime/20 shrink-0">
            <Zap className="w-3.5 h-3.5 text-accent-lime" />
          </div>
          <div className="truncate">
            <h3 className="text-xs font-semibold text-white truncate">Lead Processing Pipeline</h3>
            <p className="text-[9px] sm:text-[10px] text-white/40 font-mono truncate">Webhook • AI Inference • Sync</p>
          </div>
        </div>
        <div className="flex items-center gap-1.5 shrink-0">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-lime opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-lime" />
          </span>
          <span className="text-[9px] sm:text-[10px] font-mono text-accent-lime font-semibold uppercase tracking-wider">Live</span>
        </div>
      </div>

      {/* Unified SVG Canvas with responsive scaling */}
      <div className="w-full h-full pt-12 pb-2 px-1 sm:pt-11 sm:pb-2 sm:px-3 flex items-center justify-center">
        <svg
          viewBox="50 55 690 245"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full max-h-[360px] select-none block"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            {/* Background Grid Pattern */}
            <pattern id="wfGridPattern" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill="rgba(255,255,255,0.06)" />
            </pattern>

            {/* Path Gradients */}
            <linearGradient id="wfGrad1" gradientUnits="userSpaceOnUse" x1="150" y1="160" x2="400" y2="160">
              <stop offset="0%" stopColor="#00F0FF" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#D4FF00" stopOpacity="0.95" />
            </linearGradient>

            <linearGradient id="wfGrad2" gradientUnits="userSpaceOnUse" x1="400" y1="160" x2="650" y2="95">
              <stop offset="0%" stopColor="#D4FF00" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#FF6B00" stopOpacity="0.9" />
            </linearGradient>

            <linearGradient id="wfGrad3" gradientUnits="userSpaceOnUse" x1="400" y1="160" x2="650" y2="235">
              <stop offset="0%" stopColor="#D4FF00" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#00FF9D" stopOpacity="0.9" />
            </linearGradient>

            {/* Glowing Filter for Pulses */}
            <filter id="wfGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="3.5" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Grid Background */}
          <rect width="800" height="360" fill="url(#wfGridPattern)" />

          {/* Trajectory lines and traveling pulses */}
          <WorkflowConnections connections={CONNECTIONS} mounted={mounted} />

          {/* Node 1: Webhook Trigger */}
          <WorkflowNode
            x={150}
            y={160}
            label="New Lead (Typeform)"
            badgeWidth={140}
            glowColor="#00F0FF"
            icon="webhook"
            iconStrokeColor="#00F0FF"
          />

          {/* Node 2: AI Processing */}
          <WorkflowNode
            x={400}
            y={160}
            label="AI Lead Scoring & Routing"
            badgeWidth={180}
            glowColor="#D4FF00"
            haloRadius={36}
            hasOrbital={true}
            orbitalDuration="16s"
            icon="server"
            iconStrokeColor="#D4FF00"
          />

          {/* Node 3: CRM Database */}
          <WorkflowNode
            x={650}
            y={95}
            label="Update Salesforce CRM"
            badgeWidth={150}
            glowColor="#FF6B00"
            icon="database"
            iconStrokeColor="#FF6B00"
          />

          {/* Node 4: Calendar Dispatch */}
          <WorkflowNode
            x={650}
            y={235}
            label="Dispatch Calendly Invite"
            badgeWidth={170}
            glowColor="#00FF9D"
            icon="mail"
            iconStrokeColor="#00FF9D"
          />
        </svg>
      </div>
    </div>
  );
};
