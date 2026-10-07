"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface AudioWaveformProps {
  active?: boolean;
  barCount?: number;
  heights?: number[];
  variant?: "violet-cyan" | "lime-cyan" | "emerald" | "amber";
  className?: string;
  barWidth?: string;
}

const DEFAULT_HEIGHTS = [
  40, 65, 85, 30, 95, 75, 45, 100, 60, 80, 50, 90, 70, 35, 85, 95, 60, 40, 75, 55, 80, 65, 45,
];

const VARIANT_GRADIENTS = {
  "violet-cyan": "bg-gradient-to-t from-accent-violet to-accent-cyan shadow-[0_0_8px_rgba(0,240,255,0.3)]",
  "lime-cyan": "bg-gradient-to-t from-accent-cyan to-accent-lime shadow-[0_0_8px_rgba(212,255,0,0.3)]",
  emerald: "bg-gradient-to-t from-accent-cyan to-accent-emerald shadow-[0_0_8px_rgba(0,255,157,0.3)]",
  amber: "bg-gradient-to-t from-accent-amber to-accent-crimson shadow-[0_0_8px_rgba(255,107,0,0.3)]",
};

export const AudioWaveform: React.FC<AudioWaveformProps> = ({
  active = true,
  barCount,
  heights = DEFAULT_HEIGHTS,
  variant = "violet-cyan",
  className,
  barWidth = "w-1.5",
}) => {
  const bars = barCount ? heights.slice(0, barCount) : heights;

  return (
    <div className={cn("flex items-center justify-center gap-1 overflow-hidden", className)}>
      {bars.map((h, i) => (
        <motion.div
          key={i}
          className={cn(barWidth, "rounded-full transition-all", VARIANT_GRADIENTS[variant])}
          animate={{
            height: active
              ? [`${Math.max(12, h * 0.28)}%`, `${h}%`, `${Math.max(12, h * 0.38)}%`]
              : "8%",
          }}
          transition={{
            duration: 0.8 + (i % 5) * 0.12,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: i * 0.035,
          }}
        />
      ))}
    </div>
  );
};
