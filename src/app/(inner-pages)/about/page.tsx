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
import {
  Sparkles,
  BrainCircuit,
  Globe2,
  ShieldCheck,
  Users,
  Cpu,
  ArrowRight,
  Target,
  Clock,
  CheckCircle2,
  Lock,
  Zap,
  Radio,
  MapPin,
  ExternalLink,
  Code2,
  ChevronRight,
  Building2,
  Award,
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const MILESTONES = [
  {
    year: "2024",
    tag: "ORIGIN & THE LATENCY BOTTLENECK",
    title: "Re-Engineering the AI Inference Runtime",
    description:
      "Aetheris was founded by distributed systems researchers from Stanford AI Lab and ex-cloud infrastructure architects who discovered that legacy multi-tenant AI clouds were losing 70% of throughput to context memory thrashing.",
    highlight: "Developed Radix KV-Cache Algorithm (92% memory reuse)",
  },
  {
    year: "2025",
    tag: "MULTI-AGENT SWARM CONSENSUS",
    title: "Autonomous DAG Execution Engine",
    description:
      "Launched our flagship Directed Acyclic Graph (DAG) swarm orchestration framework, allowing 50,000+ parallel sub-agent tasks to coordinate with majority-vote mathematical consensus.",
    highlight: "14x speedup across multi-step enterprise workflows",
  },
  {
    year: "2026",
    tag: "SOVEREIGN ENCLAVES & ANYCAST MESH",
    title: "Post-Quantum Cryptography & Global Edge",
    description:
      "Expanded across 38 global GPU points of presence with AMD SEV-SNP confidential computing enclaves and Kyber-1024 post-quantum hardware encryption for strict zero-retention privacy.",
    highlight: "Sub-15ms global inference latency guaranteed",
  },
  {
    year: "FUTURE",
    tag: "PLANETARY NEURAL FABRIC",
    title: "Decentralized Autonomous Supercomputing",
    description:
      "Deploying peer-to-peer verifiable model weight sharding and real-time localized neural synthesis directly to edge devices and private sovereign clusters.",
    highlight: "Zero-centralization mathematical sovereignty",
  },
];

const TEAM_MEMBERS = [
  {
    name: "Dr. Elena Vance",
    role: "Chief Research Officer",
    background: "Ex-Stanford AI Lab • PhD in Neurosymbolic Reasoning",
    specialty: "Multi-Agent Consensus & DAG Swarms",
    bio: "Pioneered hierarchical token pruning algorithms and autonomous agent coordination protocols across high-throughput distributed networks.",
    color: "#00F0FF",
  },
  {
    name: "Marcus Thorne",
    role: "VP of Systems & Infrastructure",
    background: "Ex-Google Cloud Distributed Kernel Lead",
    specialty: "Low-Level GPU Kernels & Speculative Decoding",
    bio: "Architect of our bare-metal Anycast GPU mesh, optimizing CUDA/Triton memory bandwidth to achieve 18ms global Time-To-First-Token.",
    color: "#D4FF00",
  },
  {
    name: "Dr. Sophia Chen",
    role: "Head of Post-Quantum Cryptography",
    background: "Ex-MIT CSAIL • Post-Doc Quantum Information",
    specialty: "AMD SEV-SNP Enclaves & Lattice Cryptography",
    bio: "Designed Aetheris's zero-retention hardware isolation enclaves using NIST FIPS 140-3 and Kyber-1024 quantum-resilient keys.",
    color: "#00FF9D",
  },
  {
    name: "David Sterling",
    role: "Lead AI Safety & Guardrails",
    background: "Ex-DeepMind Safety Team",
    specialty: "Zero-Day Prompt Injection & Heuristic DLP",
    bio: "Engineered our sub-5ms heuristic prompt firewall and real-time token sanitization filter protecting enterprise foundation models.",
    color: "#FF6B00",
  },
];

const GLOBAL_POPS = [
  { region: "US-East (Ashburn)", ping: "8ms", status: "Active", gpus: "H100 / B200" },
  { region: "EU-Central (Frankfurt)", ping: "12ms", status: "Active", gpus: "H100 / B200" },
  { region: "AP-East (Tokyo)", ping: "14ms", status: "Active", gpus: "H100 / B200" },
  { region: "AP-South (Singapore)", ping: "16ms", status: "Active", gpus: "H100 / A100" },
  { region: "EU-West (London)", ping: "11ms", status: "Active", gpus: "H100 / B200" },
  { region: "SA-East (São Paulo)", ping: "22ms", status: "Active", gpus: "H100 / A100" },
];

const OPEN_ROLES = [
  {
    title: "Senior Distributed Systems Engineer",
    team: "Core Infrastructure",
    location: "San Francisco / Remote",
    tags: ["Rust", "CUDA", "eBPF", "Triton"],
  },
  {
    title: "Staff AI Research Scientist",
    team: "Neural Swarms",
    location: "New York / Remote",
    tags: ["PyTorch", "Neurosymbolic DAG", "RLHF"],
  },
  {
    title: "Post-Quantum Cryptography Engineer",
    team: "Confidential Enclaves",
    location: "Zurich / Remote",
    tags: ["C++", "AMD SEV-SNP", "Kyber-1024"],
  },
];

export default function AboutPage() {
  const [selectedMilestone, setSelectedMilestone] = useState(0);

  return (
    <main className="min-h-screen bg-void text-[#f5f5f7] relative overflow-hidden font-sans">
      <Header />

      {/* 1. HERO & LAB MISSION SECTION */}
      <section className="relative pt-36 md:pt-48 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[850px] h-[500px] bg-accent-cyan/10 rounded-full blur-[200px] pointer-events-none -z-10" />

        <div className="space-y-6 max-w-4xl mx-auto">
          <Badge variant="cyan">MISSION & RESEARCH FOUNDATION</Badge>
          <h1 className="font-display font-extrabold text-4xl sm:text-6xl md:text-7xl text-white tracking-tight leading-tight">
            Architecting the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan via-accent-lime to-accent-emerald">
              Sovereign Neural Nervous System
            </span>
          </h1>
          <p className="text-neutral-400 text-base sm:text-lg font-sans leading-relaxed max-w-2xl mx-auto">
            AETHERIS was founded by distributed systems researchers and AI safety engineers with one unshakeable principle: autonomous intelligence must be instantaneous, mathematically verifiable, and completely sovereign.
          </p>
        </div>

        {/* Global Impact Metrics Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto mt-14 font-mono">
          <div className="p-4 rounded-2xl bg-[#0D0F16] border border-white/10 text-left">
            <span className="text-[10px] text-white/40 block">GLOBAL MESH</span>
            <span className="text-xl md:text-2xl font-bold text-accent-cyan">38+ PoPs</span>
            <span className="text-[10px] text-white/50 block mt-1">Global GPU Edge Mesh</span>
          </div>
          <div className="p-4 rounded-2xl bg-[#0D0F16] border border-white/10 text-left">
            <span className="text-[10px] text-white/40 block">DAILY INFERENCES</span>
            <span className="text-xl md:text-2xl font-bold text-accent-lime">14M+</span>
            <span className="text-[10px] text-white/50 block mt-1">Multi-Agent Swarms</span>
          </div>
          <div className="p-4 rounded-2xl bg-[#0D0F16] border border-white/10 text-left">
            <span className="text-[10px] text-white/40 block">DATA PRIVACY</span>
            <span className="text-xl md:text-2xl font-bold text-accent-emerald">100%</span>
            <span className="text-[10px] text-white/50 block mt-1">Zero-Retention Enclave</span>
          </div>
          <div className="p-4 rounded-2xl bg-[#0D0F16] border border-white/10 text-left">
            <span className="text-[10px] text-white/40 block">RESEARCH TEAM</span>
            <span className="text-xl md:text-2xl font-bold text-accent-amber">100% PhD</span>
            <span className="text-[10px] text-white/50 block mt-1">Systems & AI Safety</span>
          </div>
        </div>
      </section>

      {/* 2. INTERACTIVE FOUNDING MILESTONES & ROADMAP */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <Badge variant="lime" className="mb-4">RESEARCH CHRONOLOGY</Badge>
          <h2 className="text-3xl sm:text-5xl font-bold text-white font-display tracking-tight mb-4">
            From Whitepaper to Planetary Scale
          </h2>
          <p className="text-white/50 text-sm sm:text-base">
            The technical breakthroughs that define our sovereign foundation stack.
          </p>
        </div>

        {/* Milestone Selector Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 mb-6 font-mono">
          {MILESTONES.map((m, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedMilestone(idx)}
              className={cn(
                "p-3 rounded-xl border text-left transition-all duration-200",
                selectedMilestone === idx
                  ? "bg-accent-lime/15 border-accent-lime/50 text-white shadow-[0_0_15px_rgba(212,255,0,0.15)]"
                  : "bg-[#0D0F16] border-white/5 text-white/50 hover:text-white hover:bg-white/5"
              )}
            >
              <span className="text-base font-bold block text-accent-lime">{m.year}</span>
              <span className="text-[10px] truncate block text-white/60">{m.tag.split(" // ")[0]}</span>
            </button>
          ))}
        </div>

        {/* Selected Milestone Detail Card */}
        <div className="p-6 sm:p-8 rounded-3xl bg-[#0D0F16] border border-white/10 relative overflow-hidden font-sans">
          <div className="space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="text-xs font-mono font-bold text-accent-lime uppercase tracking-wider">
                {MILESTONES[selectedMilestone].tag}
              </span>
              <span className="px-3 py-1 rounded-full text-[11px] font-mono bg-accent-lime/10 text-accent-lime border border-accent-lime/30">
                Milestone Verified
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-white font-display">
              {MILESTONES[selectedMilestone].title}
            </h3>

            <p className="text-sm sm:text-base text-white/70 leading-relaxed max-w-3xl">
              {MILESTONES[selectedMilestone].description}
            </p>

            <div className="p-3.5 rounded-xl bg-black/40 border border-white/5 flex items-center gap-3 text-xs font-mono text-accent-lime">
              <Sparkles className="w-4 h-4 shrink-0" />
              <span>Key Impact: <strong className="text-white">{MILESTONES[selectedMilestone].highlight}</strong></span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FOUNDING PRINCIPLES BENTO GRID */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#07080C] border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge variant="cyan" className="mb-4">CORE CONVICTIONS</Badge>
            <h2 className="text-3xl sm:text-5xl font-bold text-white font-display tracking-tight mb-4">
              Our Sovereign Engineering Principles
            </h2>
            <p className="text-white/50 text-sm sm:text-base">
              Why we build differently from traditional legacy cloud vendors.
            </p>
          </div>

          <BentoGrid>
            <BentoItem colSpan="lg:col-span-6" rowSpan="row-span-1" tag="01 // MATHEMATICAL_SOVEREIGNTY">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-accent-cyan/10 border border-accent-cyan/20 flex items-center justify-center text-accent-cyan">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="font-display font-bold text-xl sm:text-2xl text-white">
                  Zero Data Compromise
                </h3>
                <p className="text-neutral-400 text-xs sm:text-sm font-sans leading-relaxed">
                  We believe developers and enterprises should possess complete mathematical sovereignty over their proprietary weights, embeddings, and context memory. We never train on client telemetry.
                </p>
              </div>
            </BentoItem>

            <BentoItem colSpan="lg:col-span-6" rowSpan="row-span-1" tag="02 // DISTRIBUTED_ANYCAST">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-accent-lime/10 border border-accent-lime/20 flex items-center justify-center text-accent-lime">
                  <Globe2 className="w-5 h-5" />
                </div>
                <h3 className="font-display font-bold text-xl sm:text-2xl text-white">
                  Decentralized Anycast Execution
                </h3>
                <p className="text-neutral-400 text-xs sm:text-sm font-sans leading-relaxed">
                  Intelligence should not be bottlenecked in centralized data centers. Our global anycast edge routes requests to the closest physical bare-metal GPU for sub-15ms roundtrips.
                </p>
              </div>
            </BentoItem>

            <BentoItem colSpan="lg:col-span-6" rowSpan="row-span-1" tag="03 // OPEN_INTEROPERABILITY">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-accent-amber/10 border border-accent-amber/20 flex items-center justify-center text-accent-amber">
                  <Code2 className="w-5 h-5" />
                </div>
                <h3 className="font-display font-bold text-xl sm:text-2xl text-white">
                  Open-Weight Interoperability
                </h3>
                <p className="text-neutral-400 text-xs sm:text-sm font-sans leading-relaxed">
                  No proprietary vendor lock-in. Hot-swap any open model weights, LoRA adapters, or custom quantization formats without rewriting your application logic.
                </p>
              </div>
            </BentoItem>

            <BentoItem colSpan="lg:col-span-6" rowSpan="row-span-1" tag="04 // PROVABLE_DEFENSE">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-accent-emerald/10 border border-accent-emerald/20 flex items-center justify-center text-accent-emerald">
                  <Lock className="w-5 h-5" />
                </div>
                <h3 className="font-display font-bold text-xl sm:text-2xl text-white">
                  Provable AI Guardrails
                </h3>
                <p className="text-neutral-400 text-xs sm:text-sm font-sans leading-relaxed">
                  Hardware-attested confidentiality with zero-trust prompt firewalls, automated PII sanitization, and tamper-proof SHA-256 cryptographic audit digests.
                </p>
              </div>
            </BentoItem>
          </BentoGrid>
        </div>
      </section>

      {/* 4. RESEARCH LEADERSHIP TEAM */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="lime" className="mb-4">RESEARCH & LEADERSHIP</Badge>
          <h2 className="text-3xl sm:text-5xl font-bold text-white font-display tracking-tight mb-4">
            Meet the Lab Architects
          </h2>
          <p className="text-white/50 text-sm sm:text-base">
            Engineers, distributed systems theorists, and cryptographic safety researchers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {TEAM_MEMBERS.map((member, i) => (
            <TiltCard key={i} className="p-5 rounded-2xl bg-[#0D0F16] border border-white/10 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center font-mono font-bold text-lg" style={{ color: member.color }}>
                  {member.name.split(" ").map(n => n[0]).join("")}
                </div>

                <div>
                  <h4 className="text-base font-bold text-white font-display">{member.name}</h4>
                  <span className="text-xs font-mono font-medium block mt-0.5" style={{ color: member.color }}>
                    {member.role}
                  </span>
                  <span className="text-[10px] text-white/40 font-mono block mt-1">
                    {member.background}
                  </span>
                </div>

                <p className="text-xs text-white/70 font-sans leading-relaxed">
                  {member.bio}
                </p>
              </div>

              <div className="pt-3 border-t border-white/5">
                <span className="text-[10px] font-mono text-white/40 block">Specialty:</span>
                <span className="text-[11px] font-mono text-white/80 font-medium">
                  {member.specialty}
                </span>
              </div>
            </TiltCard>
          ))}
        </div>
      </section>

      {/* 5. GLOBAL GPU EDGE CLUSTERS */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#090B10] border-y border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-mono text-accent-cyan font-bold uppercase tracking-wider block">
                GLOBAL TELEMETRY STATUS
              </span>
              <h3 className="text-2xl font-bold text-white font-display">Active GPU POP Locations</h3>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-accent-emerald">
              <span className="w-2 h-2 rounded-full bg-accent-emerald animate-ping" />
              <span>All 38 Regional Nodes Operational</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 font-mono text-xs">
            {GLOBAL_POPS.map((pop, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-[#0F121A] border border-white/5 flex items-center justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 font-bold text-white">
                    <MapPin className="w-3.5 h-3.5 text-accent-cyan" />
                    <span>{pop.region}</span>
                  </div>
                  <span className="text-[10px] text-white/40 mt-1 block">Hardware: {pop.gpus}</span>
                </div>
                <div className="text-right">
                  <span className="text-accent-cyan font-bold">{pop.ping}</span>
                  <span className="text-[9px] text-accent-emerald block">● 100% Uptime</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CAREERS & OPEN ROLES */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <Badge variant="amber" className="mb-4">JOIN THE LAB</Badge>
          <h2 className="text-3xl sm:text-5xl font-bold text-white font-display tracking-tight mb-4">
            Build the Future of Intelligence
          </h2>
          <p className="text-white/50 text-sm sm:text-base">
            We are hiring world-class distributed systems engineers, kernel architects, and AI safety researchers.
          </p>
        </div>

        <div className="space-y-3 font-mono">
          {OPEN_ROLES.map((role, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-[#0D0F16] border border-white/10 hover:border-accent-amber/50 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4"
            >
              <div className="space-y-1 font-sans">
                <h4 className="text-base font-bold text-white font-display">{role.title}</h4>
                <div className="flex flex-wrap gap-2 text-xs font-mono text-white/50">
                  <span>{role.team}</span> • <span>{role.location}</span>
                </div>
                <div className="flex flex-wrap gap-1.5 pt-2 font-mono text-[10px]">
                  {role.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="px-2 py-0.5 rounded bg-white/5 text-white/70 border border-white/5">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <Button variant="outline" size="sm" className="border-accent-amber/40 text-accent-amber hover:bg-accent-amber/10 shrink-0">
                Apply for Role
                <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
              </Button>
            </div>
          ))}
        </div>
      </section>

      {/* 7. ENTERPRISE LAB BRIEFING CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center">
        <div className="p-8 sm:p-14 rounded-3xl bg-gradient-to-br from-[#121624] via-[#0E1018] to-[#0A0B10] border border-white/15 relative overflow-hidden shadow-2xl">
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-accent-cyan/15 rounded-full blur-[140px] pointer-events-none" />

          <Badge variant="cyan" className="mb-6">DIRECT LAB ENGAGEMENT</Badge>
          <h2 className="text-3xl sm:text-5xl font-bold text-white font-display tracking-tight mb-6">
            Schedule a Private <br />
            <span className="text-accent-cyan">Technical Lab Briefing</span>
          </h2>
          <p className="text-white/60 text-sm sm:text-base max-w-xl mx-auto mb-8 font-sans">
            Connect directly with our founding research scientists to benchmark custom model weights or provision private hardware enclaves.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <MagneticWrapper>
              <Link href="/contact">
                <Button variant="primary" size="lg" className="bg-accent-cyan text-void hover:bg-accent-cyan/90">
                  Book Technical Briefing
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </MagneticWrapper>
            <Link href="/pricing">
              <Button variant="outline" size="lg">
                View Enterprise Tiers
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
