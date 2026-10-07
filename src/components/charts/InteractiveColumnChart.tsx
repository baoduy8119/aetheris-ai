"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, DollarSign, TrendingUp, Activity, LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export type Timeframe = "12M" | "7D" | "4Q";
export type MetricType = "revenue" | "conversion" | "latency";

export interface DataPoint {
  label: string;
  aiValue: number;
  baseValue: number;
  aiAmount: string;
  baseAmount: string;
  growth: string;
  efficiency: string;
}

export interface MetricConfig {
  label: string;
  icon: LucideIcon;
  color: string;
  bgGlow: string;
}

export const DEFAULT_METRIC_CONFIGS: Record<MetricType, MetricConfig> = {
  revenue: {
    label: "AI Pipeline Yield",
    icon: DollarSign,
    color: "text-accent-lime",
    bgGlow: "from-accent-lime/20 via-accent-cyan/15 to-transparent",
  },
  conversion: {
    label: "Deal Win Rate",
    icon: TrendingUp,
    color: "text-accent-cyan",
    bgGlow: "from-accent-cyan/20 via-accent-violet/15 to-transparent",
  },
  latency: {
    label: "Inference Latency",
    icon: Activity,
    color: "text-accent-amber",
    bgGlow: "from-accent-amber/20 via-accent-crimson/15 to-transparent",
  },
};

export interface InteractiveColumnChartProps {
  data: DataPoint[];
  timeframe?: Timeframe;
  onTimeframeChange?: (tf: Timeframe) => void;
  activeMetric?: MetricType;
  onMetricChange?: (metric: MetricType) => void;
  showFilters?: boolean;
  showLegend?: boolean;
  showTrendline?: boolean;
  className?: string;
  height?: string;
}

