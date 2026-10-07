"use client";

import React, { useState, useEffect } from "react";
import { Volume2, Mic, MicOff } from "lucide-react";
import { cn } from "@/lib/utils";
import { AudioWaveform } from "@/components/widgets/voice/AudioWaveform";

const TRANSCRIPT_LOGS = [
  { role: "agent", text: "Hello! I'm your Aetheris AI support assistant. How can I assist with your flight booking today?" },
  { role: "user", text: "I need to reschedule my flight from SFO to JFK for tomorrow evening." },
  { role: "agent", text: "Checking available flights... I found Delta DL482 departing at 6:45 PM. Shall I confirm the change?" },
  { role: "user", text: "Yes please, and assign me a window seat." },
  { role: "agent", text: "Confirmed! DL482, Seat 14A. Confirmation sent to your registered email." }
];

export const VoiceAgentVisualizer = ({ className }: { className?: string }) => {
  const [active, setActive] = useState(true);
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    if (!active) return;
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % TRANSCRIPT_LOGS.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [active]);

  return (
    <div
      className={cn(
        "flex flex-col w-full h-full min-h-[380px] bg-[#0A0C10] border border-white/10 rounded-2xl overflow-hidden font-sans shadow-2xl spatial-shadow-md",
        className
      )}
    >
      {/* Header Bar */}
      <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/5 bg-[#12151E]">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-accent-violet/20 border border-accent-violet/40 flex items-center justify-center">
            <Volume2 className="w-4 h-4 text-accent-violet" />
          </div>
          <div>
            <h4 className="text-xs font-semibold text-white">Aetheris Voice Mesh</h4>
            <p className="text-[10px] text-white/50 font-mono">Ultra-low 120ms Latency • 48kHz Opus</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-lime opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-lime" />
          </span>
          <span className="text-[11px] font-mono text-accent-lime font-medium">CALL ACTIVE</span>
        </div>
      </div>

      {/* Main Waveform Stage */}
      <div className="p-6 flex flex-col items-center justify-center flex-1 bg-gradient-to-b from-[#12151E]/50 to-transparent">
        <AudioWaveform
          active={active}
          barCount={20}
          heights={[40, 75, 30, 90, 65, 100, 45, 80, 55, 95, 35, 85, 60, 100, 40, 70, 50, 90, 30, 60]}
          variant="violet-cyan"
          className="h-20 px-6 py-2"
        />

        {/* Live Audio Transcript Bubble */}
        <div className="w-full max-w-md mt-6 p-4 rounded-xl bg-surface-1 border border-white/5 backdrop-blur-md">
          <div className="flex items-center justify-between text-[11px] font-mono mb-2">
            <span className={TRANSCRIPT_LOGS[currentStep].role === "agent" ? "text-accent-cyan" : "text-accent-lime"}>
              {TRANSCRIPT_LOGS[currentStep].role === "agent" ? "● AI Agent" : "● Caller"}
            </span>
            <span className="text-white/40">Real-time Stream</span>
          </div>
          <p className="text-xs text-white/90 leading-relaxed font-sans">
            "{TRANSCRIPT_LOGS[currentStep].text}"
          </p>
        </div>
      </div>

      {/* Footer Controls & Telemetry */}
      <div className="px-5 py-3 border-t border-white/5 bg-[#12151E] flex items-center justify-between text-xs font-mono">
        <div className="flex items-center gap-4 text-white/50 text-[11px]">
          <span>TTFT: <strong className="text-white font-normal">84ms</strong></span>
          <span>Sample Rate: <strong className="text-white font-normal">48,000 Hz</strong></span>
        </div>
        <button
          onClick={() => setActive(!active)}
          className="px-3 py-1.5 rounded-lg bg-surface-2 hover:bg-surface-3 border border-white/10 text-white flex items-center gap-1.5 transition-colors cursor-pointer"
        >
          {active ? <MicOff className="w-3.5 h-3.5 text-accent-crimson" /> : <Mic className="w-3.5 h-3.5 text-accent-lime" />}
          <span>{active ? "Mute Stream" : "Resume"}</span>
        </button>
      </div>
    </div>
  );
};
