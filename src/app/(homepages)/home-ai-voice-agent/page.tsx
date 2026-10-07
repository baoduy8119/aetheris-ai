import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MagneticWrapper } from "@/components/animations/MagneticWrapper";
import { TiltCard } from "@/components/animations/TiltCard";
import { BentoGrid } from "@/components/core/BentoGrid";
import { Button } from "@/components/core/Button";
import { Badge } from "@/components/core/Badge";
import { VoiceAgentVisualizer } from "@/components/widgets/VoiceAgentVisualizer";
import { VoiceConversationSimulator } from "@/components/widgets/VoiceConversationSimulator";
import { Mic, PhoneCall, Volume2, Globe, Radio, Sparkles, ArrowRight, Zap } from "lucide-react";

export default function HomeAiVoiceAgent() {
  return (
    <main className="min-h-screen bg-void text-white overflow-hidden relative">
      <Header />

      {/* Background Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[600px] bg-accent-violet/15 blur-[160px] rounded-full pointer-events-none" />

      {/* Hero Section */}
      <section className="relative pt-28 sm:pt-32 pb-12 sm:pb-16 px-4 sm:px-6 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10 sm:gap-16">
        <div className="flex-1 text-left w-full">
          <Badge variant="cyan" className="mb-4 sm:mb-6">
            <Radio className="w-4 h-4 mr-2" />
            Human-Level Conversational Voice AI
          </Badge>

          <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold tracking-tighter mb-4 sm:mb-6">
            Voice Agents with <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-violet via-accent-cyan to-accent-lime">
              Sub-150ms Speed.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-white/60 max-w-xl mb-8 sm:mb-10 leading-relaxed">
            Build autonomous phone support agents, interactive speech copilots, and real-time translators that sound completely natural and never drop context.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
            <MagneticWrapper className="w-full sm:w-auto">
              <Button variant="primary-lime" size="lg" className="w-full sm:w-auto justify-center">
                Deploy Voice Agent
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </MagneticWrapper>
            <Button variant="outline" size="lg" className="w-full sm:w-auto justify-center">
              Listen to Demos
            </Button>
          </div>
        </div>

        <div className="flex-1 w-full mt-4 lg:mt-0">
          <TiltCard className="p-2 sm:p-3 rounded-2xl sm:rounded-3xl bg-surface-1/40 backdrop-blur-2xl border border-white/10 shadow-2xl">
            <VoiceAgentVisualizer />
          </TiltCard>
        </div>
      </section>

      {/* Interactive Voice Conversation Simulator */}
      <section className="relative px-6 pb-24 max-w-7xl mx-auto z-10">
        <VoiceConversationSimulator />
      </section>

      {/* Features Bento Grid */}
      <section className="py-24 px-6 relative z-10 border-t border-white/5 bg-[#080A0E]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight mb-4">Enterprise Voice Capabilities</h2>
            <p className="text-white/50">Engineered for telecommunication concurrency and ultra-fidelity audio.</p>
          </div>

          <BentoGrid>
            {/* Multilingual Support */}
            <div className="col-span-1 md:col-span-1 lg:col-span-4 bg-surface-1 border border-white/5 rounded-3xl p-8 flex flex-col justify-between min-h-[300px]">
              <div>
                <div className="w-12 h-12 rounded-xl bg-accent-violet/10 flex items-center justify-center mb-6">
                  <Globe className="w-6 h-6 text-accent-violet" />
                </div>
                <h3 className="text-xl font-bold mb-3">95+ Native Languages</h3>
                <p className="text-white/60 text-sm">
                  Zero-shot accent adaptation and simultaneous real-time translation with native cultural nuance.
                </p>
              </div>
            </div>

            {/* Ultra-low Latency */}
            <div className="col-span-1 md:col-span-1 lg:col-span-4 bg-surface-1 border border-white/5 rounded-3xl p-8 flex flex-col justify-between min-h-[300px]">
              <div>
                <div className="w-12 h-12 rounded-xl bg-accent-cyan/10 flex items-center justify-center mb-6">
                  <Zap className="w-6 h-6 text-accent-cyan" />
                </div>
                <h3 className="text-xl font-bold mb-3">120ms End-to-End Latency</h3>
                <p className="text-white/60 text-sm">
                  Powered by custom WebRTC and WebSocket streaming pipelines for natural, interruption-ready dialogue.
                </p>
              </div>
            </div>

            {/* SIP Trunk & Telecom */}
            <div className="col-span-1 md:col-span-1 lg:col-span-4 bg-surface-1 border border-white/5 rounded-3xl p-8 flex flex-col justify-between min-h-[300px]">
              <div>
                <div className="w-12 h-12 rounded-xl bg-accent-lime/10 flex items-center justify-center mb-6">
                  <PhoneCall className="w-6 h-6 text-accent-lime" />
                </div>
                <h3 className="text-xl font-bold mb-3">SIP & Twilio Integration</h3>
                <p className="text-white/60 text-sm">
                  Plug directly into your existing call center hardware or cloud PBX with one-click SIP URI routing.
                </p>
              </div>
            </div>

            {/* Interactive Voice Hub */}
            <div className="col-span-1 md:col-span-2 lg:col-span-12 bg-gradient-to-br from-surface-1 to-surface-2 border border-white/5 rounded-3xl p-10 flex flex-col lg:flex-row items-center gap-10">
              <div className="w-full lg:w-1/3">
                <Badge variant="cyan" className="mb-4">Full Duplex Audio</Badge>
                <h3 className="text-3xl font-bold mb-4">Interruption-Aware Intelligence</h3>
                <p className="text-white/60 mb-6">
                  Traditional voice bots wait for silence. Aetheris hears human interjections in real-time, immediately pausing its output to listen just like a live human operator.
                </p>
                <Button variant="outline">
                  <Mic className="w-4 h-4 mr-2" /> Test Microphone Feed
                </Button>
              </div>
              <div className="w-full lg:w-2/3 h-[380px] rounded-xl overflow-hidden border border-white/5 shadow-2xl">
                <VoiceAgentVisualizer />
              </div>
            </div>
          </BentoGrid>
        </div>
      </section>

      <Footer />
    </main>
  );
}
