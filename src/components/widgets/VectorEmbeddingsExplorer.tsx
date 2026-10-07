"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  BrainCircuit,
  Search,
  Zap,
  Terminal,
  Database,
  Layers,
  Sparkles,
  ArrowRight,
  Code2,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface VectorPoint {
  id: string;
  label: string;
  cluster: "Authentication" | "Vector DB" | "RAG Pipeline" | "Security";
  similarity: number;
  dimensions: string;
  x: number;
  y: number;
  color: string;
  sampleChunk: string;
}

const VECTOR_NODES: VectorPoint[] = [
  {
    id: "v1",
    label: "OAuth2 & JWT Token Verifier",
    cluster: "Authentication",
    similarity: 0.942,
    dimensions: "[0.824, -0.119, 0.455 ... 1536d]",
    x: 180,
    y: 90,
    color: "#00F0FF",
    sampleChunk: "Verifies asymmetric ECDSA JWT headers, claims expiration, and cryptographic signatures.",
  },
  {
    id: "v2",
    label: "HNSW Approximate Nearest Neighbors",
    cluster: "Vector DB",
    similarity: 0.978,
    dimensions: "[0.912, 0.334, -0.052 ... 1536d]",
    x: 360,
    y: 130,
    color: "#D4FF00",
    sampleChunk: "Hierarchical Navigable Small World graph traversal with dynamic efSearch and cosine metric.",
  },
  {
    id: "v3",
    label: "Context-Aware Chunk Embedder",
    cluster: "RAG Pipeline",
    similarity: 0.915,
    dimensions: "[0.671, -0.422, 0.883 ... 1536d]",
    x: 520,
    y: 80,
    color: "#00FF9D",
    sampleChunk: "Sliding window token overlap with parent document metadata preservation and deduplication.",
  },
  {
    id: "v4",
    label: "Prompt Injection Classifier",
    cluster: "Security",
    similarity: 0.884,
    dimensions: "[0.412, 0.771, -0.320 ... 1536d]",
    x: 640,
    y: 150,
    color: "#FF6B00",
    sampleChunk: "Neural classification layer detecting adversarial system prompt override and jailbreaks.",
  },
];

