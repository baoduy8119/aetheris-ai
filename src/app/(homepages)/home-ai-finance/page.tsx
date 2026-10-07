import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MagneticWrapper } from "@/components/animations/MagneticWrapper";
import { TiltCard } from "@/components/animations/TiltCard";
import { BentoGrid } from "@/components/core/BentoGrid";
import { Button } from "@/components/core/Button";
import { Badge } from "@/components/core/Badge";
import { AnalyticsDashboard } from "@/components/widgets/AnalyticsDashboard";
import { PortfolioRiskSimulator } from "@/components/widgets/PortfolioRiskSimulator";
import { Landmark, ArrowRight, ShieldCheck, LineChart, Wallet } from "lucide-react";

export default function HomeAiFinance() {
  return (
    <main className="min-h-screen bg-void text-white overflow-hidden relative">
      <Header />
      {/* Background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-accent-emerald/10 blur-[150px] rounded-full pointer-events-none" />
      
      {/* Hero Section */}
      <section className="relative pt-28 sm:pt-32 pb-12 sm:pb-16 px-4 sm:px-6 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10 sm:gap-16">
        <div className="flex-1 text-left w-full">
          <Badge variant="emerald" className="mb-4 sm:mb-6">
            <Landmark className="w-4 h-4 mr-2" />
            Next-Gen Financial Intelligence
          </Badge>
          
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold tracking-tighter mb-4 sm:mb-6">
            Banking, <br />
            <span className="text-accent-emerald">Reimagined by AI.</span>
          </h1>
          
          <p className="text-base sm:text-lg text-white/60 max-w-xl mb-8 sm:mb-10 leading-relaxed">
            Automate compliance, detect fraud in real-time, and provide hyper-personalized financial advice to your customers at scale.
          </p>
          
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
            <MagneticWrapper className="w-full sm:w-auto">
              <Button variant="primary" size="lg" className="w-full sm:w-auto justify-center bg-accent-emerald text-void hover:bg-accent-emerald/90">
                Open Account
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </MagneticWrapper>
            <Button variant="outline" size="lg" className="w-full sm:w-auto justify-center">
              Contact Sales
            </Button>
          </div>
        </div>
        
        <div className="flex-1 w-full relative mt-4 lg:mt-0">
          <div className="absolute inset-0 bg-gradient-to-tr from-accent-emerald/20 to-transparent blur-3xl" />
          <TiltCard className="p-2 sm:p-3 rounded-2xl sm:rounded-3xl bg-surface-1/40 backdrop-blur-2xl border border-white/10 relative z-10 shadow-2xl">
            <AnalyticsDashboard />
          </TiltCard>
        </div>
      </section>

      {/* AI Quant Risk & Stress-Test Simulator */}
      <section className="relative px-6 pb-24 max-w-7xl mx-auto z-10">
        <PortfolioRiskSimulator />
      </section>

      {/* Features Bento Grid */}
      <section className="py-24 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <BentoGrid>
            
            {/* Fraud Detection */}
            <div className="col-span-1 md:col-span-2 lg:col-span-8 bg-surface-1 border border-white/5 rounded-3xl p-10 relative overflow-hidden min-h-[360px] flex flex-col justify-between">
              <div className="relative z-10 w-full md:w-2/3">
                <div className="w-14 h-14 rounded-full bg-accent-crimson/10 flex items-center justify-center mb-6">
                  <ShieldCheck className="w-7 h-7 text-accent-crimson" />
                </div>
                <h3 className="text-3xl font-bold mb-4">Zero-Day Fraud Detection</h3>
                <p className="text-white/60 mb-8 text-lg">
                  Our proprietary neural networks analyze millions of data points per millisecond to block suspicious transactions before they happen.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2 text-white/80">
                    <div className="w-2 h-2 rounded-full bg-accent-crimson" /> 99.9% Detection Accuracy
                  </li>
                  <li className="flex items-center gap-2 text-white/80">
                    <div className="w-2 h-2 rounded-full bg-accent-crimson" /> False Positives reduced by 40%
                  </li>
                </ul>
              </div>
              {/* Decorative Graphic */}
              <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none">
                 <ShieldCheck className="w-64 h-64" />
              </div>
            </div>

            {/* Smart Wallet */}
            <div className="col-span-1 md:col-span-1 lg:col-span-4 bg-surface-1 border border-white/5 rounded-3xl p-10 flex flex-col justify-between min-h-[360px]">
              <div>
                <div className="w-14 h-14 rounded-full bg-accent-emerald/10 flex items-center justify-center mb-6">
                  <Wallet className="w-7 h-7 text-accent-emerald" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Smart Treasury</h3>
                <p className="text-white/60">
                  AI-driven liquidity management. Automatically sweep funds into high-yield accounts based on predictive cash flow models.
                </p>
              </div>
            </div>

            {/* Predictive Markets */}
            <div className="col-span-1 md:col-span-2 lg:col-span-12 bg-gradient-to-r from-surface-1 to-surface-2 border border-white/5 rounded-3xl p-10 flex flex-col lg:flex-row items-center gap-10">
               <div className="w-full lg:w-1/2">
                 <Badge variant="lime" className="mb-4">Alpha Generation</Badge>
                 <h3 className="text-3xl font-bold mb-4">Predictive Market Models</h3>
                 <p className="text-white/60 mb-6">
                   Access institutional-grade algorithmic trading tools. Build, backtest, and deploy AI trading strategies without writing a single line of code.
                 </p>
                 <Button variant="outline">
                   <LineChart className="w-4 h-4 mr-2" /> Explore Algorithms
                 </Button>
               </div>
               <div className="w-full lg:w-1/2">
                  <AnalyticsDashboard />
               </div>
            </div>

          </BentoGrid>
        </div>
      </section>
      <Footer />
    </main>
  );
}
