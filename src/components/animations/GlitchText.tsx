"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";

interface GlitchTextProps {
  text: string;
  className?: string;
  glitchOnHover?: boolean;
}

export function GlitchText({
  text,
  className = "",
  glitchOnHover = true,
}: GlitchTextProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [displayText, setDisplayText] = useState(text);

  const chars = "ABCDEF0123456789!@#$%^&*()_+-=[]{}|<>?";

  const triggerGlitch = () => {
    let iterations = 0;
    const interval = setInterval(() => {
      setDisplayText((prev) =>
        prev
          .split("")
          .map((letter, index) => {
            if (index < iterations) {
              return text[index];
            }
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
      );

      if (iterations >= text.length) {
        clearInterval(interval);
      }
      iterations += 1 / 2;
    }, 25);
  };

  return (
    <span
      className={cn(
        "relative inline-block font-mono tracking-tight select-none",
        className
      )}
      onMouseEnter={() => {
        if (glitchOnHover) {
          setIsHovered(true);
          triggerGlitch();
        }
      }}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className="relative z-10">{displayText}</span>
      {isHovered && (
        <>
          <span
            aria-hidden="true"
            className="absolute top-0 left-0 text-accent-cyan opacity-80 -translate-x-[2px] translate-y-[1px] mix-blend-screen pointer-events-none"
          >
            {displayText}
          </span>
          <span
            aria-hidden="true"
            className="absolute top-0 left-0 text-accent-crimson opacity-80 translate-x-[2px] -translate-y-[1px] mix-blend-screen pointer-events-none"
          >
            {displayText}
          </span>
        </>
      )}
    </span>
  );
}
