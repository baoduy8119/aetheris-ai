"use client";

import React, { useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface BentoGridProps {
  children: React.ReactNode;
  className?: string;
}

export function BentoGrid({ children, className = "" }: BentoGridProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 items-stretch",
        className
      )}
    >
      {children}
    </div>
  );
}

interface BentoItemProps {
  children: React.ReactNode;
  className?: string;
  colSpan?: string; // e.g. "col-span-1 md:col-span-2 lg:col-span-4"
  rowSpan?: string; // e.g. "row-span-1 md:row-span-2"
  spotlightColor?: string;
  tag?: string;
}

export function BentoItem({
  children,
  className = "",
  colSpan = "lg:col-span-4",
  rowSpan = "row-span-1",
  spotlightColor = "rgba(212, 255, 0, 0.08)",
  tag,
}: BentoItemProps) {
  const itemRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!itemRef.current) return;
    const rect = itemRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      ref={itemRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setMousePos({ x: -1000, y: -1000 });
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "relative group rounded-2xl bg-surface-1/90 border border-border-hairline hover:border-border-active transition-all duration-500 overflow-hidden flex flex-col justify-between p-6 lg:p-8 backdrop-blur-md",
        colSpan,
        rowSpan,
        className
      )}
    >
      {/* Dynamic Hover Spotlight */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300 z-10"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, ${spotlightColor}, transparent 80%)`,
        }}
      />

      {/* Decorative Technical Corner Crosshairs */}
      <div className="absolute top-2 left-2 w-1.5 h-1.5 border-t border-l border-white/20" />
      <div className="absolute top-2 right-2 w-1.5 h-1.5 border-t border-r border-white/20" />
      <div className="absolute bottom-2 left-2 w-1.5 h-1.5 border-b border-l border-white/20" />
      <div className="absolute bottom-2 right-2 w-1.5 h-1.5 border-b border-r border-white/20" />

      {tag && (
        <span className="absolute top-3 right-4 font-mono text-[10px] uppercase tracking-widest text-neutral-500 group-hover:text-neutral-300 transition-colors">
          {tag}
        </span>
      )}

      <div className="relative z-20 flex-1 flex flex-col h-full">{children}</div>
    </motion.div>
  );
}
