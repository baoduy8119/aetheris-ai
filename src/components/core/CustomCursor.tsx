"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // High-performance Motion Values (Zero component re-render on cursor movement)
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Silky-smooth trailing spring physics for the outer ring
  const springConfig = { damping: 28, stiffness: 450, mass: 0.12 };
  const ringX = useSpring(mouseX, springConfig);
  const ringY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Only disable on pure touch mobile devices (no hover capability)
    if (typeof window !== "undefined") {
      const isTouchOnly =
        ("ontouchstart" in window || navigator.maxTouchPoints > 0) &&
        window.matchMedia("(hover: none) and (pointer: coarse)").matches;

      if (isTouchOnly) {
        setIsTouchDevice(true);
        return;
      }
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target || typeof target.closest !== "function") return;

      const isInteractive = Boolean(
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.tagName === "INPUT" ||
        target.tagName === "SELECT" ||
        target.tagName === "TEXTAREA" ||
        target.closest("button") ||
        target.closest("a") ||
        target.closest("[role='button']") ||
        target.closest(".cursor-pointer") ||
        target.getAttribute("role") === "button" ||
        target.classList.contains("cursor-pointer")
      );

      setIsHovered(isInteractive);
    };

    const handleWindowLeave = (e: MouseEvent) => {
      if (!e.relatedTarget && !(e as unknown as { toElement?: Element }).toElement) {
        setIsVisible(false);
      }
    };

    const handleWindowEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseover", handleMouseOver, { passive: true });
    document.documentElement.addEventListener("mouseleave", handleWindowLeave);
    document.documentElement.addEventListener("mouseenter", handleWindowEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      document.documentElement.removeEventListener("mouseleave", handleWindowLeave);
      document.documentElement.removeEventListener("mouseenter", handleWindowEnter);
    };
  }, [mouseX, mouseY]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[999999] overflow-hidden select-none">
      {/* Precision Center Dot (Instantly pinned to exact pixel coordinate) */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-accent-lime rounded-full pointer-events-none shadow-[0_0_8px_rgba(212,255,0,0.9)]"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHovered ? 0 : 1,
          opacity: isHovered ? 0 : 1,
        }}
        transition={{ duration: 0.12, ease: "easeOut" }}
      />

      {/* Trailing Spring Ring (Smoothly expands and wraps hovered items) */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border pointer-events-none"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: isHovered ? 52 : 30,
          height: isHovered ? 52 : 30,
          borderColor: isHovered ? "rgba(212, 255, 0, 0.95)" : "rgba(212, 255, 0, 0.45)",
          backgroundColor: isHovered ? "rgba(212, 255, 0, 0.12)" : "rgba(212, 255, 0, 0.02)",
          boxShadow: isHovered ? "0 0 20px rgba(212, 255, 0, 0.3)" : "none",
        }}
        transition={{
          width: { duration: 0.2, ease: "easeOut" },
          height: { duration: 0.2, ease: "easeOut" },
          borderColor: { duration: 0.15 },
          backgroundColor: { duration: 0.15 },
          boxShadow: { duration: 0.15 },
        }}
      />
    </div>
  );
}
