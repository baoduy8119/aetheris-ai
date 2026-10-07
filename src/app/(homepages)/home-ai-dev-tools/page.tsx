import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MagneticWrapper } from "@/components/animations/MagneticWrapper";
import { TiltCard } from "@/components/animations/TiltCard";
import { BentoGrid } from "@/components/core/BentoGrid";
import { Button } from "@/components/core/Button";
import { Badge } from "@/components/core/Badge";
import { CodeGeneration } from "@/components/widgets/CodeGeneration";
import { KnowledgeGraph } from "@/components/widgets/KnowledgeGraph";
import { ApiPlayground } from "@/components/widgets/ApiPlayground";
import { VectorEmbeddingsExplorer } from "@/components/widgets/VectorEmbeddingsExplorer";
import { Terminal, Code2, Cpu, GitBranch, ShieldCheck } from "lucide-react";

export default function HomeAiDevTools() {
  return (
    <main className="min-h-screen bg-[#0D0D12] text-white overflow-hidden relative font-sans">
      <Header />
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      
      {/* Hero Section */}
      <section className="relative pt-28 sm:pt-32 pb-12 sm:pb-20 px-4 sm:px-6 max-w-7xl mx-auto flex flex-col items-center text-center">
        <Badge variant="cyan" className="mb-4 sm:mb-6 bg-accent-cyan/10 border-accent-cyan/20">
          <Terminal className="w-4 h-4 mr-2" />
          Developer First API
        </Badge>
        
        <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-6 sm:mb-8 max-w-4xl font-mono">
          Code Faster with <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan to-accent-lime">Intelligence.</span>
        </h1>
        
        <p className="text-sm sm:text-lg text-white/60 max-w-2xl mb-8 sm:mb-10">
          Aetheris provides enterprise-grade AI models directly to your IDE and CI/CD pipelines. Automate code reviews, generate boilerplates, and ship with confidence.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto">
          <MagneticWrapper className="w-full sm:w-auto">
            <Button variant="primary" size="lg" className="w-full sm:w-auto bg-white text-black hover:bg-white/90">
              Read Documentation
            </Button>
          </MagneticWrapper>
          <div className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-surface-2 border border-white/10 font-mono text-xs sm:text-sm text-white/70 w-full sm:w-auto">
            <span className="text-accent-cyan">$</span> npm install @aetheris/sdk
          </div>
        </div>
      </section>

      {/* Code Demo Section */}
      <section className="relative px-4 sm:px-6 pb-12 sm:pb-16 max-w-5xl mx-auto z-10">
        <TiltCard>
          <CodeGeneration />
        </TiltCard>
      </section>

      {/* Vector Embeddings Explorer */}
      <section className="relative px-4 sm:px-6 pb-16 sm:pb-24 max-w-7xl mx-auto z-10">
        <VectorEmbeddingsExplorer />
      </section>

      {/* Features Bento Grid */}
      <section className="py-24 px-6 border-t border-white/5 relative z-10 bg-[#0D0D12]">
        <div className="max-w-7xl mx-auto">
          <BentoGrid>
            {/* Auto-completion */}
            <div className="col-span-1 md:col-span-1 lg:col-span-4 bg-surface-1/50 border border-white/5 rounded-3xl p-8 hover:bg-surface-1 transition-colors min-h-[260px] flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-accent-cyan/10 flex items-center justify-center mb-6">
                  <Code2 className="w-6 h-6 text-accent-cyan" />
                </div>
                <h3 className="text-xl font-bold mb-3 font-mono">Smart Autocomplete</h3>
                <p className="text-white/60 text-sm">
                  Context-aware code suggestions that understand your entire codebase architecture, not just the current file.
                </p>
              </div>
            </div>

            {/* Infrastructure */}
            <div className="col-span-1 md:col-span-1 lg:col-span-4 bg-surface-1/50 border border-white/5 rounded-3xl p-8 hover:bg-surface-1 transition-colors min-h-[260px] flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-accent-lime/10 flex items-center justify-center mb-6">
                  <Cpu className="w-6 h-6 text-accent-lime" />
                </div>
                <h3 className="text-xl font-bold mb-3 font-mono">Edge Computing</h3>
                <p className="text-white/60 text-sm">
                  Deploy your AI-powered functions globally with 0ms cold starts. We handle the infrastructure scaling.
                </p>
              </div>
            </div>

            {/* Security */}
            <div className="col-span-1 md:col-span-1 lg:col-span-4 bg-surface-1/50 border border-white/5 rounded-3xl p-8 hover:bg-surface-1 transition-colors min-h-[260px] flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-full bg-accent-emerald/10 flex items-center justify-center mb-6">
                  <ShieldCheck className="w-6 h-6 text-accent-emerald" />
                </div>
                <h3 className="text-xl font-bold mb-3 font-mono">SOC2 Compliant</h3>
                <p className="text-white/60 text-sm">
                  Your code is never used to train our public models. Enterprise-grade security and isolated VPC deployments.
                </p>
              </div>
            </div>

            {/* RAG Knowledge Graph */}
            <div className="col-span-1 md:col-span-2 lg:col-span-12 bg-gradient-to-br from-surface-1 to-surface-2 border border-white/5 rounded-3xl p-10 flex flex-col lg:flex-row items-center gap-10 overflow-hidden relative">
               <div className="w-full lg:w-1/3 relative z-10">
                 <Badge variant="cyan" className="mb-4">Vector Search</Badge>
                 <h3 className="text-3xl font-bold mb-4 font-mono">Retrieval Augmented Gen</h3>
                 <p className="text-white/60 mb-6">
                   Connect your own proprietary databases, Notion workspaces, and PDFs. Our edge functions embed and query your data in milliseconds.
                 </p>
               </div>
               <div className="w-full lg:w-2/3 h-[380px] rounded-xl overflow-hidden border border-white/5 bg-[#0D0D12]">
                  <KnowledgeGraph />
               </div>
            </div>

            {/* API Playground */}
            <div className="col-span-1 md:col-span-2 lg:col-span-12 bg-gradient-to-br from-surface-1 to-surface-2 border border-white/5 rounded-3xl p-10 flex flex-col lg:flex-row items-center gap-10 overflow-hidden relative">
               <div className="w-full lg:w-1/3 relative z-10">
                 <h3 className="text-3xl font-bold mb-3 font-mono">Live Playground</h3>
                 <p className="text-white/60 mb-6">
                   Test our endpoints right from your dashboard. Low latency, high throughput.
                 </p>
                 <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 w-fit">
                   View API Docs
                 </Button>
               </div>
               <div className="w-full lg:w-2/3 h-[380px] rounded-xl overflow-hidden border border-white/5 shadow-2xl">
                  <ApiPlayground />
               </div>
            </div>

          </BentoGrid>
        </div>
      </section>
      <Footer />
    </main>
  );
}
