"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Landmark,
  TrendingUp,
  ShieldAlert,
  Sliders,
  DollarSign,
  Activity,
  ArrowUpRight,
  RefreshCw,
  Zap,
} from "lucide-react";
import { cn } from "@/lib/utils";

export function PortfolioRiskSimulator({ className }: { className?: string }) {
  const [volatility, setVolatility] = useState<number>(35); // 0 - 100
  const [leverage, setLeverage] = useState<number>(2); // 1x - 5x
  const [hedgeEnabled, setHedgeEnabled] = useState<boolean>(true);

  // Computed Quant Metrics
  const calculatedSharpe = (2.85 - (volatility * 0.015) + (hedgeEnabled ? 0.45 : -0.2)).toFixed(2);
  const maxDrawdown = (Math.max(4.2, (volatility * 0.28) * (leverage * 0.4) - (hedgeEnabled ? 6.5 : 0))).toFixed(1);
  const projectedYield = (14.2 + (volatility * 0.12) * leverage - (hedgeEnabled ? 1.5 : 0)).toFixed(1);
  const varScore = (0.85 + (volatility * 0.02) * (leverage * 0.5)).toFixed(2);

  return (
    <div
      className={cn(
        "relative w-full rounded-2xl bg-[#090D10] border border-white/10 p-4 sm:p-5 md:p-6 overflow-hidden shadow-2xl font-mono",
        className
      )}
    >
      {/* Ambient background glow */}
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-accent-emerald/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 pb-4 sm:pb-5 border-b border-white/10">
        <div className="flex items-center gap-2.5 sm:gap-3">
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-accent-emerald/10 border border-accent-emerald/30 flex items-center justify-center text-accent-emerald shrink-0">
            <Landmark className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>
          <div>
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
              <h3 className="text-sm sm:text-base font-bold text-white font-display">AI Quant Stress-Test & Risk Simulator</h3>
              <span className="px-2 py-0.5 rounded-full text-[9px] sm:text-[10px] font-mono font-semibold bg-accent-emerald/20 text-accent-emerald border border-accent-emerald/30">
                Monte Carlo Engine
              </span>
            </div>
            <p className="text-[11px] sm:text-xs text-white/50 font-mono">
              Real-time volatility scenario modeling & automated algorithmic hedging
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 text-[11px] sm:text-xs font-mono">
          <span className="px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg bg-white/5 border border-white/10 text-white/80">
            Portfolio NAV: <strong className="text-accent-emerald">$12,450,000</strong>
          </span>
        </div>
      </div>

      {/* Interactive Controls & Chart Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 mt-5">
        {/* Left Column: Volatility & Stress Controls */}
        <div className="lg:col-span-4 p-5 rounded-xl bg-[#0F141B] border border-white/10 space-y-5">
          <div className="flex items-center justify-between pb-2 border-b border-white/10">
            <span className="text-xs font-bold text-white flex items-center gap-1.5">
              <Sliders className="w-3.5 h-3.5 text-accent-emerald" />
              Scenario Parameters
            </span>
            <span className="text-[10px] text-white/40">10k Iterations</span>
          </div>

          {/* Volatility Slider */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs">
              <span className="text-white/60">Macro Volatility Index</span>
              <span className="text-accent-emerald font-bold">{volatility} VIX</span>
            </div>
            <input
              type="range"
              min="10"
              max="90"
              value={volatility}
              onChange={(e) => setVolatility(Number(e.target.value))}
              className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-accent-emerald"
            />
            <div className="flex justify-between text-[10px] text-white/30">
              <span>Low (10)</span>
              <span>Extreme (90)</span>
            </div>
          </div>

          {/* Leverage Factor */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs">
              <span className="text-white/60">Algorithmic Leverage</span>
              <span className="text-white font-bold">{leverage}x</span>
            </div>
            <div className="grid grid-cols-4 gap-1.5">
              {[1, 2, 3, 5].map((lvl) => (
                <button
                  key={lvl}
                  onClick={() => setLeverage(lvl)}
                  className={cn(
                    "py-1 rounded text-xs transition-all border",
                    leverage === lvl
                      ? "bg-accent-emerald/20 border-accent-emerald text-accent-emerald font-bold"
                      : "bg-white/5 border-white/5 text-white/50 hover:bg-white/10"
                  )}
                >
                  {lvl}x
                </button>
              ))}
            </div>
          </div>

          {/* Automated Delta-Neutral Hedging Toggle */}
          <div className="pt-2 border-t border-white/10">
            <button
              onClick={() => setHedgeEnabled(!hedgeEnabled)}
              className="w-full flex items-center justify-between p-3 rounded-lg bg-[#141B24] border border-white/10 hover:border-white/20 transition-all"
            >
              <div className="text-left">
                <div className="text-xs font-bold text-white flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-accent-emerald" />
                  Delta-Neutral Hedging
                </div>
                <div className="text-[10px] text-white/40 font-sans">
                  Auto-offset tail risk options
                </div>
              </div>
              <div
                className={cn(
                  "w-9 h-5 rounded-full p-0.5 transition-colors duration-200 ease-in-out",
                  hedgeEnabled ? "bg-accent-emerald" : "bg-white/20"
                )}
              >
                <div
                  className={cn(
                    "w-4 h-4 rounded-full bg-void shadow-md transform transition-transform duration-200 ease-in-out",
                    hedgeEnabled ? "translate-x-4" : "translate-x-0"
                  )}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Right Column: Simulation Curve & Quant Output */}
        <div className="lg:col-span-8 p-5 rounded-xl bg-[#0F141B] border border-white/10 flex flex-col justify-between space-y-4">
          {/* Key Metric Gauges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-3 rounded-lg bg-[#141B24] border border-white/5">
              <span className="text-[10px] text-white/40 block">Projected APY</span>
              <span className="text-base font-bold text-accent-emerald font-mono">+{projectedYield}%</span>
            </div>
            <div className="p-3 rounded-lg bg-[#141B24] border border-white/5">
              <span className="text-[10px] text-white/40 block">Sharpe Ratio</span>
              <span className="text-base font-bold text-white font-mono">{calculatedSharpe}</span>
            </div>
            <div className="p-3 rounded-lg bg-[#141B24] border border-white/5">
              <span className="text-[10px] text-white/40 block">Max Drawdown</span>
              <span className="text-base font-bold text-[#FF003C] font-mono">-{maxDrawdown}%</span>
            </div>
            <div className="p-3 rounded-lg bg-[#141B24] border border-white/5">
              <span className="text-[10px] text-white/40 block">VaR (99% 1-Day)</span>
              <span className="text-base font-bold text-white/80 font-mono">${varScore}M</span>
            </div>
          </div>

          {/* SVG Monte Carlo Simulated Curve */}
          <div className="relative w-full h-[140px] rounded-lg bg-[#0A0D12] border border-white/5 overflow-hidden flex items-center justify-center">
            <svg viewBox="0 0 600 140" className="w-full h-full">
              <defs>
                <linearGradient id="quantGrad" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="600" y2="0">
                  <stop offset="0%" stopColor="#00FF9D" stopOpacity="0.2" />
                  <stop offset="70%" stopColor="#00FF9D" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#D4FF00" stopOpacity="0.9" />
                </linearGradient>
              </defs>

              {/* Grid Lines */}
              <line x1="0" y1="70" x2="600" y2="70" stroke="rgba(255,255,255,0.06)" strokeDasharray="4 4" />
              <line x1="0" y1="105" x2="600" y2="105" stroke="rgba(255,255,255,0.04)" strokeDasharray="4 4" />
              <line x1="0" y1="35" x2="600" y2="35" stroke="rgba(255,255,255,0.04)" strokeDasharray="4 4" />

              {/* Stress Fan Dispersion Range */}
              <path
                d={`M 0 70 Q 200 ${70 - volatility * 0.4} 400 ${60 - volatility * 0.6} L 600 ${40 - volatility * 0.8} L 600 ${100 + volatility * 0.4} Q 400 ${80 + volatility * 0.3} 200 70 Z`}
                fill="rgba(0, 255, 157, 0.05)"
              />

              {/* Median Return Trajectory */}
              <path
                d={`M 0 70 Q 150 ${65 - volatility * 0.2} 300 ${55 - volatility * 0.3} T 600 ${35 - volatility * 0.4}`}
                stroke="url(#quantGrad)"
                strokeWidth="2.5"
                fill="none"
              />

              {/* Benchmark Flat Line */}
              <path
                d="M 0 70 Q 300 68 600 62"
                stroke="rgba(255,255,255,0.2)"
                strokeWidth="1.5"
                strokeDasharray="4 4"
                fill="none"
              />
            </svg>

            <div className="absolute top-2 right-3 text-[10px] text-accent-emerald font-mono bg-accent-emerald/10 px-2 py-0.5 rounded border border-accent-emerald/20">
              Monte Carlo Median Path
            </div>
          </div>

          {/* Status & Automated Execution Bar */}
          <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs">
            <span className="text-white/40 text-[11px]">
              Hedging Model: <strong className="text-white/80">{hedgeEnabled ? "Active AI Micro-Hedging" : "Unhedged Exposure"}</strong>
            </span>
            <button className="px-3.5 py-1.5 rounded-lg bg-accent-emerald text-void text-xs font-bold font-mono hover:bg-accent-emerald/90 transition-all flex items-center gap-1.5 shadow-[0_0_15px_rgba(0,255,157,0.3)]">
              <span>Execute Rebalance</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
