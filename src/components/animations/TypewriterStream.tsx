"use client";

import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface TypewriterStreamProps {
  text: string;
  speed?: number; // ms per char
  delay?: number; // start delay in ms
  cursor?: boolean;
  className?: string;
  onComplete?: () => void;
}

export function TypewriterStream({
  text,
  speed = 22,
  delay = 300,
  cursor = true,
  className = "",
  onComplete,
}: TypewriterStreamProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    let index = 0;
    setDisplayedText("");
    setIsFinished(false);

    const startTimeout = setTimeout(() => {
      const interval = setInterval(() => {
        if (index < text.length) {
          setDisplayedText((prev) => prev + text.charAt(index));
          index++;
        } else {
          clearInterval(interval);
          setIsFinished(true);
          onComplete?.();
        }
      }, speed);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(startTimeout);
  }, [text, speed, delay, onComplete]);

  return (
    <span className={cn("inline-block font-mono", className)}>
      <span>{displayedText}</span>
      {cursor && (
        <span
          className={cn(
            "inline-block w-2 h-4 ml-1 bg-accent-lime align-middle transition-opacity duration-100",
            isFinished ? "animate-pulse" : "opacity-100"
          )}
        />
      )}
    </span>
  );
}
