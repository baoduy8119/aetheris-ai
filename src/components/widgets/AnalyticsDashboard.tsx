"use client";

import React, { useEffect, useState } from "react";
import { DollarSign, Activity, Users } from "lucide-react";
import { cn } from "@/lib/utils";
import { MetricCard } from "@/components/core/MetricCard";
import {
  InteractiveColumnChart,
  Timeframe,
  MetricType,
  DataPoint,
  DEFAULT_METRIC_CONFIGS,
} from "@/components/charts/InteractiveColumnChart";

const DATA_SETS: Record<Timeframe, Record<MetricType, DataPoint[]>> = {
  "12M": {
    revenue: [
      { label: "Jan", aiValue: 42, baseValue: 24, aiAmount: "$42.4k", baseAmount: "$24.1k", growth: "+18.4%", efficiency: "94.2%" },
      { label: "Feb", aiValue: 56, baseValue: 28, aiAmount: "$56.8k", baseAmount: "$28.2k", growth: "+24.1%", efficiency: "95.6%" },
      { label: "Mar", aiValue: 48, baseValue: 22, aiAmount: "$48.3k", baseAmount: "$22.5k", growth: "+21.0%", efficiency: "96.1%" },
      { label: "Apr", aiValue: 74, baseValue: 31, aiAmount: "$74.2k", baseAmount: "$31.4k", growth: "+32.8%", efficiency: "97.4%" },
      { label: "May", aiValue: 62, baseValue: 29, aiAmount: "$62.9k", baseAmount: "$29.0k", growth: "+26.5%", efficiency: "96.8%" },
      { label: "Jun", aiValue: 88, baseValue: 34, aiAmount: "$88.6k", baseAmount: "$34.8k", growth: "+41.2%", efficiency: "98.5%" },
      { label: "Jul", aiValue: 78, baseValue: 30, aiAmount: "$78.1k", baseAmount: "$30.2k", growth: "+36.7%", efficiency: "98.1%" },
      { label: "Aug", aiValue: 95, baseValue: 38, aiAmount: "$95.4k", baseAmount: "$38.0k", growth: "+48.9%", efficiency: "99.4%" },
      { label: "Sep", aiValue: 84, baseValue: 32, aiAmount: "$84.7k", baseAmount: "$32.6k", growth: "+39.3%", efficiency: "98.8%" },
      { label: "Oct", aiValue: 91, baseValue: 36, aiAmount: "$91.2k", baseAmount: "$36.1k", growth: "+44.6%", efficiency: "99.1%" },
      { label: "Nov", aiValue: 68, baseValue: 27, aiAmount: "$68.5k", baseAmount: "$27.4k", growth: "+29.8%", efficiency: "97.6%" },
      { label: "Dec", aiValue: 100, baseValue: 40, aiAmount: "$104.8k", baseAmount: "$40.5k", growth: "+54.2%", efficiency: "99.8%" },
    ],
    conversion: [
      { label: "Jan", aiValue: 35, baseValue: 18, aiAmount: "18.2%", baseAmount: "12.1%", growth: "+6.1%", efficiency: "93.0%" },
      { label: "Feb", aiValue: 48, baseValue: 20, aiAmount: "22.4%", baseAmount: "13.0%", growth: "+9.4%", efficiency: "94.5%" },
      { label: "Mar", aiValue: 52, baseValue: 22, aiAmount: "24.1%", baseAmount: "14.2%", growth: "+9.9%", efficiency: "95.2%" },
      { label: "Apr", aiValue: 66, baseValue: 24, aiAmount: "28.6%", baseAmount: "15.0%", growth: "+13.6%", efficiency: "96.8%" },
      { label: "May", aiValue: 58, baseValue: 23, aiAmount: "26.3%", baseAmount: "14.5%", growth: "+11.8%", efficiency: "96.1%" },
      { label: "Jun", aiValue: 79, baseValue: 26, aiAmount: "33.7%", baseAmount: "16.1%", growth: "+17.6%", efficiency: "97.9%" },
      { label: "Jul", aiValue: 71, baseValue: 25, aiAmount: "30.4%", baseAmount: "15.8%", growth: "+14.6%", efficiency: "97.2%" },
      { label: "Aug", aiValue: 88, baseValue: 28, aiAmount: "37.2%", baseAmount: "17.0%", growth: "+20.2%", efficiency: "98.7%" },
      { label: "Sep", aiValue: 82, baseValue: 27, aiAmount: "34.9%", baseAmount: "16.6%", growth: "+18.3%", efficiency: "98.2%" },
      { label: "Oct", aiValue: 92, baseValue: 29, aiAmount: "39.5%", baseAmount: "17.5%", growth: "+22.0%", efficiency: "99.0%" },
      { label: "Nov", aiValue: 75, baseValue: 25, aiAmount: "32.0%", baseAmount: "16.0%", growth: "+16.0%", efficiency: "97.8%" },
      { label: "Dec", aiValue: 98, baseValue: 31, aiAmount: "42.1%", baseAmount: "18.4%", growth: "+23.7%", efficiency: "99.5%" },
    ],
    latency: [
      { label: "Jan", aiValue: 85, baseValue: 40, aiAmount: "142ms", baseAmount: "340ms", growth: "-58.2%", efficiency: "94.0%" },
      { label: "Feb", aiValue: 78, baseValue: 38, aiAmount: "128ms", baseAmount: "325ms", growth: "-60.6%", efficiency: "95.1%" },
      { label: "Mar", aiValue: 72, baseValue: 36, aiAmount: "115ms", baseAmount: "310ms", growth: "-62.9%", efficiency: "96.0%" },
      { label: "Apr", aiValue: 64, baseValue: 35, aiAmount: "98ms", baseAmount: "295ms", growth: "-66.7%", efficiency: "97.2%" },
      { label: "May", aiValue: 58, baseValue: 32, aiAmount: "86ms", baseAmount: "280ms", growth: "-69.2%", efficiency: "97.8%" },
      { label: "Jun", aiValue: 50, baseValue: 30, aiAmount: "74ms", baseAmount: "265ms", growth: "-72.0%", efficiency: "98.4%" },
      { label: "Jul", aiValue: 45, baseValue: 28, aiAmount: "65ms", baseAmount: "250ms", growth: "-74.0%", efficiency: "98.9%" },
      { label: "Aug", aiValue: 38, baseValue: 26, aiAmount: "52ms", baseAmount: "240ms", growth: "-78.3%", efficiency: "99.2%" },
      { label: "Sep", aiValue: 34, baseValue: 25, aiAmount: "45ms", baseAmount: "230ms", growth: "-80.4%", efficiency: "99.4%" },
      { label: "Oct", aiValue: 29, baseValue: 24, aiAmount: "38ms", baseAmount: "220ms", growth: "-82.7%", efficiency: "99.6%" },
      { label: "Nov", aiValue: 25, baseValue: 22, aiAmount: "32ms", baseAmount: "210ms", growth: "-84.7%", efficiency: "99.8%" },
      { label: "Dec", aiValue: 20, baseValue: 20, aiAmount: "24ms", baseAmount: "195ms", growth: "-87.6%", efficiency: "99.9%" },
    ],
  },
  "7D": {
    revenue: [
      { label: "Mon", aiValue: 54, baseValue: 25, aiAmount: "$16.8k", baseAmount: "$7.2k", growth: "+22.4%", efficiency: "96.4%" },
      { label: "Tue", aiValue: 68, baseValue: 30, aiAmount: "$21.4k", baseAmount: "$8.9k", growth: "+31.0%", efficiency: "97.8%" },
      { label: "Wed", aiValue: 82, baseValue: 35, aiAmount: "$26.9k", baseAmount: "$10.4k", growth: "+38.6%", efficiency: "98.9%" },
      { label: "Thu", aiValue: 94, baseValue: 38, aiAmount: "$31.2k", baseAmount: "$12.0k", growth: "+46.2%", efficiency: "99.3%" },
      { label: "Fri", aiValue: 88, baseValue: 34, aiAmount: "$28.7k", baseAmount: "$11.1k", growth: "+42.5%", efficiency: "98.7%" },
      { label: "Sat", aiValue: 45, baseValue: 20, aiAmount: "$14.2k", baseAmount: "$5.8k", growth: "+18.0%", efficiency: "95.2%" },
      { label: "Sun", aiValue: 60, baseValue: 24, aiAmount: "$19.1k", baseAmount: "$7.5k", growth: "+26.8%", efficiency: "97.0%" },
    ],
    conversion: [
      { label: "Mon", aiValue: 62, baseValue: 24, aiAmount: "28.4%", baseAmount: "14.2%", growth: "+14.2%", efficiency: "96.5%" },
      { label: "Tue", aiValue: 74, baseValue: 26, aiAmount: "32.6%", baseAmount: "15.0%", growth: "+17.6%", efficiency: "97.8%" },
      { label: "Wed", aiValue: 85, baseValue: 28, aiAmount: "36.8%", baseAmount: "16.2%", growth: "+20.6%", efficiency: "98.6%" },
      { label: "Thu", aiValue: 95, baseValue: 30, aiAmount: "41.2%", baseAmount: "17.4%", growth: "+23.8%", efficiency: "99.4%" },
      { label: "Fri", aiValue: 90, baseValue: 29, aiAmount: "39.0%", baseAmount: "16.8%", growth: "+22.2%", efficiency: "99.0%" },
      { label: "Sat", aiValue: 55, baseValue: 22, aiAmount: "25.2%", baseAmount: "13.5%", growth: "+11.7%", efficiency: "95.5%" },
      { label: "Sun", aiValue: 68, baseValue: 25, aiAmount: "30.1%", baseAmount: "14.8%", growth: "+15.3%", efficiency: "97.2%" },
    ],
    latency: [
      { label: "Mon", aiValue: 40, baseValue: 28, aiAmount: "48ms", baseAmount: "240ms", growth: "-80.0%", efficiency: "99.1%" },
      { label: "Tue", aiValue: 35, baseValue: 27, aiAmount: "42ms", baseAmount: "235ms", growth: "-82.1%", efficiency: "99.3%" },
      { label: "Wed", aiValue: 30, baseValue: 25, aiAmount: "36ms", baseAmount: "228ms", growth: "-84.2%", efficiency: "99.5%" },
      { label: "Thu", aiValue: 24, baseValue: 24, aiAmount: "28ms", baseAmount: "220ms", growth: "-87.2%", efficiency: "99.7%" },
      { label: "Fri", aiValue: 28, baseValue: 25, aiAmount: "32ms", baseAmount: "225ms", growth: "-85.7%", efficiency: "99.6%" },
      { label: "Sat", aiValue: 48, baseValue: 30, aiAmount: "58ms", baseAmount: "250ms", growth: "-76.8%", efficiency: "98.6%" },
      { label: "Sun", aiValue: 38, baseValue: 27, aiAmount: "44ms", baseAmount: "238ms", growth: "-81.5%", efficiency: "99.2%" },
    ],
  },
  "4Q": {
    revenue: [
      { label: "Q1", aiValue: 55, baseValue: 28, aiAmount: "$182.5k", baseAmount: "$85.0k", growth: "+28.4%", efficiency: "95.8%" },
      { label: "Q2", aiValue: 76, baseValue: 34, aiAmount: "$264.8k", baseAmount: "$105.2k", growth: "+39.2%", efficiency: "97.6%" },
      { label: "Q3", aiValue: 92, baseValue: 38, aiAmount: "$342.1k", baseAmount: "$124.6k", growth: "+48.8%", efficiency: "99.1%" },
      { label: "Q4 (Proj)", aiValue: 100, baseValue: 42, aiAmount: "$415.8k", baseAmount: "$142.0k", growth: "+58.6%", efficiency: "99.8%" },
    ],
    conversion: [
      { label: "Q1", aiValue: 50, baseValue: 22, aiAmount: "23.5%", baseAmount: "13.8%", growth: "+9.7%", efficiency: "95.4%" },
      { label: "Q2", aiValue: 72, baseValue: 26, aiAmount: "31.2%", baseAmount: "15.6%", growth: "+15.6%", efficiency: "97.4%" },
      { label: "Q3", aiValue: 88, baseValue: 29, aiAmount: "38.6%", baseAmount: "17.2%", growth: "+21.4%", efficiency: "98.9%" },
      { label: "Q4 (Proj)", aiValue: 98, baseValue: 32, aiAmount: "44.2%", baseAmount: "18.8%", growth: "+25.4%", efficiency: "99.7%" },
    ],
    latency: [
      { label: "Q1", aiValue: 75, baseValue: 38, aiAmount: "128ms", baseAmount: "320ms", growth: "-60.0%", efficiency: "95.0%" },
      { label: "Q2", aiValue: 56, baseValue: 32, aiAmount: "85ms", baseAmount: "280ms", growth: "-69.6%", efficiency: "97.6%" },
      { label: "Q3", aiValue: 34, baseValue: 26, aiAmount: "45ms", baseAmount: "235ms", growth: "-80.8%", efficiency: "99.3%" },
      { label: "Q4 (Proj)", aiValue: 18, baseValue: 20, aiAmount: "21ms", baseAmount: "190ms", growth: "-88.9%", efficiency: "99.9%" },
    ],
  },
};

