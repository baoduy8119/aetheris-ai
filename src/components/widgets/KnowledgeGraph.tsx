"use client";

import React, { useEffect, useState } from "react";
import { BrainCircuit } from "lucide-react";
import { cn } from "@/lib/utils";

export const KnowledgeGraph = ({ className }: { className?: string }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div
      className={cn(
        "relative w-full h-full min-h-[340px] bg-[#101218] border border-white/5 rounded-2xl overflow-hidden font-mono select-none",
        className
      )}
    >
      {/* Header */}
      <div className="absolute top-0 left-0 w-full flex items-center justify-between px-5 py-3 border-b border-white/5 bg-[#141722]/90 backdrop-blur-md z-20">
        <div className="flex items-center gap-2">
          <BrainCircuit className="w-4 h-4 text-accent-cyan" />
          <span className="text-xs font-semibold text-white/70 uppercase tracking-widest">RAG Knowledge Graph</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-accent-cyan animate-pulse" />
          <span className="text-[10px] text-accent-cyan/80 uppercase font-mono tracking-wider">Live Indexing</span>
        </div>
      </div>

      {/* SVG Canvas */}
      <div className="w-full h-full pt-10 flex items-center justify-center">
        <svg
          viewBox="0 0 800 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full max-h-[380px]"
        >
          <defs>
            <linearGradient id="ragLineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00F0FF" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#D4FF00" stopOpacity="0.2" />
            </linearGradient>

            <filter id="ragGlow" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>

            <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#00F0FF" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#00F0FF" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Grid pattern background */}
          <pattern id="dotPattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1" fill="rgba(255,255,255,0.05)" />
          </pattern>
          <rect width="800" height="400" fill="url(#dotPattern)" />

          {/* Base Connection Tracks */}
          <line x1="160" y1="100" x2="400" y2="200" stroke="rgba(255, 255, 255, 0.12)" strokeWidth="1.5" />
          <line x1="160" y1="300" x2="400" y2="200" stroke="rgba(255, 255, 255, 0.12)" strokeWidth="1.5" />
          <line x1="640" y1="100" x2="400" y2="200" stroke="rgba(255, 255, 255, 0.12)" strokeWidth="1.5" />
          <line x1="640" y1="300" x2="400" y2="200" stroke="rgba(255, 255, 255, 0.12)" strokeWidth="1.5" />

          {/* Active Gradient Connection Lines */}
          <line x1="160" y1="100" x2="400" y2="200" stroke="url(#ragLineGrad)" strokeWidth="2" strokeDasharray="5 5" opacity="0.8" />
          <line x1="160" y1="300" x2="400" y2="200" stroke="url(#ragLineGrad)" strokeWidth="2" strokeDasharray="5 5" opacity="0.8" />
          <line x1="640" y1="100" x2="400" y2="200" stroke="url(#ragLineGrad)" strokeWidth="2" strokeDasharray="5 5" opacity="0.8" />
          <line x1="640" y1="300" x2="400" y2="200" stroke="url(#ragLineGrad)" strokeWidth="2" strokeDasharray="5 5" opacity="0.8" />

          {/* Animated Data Packets traveling to center */}
          {mounted && (
            <>
              <circle r="3.5" fill="#00F0FF" filter="url(#ragGlow)">
                <animateMotion dur="2.4s" repeatCount="indefinite" path="M 160 100 L 400 200" />
                <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.1;0.9;1" dur="2.4s" repeatCount="indefinite" />
              </circle>
              <circle r="3.5" fill="#D4FF00" filter="url(#ragGlow)">
                <animateMotion dur="3s" repeatCount="indefinite" path="M 160 300 L 400 200" />
                <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.1;0.9;1" dur="3s" repeatCount="indefinite" />
              </circle>
              <circle r="3.5" fill="#00F0FF" filter="url(#ragGlow)">
                <animateMotion dur="2.8s" repeatCount="indefinite" path="M 640 100 L 400 200" />
                <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.1;0.9;1" dur="2.8s" repeatCount="indefinite" />
              </circle>
              <circle r="3.5" fill="#00FF9D" filter="url(#ragGlow)">
                <animateMotion dur="2.2s" repeatCount="indefinite" path="M 640 300 L 400 200" />
                <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.1;0.9;1" dur="2.2s" repeatCount="indefinite" />
              </circle>
            </>
          )}

          {/* Center LLM Node Ambient Halo */}
          <circle cx="400" cy="200" r="70" fill="url(#centerGlow)" />
          
          {/* Orbital dashed ring */}
          <circle cx="400" cy="200" r="48" fill="none" stroke="#00F0FF" strokeWidth="1" strokeDasharray="4 4" opacity="0.4">
            <animateTransform attributeName="transform" type="rotate" from="0 400 200" to="360 400 200" dur="20s" repeatCount="indefinite" />
          </circle>

          {/* Central LLM Node Core */}
          <rect x="366" y="166" width="68" height="68" rx="18" fill="#141824" stroke="rgba(0, 240, 255, 0.4)" strokeWidth="1.5" />
          
          {/* Central Icon (Brain Circuit) */}
          <g transform="translate(386, 186)">
            <path d="M12 2a4 4 0 0 0-4 4v1a4 4 0 0 0-3 3.87A4 4 0 0 0 2 15a4 4 0 0 0 3 3.87V20a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-1.13A4 4 0 0 0 14 15a4 4 0 0 0-3-3.87V10a4 4 0 0 0 3-3.87V5a3 3 0 0 0-2-2.83" stroke="#00F0FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            <circle cx="14" cy="5" r="1.5" fill="#D4FF00" />
            <circle cx="18" cy="12" r="1.5" fill="#00F0FF" />
            <circle cx="14" cy="19" r="1.5" fill="#D4FF00" />
          </g>
          
          {/* Center Node Badge */}
          <rect x="340" y="246" width="120" height="24" rx="6" fill="#0A0C10" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
          <text x="400" y="262" fill="#E2E8F0" fontSize="11" fontFamily="monospace" textAnchor="middle" fontWeight="bold">Aetheris_LLM_v4</text>

          {/* Node 1: Top-Left (Q3_Report.pdf) */}
          <g transform="translate(160, 100)">
            <circle cx="0" cy="0" r="26" fill="#141824" stroke="rgba(255, 255, 255, 0.12)" strokeWidth="1" />
            {/* File Icon */}
            <path d="M-6 -8 h8 l6 6 v12 h-14 z" fill="none" stroke="#00F0FF" strokeWidth="1.5" strokeLinejoin="round" />
            <text x="0" y="44" fill="#94A3B8" fontSize="11" fontFamily="monospace" textAnchor="middle">Q3_Report.pdf</text>
          </g>

          {/* Node 2: Bottom-Left (CRM_Data) */}
          <g transform="translate(160, 300)">
            <circle cx="0" cy="0" r="26" fill="#141824" stroke="rgba(255, 255, 255, 0.12)" strokeWidth="1" />
            {/* Database Icon */}
            <ellipse cx="0" cy="-6" rx="8" ry="3" fill="none" stroke="#D4FF00" strokeWidth="1.5" />
            <path d="M-8 -6 v6 c0 1.6 3.6 3 8 3 s8 -1.4 8 -3 v-6" fill="none" stroke="#D4FF00" strokeWidth="1.5" />
            <path d="M-8 0 v6 c0 1.6 3.6 3 8 3 s8 -1.4 8 -3 v-6" fill="none" stroke="#D4FF00" strokeWidth="1.5" />
            <text x="0" y="44" fill="#94A3B8" fontSize="11" fontFamily="monospace" textAnchor="middle">CRM_Database</text>
          </g>

          {/* Node 3: Top-Right (API_Logs) */}
          <g transform="translate(640, 100)">
            <circle cx="0" cy="0" r="26" fill="#141824" stroke="rgba(255, 255, 255, 0.12)" strokeWidth="1" />
            {/* Share/Network Icon */}
            <circle cx="-4" cy="-4" r="2.5" fill="none" stroke="#00F0FF" strokeWidth="1.5" />
            <circle cx="4" cy="-4" r="2.5" fill="none" stroke="#00F0FF" strokeWidth="1.5" />
            <circle cx="0" cy="4" r="2.5" fill="none" stroke="#00F0FF" strokeWidth="1.5" />
            <line x1="-2" y1="-3" x2="2" y2="-3" stroke="#00F0FF" strokeWidth="1" />
            <line x1="-3" y1="-2" x2="-1" y2="2" stroke="#00F0FF" strokeWidth="1" />
            <line x1="3" y1="-2" x2="1" y2="2" stroke="#00F0FF" strokeWidth="1" />
            <text x="0" y="44" fill="#94A3B8" fontSize="11" fontFamily="monospace" textAnchor="middle">API_Stream_Logs</text>
          </g>

          {/* Node 4: Bottom-Right (Vector_DB) */}
          <g transform="translate(640, 300)">
            <circle cx="0" cy="0" r="26" fill="#141824" stroke="rgba(255, 255, 255, 0.12)" strokeWidth="1" />
            {/* Vector Search Icon */}
            <circle cx="-2" cy="-2" r="6" fill="none" stroke="#00FF9D" strokeWidth="1.5" />
            <line x1="3" y1="3" x2="7" y2="7" stroke="#00FF9D" strokeWidth="1.5" strokeLinecap="round" />
            <text x="0" y="44" fill="#94A3B8" fontSize="11" fontFamily="monospace" textAnchor="middle">Vector_Embeddings</text>
          </g>
        </svg>
      </div>
    </div>
  );
};
