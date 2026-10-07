import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MagneticWrapper } from "@/components/animations/MagneticWrapper";
import { TiltCard } from "@/components/animations/TiltCard";
import { BentoGrid } from "@/components/core/BentoGrid";
import { Button } from "@/components/core/Button";
import { Badge } from "@/components/core/Badge";
import { TypewriterStream } from "@/components/animations/TypewriterStream";
import { AiChatInterface } from "@/components/widgets/AiChatInterface";
import { AnalyticsDashboard } from "@/components/widgets/AnalyticsDashboard";
import { MultiChannelCampaignStudio } from "@/components/widgets/MultiChannelCampaignStudio";
import { Megaphone, PenTool, Image as ImageIcon, Sparkles, TrendingUp } from "lucide-react";

export default function HomeAiMarketing() {
  return (
    <main className="min-h-screen bg-void text-white overflow-hidden relative">
      <Header />
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent-amber/20 blur-[150px] rounded-full pointer-events-none" />
      
      {/* Hero Section */}
      <section className="relative pt-28 sm:pt-32 pb-12 sm:pb-16 px-4 sm:px-6 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8 sm:gap-12">
        <div className="flex-1 text-left">
          <Badge variant="amber" className="mb-4 sm:mb-6">
            <Megaphone className="w-4 h-4 mr-2" />
            Marketing AI Co-pilot
          </Badge>
          
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold tracking-tighter mb-4 sm:mb-6">
            Create Content <br />
            <span className="text-accent-amber italic font-serif">10x Faster.</span>
          </h1>
          
          <p className="text-sm sm:text-lg text-white/60 max-w-xl mb-6 sm:mb-10">
            Generate high-converting ad copy, stunning visuals, and complete SEO-optimized articles in seconds. Aetheris is your entire marketing team in one platform.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto">
            <MagneticWrapper className="w-full sm:w-auto">
              <Button variant="primary" size="lg" className="w-full sm:w-auto bg-accent-amber text-void hover:bg-accent-amber/90">
                Start Creating Free
                <Sparkles className="w-4 h-4 ml-2" />
              </Button>
            </MagneticWrapper>
          </div>
        </div>
        
        <div className="flex-1 w-full">
          <TiltCard className="p-2 rounded-3xl bg-surface-1/50 backdrop-blur-xl border border-white/10 shadow-[0_0_50px_rgba(251,191,36,0.1)]">
            <div className="p-4 sm:p-6 bg-surface-0 rounded-2xl border border-surface-2 min-h-[260px] sm:min-h-[300px] flex flex-col">
              <div className="flex items-center gap-2 mb-3 sm:mb-4 text-white/40 border-b border-white/5 pb-3 sm:pb-4">
                <PenTool className="w-4 h-4" />
                <span className="text-xs sm:text-sm">Auto-generating Campaign...</span>
              </div>
              <div className="flex-1 text-sm sm:text-lg leading-relaxed text-white/80 font-medium">
                <TypewriterStream text="Boost your ROI with our new AI-driven marketing campaigns. Engage your audience like never before with personalized content delivered at scale." delay={20} />
              </div>
            </div>
          </TiltCard>
        </div>
      </section>

      {/* Multi-Channel AI Campaign Synthesizer */}
      <section className="relative px-4 sm:px-6 pb-16 sm:pb-24 max-w-7xl mx-auto">
        <MultiChannelCampaignStudio />
      </section>

      {/* Features Bento Grid */}
      <section className="py-24 px-6 bg-surface-0 border-t border-surface-2 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight mb-4">The Ultimate Content Engine</h2>
            <p className="text-white/50">Everything you need to dominate your market.</p>
          </div>
          
          <BentoGrid>
            {/* Copywriter */}
            <div className="col-span-1 md:col-span-2 lg:col-span-8 bg-surface-1 border border-white/5 rounded-3xl p-8 flex flex-col md:flex-row gap-8 items-center overflow-hidden min-h-[360px]">
              <div className="w-full md:w-1/2 flex flex-col justify-center">
                <div className="w-12 h-12 rounded-full bg-accent-amber/10 flex items-center justify-center mb-6">
                  <PenTool className="w-6 h-6 text-accent-amber" />
                </div>
                <h3 className="text-3xl font-bold mb-4">AI Copywriter</h3>
                <p className="text-white/60 mb-6">
                  Write blogs, social media posts, and ad copy that actually converts. Trained on millions of successful marketing campaigns.
                </p>
                <Button variant="outline" className="border-accent-amber/50 text-accent-amber hover:bg-accent-amber/10 w-fit">
                  Try Copywriter
                </Button>
              </div>
              <div className="w-full md:w-1/2 h-[300px]">
                <AiChatInterface />
              </div>
            </div>

            {/* Analytics */}
            <div className="col-span-1 md:col-span-1 lg:col-span-4 bg-surface-1 border border-white/5 rounded-3xl p-8 flex flex-col justify-between min-h-[360px]">
              <div>
                <div className="w-12 h-12 rounded-full bg-accent-lime/10 flex items-center justify-center mb-6">
                  <TrendingUp className="w-6 h-6 text-accent-lime" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Campaign Analytics</h3>
                <p className="text-white/60 text-sm mb-6">
                  Track performance in real-time. Our AI suggests optimizations to improve your click-through rates.
                </p>
              </div>
              <div className="p-4 rounded-2xl bg-surface-2/80 border border-white/5 space-y-3">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-white/60">Predicted ROAS</span>
                  <span className="text-accent-lime font-mono font-bold">+340%</span>
                </div>
                <div className="w-full bg-surface-3 h-2 rounded-full overflow-hidden">
                  <div className="bg-accent-lime h-full w-[78%] rounded-full" />
                </div>
                <div className="flex justify-between items-center text-xs pt-1">
                  <span className="text-white/60">Conversion Rate</span>
                  <span className="text-accent-cyan font-mono font-bold">14.8%</span>
                </div>
                <div className="w-full bg-surface-3 h-2 rounded-full overflow-hidden">
                  <div className="bg-accent-cyan h-full w-[64%] rounded-full" />
                </div>
              </div>
            </div>

            {/* Image Gen */}
            <div className="col-span-1 md:col-span-2 lg:col-span-12 bg-gradient-to-r from-surface-1 to-surface-2 border border-white/5 rounded-3xl p-10 text-center flex flex-col items-center">
               <div className="w-16 h-16 rounded-full bg-accent-cyan/10 flex items-center justify-center mb-6">
                  <ImageIcon className="w-8 h-8 text-accent-cyan" />
                </div>
                <h3 className="text-3xl font-bold mb-4">Generative Imagery</h3>
                <p className="text-white/60 max-w-2xl mb-8">
                  Stop searching for stock photos. Generate unique, brand-aligned images instantly based on your text prompts.
                </p>
                {/* Mock Image Gallery */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full mt-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="aspect-video rounded-2xl bg-surface-3 border border-white/10 flex items-center justify-center overflow-hidden relative group">
                      <div className="absolute inset-0 bg-gradient-to-br from-accent-cyan/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      <ImageIcon className="w-8 h-8 text-white/20" />
                    </div>
                  ))}
                </div>
            </div>
          </BentoGrid>
        </div>
      </section>
      <Footer />
    </main>
  );
}