const STAT_TILES = [
  { label: "Predicted Q3 Revenue", value: "$845,200", change: "+18.2%", icon: DollarSign, color: "text-accent-lime", isPositive: true },
  { label: "Manual Hours Saved", value: "342 hrs", change: "+42.5%", icon: Activity, color: "text-accent-cyan", isPositive: true },
  { label: "Lead-to-Close Rate", value: "24.8%", change: "+5.1%", icon: Users, color: "text-accent-amber", isPositive: true },
];

export const AnalyticsDashboard = ({ className }: { className?: string }) => {
  const [timeframe, setTimeframe] = useState<Timeframe>("12M");
  const [activeMetric, setActiveMetric] = useState<MetricType>("revenue");

  const currentData = DATA_SETS[timeframe][activeMetric];
  const metricConfig = DEFAULT_METRIC_CONFIGS[activeMetric];

  return (
    <div
      className={cn(
        "flex flex-col w-full bg-[#0A0D14] border border-white/10 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl spatial-shadow-lg p-4 sm:p-6 gap-5 sm:gap-6 relative select-none",
        className
      )}
    >
      {/* Background Ambience */}
      <div
        className={cn(
          "absolute top-0 right-0 w-[400px] h-[300px] bg-gradient-to-b blur-[100px] pointer-events-none rounded-full opacity-30 transition-all duration-700",
          metricConfig.bgGlow
        )}
      />

      {/* Top Header & Live Telemetry Badge */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-white/5 relative z-10">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-base sm:text-lg font-semibold text-white tracking-tight">
              Enterprise Performance Matrix
            </h3>
            <span className="hidden sm:inline-flex px-2 py-0.5 rounded-full bg-accent-cyan/10 border border-accent-cyan/20 text-[10px] font-mono text-accent-cyan font-bold">
              v2.4 Neural
            </span>
          </div>
          <p className="text-xs sm:text-sm text-white/50">
            Real-time multi-agent throughput and predictive revenue attribution
          </p>
        </div>

        {/* Live Pulse Indicator & Range Switcher */}
        <div className="flex items-center gap-2 self-start sm:self-auto">
          {/* Timeframe Filter Tabs */}
          <div className="flex items-center bg-surface-2/80 p-1 rounded-xl border border-white/10 text-xs font-mono">
            {(["7D", "12M", "4Q"] as Timeframe[]).map((tf) => (
              <button
                key={tf}
                onClick={() => setTimeframe(tf)}
                className={cn(
                  "px-2.5 py-1 rounded-lg transition-all text-xs font-medium cursor-pointer",
                  timeframe === tf
                    ? "bg-accent-lime text-void font-bold shadow-glow-lime"
                    : "text-white/60 hover:text-white"
                )}
              >
                {tf}
              </button>
            ))}
          </div>

          <div className="hidden xs:flex px-2.5 py-1 rounded-full bg-accent-lime/10 border border-accent-lime/20 items-center gap-1.5 shrink-0">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-lime opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-lime" />
            </span>
            <span className="text-[11px] font-mono font-semibold text-accent-lime uppercase tracking-wider">
              Live
            </span>
          </div>
        </div>
      </div>

      {/* Modular KPI Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 relative z-10">
        {STAT_TILES.map((stat, i) => (
          <MetricCard
            key={stat.label}
            label={stat.label}
            value={stat.value}
            change={stat.change}
            icon={stat.icon}
            iconColor={stat.color}
            isPositive={stat.isPositive}
            delay={i * 0.08}
          />
        ))}
      </div>

      {/* Modular Interactive Column Chart */}
      <InteractiveColumnChart
        data={currentData}
        timeframe={timeframe}
        onTimeframeChange={setTimeframe}
        activeMetric={activeMetric}
        onMetricChange={setActiveMetric}
        showFilters={true}
        showLegend={true}
        showTrendline={true}
      />
    </div>
  );
};
