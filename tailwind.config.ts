import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      spacing: {
        /* 8px grid — use grid-* for design-system spacing */
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
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        muted: {
          DEFAULT: "var(--foreground-muted)",
          foreground: "var(--foreground-secondary)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          hover: "var(--accent-hover)",
          subtle: "var(--accent-subtle)",
        },
        border: {
          DEFAULT: "var(--border)",
          subtle: "var(--border-subtle)",
        },
        surface: {
          DEFAULT: "var(--surface)",
          subtle: "var(--surface-subtle)",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "-apple-system", "sans-serif"],
      },
      fontSize: {
        overline: ["0.75rem", { lineHeight: "1.5", letterSpacing: "0.08em" }],
        caption: ["0.8125rem", { lineHeight: "1.45" }],
        "body-sm": ["0.875rem", { lineHeight: "1.55" }],
        body: ["1rem", { lineHeight: "1.6" }],
        "body-lg": ["1.125rem", { lineHeight: "1.65" }],
        h4: ["1.125rem", { lineHeight: "1.4", letterSpacing: "-0.01em" }],
        h3: ["1.5rem", { lineHeight: "1.3", letterSpacing: "-0.015em" }],
        h2: ["2.25rem", { lineHeight: "1.15", letterSpacing: "-0.02em" }],
        h1: ["3rem", { lineHeight: "1.08", letterSpacing: "-0.025em" }],
        display: ["3.5rem", { lineHeight: "1.05", letterSpacing: "-0.03em" }],
      },
      maxWidth: {
        content: "42rem",
        section: "72rem",
        wide: "80rem",
      },
      borderRadius: {
        DEFAULT: "8px",
        sm: "6px",
        md: "8px",
        lg: "12px",
        xl: "16px",
        full: "9999px",
      },
      boxShadow: {
        xs: "var(--shadow-xs)",
        sm: "var(--shadow-sm)",
      },
      transitionDuration: {
        DEFAULT: "200ms",
      },
      transitionTimingFunction: {
        DEFAULT: "cubic-bezier(0.25, 0.1, 0.25, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
