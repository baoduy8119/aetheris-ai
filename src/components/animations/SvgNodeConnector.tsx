"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SvgNodeConnectorProps {
  className?: string;
  color?: string;
  showPackets?: boolean;
}

export function SvgNodeConnector({
  className = "",
  color = "#D4FF00",
  showPackets = true,
}: SvgNodeConnectorProps) {
  return (
    <div className={cn("relative w-full h-full min-h-[220px] pointer-events-none select-none", className)}>
      <svg
        viewBox="0 0 800 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <defs>
          <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={color} stopOpacity="0.1" />
            <stop offset="50%" stopColor={color} stopOpacity="0.8" />
            <stop offset="100%" stopColor={color} stopOpacity="0.2" />
          </linearGradient>

          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Path 1: Central LLM Data Pipeline */}
        <motion.path
          d="M 100 150 C 250 150, 250 50, 400 50 C 550 50, 550 150, 700 150"
          stroke="url(#lineGrad)"
          strokeWidth="2"
          strokeDasharray="6 6"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.8, ease: "easeInOut" }}
        />

        {/* Path 2: Auxiliary Neural Vector Stream */}
        <motion.path
          d="M 100 150 C 250 150, 250 250, 400 250 C 550 250, 550 150, 700 150"
          stroke="rgba(255, 255, 255, 0.15)"
          strokeWidth="1.5"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.2, ease: "easeInOut", delay: 0.2 }}
        />

        {/* Central Direct Beam */}
        <motion.line
          x1="100"
          y1="150"
          x2="700"
          y2="150"
          stroke="rgba(255, 255, 255, 0.08)"
          strokeWidth="1"
        />

        {/* Animated Data Packets / Pulses */}
        {showPackets && (
          <>
            <circle r="4" fill={color} filter="url(#glow)">
              <animateMotion
                dur="3s"
                repeatCount="indefinite"
                path="M 100 150 C 250 150, 250 50, 400 50 C 550 50, 550 150, 700 150"
              />
              <animate
                attributeName="opacity"
                values="0;1;1;1;0"
                keyTimes="0;0.1;0.5;0.9;1"
                dur="3s"
                repeatCount="indefinite"
              />
            </circle>
            <circle r="3.5" fill="#00F0FF" filter="url(#glow)">
              <animateMotion
                dur="3.5s"
                repeatCount="indefinite"
                path="M 100 150 C 250 150, 250 250, 400 250 C 550 250, 550 150, 700 150"
              />
              <animate
                attributeName="opacity"
                values="0;1;1;1;0"
                keyTimes="0;0.1;0.5;0.9;1"
                dur="3.5s"
                repeatCount="indefinite"
              />
            </circle>
          </>
        )}

        {/* Key Junction Nodes */}
        <circle cx="100" cy="150" r="6" fill="#12141A" stroke={color} strokeWidth="2" />
        <circle cx="400" cy="50" r="5" fill="#12141A" stroke={color} strokeWidth="1.5" />
        <circle cx="400" cy="250" r="5" fill="#12141A" stroke="#00F0FF" strokeWidth="1.5" />
        <circle cx="700" cy="150" r="6" fill="#12141A" stroke={color} strokeWidth="2" />
      </svg>
    </div>
  );
}
