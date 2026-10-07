"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Check, ChevronRight, Terminal } from "lucide-react";
import { cn } from "@/lib/utils";

export const ApiPlayground = ({ className }: { className?: string }) => {
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const runRequest = () => {
    setStatus("loading");
    setTimeout(() => {
      setStatus("success");
      setTimeout(() => setStatus("idle"), 3000);
    }, 1500);
  };

  return (
    <div
      className={cn(
        "flex flex-col w-full h-full min-h-[350px] bg-[#0D0D12] border border-white/5 rounded-2xl overflow-hidden font-mono shadow-2xl spatial-shadow-md",
        className
      )}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-[#14141A]">
        <div className="flex items-center gap-2">
          <Terminal className="w-4 h-4 text-white/40" />
          <span className="text-xs text-white/50 tracking-widest uppercase">API Playground</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
          <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
          <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
        </div>
      </div>

      <div className="flex flex-1 flex-col md:flex-row h-full">
        {/* Request Panel */}
        <div className="flex-1 border-b md:border-b-0 md:border-r border-white/5 flex flex-col">
          <div className="px-4 py-2 border-b border-white/5 flex items-center justify-between bg-white/[0.01]">
            <div className="flex items-center gap-2 text-xs">
              <span className="text-accent-cyan font-bold">POST</span>
              <span className="text-white/60">/v1/models/generate</span>
            </div>
          </div>
          <div className="p-4 flex-1 text-[11px] leading-relaxed text-white/70 overflow-hidden relative">
            <pre className="custom-scrollbar h-full overflow-auto text-left">
              <span className="text-white/40">{`{`}</span><br/>
              <span className="text-white/80">  "model":</span> <span className="text-accent-lime">"aetheris-v4-turbo"</span>,<br/>
              <span className="text-white/80">  "prompt":</span> <span className="text-accent-lime">"Explain quantum computing"</span>,<br/>
              <span className="text-white/80">  "temperature":</span> <span className="text-accent-amber">0.7</span>,<br/>
              <span className="text-white/80">  "max_tokens":</span> <span className="text-accent-amber">500</span><br/>
              <span className="text-white/40">{`}`}</span>
            </pre>
          </div>
          <div className="p-3 border-t border-white/5">
            <button
              onClick={runRequest}
              disabled={status !== "idle"}
              className="w-full py-2 bg-white text-black text-xs font-bold rounded flex items-center justify-center gap-2 hover:bg-white/90 transition-colors disabled:opacity-50"
            >
              {status === "idle" && <><Play className="w-3 h-3" /> Send Request</>}
              {status === "loading" && <><div className="w-3 h-3 border-2 border-black/20 border-t-black rounded-full animate-spin" /> Processing...</>}
              {status === "success" && <><Check className="w-3 h-3" /> Sent</>}
            </button>
          </div>
        </div>

        {/* Response Panel */}
        <div className="flex-1 bg-[#0A0A0E] flex flex-col relative overflow-hidden">
          <div className="px-4 py-2 border-b border-white/5 flex items-center justify-between">
            <span className="text-[10px] text-white/40 uppercase tracking-widest">Response</span>
            <div className="flex items-center gap-2 text-[10px]">
              {status === "success" && <span className="text-accent-lime">200 OK</span>}
              <span className="text-white/30">142ms</span>
            </div>
          </div>
          <div className="p-4 flex-1 text-[11px] leading-relaxed relative">
            <AnimatePresence mode="wait">
              {status === "idle" && (
                <motion.div
                  key="idle"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 flex items-center justify-center text-white/20"
                >
                  Waiting for request...
                </motion.div>
              )}
              {status === "loading" && (
                <motion.div
                  key="loading"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-white/40"
                >
                   <div className="flex gap-1">
                     <div className="w-1.5 h-1.5 bg-accent-cyan rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                     <div className="w-1.5 h-1.5 bg-accent-cyan rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                     <div className="w-1.5 h-1.5 bg-accent-cyan rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                   </div>
                   Generating stream...
                </motion.div>
              )}
              {status === "success" && (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-left text-white/70 overflow-auto h-full custom-scrollbar"
                >
                  <pre className="whitespace-pre-wrap">
                    <span className="text-white/40">{`{`}</span><br/>
                    <span className="text-white/80">  "id":</span> <span className="text-accent-lime">"req_9x8d7"</span>,<br/>
                    <span className="text-white/80">  "created":</span> <span className="text-accent-amber">1698243011</span>,<br/>
                    <span className="text-white/80">  "choices":</span> <span className="text-white/40">[</span><br/>
                    <span className="text-white/40">    {`{`}</span><br/>
                    <span className="text-white/80">      "text":</span> <span className="text-accent-cyan">"Quantum computing uses quantum mechanics principles like superposition..."</span><br/>
                    <span className="text-white/40">    {`}`}</span><br/>
                    <span className="text-white/40">  ]</span><br/>
                    <span className="text-white/40">{`}`}</span>
                  </pre>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};
