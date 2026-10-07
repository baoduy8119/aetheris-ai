"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { MagneticWrapper } from "@/components/animations/MagneticWrapper";
import { motion, HTMLMotionProps } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:
    | "primary-lime"
    | "cyber-cyan"
    | "obsidian-glass"
    | "brutalist-outline"
    | "crimson-alert"
    | "ghost"
    | "primary"
    | "outline"
    | "secondary";
  size?: "sm" | "md" | "lg" | "xl";
  magnetic?: boolean;
  withArrow?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary-lime",
      size = "md",
      magnetic = false,
      withArrow = false,
      leftIcon,
      rightIcon,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const sizeClasses = {
      sm: "h-9 px-4 text-xs font-mono tracking-wider gap-2",
      md: "h-11 px-6 text-sm font-medium gap-2.5",
      lg: "h-13 px-8 text-base font-medium gap-3",
      xl: "h-15 px-10 text-lg font-medium gap-3.5",
    };

    const variantClasses: Record<string, string> = {
      "primary-lime":
        "bg-accent-lime text-void font-semibold shadow-glow-lime hover:bg-[#b8e000] hover:scale-[1.02] active:scale-[0.98]",
      "cyber-cyan":
        "bg-accent-cyan text-void font-semibold shadow-glow-cyan hover:bg-[#00d0e0] hover:scale-[1.02] active:scale-[0.98]",
      "obsidian-glass":
        "bg-surface-1/80 hover:bg-surface-2 text-white border border-border-hairline hover:border-border-active backdrop-blur-md hover:shadow-spatial-1",
      "brutalist-outline":
        "bg-transparent text-white border border-border-subtle hover:border-accent-lime hover:text-accent-lime font-mono uppercase tracking-widest",
      "crimson-alert":
        "bg-accent-crimson text-white font-semibold shadow-glow-crimson hover:bg-[#e00030] hover:scale-[1.02]",
      ghost:
        "bg-transparent text-neutral-300 hover:text-white hover:bg-surface-1/50 border border-transparent",
      primary:
        "bg-white text-black font-semibold hover:bg-neutral-200 hover:scale-[1.02] active:scale-[0.98] shadow-lg",
      outline:
        "bg-surface-1/50 text-white border border-white/10 hover:border-white/30 hover:bg-surface-2 font-medium backdrop-blur-md",
      secondary:
        "bg-surface-2 text-white border border-white/10 hover:bg-surface-3 font-medium",
    };

    const buttonElement = (
      <motion.button
        ref={ref}
        whileTap={{ scale: disabled ? 1 : 0.96 }}
        disabled={disabled}
        className={cn(
          "relative inline-flex items-center justify-center rounded-full transition-all duration-300 select-none overflow-hidden cursor-pointer disabled:opacity-40 disabled:pointer-events-none group",
          sizeClasses[size],
          variantClasses[variant],
          className
        )}
        {...(props as HTMLMotionProps<"button">)}
      >
        {/* Subtle Ambient Shimmer Overlay */}
        <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />

        {leftIcon && <span className="inline-flex shrink-0">{leftIcon}</span>}

        <span className="relative z-10 flex items-center gap-1.5">
          {children}
          {withArrow && (
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          )}
        </span>

        {rightIcon && <span className="inline-flex shrink-0">{rightIcon}</span>}
      </motion.button>
    );

    if (magnetic && !disabled) {
      return <MagneticWrapper>{buttonElement}</MagneticWrapper>;
    }

    return buttonElement;
  }
);

Button.displayName = "Button";
