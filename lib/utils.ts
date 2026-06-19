import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** 8px-grid spacing scale (in px) */
export const space = {
  0: 0,
  1: 8,
  2: 16,
  3: 24,
  4: 32,
  5: 40,
  6: 48,
  8: 64,
  10: 80,
  12: 96,
  16: 128,
} as const;

/** Semantic layout tokens */
export const layout = {
  sectionY: "var(--section-y)",
  sectionYLg: "var(--section-y-lg)",
  containerX: "var(--container-x)",
  maxContent: "42rem",
  maxSection: "72rem",
  maxWide: "80rem",
} as const;

/** Typography scale class names */
export const type = {
  display: "display",
  h1: "text-h1 font-semibold tracking-tight",
  h2: "text-h2 font-semibold tracking-tight",
  h3: "text-h3 font-semibold tracking-tight",
  h4: "text-h4 font-medium",
  lead: "lead",
  body: "text-body",
  bodySm: "text-body-sm",
  overline: "overline",
  caption: "text-caption text-muted",
} as const;

/** Container wrapper class presets */
export const container = {
  wide: "container-wide",
  section: "container-section",
  content: "container-content",
} as const;

/** Section wrapper class presets */
export const section = {
  default: "section",
  tight: "section-tight",
  header: "section-header",
} as const;

/** Background surface presets */
export const surface = {
  default: "bg-surface",
  subtle: "bg-surface-subtle",
} as const;

/** Anchor scroll offset for fixed nav */
export const anchor = "anchor-target";
