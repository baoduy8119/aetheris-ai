"use client";

import React, { useState } from "react";
import {
  Mic,
  MicOff,
  PhoneCall,
  PhoneOff,
  Volume2,
  Radio,
  Bot,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { AudioWaveform } from "@/components/widgets/voice/AudioWaveform";
import { TranscriptMessage } from "@/components/widgets/voice/TranscriptMessage";

interface Message {
  speaker: "ai" | "user";
  speakerName: string;
  text: string;
  latency?: string;
  intent?: string;
}

const TRANSCRIPT: Message[] = [
  {
    speaker: "ai",
    speakerName: "Aetheris Agent (Nova)",
    text: "Thanks for calling Aetheris Cloud Support. I see you're inquiring about our sub-90ms full-duplex telephony SDK. How can I assist today?",
    latency: "82ms",
    intent: "Inquiry / Architecture",
  },
  {
    speaker: "user",
    speakerName: "Customer (Alex)",
    text: "Can the voice agent handle live customer interruptions without dropping context or buffering?",
  },
  {
    speaker: "ai",
    speakerName: "Aetheris Agent (Nova)",
    text: "Absolutely. Our neural voice pipeline uses bi-directional streaming with instant speech endpointing. The moment you speak, speech synthesis gracefully halts in under 30 milliseconds.",
    latency: "76ms",
    intent: "Technical Verification / Interruption Handling",
  },
];

export function VoiceConversationSimulator({ className }: { className?: string }) {
  const [isCalling, setIsCalling] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [selectedVoice, setSelectedVoice] = useState("Nova (Ultra-Realistic)");

  return (
    <div
      className={cn(
        "relative w-full rounded-2xl bg-[#0C0B12] border border-white/10 p-4 sm:p-5 md:p-6 overflow-hidden shadow-2xl font-mono",
        className
      )}
    >
      {/* Ambient background glow */}
      <div className="absolute top-0 left-1/4 w-80 h-80 bg-accent-violet/15 rounded-full blur-[100px] pointer-events-none" />

      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 pb-4 sm:pb-5 border-b border-white/10">
        <div className="flex items-center gap-2.5 sm:gap-3">
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-accent-violet/15 border border-accent-violet/30 flex items-center justify-center text-accent-violet shrink-0">
            <Radio className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>
          <div>
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
              <h3 className="text-sm sm:text-base font-bold text-white font-display">Full-Duplex Voice Telephony Engine</h3>
              <span className="px-2 py-0.5 rounded-full text-[9px] sm:text-[10px] font-mono font-semibold bg-accent-violet/20 text-accent-violet border border-accent-violet/30">
                85ms Latency
              </span>
            </div>
            <p className="text-[11px] sm:text-xs text-white/50 font-mono">
              Real-time conversational turn-taking, acoustic neural synthesis & interruption detection
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg bg-white/5 border border-white/10 text-[11px] sm:text-xs text-white/70">
            <span className="w-2 h-2 rounded-full bg-accent-emerald animate-ping" />
            <span>WebRTC Stream: <strong className="text-accent-emerald">Connected</strong></span>
          </div>
        </div>
      </div>

      {/* Main Grid: Waveform & Live Call Log */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 mt-5">
        {/* Left Column: Live Acoustic Waveform & Controls */}
        <div className="lg:col-span-5 p-5 rounded-xl bg-[#12111C] border border-white/10 flex flex-col justify-between space-y-4">
          <div className="space-y-3">
            <div className="flex items-center justify-between text-xs text-white/60">
              <span className="flex items-center gap-1.5">
                <Volume2 className="w-3.5 h-3.5 text-accent-violet" />
                Active Acoustic Synthesis
              </span>
              <span className="text-accent-violet font-bold">48 kHz HD Audio</span>
            </div>

            {/* Modular Animated Waveform Equalizer */}
            <div className="h-28 rounded-lg bg-[#0A0910] border border-white/5 flex items-center justify-center gap-1 px-4 overflow-hidden">
              <AudioWaveform
                active={isCalling}
                variant="violet-cyan"
                className="w-full h-full"
              />
            </div>

            {/* Voice Model Selector */}
            <div className="p-3 rounded-lg bg-[#181624] border border-white/5 space-y-1.5">
              <div className="flex justify-between text-[11px] text-white/50">
                <span>Selected Voice Model</span>
                <span className="text-accent-violet font-bold">11Labs / Bark Pro</span>
              </div>
              <div className="text-xs text-white font-medium">
                {selectedVoice}
              </div>
            </div>
          </div>

          {/* Telephony Action Controls */}
          <div className="pt-3 border-t border-white/10 flex items-center justify-between gap-3">
            <button
              onClick={() => setIsMuted(!isMuted)}
              className={cn(
                "flex-1 py-2 rounded-lg text-xs font-bold font-mono transition-all flex items-center justify-center gap-1.5 border cursor-pointer",
                isMuted
                  ? "bg-white/10 text-white border-white/20"
                  : "bg-[#181624] text-white/70 border-white/10 hover:text-white"
              )}
            >
              {isMuted ? <MicOff className="w-3.5 h-3.5 text-[#FF003C]" /> : <Mic className="w-3.5 h-3.5 text-accent-violet" />}
              <span>{isMuted ? "Muted" : "Mute Mic"}</span>
            </button>

            <button
              onClick={() => setIsCalling(!isCalling)}
              className={cn(
                "flex-1 py-2 rounded-lg text-xs font-bold font-mono transition-all flex items-center justify-center gap-1.5 shadow-lg cursor-pointer",
                isCalling
                  ? "bg-[#FF003C] text-white hover:bg-[#FF003C]/90 shadow-[0_0_15px_rgba(255,0,60,0.3)]"
                  : "bg-accent-emerald text-void hover:bg-accent-emerald/90 shadow-[0_0_15px_rgba(0,255,157,0.3)]"
              )}
            >
              {isCalling ? <PhoneOff className="w-3.5 h-3.5" /> : <PhoneCall className="w-3.5 h-3.5" />}
              <span>{isCalling ? "End Call" : "Start Call"}</span>
            </button>
          </div>
        </div>

        {/* Right Column: Live Turn-by-Turn Speech Transcript */}
        <div className="lg:col-span-7 p-5 rounded-xl bg-[#12111C] border border-white/10 flex flex-col justify-between space-y-4">
          <div className="space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-white/10">
              <span className="text-xs font-bold text-white flex items-center gap-1.5">
                <Bot className="w-3.5 h-3.5 text-accent-violet" />
                Live Conversation Log & Telemetry
              </span>
              <span className="text-[10px] text-accent-violet">Zero Dropped Words</span>
            </div>

            <div className="space-y-3 font-sans">
              {TRANSCRIPT.map((msg, idx) => (
                <TranscriptMessage
                  key={idx}
                  speaker={msg.speaker}
                  speakerName={msg.speakerName}
                  text={msg.text}
                  latency={msg.latency}
                  intent={msg.intent}
                />
              ))}
            </div>
          </div>

          <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-white/40">
            <span>Interruption Recovery: <strong>&lt; 30ms</strong></span>
            <span>Natural Jitter Buffer: <strong>0.02%</strong></span>
          </div>
        </div>
      </div>
    </div>
  );
}
