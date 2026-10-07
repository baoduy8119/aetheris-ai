"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Layers,
  Cpu,
  BrainCircuit,
  Database,
  ShieldCheck,
  Zap,
  Terminal,
  Code2,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Server,
  Lock,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface ArchitectureTier {
  id: string;
  title: string;
  badge: string;
  icon: React.ElementType;
  color: string;
  description: string;
  specs: { label: string; value: string }[];
  codeSnippet: string;
  capabilities: string[];
}

const TIERS: ArchitectureTier[] = [
  {
    id: "tier-1",
    title: "Application & Agent Orchestration",
    badge: "Layer 01 // FRONTEND & MULTI-AGENT SWARMS",
    icon: BrainCircuit,
    color: "#D4FF00",
    description: "Declarative autonomous agent DAG routing with stateful session persistence, majority-consensus voting, and multi-modal tool calling across REST and gRPC endpoints.",
    specs: [
      { label: "Agent Concurrency", value: "50,000+ Swarms" },
      { label: "State Sync", value: "Sub-5ms CRDT" },
      { label: "Tool Schema", value: "OpenAI / Anthropic Compatible" },
    ],
    codeSnippet: `import { AgentSwarm, ToolSchema } from "@aetheris/core";

// Define autonomous multi-agent consensus cluster
const swarm = new AgentSwarm({
  consensus: "majority_vote",
  telemetry: "live_trace",
  fallbackModel: "aetheris-neural-v2",
});

await swarm.dispatch({
  prompt: "Analyze Q3 market volatility & execute delta hedging",
  tools: [CRMTool, PortfolioEngine, ComplianceGuard],
});`,
    capabilities: [
      "Dynamic DAG workflow branching with failure rollback",
      "Hierarchical agent supervision and critique loops",
      "Bi-directional WebRTC voice streaming & telemetry hooks",
    ],
  },
  {
    id: "tier-2",
    title: "High-Throughput Inference Engine",
    badge: "Layer 02 // NEURAL ACCELERATION",
    icon: Zap,
    color: "#00F0FF",
    description: "Speculative decoding and continuous kernel batching running on bare-metal GPU clusters. Eliminates context latency through hierarchical KV-cache memory reuse.",
    specs: [
      { label: "Token Throughput", value: "145 tokens/sec per stream" },
      { label: "Time-To-First-Token", value: "18ms global avg" },
      { label: "Quantization", value: "FP16 / INT4 AWQ Support" },
    ],
    codeSnippet: `// Speculative decoding engine initialization
const engine = new InferenceRuntime({
  precision: "fp16",
  speculativeDrafting: true,
  cachePolicy: "hierarchical_radix",
  maxBatchTokens: 65536,
});

const stream = await engine.streamTokenContext(sessionPayload);`,
    capabilities: [
      "Radix tree token prefix caching (90% cache hit on prompt repeats)",
      "Zero cold-start container spin-up via pre-warmed VMM enclaves",
      "Cross-region GPU auto-failover with 99.99% uptime SLA",
    ],
  },
  {
    id: "tier-3",
    title: "Decentralized Vector & Memory Edge",
    badge: "Layer 03 // VECTOR DB & HYBRID SEARCH",
    icon: Database,
    color: "#00FF9D",
    description: "Ultra-scalable HNSW vector storage integrated with BM25 keyword search. Indexes millions of document chunks with sub-millisecond cosine distance lookups.",
    specs: [
      { label: "Index Capacity", value: "100M+ Vectors / Cluster" },
      { label: "Search Latency", value: "0.8ms at p99" },
      { label: "Distance Metrics", value: "Cosine, DotProduct, Euclidean" },
    ],
    codeSnippet: `const index = new VectorEdgeStore({
  dimension: 1536,
  metric: "cosine",
  hnswConfig: { m: 32, efSearch: 128 },
});

const results = await index.hybridQuery({
  embedding: queryTensor,
  text: "SOC-2 Type II compliance controls",
  topK: 10,
});`,
    capabilities: [
      "Context-aware sliding window chunking with metadata preservation",
      "Real-time streaming index updates without index rebuild locks",
      "Hybrid dense-sparse vector scoring with Reciprocal Rank Fusion",
    ],
  },
  {
    id: "tier-4",
    title: "Post-Quantum Hardware Security",
    badge: "Layer 04 // ZERO-TRUST ENCLAVES",
    icon: Lock,
    color: "#FF003C",
    description: "AMD SEV-SNP confidential computing environment with Kyber-1024 encryption. Guarantees that neither cloud vendors nor malicious actors can inspect weights or token states.",
    specs: [
      { label: "Enclave Protocol", value: "AMD SEV-SNP / Intel TDX" },
      { label: "Cryptography", value: "FIPS 140-3 & Kyber-1024" },
      { label: "Data Retention", value: "Strict Zero-Retention Enforced" },
    ],
    codeSnippet: `// Hardware Enclave Attestation & Zero-Retention Tunnel
const enclave = new ConfidentialEnclaveClient({
  attestationReport: "sev_snp_v2",
  pqcAlgorithm: "ML-KEM-1024",
  zeroRetentionPolicy: true,
});

await enclave.verifyHardwareHash(clusterCertificate);`,
    capabilities: [
      "Real-time prompt injection firewall with semantic quarantine",
      "Automated PII detection & pseudonymization pipeline",
      "Tamper-proof cryptographic audit log with SHA-256 verification",
    ],
  },
];

