"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "lime" | "cyan" | "amber" | "emerald" | "crimson" | "glass";
  pulse?: boolean;
  dot?: boolean;
  size?: "sm" | "md";
}

export function Badge({
  className,
  variant = "lime",
  pulse = true,
  dot = true,
  size = "md",
  children,
  ...props
}: BadgeProps) {
  const variantStyles = {
    lime: {
      bg: "bg-accent-lime/10 text-accent-lime border-accent-lime/25",
      dot: "bg-accent-lime shadow-[0_0_8px_#D4FF00]",
    },
    cyan: {
      bg: "bg-accent-cyan/10 text-accent-cyan border-accent-cyan/25",
      dot: "bg-accent-cyan shadow-[0_0_8px_#00F0FF]",
    },
    amber: {
      bg: "bg-accent-amber/10 text-accent-amber border-accent-amber/25",
      dot: "bg-accent-amber shadow-[0_0_8px_#FF6B00]",
    },
    emerald: {
      bg: "bg-accent-emerald/10 text-accent-emerald border-accent-emerald/25",
      dot: "bg-accent-emerald shadow-[0_0_8px_#00FF9D]",
    },
    crimson: {
      bg: "bg-accent-crimson/10 text-accent-crimson border-accent-crimson/25",
      dot: "bg-accent-crimson shadow-[0_0_8px_#FF003C]",
    },
    glass: {
      bg: "bg-surface-1/60 text-neutral-300 border-border-hairline backdrop-blur-md",
      dot: "bg-neutral-400",
    },
  };

  const sizeStyles = {
    sm: "px-2.5 py-0.5 text-[11px] gap-1.5",
    md: "px-3.5 py-1 text-xs gap-2",
  };

  const current = variantStyles[variant];

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border font-mono uppercase tracking-wider select-none",
        current.bg,
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {dot && (
        <span className="relative flex h-2 w-2 items-center justify-center">
          {pulse && (
            <motion.span
              animate={{ scale: [1, 2, 1], opacity: [0.8, 0, 0.8] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className={cn("absolute inline-flex h-full w-full rounded-full opacity-75", current.dot)}
            />
          )}
          <span className={cn("relative inline-flex rounded-full h-1.5 w-1.5", current.dot)} />
        </span>
      )}
      <span>{children}</span>
    </div>
  );
}
