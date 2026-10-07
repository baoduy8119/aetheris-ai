"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  glareOpacity?: number;
  tiltMaxAngle?: number;
  glowColor?: "lime" | "cyan" | "amber" | "crimson" | "white";
}

export function TiltCard({
  children,
  className = "",
  glareOpacity = 0.15,
  tiltMaxAngle = 10,
  glowColor = "lime",
}: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50, opacity: 0 });

  const glowStyles = {
    lime: "group-hover:border-accent-lime/40 group-hover:shadow-[0_0_30px_rgba(212,255,0,0.12)]",
    cyan: "group-hover:border-accent-cyan/40 group-hover:shadow-[0_0_30px_rgba(0,240,255,0.12)]",
    amber: "group-hover:border-accent-amber/40 group-hover:shadow-[0_0_30px_rgba(255,107,0,0.12)]",
    crimson: "group-hover:border-accent-crimson/40 group-hover:shadow-[0_0_30px_rgba(255,0,60,0.12)]",
    white: "group-hover:border-white/30 group-hover:shadow-[0_0_30px_rgba(255,255,255,0.08)]",
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = (mouseX / width - 0.5) * 2;
    const yPct = (mouseY / height - 0.5) * 2;

    setRotateX(-yPct * tiltMaxAngle);
    setRotateY(xPct * tiltMaxAngle);
    setGlarePos({
      x: (mouseX / width) * 100,
      y: (mouseY / height) * 100,
      opacity: glareOpacity,
    });
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setGlarePos((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <div
      style={{ perspective: 1000 }}
      className="inline-block w-full group"
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        animate={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
          mass: 0.1,
        }}
        className={cn(
          "relative rounded-2xl bg-surface-1 border border-border-hairline overflow-hidden transition-colors duration-500",
          glowStyles[glowColor],
          className
        )}
      >
        {/* Dynamic Specular Glare */}
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-300 z-30"
          style={{
            background: `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, rgba(255,255,255,${glarePos.opacity}) 0%, transparent 60%)`,
          }}
        />

        {/* Content Container in 3D Space */}
        <div style={{ transform: "translateZ(20px)" }} className="relative z-20">
          {children}
        </div>
      </motion.div>
    </div>
  );
}
