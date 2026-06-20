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
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "-apple-system", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      fontSize: {
        mono: ["0.75rem", { lineHeight: "1.5", letterSpacing: "0.14em" }],
        "mono-sm": ["0.6875rem", { lineHeight: "1.5", letterSpacing: "0.18em" }],
        caption: ["0.8125rem", { lineHeight: "1.5" }],
        "body-sm": ["0.9375rem", { lineHeight: "1.6" }],
        body: ["1.0625rem", { lineHeight: "1.65" }],
        "body-lg": ["1.1875rem", { lineHeight: "1.58" }],
        h4: ["1.25rem", { lineHeight: "1.35", letterSpacing: "-0.02em" }],
        h3: ["1.5rem", { lineHeight: "1.28", letterSpacing: "-0.025em" }],
        h2: ["clamp(2rem, 4vw, 3.25rem)", { lineHeight: "1.06", letterSpacing: "-0.03em" }],
        h1: ["clamp(2.5rem, 5vw, 4.25rem)", { lineHeight: "1.02", letterSpacing: "-0.035em" }],
        display: ["clamp(3rem, 7vw, 5.5rem)", { lineHeight: "0.98", letterSpacing: "-0.04em" }],
        "display-xl": ["clamp(3.25rem, 10vw, 7.5rem)", { lineHeight: "0.94", letterSpacing: "-0.045em" }],
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
