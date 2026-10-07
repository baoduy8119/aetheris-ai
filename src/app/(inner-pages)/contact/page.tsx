"use client";

import React, { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/core/Button";
import { Badge } from "@/components/core/Badge";
import { Mail, MessageSquare, Terminal, MapPin, Send, CheckCircle2 } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    org: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-void text-[#f5f5f7] relative overflow-hidden">
      <Header />

      <section className="relative pt-36 md:pt-48 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-accent-lime/10 rounded-full blur-[180px] pointer-events-none -z-10" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Lab Channels */}
          <div className="lg:col-span-5 space-y-6">
            <Badge variant="lime">DIRECT ENGINEERING ACCESS</Badge>
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-white tracking-tight">
              Connect with the <br />
              <span className="text-accent-lime">AETHERIS Lab</span>
            </h1>
            <p className="text-neutral-400 text-sm sm:text-base font-sans leading-relaxed">
              Have questions about custom model fine-tuning, dedicated hardware clusters, or enterprise SLAs? Speak directly with our founding engineering team.
            </p>

            <div className="space-y-4 pt-4 font-mono text-xs text-neutral-300">
              <div className="p-4 rounded-xl bg-surface-1 border border-border-hairline flex items-center gap-3">
                <Mail className="w-4 h-4 text-accent-lime" />
                <span>engineering@aetheris.ai</span>
              </div>
              <div className="p-4 rounded-xl bg-surface-1 border border-border-hairline flex items-center gap-3">
                <Terminal className="w-4 h-4 text-accent-cyan" />
                <span>PGP: 4B89 21F0 9A01 C4E8</span>
              </div>
              <div className="p-4 rounded-xl bg-surface-1 border border-border-hairline flex items-center gap-3">
                <MapPin className="w-4 h-4 text-accent-emerald" />
                <span>San Francisco • Tokyo • Zurich</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Inquiry Form */}
          <div className="lg:col-span-7 rounded-2xl sm:rounded-3xl bg-surface-1 border border-border-hairline shadow-spatial-2 p-6 sm:p-8 md:p-10">
            {submitted ? (
              <div className="text-center py-12 space-y-4 font-mono">
                <CheckCircle2 className="w-12 h-12 text-accent-lime mx-auto" />
                <h3 className="font-display font-bold text-2xl text-white">
                  Transmission Dispatched
                </h3>
                <p className="text-neutral-400 text-xs max-w-sm mx-auto">
                  Our systems architect team will respond within 4 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="font-mono text-xs text-neutral-400">Your Name</label>
                    <input
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      type="text"
                      placeholder="Alex Mercer"
                      className="w-full bg-surface-0 border border-border-hairline rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-accent-lime font-sans"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="font-mono text-xs text-neutral-400">Work Email</label>
                    <input
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      type="email"
                      placeholder="alex@acme.ai"
                      className="w-full bg-surface-0 border border-border-hairline rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-accent-lime font-sans"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="font-mono text-xs text-neutral-400">Organization / Startup</label>
                  <input
                    value={formData.org}
                    onChange={(e) => setFormData({ ...formData, org: e.target.value })}
                    type="text"
                    placeholder="Acme Autonomous Systems"
                    className="w-full bg-surface-0 border border-border-hairline rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-accent-lime font-sans"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="font-mono text-xs text-neutral-400">Technical Scope / Project Specs</label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your expected token throughput, required sub-agents, or security compliance..."
                    className="w-full bg-surface-0 border border-border-hairline rounded-xl p-4 text-sm text-white focus:outline-none focus:border-accent-lime font-sans resize-none"
                  />
                </div>

                <Button type="submit" variant="primary-lime" size="lg" className="w-full" leftIcon={<Send className="w-4 h-4" />}>
                  Transmit Technical Inquiry
                </Button>
              </form>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
