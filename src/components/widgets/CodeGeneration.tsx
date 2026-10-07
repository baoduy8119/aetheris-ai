"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Terminal, Copy, Check } from "lucide-react";
import { cn } from "@/lib/utils";

const CODE_SNIPPET = `// POST /api/webhooks/typeform
export async function POST(req) {
  const lead = await req.json();
  
  // 1. Aetheris AI: Score the new lead
  const ai = new AetherisClient(process.env.API_KEY);
  const { score, summary } = await ai.leads.score(lead);
  
  // 2. Auto-route to Sales if score > 80
  if (score > 80) {
    await crm.deals.create({
      title: \`High-Intent: \${lead.company}\`,
      value: ai.predictRevenue(lead),
      notes: summary
    });
    
    await slack.notify('#sales-tier1', \`Hot lead: \${lead.company}\`);
  }
  
  return Response.json({ success: true, score });
}`;

export const CodeGeneration = ({ className }: { className?: string }) => {
  const [mounted, setMounted] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className={cn(
        "flex flex-col w-full h-full min-h-[300px] bg-[#0D0D12] border border-surface-2 rounded-2xl overflow-hidden shadow-2xl spatial-shadow-md font-mono",
        className
      )}
    >
      {/* IDE Header */}
      <div className="flex items-center justify-between px-4 py-2 border-b border-white/5 bg-[#14141A]">
        <div className="flex items-center gap-2">
          <Terminal className="w-4 h-4 text-white/40" />
          <span className="text-xs text-white/40">app/api/webhooks/route.ts</span>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={handleCopy}
            className="text-white/40 hover:text-white/80 transition-colors"
          >
            {copied ? <Check className="w-4 h-4 text-accent-lime" /> : <Copy className="w-4 h-4" />}
          </button>
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors" />
            <div className="w-3 h-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors" />
            <div className="w-3 h-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors" />
          </div>
        </div>
      </div>

      {/* Code Area */}
      <div className="p-4 overflow-auto custom-scrollbar relative flex-1 text-sm">
        <div className="absolute left-4 top-4 bottom-4 flex flex-col text-white/20 select-none text-right pr-4 border-r border-white/5">
          {CODE_SNIPPET.split("\n").map((_, i) => (
            <span key={i}>{i + 1}</span>
          ))}
        </div>
        
        <div className="pl-12">
          {mounted && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {CODE_SNIPPET.split("\n").map((line, lineIndex) => (
                <motion.div
                  key={lineIndex}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: lineIndex * 0.1 }}
                  className="whitespace-pre text-white/80"
                >
                  {/* Basic syntax highlighting simulation */}
                  {line.split(" ").map((word, wordIndex) => {
                    let colorClass = "text-white/80";
                    if (word === "export" || word === "async" || word === "function" || word === "const" || word === "await" || word === "return" || word === "if" || word === "new") {
                      colorClass = "text-accent-cyan"; // Keywords
                    } else if (word.includes("req.json") || word.includes("leads.score") || word.includes("deals.create") || word.includes("slack.notify") || word.includes("Response.json")) {
                      colorClass = "text-accent-lime"; // Functions
                    } else if (word.includes("'") || word.includes("`") || word.includes("//")) {
                      colorClass = "text-white/40"; // Strings & Comments
                    } else if (word.includes("{") || word.includes("}") || word.includes("(")) {
                      colorClass = "text-accent-amber/70"; // Brackets
                    } else if (!isNaN(Number(word.replace(/[^0-9]/g, ''))) && word.length > 0) {
                      colorClass = "text-accent-amber"; // Numbers
                    }

                    return (
                      <span key={wordIndex} className={colorClass}>
                        {word}{" "}
                      </span>
                    );
                  })}
                </motion.div>
              ))}
            </motion.div>
          )}
          
          {/* Blinking cursor */}
          {mounted && (
            <motion.div
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
              className="w-2 h-4 bg-accent-cyan mt-1 ml-1"
            />
          )}
        </div>
      </div>
      
      {/* Footer */}
      <div className="px-4 py-2 border-t border-white/5 bg-[#14141A] flex items-center justify-between text-[10px] text-white/30 uppercase tracking-widest">
        <span>TypeScript</span>
        <span className="flex items-center gap-1">
          <div className="w-1.5 h-1.5 rounded-full bg-accent-cyan animate-pulse" />
          AI Generating...
        </span>
      </div>
    </div>
  );
};
