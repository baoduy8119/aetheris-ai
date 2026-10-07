import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MagneticWrapper } from "@/components/animations/MagneticWrapper";
import { TiltCard } from "@/components/animations/TiltCard";
import { BentoGrid } from "@/components/core/BentoGrid";
import { Button } from "@/components/core/Button";
import { Badge } from "@/components/core/Badge";
import { SecurityThreatStream } from "@/components/widgets/SecurityThreatStream";
import { PromptFirewallSandbox } from "@/components/widgets/PromptFirewallSandbox";
import { ShieldCheck, ShieldAlert, Lock, Terminal, Fingerprint, ArrowRight, EyeOff, Server } from "lucide-react";

export default function HomeAiSecurity() {
  return (
    <main className="min-h-screen bg-void text-white overflow-hidden relative">
      <Header />

      {/* Background Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[600px] bg-accent-crimson/15 blur-[160px] rounded-full pointer-events-none" />

      {/* Hero Section */}
      <section className="relative pt-28 sm:pt-32 pb-12 sm:pb-16 px-4 sm:px-6 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10 sm:gap-16">
        <div className="flex-1 text-left w-full">
          <Badge variant="crimson" className="mb-4 sm:mb-6">
            <ShieldAlert className="w-4 h-4 mr-2" />
            AI Guardrails & Zero-Trust Security
          </Badge>

          <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold tracking-tighter mb-4 sm:mb-6">
            Shield Your LLMs from <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-crimson via-accent-amber to-accent-lime">
              Zero-Day Injections.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-white/60 max-w-xl mb-8 sm:mb-10 leading-relaxed">
            Real-time prompt firewall, automated PII sanitization, and vector database vulnerability scanning for enterprise AI models in production.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
            <MagneticWrapper className="w-full sm:w-auto">
              <Button variant="primary-lime" size="lg" className="w-full sm:w-auto justify-center">
                Start Free Security Audit
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </MagneticWrapper>
            <Button variant="outline" size="lg" className="w-full sm:w-auto justify-center">
              View Threat Matrix
            </Button>
          </div>
        </div>

        <div className="flex-1 w-full mt-4 lg:mt-0">
          <TiltCard className="p-2 sm:p-3 rounded-2xl sm:rounded-3xl bg-surface-1/40 backdrop-blur-2xl border border-white/10 shadow-2xl">
            <SecurityThreatStream />
          </TiltCard>
        </div>
      </section>

      {/* Live Prompt Firewall & Attack Vector Sandbox */}
      <section className="relative px-6 pb-24 max-w-7xl mx-auto z-10">
        <PromptFirewallSandbox />
      </section>

      {/* Features Bento Grid */}
      <section className="py-24 px-6 relative z-10 border-t border-white/5 bg-[#08090C]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight mb-4">Autonomous AI Defense</h2>
            <p className="text-white/50">Comprehensive enterprise protection for multi-agent swarms.</p>
          </div>

          <BentoGrid>
            {/* Prompt Jailbreak Defense */}
            <div className="col-span-1 md:col-span-1 lg:col-span-4 bg-surface-1 border border-white/5 rounded-3xl p-8 flex flex-col justify-between min-h-[300px]">
              <div>
                <div className="w-12 h-12 rounded-xl bg-accent-crimson/10 flex items-center justify-center mb-6">
                  <ShieldAlert className="w-6 h-6 text-accent-crimson" />
                </div>
                <h3 className="text-xl font-bold mb-3">Jailbreak Detection</h3>
                <p className="text-white/60 text-sm">
                  Detects sophisticated multi-turn adversarial prompt attacks and role-play exploits before execution.
                </p>
              </div>
            </div>

            {/* PII Masking */}
            <div className="col-span-1 md:col-span-1 lg:col-span-4 bg-surface-1 border border-white/5 rounded-3xl p-8 flex flex-col justify-between min-h-[300px]">
              <div>
                <div className="w-12 h-12 rounded-xl bg-accent-amber/10 flex items-center justify-center mb-6">
                  <EyeOff className="w-6 h-6 text-accent-amber" />
                </div>
                <h3 className="text-xl font-bold mb-3">Zero-Latency PII Masking</h3>
                <p className="text-white/60 text-sm">
                  Automatically redacts SSNs, credit cards, health records, and secret API keys with 99.99% precision.
                </p>
              </div>
            </div>

            {/* Enclave Execution */}
            <div className="col-span-1 md:col-span-1 lg:col-span-4 bg-surface-1 border border-white/5 rounded-3xl p-8 flex flex-col justify-between min-h-[300px]">
              <div>
                <div className="w-12 h-12 rounded-xl bg-accent-emerald/10 flex items-center justify-center mb-6">
                  <Lock className="w-6 h-6 text-accent-emerald" />
                </div>
                <h3 className="text-xl font-bold mb-3">Confidential Hardware</h3>
                <p className="text-white/60 text-sm">
                  Run private inference inside hardware enclaves with post-quantum encryption and zero data persistence.
                </p>
              </div>
            </div>

            {/* Live Security Monitor Card */}
            <div className="col-span-1 md:col-span-2 lg:col-span-12 bg-gradient-to-br from-surface-1 to-surface-2 border border-white/5 rounded-3xl p-10 flex flex-col lg:flex-row items-center gap-10">
              <div className="w-full lg:w-1/3">
                <Badge variant="crimson" className="mb-4">Real-Time Threat Telemetry</Badge>
                <h3 className="text-3xl font-bold mb-4">Inline Token Firewall</h3>
                <p className="text-white/60 mb-6">
                  Inspect incoming prompts and outgoing completions on the fly with sub-2 millisecond latency. Automatically quarantine compromised user sessions.
                </p>
                <Button variant="outline">
                  <Terminal className="w-4 h-4 mr-2" /> Inspect Audit Log
                </Button>
              </div>
              <div className="w-full lg:w-2/3 h-[380px] rounded-xl overflow-hidden border border-white/5 shadow-2xl">
                <SecurityThreatStream />
              </div>
            </div>
          </BentoGrid>
        </div>
      </section>

      <Footer />
    </main>
  );
}
