"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/core/Button";
import { Badge } from "@/components/core/Badge";
import { Sparkles, Check, ArrowRight, ShieldCheck } from "lucide-react";

export default function RegisterPage() {
  return (
    <main className="min-h-screen bg-void text-[#f5f5f7] flex items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-accent-cyan/10 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-md w-full rounded-3xl bg-surface-1 border border-border-hairline shadow-spatial-2 p-8 space-y-6">
        <div className="text-center space-y-2">
          <Link href="/" className="inline-flex items-center gap-2 mb-2">
            <div className="w-8 h-8 rounded-lg bg-surface-2 border border-border-hairline flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-accent-lime" />
            </div>
            <span className="font-display font-bold text-lg text-white">AETHERIS</span>
          </Link>
          <h2 className="font-display font-bold text-2xl text-white">
            Provision New Cluster
          </h2>
          <p className="text-neutral-400 text-xs font-sans">
            Instantly deploy 100k free sandbox tokens and unlimited API keys.
          </p>
        </div>

        <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
          <div className="space-y-1.5">
            <label className="font-mono text-xs text-neutral-400">Architect Name</label>
            <input
              type="text"
              required
              placeholder="Elena Rostova"
              className="w-full bg-surface-0 border border-border-hairline rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-accent-cyan font-sans"
            />
          </div>

          <div className="space-y-1.5">
            <label className="font-mono text-xs text-neutral-400">Work Email</label>
            <input
              type="email"
              required
              placeholder="elena@company.com"
              className="w-full bg-surface-0 border border-border-hairline rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-accent-cyan font-mono"
            />
          </div>

          <div className="space-y-1.5">
            <label className="font-mono text-xs text-neutral-400">Create Passphrase</label>
            <input
              type="password"
              required
              placeholder="••••••••••••••••"
              className="w-full bg-surface-0 border border-border-hairline rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-accent-cyan font-mono"
            />
          </div>

          <Button type="submit" variant="cyber-cyan" size="md" className="w-full" withArrow>
            Deploy My Cluster Free
          </Button>
        </form>

        <div className="text-center font-mono text-xs text-neutral-500 pt-2">
          Already provisioned?{" "}
          <Link href="/auth/login" className="text-accent-cyan hover:underline">
            Log In
          </Link>
        </div>
      </div>
    </main>
  );
}
