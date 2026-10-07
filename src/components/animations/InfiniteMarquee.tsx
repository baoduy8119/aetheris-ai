"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface InfiniteMarqueeProps {
  children: React.ReactNode;
  direction?: "left" | "right";
  speed?: "slow" | "normal" | "fast";
  pauseOnHover?: boolean;
  className?: string;
}

export function InfiniteMarquee({
  children,
  direction = "left",
  speed = "normal",
  pauseOnHover = true,
  className = "",
}: InfiniteMarqueeProps) {
  const speedDurations = {
    slow: "duration-[45s]",
    normal: "duration-[25s]",
    fast: "duration-[12s]",
  };

  const animClass =
    direction === "left" ? "animate-marquee" : "animate-marquee-reverse";

  return (
    <div
      className={cn(
        "relative w-full overflow-hidden mask-gradient-x flex items-center py-4 select-none",
        className
      )}
      style={{
        maskImage:
          "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
      }}
    >
      <div
        className={cn(
          "flex min-w-full shrink-0 items-center justify-around gap-8 md:gap-14",
          animClass,
          speedDurations[speed],
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {children}
      </div>
      <div
        aria-hidden="true"
        className={cn(
          "flex min-w-full shrink-0 items-center justify-around gap-8 md:gap-14",
          animClass,
          speedDurations[speed],
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {children}
      </div>
    </div>
  );
}