export const InteractiveColumnChart: React.FC<InteractiveColumnChartProps> = ({
  data,
  timeframe = "12M",
  onTimeframeChange,
  activeMetric = "revenue",
  onMetricChange,
  showFilters = true,
  showLegend = true,
  showTrendline = true,
  className,
  height = "h-44 sm:h-52",
}) => {
  const [mounted, setMounted] = useState(false);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const activePoint =
    hoveredIdx !== null && data[hoveredIdx]
      ? data[hoveredIdx]
      : data[data.length - 1];

  const generateTrendPath = () => {
    const len = data.length;
    if (len === 0) return "";
    return data
      .map((d, i) => {
        const x = (i / (len - 1)) * 100;
        const y = 100 - d.aiValue;
        return `${i === 0 ? "M" : "L"} ${x} ${y}`;
      })
      .join(" ");
  };

  return (
    <div className={cn("flex flex-col w-full gap-4 relative", className)}>
      {/* Chart Control Header: Metric Switcher & Active Telemetry Tag */}
      {showFilters && (
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 relative z-10">
          <div className="flex items-center gap-1.5 bg-surface-1 p-1 rounded-xl border border-white/5 overflow-x-auto">
            {(["revenue", "conversion", "latency"] as MetricType[]).map((type) => {
              const cfg = DEFAULT_METRIC_CONFIGS[type];
              const Icon = cfg.icon;
              const isSelected = activeMetric === type;
              return (
                <button
                  key={type}
                  onClick={() => onMetricChange?.(type)}
                  className={cn(
                    "flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono transition-all whitespace-nowrap cursor-pointer",
                    isSelected
                      ? "bg-surface-3 text-white border border-white/15 shadow-inner"
                      : "text-white/50 hover:text-white hover:bg-surface-2"
                  )}
                >
                  <Icon className={cn("w-3.5 h-3.5", isSelected ? cfg.color : "text-white/40")} />
                  <span>{cfg.label}</span>
                </button>
              );
            })}
          </div>

          {activePoint && (
            <motion.div
              key={`${activePoint.label}-${activeMetric}`}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex items-center gap-3 bg-surface-1/90 px-3 py-1.5 rounded-xl border border-white/10 font-mono text-xs self-start sm:self-auto"
            >
              <span className="text-white/40">{activePoint.label} Telemetry:</span>
              <span className="text-accent-lime font-bold">{activePoint.aiAmount}</span>
              <span className="text-white/30 hidden xs:inline">|</span>
              <span className="text-white/60 hidden xs:inline">Base: {activePoint.baseAmount}</span>
              <span className="px-1.5 py-0.5 rounded bg-accent-lime/10 text-accent-lime text-[10px] font-bold">
                {activePoint.growth}
              </span>
            </motion.div>
          )}
        </div>
      )}

      {/* Main Column Grid Canvas */}
      <div className="relative w-full rounded-2xl bg-surface-1/50 border border-white/5 p-3 sm:p-5 pt-12 sm:pt-14 flex flex-col justify-end min-h-[280px] sm:min-h-[300px] overflow-visible">
        {/* Calibration Grid Lines */}
        <div className="absolute inset-x-3 sm:inset-x-5 top-12 sm:top-14 bottom-10 flex flex-col justify-between pointer-events-none opacity-20 z-0">
          <div className="w-full border-b border-dashed border-white/40 flex items-center justify-between text-[10px] font-mono text-white/60">
            <span>100%</span>
            <span>$100k Peak</span>
          </div>
          <div className="w-full border-b border-dashed border-white/30 flex items-center justify-between text-[10px] font-mono text-white/50">
            <span>75%</span>
            <span>$75k Target</span>
          </div>
          <div className="w-full border-b border-dashed border-white/20 flex items-center justify-between text-[10px] font-mono text-white/40">
            <span>50%</span>
            <span>$50k Median</span>
          </div>
          <div className="w-full border-b border-dashed border-white/10 flex items-center justify-between text-[10px] font-mono text-white/30">
            <span>25%</span>
            <span>$25k Floor</span>
          </div>
          <div className="w-full border-b border-white/30 text-[10px] font-mono text-white/30">
            <span>0</span>
          </div>
        </div>

        {/* SVG Polynomial Trendline */}
        {showTrendline && (
          <svg
            className="absolute inset-x-3 sm:inset-x-5 top-12 sm:top-14 bottom-10 w-[calc(100%-1.5rem)] sm:w-[calc(100%-2.5rem)] h-[calc(100%-5.5rem)] sm:h-[calc(100%-6rem)] pointer-events-none z-10"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="chartTrendGrad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#00F0FF" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#D4FF00" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#00FF9D" stopOpacity="0.8" />
              </linearGradient>
            </defs>
            <motion.path
              d={generateTrendPath()}
              fill="none"
              stroke="url(#chartTrendGrad)"
              strokeWidth="1.8"
              strokeDasharray="4 3"
              initial={{ pathLength: 0 }}
              animate={mounted ? { pathLength: 1 } : {}}
              transition={{ duration: 1.2, ease: "easeInOut" }}
            />
          </svg>
        )}

        {/* Column Bars */}
        <div className={cn("relative w-full flex items-end justify-between gap-1 sm:gap-2.5 z-20", height)}>
          {data.map((dp, i) => {
            const isHovered = hoveredIdx === i;
            const isPeak = dp.aiValue >= 95;

            return (
              <div
                key={dp.label}
                onMouseEnter={() => setHoveredIdx(i)}
                onMouseLeave={() => {}}
                onClick={() => setHoveredIdx(i)}
                className="flex-1 h-full flex flex-col justify-end items-center group cursor-pointer relative"
              >
                {/* Precision Floating Tooltip */}
                <AnimatePresence>
                  {isHovered && (
                    <motion.div
                      initial={{ opacity: 0, y: -4, scale: 0.9 }}
                      animate={{ opacity: 1, y: -8, scale: 1 }}
                      exit={{ opacity: 0, y: -2, scale: 0.9 }}
                      transition={{ duration: 0.15 }}
                      className="absolute -top-12 sm:-top-14 z-40 bg-[#121622]/98 backdrop-blur-xl border border-accent-lime/40 rounded-xl px-2.5 py-1.5 sm:px-3 sm:py-2 shadow-2xl shadow-black/90 pointer-events-none flex flex-col items-center whitespace-nowrap min-w-[110px] sm:min-w-[120px]"
                    >
                      <div className="flex items-center gap-1 mb-0.5 sm:mb-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent-lime animate-ping" />
                        <span className="text-[9px] sm:text-[10px] font-mono font-bold text-white uppercase tracking-wider">
                          {dp.label} Breakdown
                        </span>
                      </div>
                      <div className="flex items-center justify-between w-full gap-2 sm:gap-3 text-[10px] sm:text-[11px] font-mono">
                        <span className="text-accent-lime font-extrabold">{dp.aiAmount}</span>
                        <span className="text-white/40">({dp.growth})</span>
                      </div>
                      <div className="text-[8px] sm:text-[9px] font-mono text-white/50 w-full flex justify-between mt-0.5">
                        <span>Base: {dp.baseAmount}</span>
                        <span className="text-accent-cyan">η {dp.efficiency}</span>
                      </div>
                      <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#121622] border-r border-b border-accent-lime/40 rotate-45" />
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Light Beam Backdrop */}
                <div
                  className={cn(
                    "absolute inset-x-0 bottom-0 top-0 rounded-t-lg transition-opacity pointer-events-none",
                    isHovered
                      ? "bg-accent-lime/10 border-x border-t border-accent-lime/20"
                      : "opacity-0 group-hover:opacity-100 bg-white/[0.02]"
                  )}
                />

                {/* Grouped Dual Stack Columns */}
                <div className="w-full flex items-end justify-center gap-0.5 sm:gap-1 h-full px-0.5 sm:px-1">
                  {/* Base Column */}
                  <motion.div
                    initial={{ height: 0 }}
                    animate={mounted ? { height: `${dp.baseValue}%` } : {}}
                    transition={{ duration: 0.7, delay: 0.2 + i * 0.03, ease: "easeOut" }}
                    className={cn(
                      "w-1/2 rounded-t-sm transition-all relative overflow-hidden",
                      isHovered
                        ? "bg-white/20 border-t border-white/40"
                        : "bg-white/10 border-t border-white/20"
                    )}
                  />

                  {/* AI Column */}
                  <motion.div
                    initial={{ height: 0 }}
                    animate={mounted ? { height: `${dp.aiValue}%` } : {}}
                    transition={{ duration: 0.9, delay: 0.3 + i * 0.04, ease: "easeOut" }}
                    className={cn(
                      "w-1/2 rounded-t-sm relative transition-all flex flex-col justify-between overflow-hidden",
                      isPeak
                        ? "bg-gradient-to-t from-accent-cyan/30 via-accent-lime/60 to-accent-lime"
                        : "bg-gradient-to-t from-accent-cyan/20 via-accent-cyan/50 to-accent-lime/90",
                      isHovered && "shadow-[0_0_16px_rgba(212,255,0,0.4)]"
                    )}
                  >
                    <div
                      className={cn(
                        "w-full h-1 sm:h-1.5 shrink-0 rounded-t-sm transition-all",
                        isPeak
                          ? "bg-white shadow-[0_0_10px_#FFFFFF]"
                          : isHovered
                          ? "bg-accent-lime shadow-[0_0_10px_#D4FF00]"
                          : "bg-accent-lime/80"
                      )}
                    />
                    {isPeak && (
                      <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent pointer-events-none" />
                    )}
                  </motion.div>
                </div>

                {/* X-Axis Label */}
                <span
                  className={cn(
                    "text-[10px] sm:text-xs font-mono mt-2 transition-colors",
                    isHovered
                      ? "text-accent-lime font-bold"
                      : isPeak
                      ? "text-white font-semibold"
                      : "text-white/40 group-hover:text-white/80"
                  )}
                >
                  {dp.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Legend & Aggregate Statistics */}
      {showLegend && (
        <div className="flex flex-col xs:flex-row xs:items-center justify-between gap-2.5 pt-1 text-xs font-mono text-white/50 border-t border-white/5 relative z-10">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 rounded-sm bg-gradient-to-r from-accent-cyan to-accent-lime shadow-[0_0_6px_#D4FF00]" />
              <span className="text-white/80 font-medium">Autonomous AI Stream</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 rounded-sm bg-white/20 border border-white/20" />
              <span className="text-white/50">Baseline Ops</span>
            </div>
          </div>

          <div className="flex items-center gap-2 text-[11px] text-accent-lime/90">
            <Sparkles className="w-3 h-3 text-accent-lime" />
            <span>AI Multiplier: <strong className="text-white">3.4x Faster Output</strong></span>
          </div>
        </div>
      )}
    </div>
  );
};
