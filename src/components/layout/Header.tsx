"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { HOME_VARIANTS, INNER_PAGES } from "@/lib/constants";
import { Button } from "@/components/core/Button";
import { ChevronDown, Sparkles, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [isSticky, setIsSticky] = useState(false);
  const [homeDropdownOpen, setHomeDropdownOpen] = useState(false);
  const [stickyDropdownOpen, setStickyDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsSticky(currentScrollY > 100);
    };

    handleScroll(); // Check initial scroll position
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  // Shared Navigation Bar Content
  const renderNavContent = (isDropdownOpen: boolean, setDropdownOpen: (open: boolean) => void) => (
    <>
      {/* Brand Logo */}
      <Link href="/" className="flex items-center gap-2.5 sm:gap-3 group">
        <div className="w-8 h-8 rounded-lg bg-surface-2 border border-border-hairline flex items-center justify-center group-hover:border-accent-lime transition-colors">
          <Sparkles className="w-4 h-4 text-accent-lime animate-pulse" />
        </div>
        <div className="flex items-center gap-1.5">
          <span className="font-display font-bold text-sm sm:text-base tracking-wider text-white">
            AETHERIS
          </span>
          <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-accent-lime/10 text-accent-lime border border-accent-lime/20">
            v2.4
          </span>
        </div>
      </Link>

      {/* Desktop Navigation Links */}
      <nav className="hidden lg:flex items-center gap-1 bg-surface-1/60 p-1 rounded-full border border-border-hairline backdrop-blur-md">
        {/* Demos Dropdown Trigger */}
        <div
          className="relative"
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
        >
          <button
            className={cn(
              "flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-mono tracking-wider transition-colors cursor-pointer",
              isDropdownOpen
                ? "bg-surface-2 text-white"
                : "text-neutral-300 hover:text-white"
            )}
          >
            <span>DEMOS (6)</span>
            <ChevronDown
              className={cn(
                "w-3.5 h-3.5 transition-transform duration-300",
                isDropdownOpen ? "rotate-180 text-accent-lime" : ""
              )}
            />
          </button>

          {/* Mega Menu Dropdown */}
          <AnimatePresence>
            {isDropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 8, scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className="absolute top-full left-0 mt-3 w-[640px] rounded-2xl bg-[#0B0D14]/98 border border-white/10 backdrop-blur-2xl shadow-spatial-2 p-5 grid grid-cols-2 gap-2.5 z-50"
              >
                {HOME_VARIANTS.map((demo) => {
                  const isActive = pathname === demo.href;
                  return (
                    <Link
                      key={demo.href}
                      href={demo.href}
                      onClick={() => setDropdownOpen(false)}
                      className={cn(
                        "flex flex-col p-3 rounded-xl border transition-all duration-300 group",
                        isActive
                          ? "bg-surface-2 border-accent-lime/40"
                          : "border-transparent hover:bg-surface-1/90 hover:border-border-hairline"
                      )}
                    >
                      <div className="flex items-center justify-between">
                        <span
                          className={cn(
                            "font-display font-medium text-sm transition-colors",
                            isActive
                              ? "text-accent-lime"
                              : "text-white group-hover:text-accent-lime"
                          )}
                        >
                          {demo.title}
                        </span>
                        <span className="font-mono text-[9px] px-2 py-0.5 rounded-full bg-surface-2 border border-border-hairline text-neutral-400">
                          {demo.badge}
                        </span>
                      </div>
                      <span className="text-[11px] text-neutral-400 mt-1 line-clamp-1">
                        {demo.description}
                      </span>
                    </Link>
                  );
                })}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Inner Pages Links */}
        {INNER_PAGES.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "relative px-4 py-2 rounded-full text-xs font-mono tracking-wider transition-colors",
                isActive
                  ? "text-accent-lime font-semibold"
                  : "text-neutral-300 hover:text-white"
              )}
            >
              {item.title}
              {item.badge && (
                <span className="ml-1.5 text-[9px] px-1.5 py-0.5 rounded bg-accent-amber/20 text-accent-amber border border-accent-amber/30">
                  {item.badge}
                </span>
              )}
            </Link>
          );
        })}
      </nav>

      {/* Right Action Buttons */}
      <div className="hidden sm:flex items-center gap-2.5">
        <Link href="/auth/login">
          <Button variant="ghost" size="sm" className="text-xs">
            Sign In
          </Button>
        </Link>
        <Link href="/pricing">
          <Button
            variant="primary-lime"
            size="sm"
            className="shadow-glow-lime text-xs px-3.5"
          >
            Deploy AI
          </Button>
        </Link>
      </div>

      {/* Mobile Menu Trigger Button */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="lg:hidden p-2 rounded-full bg-white/10 border border-white/10 text-white hover:bg-white/20 transition-all active:scale-95 cursor-pointer"
        aria-label="Toggle menu"
      >
        {mobileMenuOpen ? (
          <X className="w-5 h-5 text-accent-lime" />
        ) : (
          <Menu className="w-5 h-5" />
        )}
      </button>
    </>
  );

  return (
    <>
      {/* 1. Static Initial Header at the Top of the Page (scrollY <= 100px) */}
      <header className="absolute top-0 left-0 right-0 z-40 flex justify-center px-3 sm:px-4 py-3 sm:py-4 md:py-5 pointer-events-none">
        <div className="pointer-events-auto w-full max-w-7xl mx-auto flex items-center justify-between rounded-full px-4 sm:px-5 py-2.5 sm:py-3 bg-surface-0/60 backdrop-blur-md border border-white/5">
          {renderNavContent(homeDropdownOpen, setHomeDropdownOpen)}
        </div>
      </header>

      {/* 2. Fixed Sticky Header (Shown only after scrolling > 100px) */}
      <AnimatePresence>
        {isSticky && (
          <motion.header
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -80, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-0 left-0 right-0 z-50 flex justify-center px-3 sm:px-4 py-2.5 sm:py-3.5 pointer-events-none"
          >
            <div className="pointer-events-auto w-full max-w-6xl mx-auto flex items-center justify-between rounded-full px-4 sm:px-6 py-2.5 sm:py-3 bg-[#090B10]/95 backdrop-blur-2xl border border-white/15 shadow-[0_12px_40px_rgba(0,0,0,0.8)]">
              {renderNavContent(stickyDropdownOpen, setStickyDropdownOpen)}
            </div>
          </motion.header>
        )}
      </AnimatePresence>

      {/* Full-screen Mobile Kinetic Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-[#07080C]/98 backdrop-blur-2xl pt-24 pb-10 px-5 flex flex-col justify-between overflow-y-auto lg:hidden"
          >
            <div className="space-y-6">
              <div>
                <span className="font-mono text-[11px] uppercase tracking-widest text-accent-lime font-bold block mb-3">
                  DEMO HOMEPAGES (6)
                </span>
                <div className="grid grid-cols-1 gap-2">
                  {HOME_VARIANTS.map((demo) => {
                    const isActive = pathname === demo.href;
                    return (
                      <Link
                        key={demo.href}
                        href={demo.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={cn(
                          "p-3 rounded-xl border transition-all flex flex-col",
                          isActive
                            ? "bg-accent-lime/10 border-accent-lime/40 text-white"
                            : "bg-[#0E1118] border-white/5 text-white/80 active:bg-white/10"
                        )}
                      >
                        <div className="flex items-center justify-between">
                          <span className={cn("font-bold text-sm", isActive ? "text-accent-lime" : "text-white")}>
                            {demo.title}
                          </span>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-white/50 border border-white/10">
                            {demo.badge}
                          </span>
                        </div>
                        <span className="text-xs text-white/50 mt-1 line-clamp-1">
                          {demo.description}
                        </span>
                      </Link>
                    );
                  })}
                </div>
              </div>

              <div>
                <span className="font-mono text-[11px] uppercase tracking-widest text-white/40 font-bold block mb-2 pt-2">
                  PAGES & ARCHITECTURE
                </span>
                <div className="grid grid-cols-2 gap-2 font-mono text-xs">
                  {INNER_PAGES.map((page) => {
                    const isActive = pathname === page.href;
                    return (
                      <Link
                        key={page.href}
                        href={page.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={cn(
                          "p-2.5 rounded-xl border transition-all",
                          isActive
                            ? "bg-white/15 border-accent-lime text-accent-lime font-bold"
                            : "bg-[#0E1118] border-white/5 text-white/70 hover:text-white"
                        )}
                      >
                        {page.title}
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Mobile Footer CTAs */}
            <div className="pt-6 mt-6 border-t border-white/10 space-y-3">
              <div className="grid grid-cols-2 gap-2">
                <Link href="/auth/login" onClick={() => setMobileMenuOpen(false)}>
                  <Button variant="outline" size="md" className="w-full text-xs">
                    Sign In
                  </Button>
                </Link>
                <Link href="/pricing" onClick={() => setMobileMenuOpen(false)}>
                  <Button variant="primary-lime" size="md" className="w-full text-xs">
                    Deploy AI
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
