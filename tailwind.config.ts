import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // Deep obsidian spatial layers
        void: "#030305",
        surface: {
          0: "#08090C",
          1: "#0E1017",
          2: "#151822",
          3: "#1E2230",
          hover: "#252B3C",
        },
        border: {
          hairline: "rgba(255, 255, 255, 0.08)",
          subtle: "rgba(255, 255, 255, 0.14)",
          active: "rgba(255, 255, 255, 0.28)",
        },
        // Specialized AI spectrum chromas
        accent: {
          lime: "#D4FF00",
          cyan: "#00F0FF",
          amber: "#FF6B00",
          emerald: "#00FF9D",
          crimson: "#FF003C",
          violet: "#7928CA",
          titanium: "#E2E8F0",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "Inter", "sans-serif"],
        display: ["var(--font-clash-display)", "Syne", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      backgroundImage: {
        "grid-pattern": "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)",
        "radial-glow": "radial-gradient(circle at 50% 50%, rgba(212, 255, 0, 0.08) 0%, transparent 70%)",
        "radial-cyan": "radial-gradient(circle at 50% 50%, rgba(0, 240, 255, 0.08) 0%, transparent 70%)",
        "radial-crimson": "radial-gradient(circle at 50% 50%, rgba(255, 0, 60, 0.08) 0%, transparent 70%)",
        "glass-gradient": "linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.01) 100%)",
      },
      backgroundSize: {
        "grid-size": "32px 32px",
      },
      boxShadow: {
        "spatial-1": "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
        "spatial-2": "0 20px 50px rgba(0, 0, 0, 0.6)",
        "glow-lime": "0 0 35px -5px rgba(212, 255, 0, 0.35)",
        "glow-cyan": "0 0 35px -5px rgba(0, 240, 255, 0.35)",
        "glow-crimson": "0 0 35px -5px rgba(255, 0, 60, 0.35)",
        "glow-emerald": "0 0 35px -5px rgba(0, 255, 157, 0.35)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "spin-slow": "spin 20s linear infinite",
        "marquee": "marquee 25s linear infinite",
        "marquee-reverse": "marquee-reverse 25s linear infinite",
        "radar-sweep": "radar-sweep 4s linear infinite",
        "glitch": "glitch 1s infinite linear alternate-reverse",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
        "radar-sweep": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        glitch: {
          "0%": { transform: "translate(0)" },
          "20%": { transform: "translate(-2px, 2px)" },
          "40%": { transform: "translate(-2px, -2px)" },
          "60%": { transform: "translate(2px, 2px)" },
          "80%": { transform: "translate(2px, -2px)" },
          "100%": { transform: "translate(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
