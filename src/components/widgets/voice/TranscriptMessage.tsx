"use client";

import React from "react";
import { Clock } from "lucide-react";
import { cn } from "@/lib/utils";

export interface TranscriptMessageProps {
  speaker: "ai" | "user" | "caller" | "agent";
  speakerName?: string;
  text: string;
  latency?: string;
  intent?: string;
  className?: string;
}

export const TranscriptMessage: React.FC<TranscriptMessageProps> = ({
  speaker,
  speakerName,
  text,
  latency,
  intent,
  className,
}) => {
  const isAI = speaker === "ai" || speaker === "agent";
  const defaultName = isAI ? "Aetheris AI Agent" : "Customer";

  return (
    <div
      className={cn(
        "p-3.5 rounded-xl border text-xs space-y-1.5 transition-all",
        isAI
          ? "bg-[#181626] border-accent-violet/20 ml-2"
          : "bg-[#0F0E16] border-white/10 mr-2",
        className
      )}
    >
      <div className="flex items-center justify-between font-mono text-[10px]">
        <span
          className={cn(
            "font-bold uppercase flex items-center gap-1",
            isAI ? "text-accent-violet" : "text-white/70"
          )}
        >
          <span className={cn("w-1.5 h-1.5 rounded-full", isAI ? "bg-accent-violet" : "bg-accent-lime")} />
          {speakerName || defaultName}
        </span>
        {latency && (
          <span className="text-accent-emerald font-mono flex items-center gap-1">
            <Clock className="w-3 h-3" />
            Inference: {latency}
          </span>
        )}
      </div>
      <p className="text-white/80 leading-relaxed font-sans">{text}</p>
      {intent && (
        <div className="pt-1 text-[10px] font-mono text-accent-violet/80">
          Extracted Intent: {intent}
        </div>
      )}
    </div>
  );
};