export function VectorEmbeddingsExplorer({ className }: { className?: string }) {
  const [selectedNode, setSelectedNode] = useState<VectorPoint>(VECTOR_NODES[1]);
  const [searchQuery, setSearchQuery] = useState("Hierarchical semantic nearest neighbors");

  return (
    <div
      className={cn(
        "relative w-full rounded-2xl bg-[#090B10] border border-white/10 p-5 md:p-6 overflow-hidden shadow-2xl font-mono",
        className
      )}
    >
      {/* Background Matrix Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#d4ff00_1px,transparent_1px)] [background-size:24px_24px] opacity-5 pointer-events-none" />

      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-white/10 relative z-10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-accent-lime/10 border border-accent-lime/30 flex items-center justify-center text-accent-lime">
            <BrainCircuit className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-base font-bold text-white font-display">Vector Space Similarity Explorer</h3>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-accent-lime/20 text-accent-lime border border-accent-lime/30">
                1536-Dimensional Space
              </span>
            </div>
            <p className="text-xs text-white/50 font-mono">
              Real-time cosine distance projection & semantic cluster topology
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 text-xs font-mono text-white/60">
          <span className="w-2 h-2 rounded-full bg-accent-lime animate-pulse" />
          <span>HNSW Index: <strong>4.2M Vectors</strong></span>
        </div>
      </div>

      {/* Search Input Bar */}
      <div className="mt-5 relative z-10">
        <div className="flex items-center gap-2 p-2 rounded-xl bg-[#121622] border border-white/10">
          <Search className="w-4 h-4 text-accent-lime ml-2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Query semantic embedding space..."
            className="w-full bg-transparent text-xs text-white font-mono placeholder:text-white/30 focus:outline-none"
          />
          <span className="text-[10px] font-mono px-2 py-1 rounded bg-white/5 text-accent-lime border border-accent-lime/20 shrink-0">
            Cosine Similarity
          </span>
        </div>
      </div>

      {/* Vector Visualization SVG Map */}
      <div className="relative mt-5 w-full h-[220px] rounded-xl bg-[#0F121A] border border-white/10 overflow-hidden">
        <svg viewBox="0 0 800 220" className="w-full h-full">
          <defs>
            <linearGradient id="vWireGrad" gradientUnits="userSpaceOnUse" x1="180" y1="90" x2="640" y2="150">
              <stop offset="0%" stopColor="#00F0FF" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#D4FF00" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#FF6B00" stopOpacity="0.4" />
            </linearGradient>
            <filter id="vGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Coordinate grid lines */}
          <line x1="0" y1="110" x2="800" y2="110" stroke="rgba(255,255,255,0.05)" strokeWidth="1" strokeDasharray="4 4" />
          <line x1="400" y1="0" x2="400" y2="220" stroke="rgba(255,255,255,0.05)" strokeWidth="1" strokeDasharray="4 4" />

          {/* Interconnecting cluster mesh */}
          <path d="M 180 90 L 360 130 L 520 80 L 640 150" stroke="url(#vWireGrad)" strokeWidth="1.5" strokeDasharray="5 5" fill="none" />
          <path d="M 180 90 L 520 80" stroke="rgba(255,255,255,0.08)" strokeWidth="1" strokeDasharray="3 3" fill="none" />
          <path d="M 360 130 L 640 150" stroke="rgba(255,255,255,0.08)" strokeWidth="1" strokeDasharray="3 3" fill="none" />

          {/* Dynamic Vector Nodes */}
          {VECTOR_NODES.map((node) => {
            const isSelected = selectedNode.id === node.id;
            return (
              <g
                key={node.id}
                transform={`translate(${node.x}, ${node.y})`}
                className="cursor-pointer"
                onClick={() => setSelectedNode(node)}
              >
                {/* Outer halo */}
                <circle
                  cx="0"
                  cy="0"
                  r={isSelected ? 24 : 14}
                  fill={node.color}
                  opacity={isSelected ? 0.25 : 0.08}
                />
                {/* Active selection pulse ring */}
                {isSelected && (
                  <circle
                    cx="0"
                    cy="0"
                    r="28"
                    fill="none"
                    stroke={node.color}
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                    opacity="0.8"
                  >
                    <animateTransform attributeName="transform" type="rotate" from="0 0 0" to="360 0 0" dur="8s" repeatCount="indefinite" />
                  </circle>
                )}
                {/* Center Node Core */}
                <circle
                  cx="0"
                  cy="0"
                  r={isSelected ? 8 : 6}
                  fill={node.color}
                  filter="url(#vGlow)"
                />
                {/* Node Label */}
                <text
                  x="0"
                  y="26"
                  fill={isSelected ? "#FFFFFF" : "rgba(255,255,255,0.6)"}
                  fontSize="10"
                  textAnchor="middle"
                  fontWeight={isSelected ? "bold" : "normal"}
                  fontFamily="monospace"
                >
                  {node.label}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      {/* Node Detail Inspector */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mt-4">
        {/* Dimensions & Chunk Content */}
        <div className="lg:col-span-8 p-4 rounded-xl bg-[#121622] border border-white/10 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-white flex items-center gap-1.5">
              <Code2 className="w-3.5 h-3.5 text-accent-lime" />
              Vector Node: {selectedNode.label}
            </span>
            <span className="text-[10px] text-accent-lime px-2 py-0.5 rounded bg-accent-lime/10 border border-accent-lime/30">
              Cluster: {selectedNode.cluster}
            </span>
          </div>

          <p className="text-xs text-white/70 font-sans bg-[#0B0D13] p-3 rounded-lg border border-white/5">
            "{selectedNode.sampleChunk}"
          </p>

          <div className="text-[10px] text-white/40 font-mono flex items-center justify-between">
            <span>Tensor: <strong className="text-accent-lime">{selectedNode.dimensions}</strong></span>
            <span>Index Latency: <strong className="text-white/80">0.82ms</strong></span>
          </div>
        </div>

        {/* Cosine Metric Gauge */}
        <div className="lg:col-span-4 p-4 rounded-xl bg-[#10131B] border border-white/10 flex flex-col justify-between">
          <div className="space-y-2">
            <div className="flex justify-between text-xs text-white/60">
              <span>Cosine Proximity</span>
              <span className="text-accent-lime font-bold">{selectedNode.similarity}</span>
            </div>
            <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
              <div
                className="h-full rounded-full bg-accent-lime transition-all duration-300"
                style={{ width: `${selectedNode.similarity * 100}%` }}
              />
            </div>
            <p className="text-[10px] text-white/40 font-sans">
              Top 0.01% nearest neighbor threshold satisfied.
            </p>
          </div>

          <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[10px] text-white/50">
            <span>Quantization: FP16</span>
            <span className="text-accent-lime font-bold">Verified Match</span>
          </div>
        </div>
      </div>
    </div>
  );
}