export function FeatureArchitectureExplorer({ className }: { className?: string }) {
  const [activeTier, setActiveTier] = useState<ArchitectureTier>(TIERS[0]);

  return (
    <div
      className={cn(
        "relative w-full rounded-3xl bg-[#0A0C12] border border-white/10 p-4 sm:p-6 md:p-8 overflow-hidden shadow-2xl font-mono",
        className
      )}
    >
      {/* Background ambient lighting */}
      <div
        className="absolute -top-20 right-1/4 w-96 h-96 rounded-full blur-[140px] pointer-events-none transition-colors duration-500"
        style={{ backgroundColor: `${activeTier.color}15` }}
      />

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 sm:gap-4 pb-4 sm:pb-6 border-b border-white/10">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span
              className="w-2.5 h-2.5 rounded-full shrink-0"
              style={{ backgroundColor: activeTier.color, boxShadow: `0 0 10px ${activeTier.color}` }}
            />
            <h3 className="text-base sm:text-lg md:text-xl font-bold text-white font-display">
              Modular Architecture Stack Explorer
            </h3>
          </div>
          <p className="text-[11px] sm:text-xs text-white/50 font-sans">
            Explore the four foundational layers powering Aetheris AI's sovereign enterprise runtime
          </p>
        </div>

        <div className="flex items-center gap-2 text-[11px] sm:text-xs font-mono text-white/60">
          <span className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10">
            Stack Integrity: <strong className="text-white">100% Sovereign</strong>
          </span>
        </div>
      </div>

      {/* Layer Navigation Tabs */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-2.5 mt-5 sm:mt-6">
        {TIERS.map((tier) => {
          const Icon = tier.icon;
          const isSelected = activeTier.id === tier.id;
          return (
            <button
              key={tier.id}
              onClick={() => setActiveTier(tier)}
              className={cn(
                "p-3.5 rounded-xl border text-left transition-all duration-200 flex flex-col gap-2",
                isSelected
                  ? "bg-[#141824] border-white/30 shadow-lg"
                  : "bg-[#10121A]/60 border-white/5 hover:border-white/15 hover:bg-[#121622]"
              )}
            >
              <div className="flex items-center justify-between">
                <Icon
                  className="w-5 h-5 transition-colors"
                  style={{ color: isSelected ? tier.color : "rgba(255,255,255,0.5)" }}
                />
                <span className="text-[10px] font-mono text-white/40">{tier.id.toUpperCase()}</span>
              </div>
              <div>
                <span
                  className={cn(
                    "text-xs font-bold block transition-colors",
                    isSelected ? "text-white" : "text-white/60"
                  )}
                >
                  {tier.title}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Main Content Area: Specs, Capabilities & Code */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-6">
        {/* Left Column: Description & Feature Specs */}
        <div className="lg:col-span-6 space-y-5 flex flex-col justify-between">
          <div className="space-y-4">
            <span
              className="text-[11px] font-mono font-bold tracking-wider uppercase px-2.5 py-1 rounded border inline-block"
              style={{
                color: activeTier.color,
                borderColor: `${activeTier.color}40`,
                backgroundColor: `${activeTier.color}10`,
              }}
            >
              {activeTier.badge}
            </span>

            <h4 className="text-xl md:text-2xl font-bold text-white font-display">
              {activeTier.title}
            </h4>

            <p className="text-xs md:text-sm text-white/70 font-sans leading-relaxed">
              {activeTier.description}
            </p>

            {/* Hardware Specs Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-2">
              {activeTier.specs.map((spec, i) => (
                <div key={i} className="p-3 rounded-xl bg-[#121520] border border-white/5">
                  <span className="text-[10px] text-white/40 font-mono block">{spec.label}</span>
                  <span className="text-xs font-bold text-white font-mono mt-0.5 block">
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Core Capability Checklist */}
            <div className="space-y-2 pt-2">
              <span className="text-xs font-bold text-white/80 font-mono block">
                CORE PROTOCOLS & CAPABILITIES:
              </span>
              <ul className="space-y-1.5 font-sans text-xs text-white/70">
                {activeTier.capabilities.map((cap, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2
                      className="w-4 h-4 shrink-0 mt-0.5"
                      style={{ color: activeTier.color }}
                    />
                    <span>{cap}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Right Column: Code Implementation Terminal */}
        <div className="lg:col-span-6 rounded-2xl bg-[#050608] border border-white/10 overflow-hidden flex flex-col justify-between">
          {/* Terminal Window Top Bar */}
          <div className="flex items-center justify-between px-4 py-3 bg-[#0D0F16] border-b border-white/5 text-xs text-white/50 font-mono">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
              <span className="ml-2 text-white/40">architecture-runtime.ts</span>
            </div>
            <div className="flex items-center gap-1.5 text-[10px]">
              <Code2 className="w-3.5 h-3.5 text-accent-lime" />
              <span>TypeScript SDK</span>
            </div>
          </div>

          {/* Code Window Body */}
          <div className="p-4 md:p-5 overflow-x-auto text-[11px] md:text-xs font-mono text-white/80 leading-relaxed">
            <pre className="text-white/80">
              <code>{activeTier.codeSnippet}</code>
            </pre>
          </div>

          {/* Terminal Footer */}
          <div className="px-4 py-3 bg-[#0D0F16] border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-white/40">
            <span>Runtime: V8 Isolated Worker</span>
            <span style={{ color: activeTier.color }}>● Verified Architecture Spec</span>
          </div>
        </div>
      </div>
    </div>
  );
}
