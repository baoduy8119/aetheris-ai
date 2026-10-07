"use client";

import React, { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/core/Button";
import { Badge } from "@/components/core/Badge";
import { BentoGrid, BentoItem } from "@/components/core/BentoGrid";
import { TiltCard } from "@/components/animations/TiltCard";
import { MagneticWrapper } from "@/components/animations/MagneticWrapper";
import { InfiniteMarquee } from "@/components/animations/InfiniteMarquee";
import { SvgNodeConnector } from "@/components/animations/SvgNodeConnector";
import { FeatureArchitectureExplorer } from "@/components/widgets/FeatureArchitectureExplorer";
import { WorkflowAutomation } from "@/components/widgets/WorkflowAutomation";
import { PromptFirewallSandbox } from "@/components/widgets/PromptFirewallSandbox";
import {
  Cpu,
  BrainCircuit,
  Database,
  ShieldCheck,
  Zap,
  Globe2,
  Workflow,
  Radio,
  Lock,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  XCircle,
  HelpCircle,
  Code2,
  Terminal,
  Activity,
  Layers,
  ChevronDown,
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const BENCHMARKS = [
  {
    metric: "Time to First Token (TTFT)",
    aetheris: "18ms (Global P95)",
    legacy: "180ms - 450ms",
    winner: true,
  },
  {
    metric: "Prompt Context Cache Hit Rate",
    aetheris: "92% (Radix KV-Cache)",
    legacy: "< 15% (No hierarchical reuse)",
    winner: true,
  },
  {
    metric: "Multi-Agent Swarm Concurrency",
    aetheris: "50,000+ parallel DAG nodes",
    legacy: "< 250 concurrent sessions",
    winner: true,
  },
  {
    metric: "Confidential Hardware Enclave",
    aetheris: "AMD SEV-SNP (Post-Quantum Kyber-1024)",
    legacy: "Shared Multi-Tenant VPC",
    winner: true,
  },
  {
    metric: "Telephony Voice Roundtrip",
    aetheris: "85ms Full-Duplex WebRTC",
    legacy: "650ms - 1,200ms",
    winner: true,
  },
  {
    metric: "Token Cost Optimization",
    aetheris: "60% Savings via semantic cache",
    legacy: "100% full token metering",
    winner: true,
  },
];

const FAQS = [
  {
    q: "How does Aetheris achieve 18ms Time-To-First-Token globally?",
    a: "We deploy pre-warmed bare-metal GPU enclaves across 38 global regions connected by our Anycast neural mesh. Coupled with hierarchical radix tree token caching, prompt prefixes skip full transformer computation entirely.",
  },
  {
    q: "Can we deploy our own custom fine-tuned weights or LoRAs?",
    a: "Yes. You can hot-swap Hugging Face weights, GGUF checkpoints, and custom LoRA adapters in sub-second timeframes directly into your private hardware enclave with zero cluster restart.",
  },
  {
    q: "How does the Zero-Trust Prompt Firewall prevent jailbreaks?",
    a: "Our multi-layer defense runs parallel token classification before the prompt reaches the foundation model. It inspects syntactic role-play archetypes, base64 obfuscation, and PII exfiltration vectors with sub-5ms latency.",
  },
  {
    q: "Is on-premises or air-gapped deployment supported?",
    a: "Yes. Enterprise Sovereign customers can deploy the entire Aetheris runtime stack onto private Kubernetes clusters (EKS, GKE, or bare-metal OpenShift) with 100% offline air-gapped attestation.",
  },
];

const TECH_ECOSYSTEM = [
  "PyTorch 2.4",
  "Hugging Face",
  "vLLM Engine",
  "NVIDIA Triton",
  "Ray Cluster",
  "LangChain Core",
  "LlamaIndex",
  "Qdrant Vector DB",
  "Pinecone",
  "PostgreSQL pgvector",
  "Docker",
  "Kubernetes K8s",
  "WebRTC Voice",
  "AMD SEV-SNP",
];

export default function FeaturesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main className="min-h-screen bg-void text-[#f5f5f7] relative overflow-hidden font-sans">
      <Header />

      {/* 1. HERO SECTION */}
      <section className="relative pt-36 md:pt-48 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-accent-lime/10 rounded-full blur-[200px] pointer-events-none -z-10" />

        <div className="space-y-6 max-w-4xl mx-auto">
          <Badge variant="lime">COMPREHENSIVE CAPABILITIES MATRIX</Badge>
          <h1 className="font-display font-extrabold text-4xl sm:text-6xl md:text-7xl text-white tracking-tight leading-tight">
            The Sovereign Stack for <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-lime via-accent-cyan to-accent-emerald">
              Autonomous Intelligence
            </span>
          </h1>
          <p className="text-neutral-400 text-base sm:text-lg font-sans leading-relaxed max-w-2xl mx-auto">
            Engineered from silicon to UI layer for ultra-low latency, multi-agent parallelism, and complete mathematical sovereignty across enterprise workloads.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <MagneticWrapper>
              <Button variant="primary-lime" size="lg">
                Explore Documentation
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </MagneticWrapper>
            <Button variant="outline" size="lg">
              View Benchmarks
            </Button>
          </div>
        </div>

        {/* Live Metric Counters Pill Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto mt-14 font-mono">
          <div className="p-4 rounded-2xl bg-[#0D0F16] border border-white/10 text-left">
            <span className="text-[10px] text-white/40 block">VOICE TELEPHONY</span>
            <span className="text-xl md:text-2xl font-bold text-accent-cyan">85ms</span>
            <span className="text-[10px] text-white/50 block mt-1">End-to-End Latency</span>
          </div>
          <div className="p-4 rounded-2xl bg-[#0D0F16] border border-white/10 text-left">
            <span className="text-[10px] text-white/40 block">SLA GUARANTEE</span>
            <span className="text-xl md:text-2xl font-bold text-accent-lime">99.99%</span>
            <span className="text-[10px] text-white/50 block mt-1">High-Availability SLA</span>
          </div>
          <div className="p-4 rounded-2xl bg-[#0D0F16] border border-white/10 text-left">
            <span className="text-[10px] text-white/40 block">TOKEN CACHE SAVINGS</span>
            <span className="text-xl md:text-2xl font-bold text-accent-emerald">60%</span>
            <span className="text-[10px] text-white/50 block mt-1">Inference Cost Cut</span>
          </div>
          <div className="p-4 rounded-2xl bg-[#0D0F16] border border-white/10 text-left">
            <span className="text-[10px] text-white/40 block">VECTOR RETRIEVAL</span>
            <span className="text-xl md:text-2xl font-bold text-accent-amber">0.8ms</span>
            <span className="text-[10px] text-white/50 block mt-1">HNSW Cosine P99</span>
          </div>
        </div>
      </section>

      {/* 2. INTERACTIVE MODULAR ARCHITECTURE EXPLORER */}
      <section className="relative px-4 sm:px-6 lg:px-8 pb-28 max-w-7xl mx-auto">
        <FeatureArchitectureExplorer />
      </section>

      {/* 3. CORE CAPABILITIES BENTO MATRIX */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#07080C] border-y border-white/5 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge variant="cyan" className="mb-4">DEEP PLATFORM MATRIX</Badge>
            <h2 className="text-3xl sm:text-5xl font-bold text-white font-display tracking-tight mb-4">
              Engineered Without Compromise
            </h2>
            <p className="text-white/50 text-sm sm:text-base">
              Explore the individual systems that make Aetheris the most advanced AI template on Themeforest.
            </p>
          </div>

          <BentoGrid>
            {/* Card 1: DAG Swarm Engine */}
            <BentoItem colSpan="lg:col-span-8" rowSpan="row-span-1" tag="01 // DAG_SWARM_ORCHESTRATOR">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-accent-lime/10 border border-accent-lime/20 flex items-center justify-center text-accent-lime">
                  <BrainCircuit className="w-5 h-5" />
                </div>
                <h3 className="font-display font-bold text-xl sm:text-2xl text-white">
                  Directed Acyclic Graph (DAG) Swarm Engine
                </h3>
                <p className="text-neutral-400 text-xs sm:text-sm font-sans max-w-lg leading-relaxed">
                  Break down arbitrary complex reasoning challenges into parallelized sub-agent DAG graphs with automated majority-vote consensus and dynamic self-healing error rollbacks.
                </p>
                <div className="pt-2">
                  <SvgNodeConnector color="#D4FF00" />
                </div>
              </div>
            </BentoItem>

            {/* Card 2: Global Anycast Edge */}
            <BentoItem colSpan="lg:col-span-4" rowSpan="row-span-1" tag="02 // ANYCAST_EDGE">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-accent-cyan/10 border border-accent-cyan/20 flex items-center justify-center text-accent-cyan">
                  <Zap className="w-5 h-5" />
                </div>
                <h3 className="font-display font-bold text-lg sm:text-xl text-white">
                  Global Anycast Edge
                </h3>
                <p className="text-neutral-400 text-xs font-sans leading-relaxed">
                  Sub-15ms inference roundtrips routed to the physically nearest GPU cluster worldwide with intelligent regional failover.
                </p>
                <div className="p-3 rounded-lg bg-[#0C0E14] border border-white/5 text-[10px] font-mono text-white/60 space-y-1 mt-4">
                  <div className="flex justify-between">
                    <span>US-East (IAD):</span> <span className="text-accent-cyan">8ms</span>
                  </div>
                  <div className="flex justify-between">
                    <span>EU-Central (FRA):</span> <span className="text-accent-cyan">12ms</span>
                  </div>
                  <div className="flex justify-between">
                    <span>AP-East (TYO):</span> <span className="text-accent-cyan">14ms</span>
                  </div>
                </div>
              </div>
            </BentoItem>

            {/* Card 3: Hierarchical Vector Storage */}
            <BentoItem colSpan="lg:col-span-4" rowSpan="row-span-1" tag="03 // HYBRID_VECTOR_FS">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-accent-amber/10 border border-accent-amber/20 flex items-center justify-center text-accent-amber">
                  <Database className="w-5 h-5" />
                </div>
                <h3 className="font-display font-bold text-lg sm:text-xl text-white">
                  Hierarchical Memory & Radix Cache
                </h3>
                <p className="text-neutral-400 text-xs font-sans leading-relaxed">
                  Persistent semantic indexing across 100M+ document vectors with zero cold-start overhead and Reciprocal Rank Fusion.
                </p>
              </div>
            </BentoItem>

            {/* Card 4: Hardware Enclave Protection */}
            <BentoItem colSpan="lg:col-span-4" rowSpan="row-span-1" tag="04 // QUANTUM_ENCLAVES">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-accent-emerald/10 border border-accent-emerald/20 flex items-center justify-center text-accent-emerald">
                  <Lock className="w-5 h-5" />
                </div>
                <h3 className="font-display font-bold text-lg sm:text-xl text-white">
                  Confidential Hardware Enclaves
                </h3>
                <p className="text-neutral-400 text-xs font-sans leading-relaxed">
                  Enterprise weights and token streams execute exclusively inside AMD SEV-SNP confidential VMs with Kyber-1024 quantum cryptography.
                </p>
              </div>
            </BentoItem>

            {/* Card 5: Full-Duplex Telephony */}
            <BentoItem colSpan="lg:col-span-4" rowSpan="row-span-1" tag="05 // TELEPHONY_VOICE">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-accent-violet/10 border border-accent-violet/20 flex items-center justify-center text-accent-violet">
                  <Radio className="w-5 h-5" />
                </div>
                <h3 className="font-display font-bold text-lg sm:text-xl text-white">
                  Full-Duplex Voice Pipeline
                </h3>
                <p className="text-neutral-400 text-xs font-sans leading-relaxed">
                  85ms conversational turn-taking with live acoustic neural synthesis and instant interruption handling.
                </p>
              </div>
            </BentoItem>
          </BentoGrid>
        </div>
      </section>

      {/* 4. DUAL INTERACTIVE LIVE DEMONSTRATIONS */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="lime" className="mb-4">LIVE INTERACTIVE MODULES</Badge>
          <h2 className="text-3xl sm:text-5xl font-bold text-white font-display tracking-tight mb-4">
            Test the Runtime in Real-Time
          </h2>
          <p className="text-white/50 text-sm sm:text-base">
            Interact with our live workflow automation graph and prompt firewall inspection layers directly below.
          </p>
        </div>

        <div className="space-y-12">
          {/* Module 1: Workflow Automation */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-accent-lime uppercase tracking-wider flex items-center gap-2">
                <Workflow className="w-4 h-4" /> Demonstration 01 // Automated Multi-App Lead Routing
              </span>
              <span className="text-[10px] font-mono text-white/40">Vector SVG Graph</span>
            </div>
            <WorkflowAutomation />
          </div>

          {/* Module 2: Prompt Firewall Sandbox */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-accent-crimson uppercase tracking-wider flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" /> Demonstration 02 // Zero-Trust Adversarial Injection Firewall
              </span>
              <span className="text-[10px] font-mono text-white/40">Real-Time Quarantine</span>
            </div>
            <PromptFirewallSandbox />
          </div>
        </div>
      </section>

      {/* 5. TECHNICAL BENCHMARK COMPARISON MATRIX */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#08090E] border-y border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge variant="cyan" className="mb-4">VERIFIABLE PERFORMANCE</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-white font-display tracking-tight mb-4">
              Aetheris vs Legacy Cloud AI Providers
            </h2>
            <p className="text-white/50 text-sm sm:text-base">
              Standardized engineering benchmarks recorded under 100,000 requests/sec simulated concurrency.
            </p>
          </div>

          {/* Specs Table */}
          <div className="rounded-2xl bg-[#0C0E14] border border-white/10 overflow-hidden shadow-2xl font-mono text-xs">
            <div className="grid grid-cols-12 p-4 bg-[#121622] border-b border-white/10 font-bold text-white/70">
              <div className="col-span-5">BENCHMARK CRITERIA</div>
              <div className="col-span-4 text-accent-lime">AETHERIS SOVEREIGN STACK</div>
              <div className="col-span-3 text-white/40">LEGACY CLOUD AI</div>
            </div>

            <div className="divide-y divide-white/5">
              {BENCHMARKS.map((row, i) => (
                <div
                  key={i}
                  className="grid grid-cols-12 p-4 items-center hover:bg-white/[0.02] transition-colors"
                >
                  <div className="col-span-5 font-bold text-white flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-accent-lime shrink-0" />
                    <span>{row.metric}</span>
                  </div>
                  <div className="col-span-4 text-accent-lime font-bold">
                    {row.aetheris}
                  </div>
                  <div className="col-span-3 text-white/40">
                    {row.legacy}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. TECHNOLOGY INTEGRATION ECOSYSTEM MARQUEE */}
      <section className="py-20 px-4 max-w-7xl mx-auto overflow-hidden">
        <div className="text-center mb-10">
          <span className="text-xs font-mono text-white/40 uppercase tracking-widest block">
            NATIVE INTEGRATIONS & COMPATIBILITY
          </span>
        </div>

        <InfiniteMarquee speed="normal">
          {TECH_ECOSYSTEM.map((tech, idx) => (
            <div
              key={idx}
              className="mx-3 px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 font-mono text-xs font-semibold text-white/70 hover:text-white hover:border-accent-lime/40 transition-all flex items-center gap-2"
            >
              <Cpu className="w-3.5 h-3.5 text-accent-lime" />
              <span>{tech}</span>
            </div>
          ))}
        </InfiniteMarquee>
      </section>

      {/* 7. INTERACTIVE ARCHITECTURE FAQ */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="amber" className="mb-4">ENGINEERING KNOWLEDGE BASE</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-white font-display tracking-tight mb-4">
            Frequently Asked Architecture Questions
          </h2>
          <p className="text-white/50 text-sm">
            Everything your team needs to know about deploying and scaling Aetheris.
          </p>
        </div>

        <div className="space-y-4 font-sans">
          {FAQS.map((faq, i) => {
            const isOpen = openFaq === i;
            return (
              <div
                key={i}
                className="rounded-2xl bg-[#0D0F16] border border-white/10 overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : i)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-white hover:text-accent-lime transition-colors"
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle className="w-4 h-4 text-accent-lime shrink-0" />
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={cn(
                      "w-4 h-4 text-white/40 transition-transform duration-300 shrink-0",
                      isOpen && "rotate-180 text-accent-lime"
                    )}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-neutral-400 font-sans leading-relaxed border-t border-white/5 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 8. CALL TO ACTION SECTION */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center">
        <div className="p-8 sm:p-14 rounded-3xl bg-gradient-to-br from-[#121624] via-[#0E1018] to-[#0A0B10] border border-white/15 relative overflow-hidden shadow-2xl">
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-accent-lime/15 rounded-full blur-[140px] pointer-events-none" />

          <Badge variant="lime" className="mb-6">INSTANT DEPLOYMENT</Badge>
          <h2 className="text-3xl sm:text-5xl font-bold text-white font-display tracking-tight mb-6">
            Ready to Build on the <br />
            <span className="text-accent-lime">Sovereign AI Stack?</span>
          </h2>
          <p className="text-white/60 text-sm sm:text-base max-w-xl mx-auto mb-8">
            Deploy your first multi-agent swarm in under 5 minutes with our complete starter kit and 100k complimentary inference tokens.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <MagneticWrapper>
              <Button variant="primary-lime" size="lg">
                Get Started Free
                <Sparkles className="w-4 h-4 ml-2" />
              </Button>
            </MagneticWrapper>
            <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-black/60 border border-white/10 font-mono text-xs text-white/80">
              <span className="text-accent-lime">$</span> npm i @aetheris/core
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
