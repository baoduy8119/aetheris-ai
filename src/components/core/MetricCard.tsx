"use client";

import React from "react";
import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface MetricCardProps {
  label: string;
  value: string;
  change?: string;
  isPositive?: boolean;
  icon?: LucideIcon;
  iconColor?: string;
  className?: string;
  delay?: number;
  badgeText?: string;
}

export const MetricCard: React.FC<MetricCardProps> = ({
  label,
  value,
  change,
  isPositive = true,
  icon: Icon,
  iconColor = "text-accent-lime",
  className,
  delay = 0,
  badgeText,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
      className={cn(
        "p-4 rounded-xl bg-surface-1/70 backdrop-blur-md border border-white/5 flex flex-col gap-2.5 group hover:border-white/15 transition-all",
        className
      )}
    >
      <div className="flex items-center justify-between">
        {Icon && (
          <div className={cn("p-2 rounded-lg bg-surface-2 border border-white/5", iconColor)}>
            <Icon className="w-4 h-4" />
          </div>
        )}
        {change && (
          <span
            className={cn(
              "text-[10px] sm:text-xs font-mono font-bold px-2 py-0.5 rounded-full border",
              isPositive
                ? "bg-accent-lime/10 text-accent-lime border-accent-lime/20"
                : "bg-accent-crimson/10 text-accent-crimson border-accent-crimson/20"
            )}
          >
            {change}
          </span>
        )}
        {badgeText && (
          <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-surface-2 text-white/60 border border-white/10">
            {badgeText}
          </span>
        )}
      </div>
      <div>
        <p className="text-xs text-white/50 mb-0.5">{label}</p>
        <p className="text-xl sm:text-2xl font-extrabold text-white tracking-tight font-display">
          {value}
        </p>
      </div>
    </motion.div>
  );
};
