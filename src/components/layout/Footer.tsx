"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FOOTER_LINKS, HOME_VARIANTS } from "@/lib/constants";
import { Button } from "@/components/core/Button";
import { Badge } from "@/components/core/Badge";
import { Sparkles, Terminal, ArrowUpRight, CheckCircle2, ShieldCheck, Cpu } from "lucide-react";

export function Footer() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="relative bg-surface-0 border-t border-border-hairline pt-20 pb-12 overflow-hidden">
      {/* Background Ambient Radial Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-accent-lime/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Callout & Newsletter Terminal */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-16 border-b border-border-hairline items-center">
          <div className="lg:col-span-6 space-y-4">
            <Badge variant="lime">SYSTEM STATUS: 100% OPERATIONAL</Badge>
            <h3 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
              Ready to construct the next era of <span className="text-accent-lime">Autonomous AI</span>?
            </h3>
            <p className="text-neutral-400 text-sm max-w-md font-sans">
              Deploy ultra-scalable neural workflows, spatial user interfaces, and high-frequency LLM pipelines in minutes.
            </p>
          </div>

          <div className="lg:col-span-6">
            <div className="p-6 rounded-2xl bg-surface-1 border border-border-hairline backdrop-blur-xl relative">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-border-hairline text-xs font-mono text-neutral-400">
                <span className="flex items-center gap-2">
                  <Terminal className="w-3.5 h-3.5 text-accent-lime" />
                  root@aetheris:~# subscribe_stream
                </span>
                <span className="text-accent-lime text-[11px] animate-pulse">● LIVE</span>
              </div>

              {isSubscribed ? (
                <div className="flex items-center gap-2 text-accent-lime font-mono text-sm py-3">
                  <CheckCircle2 className="w-5 h-5 shrink-0" />
                  <span>Subscribed to telemetry updates successfully.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="developer@aetheris.ai"
                    className="flex-1 bg-surface-2 border border-border-hairline rounded-full px-4 py-2.5 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-accent-lime font-mono transition-colors"
                  />
                  <Button type="submit" variant="primary-lime" size="md">
                    Join Network
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Middle Multi-column Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-8 py-16">
          <div className="col-span-2 lg:col-span-4 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-surface-2 border border-border-hairline flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-accent-lime" />
              </div>
              <span className="font-display font-bold text-xl tracking-wider text-white">
                AETHERIS
              </span>
            </Link>
            <p className="text-neutral-400 text-xs leading-relaxed max-w-sm font-sans">
              The premier spatial AI template engineered for Next-Gen startups, LLM orchestrations, machine learning platforms, and high-concurrency developer tooling.
            </p>
            <div className="flex items-center gap-3 pt-2 text-xs font-mono text-neutral-400">
              <span className="flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5 text-accent-cyan" />
                Next.js 14 App Router
              </span>
              <span className="text-neutral-600">/</span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-accent-emerald" />
                SOC-2 Type II
              </span>
            </div>
          </div>

          <div className="col-span-1 lg:col-span-3 space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-widest text-neutral-200">
              Ecosystem
            </h4>
            <ul className="space-y-2">
              {FOOTER_LINKS.ecosystem.map((link) => (
                <li key={link.title}>
                  <Link
                    href={link.href}
                    className="text-xs text-neutral-400 hover:text-accent-lime transition-colors flex items-center gap-1"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-1 lg:col-span-3 space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-widest text-neutral-200">
              Resources
            </h4>
            <ul className="space-y-2">
              {FOOTER_LINKS.resources.map((link) => (
                <li key={link.title}>
                  <Link
                    href={link.href}
                    className="text-xs text-neutral-400 hover:text-accent-lime transition-colors"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 lg:col-span-2 space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-widest text-neutral-200">
              Legal & Privacy
            </h4>
            <ul className="space-y-2">
              {FOOTER_LINKS.legal.map((link) => (
                <li key={link.title}>
                  <Link
                    href={link.href}
                    className="text-xs text-neutral-400 hover:text-accent-lime transition-colors"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar Telemetry */}
        <div className="pt-8 border-t border-border-hairline flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-xs text-neutral-500">
          <div className="flex items-center gap-4">
            <span>© 2026 AETHERIS AI Inc. All rights reserved.</span>
          </div>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent-emerald animate-ping" />
              Latency: 14ms (Tokyo / SF / London)
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
