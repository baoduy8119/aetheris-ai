import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MagneticWrapper } from "@/components/animations/MagneticWrapper";
import { TiltCard } from "@/components/animations/TiltCard";
import { BentoGrid } from "@/components/core/BentoGrid";
import { Button } from "@/components/core/Button";
import { Badge } from "@/components/core/Badge";
import { GlitchText } from "@/components/animations/GlitchText";
import { AnalyticsDashboard } from "@/components/widgets/AnalyticsDashboard";
import { WorkflowAutomation } from "@/components/widgets/WorkflowAutomation";
import { AiChatInterface } from "@/components/widgets/AiChatInterface";
import { CustomerJourneyMatrix } from "@/components/widgets/CustomerJourneyMatrix";
import { ArrowRight, BarChart3, Users, Zap, Shield } from "lucide-react";

export default function HomeAiCrm() {
  return (
    <main className="min-h-screen bg-void text-white overflow-hidden relative">
      <Header />
      
      {/* Background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-accent-cyan/20 blur-[120px] rounded-full pointer-events-none" />
      
      {/* Hero Section */}
      <section className="relative pt-28 sm:pt-32 pb-12 sm:pb-20 px-4 sm:px-6 max-w-7xl mx-auto flex flex-col items-center text-center">
        <Badge variant="cyan" className="mb-4 sm:mb-6">
          <Zap className="w-4 h-4 mr-2" />
          Aetheris CRM v2.0
        </Badge>
        
        <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold tracking-tighter mb-6 sm:mb-8 max-w-4xl">
          Supercharge your <GlitchText text="Sales Pipeline" className="text-accent-cyan" /> with AI.
        </h1>
        
        <p className="text-sm sm:text-lg text-white/60 max-w-2xl mb-8 sm:mb-10">
          Automate lead generation, predict customer behavior, and close deals faster with our next-generation AI CRM platform. Built for modern sales teams.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto">
          <MagneticWrapper className="w-full sm:w-auto">
            <Button variant="primary" size="lg" className="w-full sm:w-auto bg-accent-cyan text-void hover:bg-accent-cyan/90">
              Start Free Trial
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </MagneticWrapper>
          <MagneticWrapper className="w-full sm:w-auto">
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              Book Demo
            </Button>
          </MagneticWrapper>
        </div>
      </section>

      {/* Main Dashboard Preview */}
      <section className="relative px-4 sm:px-6 pb-14 sm:pb-20 max-w-6xl mx-auto">
        <TiltCard className="p-2 rounded-3xl bg-surface-1/50 backdrop-blur-xl border border-white/10">
          <AnalyticsDashboard />
        </TiltCard>
      </section>

      {/* Customer Journey & Deal Velocity Matrix */}
      <section className="relative px-4 sm:px-6 pb-16 sm:pb-28 max-w-7xl mx-auto">
        <CustomerJourneyMatrix />
      </section>

      {/* Features Bento Grid */}
      <section className="py-16 sm:py-32 px-4 sm:px-6 bg-surface-0 border-y border-surface-2 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-20">
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight mb-3 sm:mb-4">Everything you need to scale</h2>
            <p className="text-white/50 text-sm sm:text-base">Powered by advanced machine learning models.</p>
          </div>
          
          <BentoGrid>
            {/* Predictive Analytics */}
            <div className="col-span-1 md:col-span-1 lg:col-span-4 bg-surface-1 border border-white/5 rounded-2xl sm:rounded-3xl p-6 sm:p-8 flex flex-col justify-between min-h-[240px] sm:min-h-[260px]">
              <div>
                <div className="w-12 h-12 rounded-full bg-accent-amber/10 flex items-center justify-center mb-5 sm:mb-6">
                  <BarChart3 className="w-6 h-6 text-accent-amber" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">Predictive Forecasting</h3>
                <p className="text-white/60 text-xs sm:text-sm">
                  Know which deals will close before they do. Our AI analyzes historical multi-touch data to forecast revenue with 95% accuracy.
                </p>
              </div>
            </div>

            {/* AI Assistant */}
            <div className="col-span-1 md:col-span-1 lg:col-span-4 bg-surface-1 border border-white/5 rounded-2xl sm:rounded-3xl p-6 sm:p-8 flex flex-col justify-between min-h-[240px] sm:min-h-[260px]">
              <div>
                <div className="w-12 h-12 rounded-full bg-accent-cyan/10 flex items-center justify-center mb-5 sm:mb-6">
                  <Users className="w-6 h-6 text-accent-cyan" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">AI Sales Copilot</h3>
                <p className="text-white/60 text-xs sm:text-sm">
                  Your 24/7 autonomous deal assistant. Draft contextual emails, summarize call transcripts, and receive objection handling cues in real-time.
                </p>
              </div>
            </div>

            {/* Enterprise Security */}
            <div className="col-span-1 md:col-span-1 lg:col-span-4 bg-surface-1 border border-white/5 rounded-2xl sm:rounded-3xl p-6 sm:p-8 flex flex-col justify-between min-h-[240px] sm:min-h-[260px]">
              <div>
                <div className="w-12 h-12 rounded-full bg-accent-emerald/10 flex items-center justify-center mb-5 sm:mb-6">
                  <Shield className="w-6 h-6 text-accent-emerald" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">Enterprise Governance</h3>
                <p className="text-white/60 text-xs sm:text-sm">
                  SOC-2 Type II certified. All customer CRM records and prompt embeddings are strictly isolated inside private zero-retention enclaves.
                </p>
              </div>
            </div>

            {/* Full-Width Showcase: Smart Workflows Pipeline */}
            <div className="col-span-1 md:col-span-2 lg:col-span-12 bg-gradient-to-br from-surface-1 to-surface-2 border border-white/5 rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 flex flex-col lg:flex-row items-center gap-6 sm:gap-10 overflow-hidden">
              <div className="w-full lg:w-1/3 flex flex-col justify-center">
                <Badge variant="lime" className="mb-3 sm:mb-4 w-fit">Multi-Tool Orchestration</Badge>
                <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 font-display">Smart Workflows Pipeline</h3>
                <p className="text-white/60 mb-5 sm:mb-6 leading-relaxed text-sm sm:text-base">
                  Connect your web forms, CRM, and calendar tools into one autonomous execution graph. From lead scoring to follow-up emails, automate your entire pipeline without writing a line of code.
                </p>
                <Button variant="outline" className="border-accent-lime/50 text-accent-lime hover:bg-accent-lime/10 w-full sm:w-fit justify-center">
                  Explore 200+ Integrations
                </Button>
              </div>
              <div className="w-full lg:w-2/3 h-[300px] sm:h-[360px] rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl border border-white/5">
                <WorkflowAutomation />
              </div>
            </div>

            {/* Full-Width Showcase: Conversational CRM */}
            <div className="col-span-1 md:col-span-2 lg:col-span-12 bg-gradient-to-br from-surface-1 to-surface-2 border border-white/5 rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 flex flex-col lg:flex-row items-center gap-6 sm:gap-10 overflow-hidden">
              <div className="w-full lg:w-1/3 flex flex-col justify-center order-2 lg:order-1">
                <Badge variant="emerald" className="mb-3 sm:mb-4 w-fit">Natural Language Interface</Badge>
                <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 font-display">Conversational CRM</h3>
                <p className="text-white/60 mb-5 sm:mb-6 leading-relaxed text-sm sm:text-base">
                  Stop clicking through clunky table views. Simply ask Aetheris to update deal stages, extract meeting action items, or generate quarterly pipeline summaries using natural language.
                </p>
                <ul className="space-y-3 text-white/70 font-mono text-xs">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent-emerald" /> Multi-turn Contextual Memory
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent-emerald" /> Direct Bi-directional CRM Sync
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent-emerald" /> Automated Meeting Follow-ups
                  </li>
                </ul>
              </div>
              <div className="w-full lg:w-2/3 h-[380px] rounded-2xl overflow-hidden shadow-2xl border border-white/5 order-1 lg:order-2">
                <AiChatInterface />
              </div>
            </div>
          </BentoGrid>
        </div>
      </section>
      <Footer />
    </main>
  );
}
