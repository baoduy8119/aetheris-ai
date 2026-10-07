"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/core/Button";
import { Badge } from "@/components/core/Badge";
import { Sparkles, Key, Lock, ArrowRight, ShieldCheck, Github } from "lucide-react";

export default function LoginPage() {
  const [email, setEmail] = useState("");

  return (
    <main className="min-h-screen bg-void text-[#f5f5f7] flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-accent-lime/10 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-md w-full rounded-3xl bg-surface-1 border border-border-hairline shadow-spatial-2 p-8 space-y-6">
        <div className="text-center space-y-2">
          <Link href="/" className="inline-flex items-center gap-2 mb-2">
            <div className="w-8 h-8 rounded-lg bg-surface-2 border border-border-hairline flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-accent-lime" />
            </div>
            <span className="font-display font-bold text-lg text-white">AETHERIS</span>
          </Link>
          <h2 className="font-display font-bold text-2xl text-white">
            Access Developer Console
          </h2>
          <p className="text-neutral-400 text-xs font-sans">
            Authenticate to manage clusters, vector stores, and API keys.
          </p>
        </div>

        <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
          <div className="space-y-1.5">
            <label className="font-mono text-xs text-neutral-400">Developer Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="architect@company.com"
              className="w-full bg-surface-0 border border-border-hairline rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-accent-lime font-mono transition-colors"
            />
          </div>

          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <label className="font-mono text-xs text-neutral-400">Passkey / Master Key</label>
              <a href="#" className="font-mono text-[11px] text-accent-lime hover:underline">
                Forgot key?
              </a>
            </div>
            <input
              type="password"
              required
              placeholder="••••••••••••••••"
              className="w-full bg-surface-0 border border-border-hairline rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-accent-lime font-mono transition-colors"
            />
          </div>

          <Button type="submit" variant="primary-lime" size="md" className="w-full" withArrow>
            Authenticate Session
          </Button>
        </form>

        <div className="relative flex py-1 items-center">
          <div className="flex-grow border-t border-border-hairline" />
          <span className="flex-shrink mx-4 font-mono text-[10px] text-neutral-500 uppercase">
            Or Passkey Auth
          </span>
          <div className="flex-grow border-t border-border-hairline" />
        </div>

        <div className="grid grid-cols-2 gap-3">
          <button className="flex items-center justify-center gap-2 p-2.5 rounded-xl bg-surface-2 hover:bg-surface-hover border border-border-hairline text-xs font-mono text-neutral-300 transition-colors">
            <Github className="w-4 h-4" />
            GitHub
          </button>
          <button className="flex items-center justify-center gap-2 p-2.5 rounded-xl bg-surface-2 hover:bg-surface-hover border border-border-hairline text-xs font-mono text-neutral-300 transition-colors">
            <Key className="w-4 h-4 text-accent-cyan" />
            Passkey
          </button>
        </div>

        <div className="text-center font-mono text-xs text-neutral-500 pt-2">
          New to AETHERIS?{" "}
          <Link href="/auth/register" className="text-accent-lime hover:underline">
            Provision Cluster
          </Link>
        </div>
      </div>
    </main>
  );
}
