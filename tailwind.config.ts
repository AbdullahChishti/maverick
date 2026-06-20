import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      spacing: {
        "grid-0.5": "4px",
        "grid-1": "8px",
        "grid-1.5": "12px",
        "grid-2": "16px",
        "grid-2.5": "20px",
        "grid-3": "24px",
        "grid-4": "32px",
        "grid-5": "40px",
        "grid-6": "48px",
        "grid-8": "64px",
        "grid-10": "80px",
        "grid-12": "96px",
        "grid-16": "128px",
        "grid-20": "160px",
      },
      colors: {
        background: "var(--surface)",
        surface: {
          DEFAULT: "var(--surface)",
          raised: "var(--surface-raised)",
          sunken: "var(--surface-sunken)",
          muted: "var(--surface-muted)",
        },
        foreground: "var(--ink)",
        ink: {
          DEFAULT: "var(--ink)",
          soft: "var(--ink-soft)",
          muted: "var(--ink-muted)",
          faint: "var(--ink-faint)",
        },
        muted: {
          DEFAULT: "var(--ink-muted)",
          foreground: "var(--ink-soft)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          deep: "var(--accent-deep)",
          bright: "var(--accent-bright)",
          tint: "var(--accent-tint)",
        },
        rule: {
          DEFAULT: "var(--rule)",
          strong: "var(--rule-strong)",
          slate: "var(--rule-slate)",
        },
        slate: {
          deep: "var(--slate-deep)",
          mid: "var(--slate-mid)",
          raised: "var(--slate-raised)",
        },
        "on-slate": {
          DEFAULT: "var(--on-slate)",
          soft: "var(--on-slate-soft)",
          muted: "var(--on-slate-muted)",
        },
        border: {
          DEFAULT: "var(--rule)",
          subtle: "var(--rule)",
        },
        hero: {
          DEFAULT: "var(--hero-bg)",
          raised: "var(--hero-bg-raised)",
          text: "var(--hero-text)",
          "text-soft": "var(--hero-text-soft)",
          "text-muted": "var(--hero-text-muted)",
          wave: "var(--hero-accent-wave)",
          "wave-teal": "var(--hero-wave-teal)",
          "wave-blue": "var(--hero-wave-blue)",
        },
        "nav-hero": {
          fg: "var(--nav-hero-fg)",
          "fg-muted": "var(--nav-hero-fg-muted)",
          "fg-active": "var(--nav-hero-fg-active)",
          underline: "var(--nav-hero-underline)",
          category: "var(--nav-hero-category)",
        },
        editorial: {
          DEFAULT: "var(--editorial-surface)",
          raised: "var(--editorial-surface-raised)",
          ink: "var(--editorial-ink)",
        },
      },
      fontFamily: {
        sans: [
          "var(--font-sans)",
          "IBM Plex Sans",
          "system-ui",
          "-apple-system",
          "sans-serif",
        ],
        display: [
          "var(--font-display)",
          "IBM Plex Serif",
          "Georgia",
          "Times New Roman",
          "serif",
        ],
        mono: [
          "var(--font-mono)",
          "IBM Plex Mono",
          "ui-monospace",
          "SFMono-Regular",
          "monospace",
        ],
      },
      fontSize: {
        /* Mono — two sizes: labels (11px) + UI chrome (12px) */
        "mono-sm": ["0.6875rem", { lineHeight: "1.45", letterSpacing: "0.12em" }],
        mono: ["0.75rem", { lineHeight: "1.5", letterSpacing: "0.1em" }],
        /* Body copy */
        caption: ["0.8125rem", { lineHeight: "1.55", letterSpacing: "0.01em" }],
        "body-sm": ["0.875rem", { lineHeight: "1.6" }],
        body: ["1rem", { lineHeight: "1.65", letterSpacing: "0.005em" }],
        "body-lg": ["1.125rem", { lineHeight: "1.6", letterSpacing: "0.002em" }],
        /* Type ramp — display → h2 sections → h3/h4 cards → body */
        h4: ["1.125rem", { lineHeight: "1.4", letterSpacing: "-0.01em" }],
        h3: ["1.375rem", { lineHeight: "1.35", letterSpacing: "-0.015em" }],
        h2: [
          "clamp(1.875rem, 3.25vw, 2.75rem)",
          { lineHeight: "1.12", letterSpacing: "-0.02em" },
        ],
        h1: [
          "clamp(2.25rem, 4.5vw, 3.5rem)",
          { lineHeight: "1.08", letterSpacing: "-0.02em" },
        ],
        brand: ["1.25rem", { lineHeight: "1.3", letterSpacing: "-0.01em" }],
        /* Hero display — serif, restrained scale */
        display: [
          "clamp(2.75rem, 5.5vw, 4.75rem)",
          { lineHeight: "1.04", letterSpacing: "-0.025em" },
        ],
        "display-sm": [
          "clamp(1.75rem, 4.5vw, 3rem)",
          { lineHeight: "1.08", letterSpacing: "-0.02em" },
        ],
        "display-xl": [
          "clamp(3rem, 7vw, 6rem)",
          { lineHeight: "1", letterSpacing: "-0.03em" },
        ],
        "hero-display": [
          "var(--hero-display-size)",
          {
            lineHeight: "var(--hero-display-leading)",
            letterSpacing: "var(--hero-display-tracking)",
          },
        ],
      },
      minHeight: {
        hero: "max(var(--hero-min-h), 100dvh)",
        "hero-safe": "max(var(--hero-min-h), 100dvh, 100svh)",
      },
      maxWidth: {
        prose: "38rem",
        content: "44rem",
        section: "72rem",
        wide: "84rem",
      },
      borderRadius: {
        DEFAULT: "6px",
        sm: "4px",
        md: "8px",
        lg: "12px",
        xl: "16px",
        full: "9999px",
      },
      boxShadow: {
        xs: "var(--shadow-xs)",
        sm: "var(--shadow-sm)",
        md: "var(--shadow-md)",
        signal: "var(--shadow-signal)",
      },
      transitionTimingFunction: {
        signal: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "line-draw": {
          "0%": { strokeDashoffset: "200" },
          "100%": { strokeDashoffset: "0" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) both",
        "line-draw": "line-draw 1.2s cubic-bezier(0.16, 1, 0.3, 1) both",
      },
    },
  },
  plugins: [],
};

export default config;
