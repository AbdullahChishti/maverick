# Maverick Website - Project Structure

## Overview
Next.js 14 project with App Router, TypeScript, Tailwind CSS, Framer Motion, and Lucide React.

## Tech Stack
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom theme
- **Animations**: Framer Motion
- **Icons**: Lucide React

## Theme Colors
- **Primary (Dark Navy)**: `#0a0f1c` (navy-900), `#0f172a` (navy-800)
- **Accent (Cyan)**: `#22d3ee` (cyan-400), `#06b6d4` (cyan-500)
- **Text**: `#f8fafc` (primary), `#94a3b8` (secondary)

## Directory Structure

```
/Users/abdullah/maverick/
├── app/
│   ├── components/          # Reusable components
│   │   ├── Navigation.tsx   # Fixed navigation with smooth scroll
│   │   ├── Footer.tsx       # Site footer
│   │   └── index.ts         # Component exports
│   ├── sections/            # Page sections (one per file)
│   │   ├── Hero.tsx         # Hero section (id="hero")
│   │   ├── About.tsx        # About section (id="about")
│   │   ├── Vision.tsx       # Vision section (id="vision")
│   │   ├── Services.tsx     # Services section (id="services")
│   │   ├── Approach.tsx     # Approach section (id="approach")
│   │   ├── Industries.tsx   # Industries section (id="industries")
│   │   ├── WhyMaverick.tsx  # Differentiators (id="why-maverick")
│   │   ├── Contact.tsx      # Contact section (id="contact")
│   │   └── index.ts         # Section exports
│   ├── hooks/               # Custom React hooks
│   │   └── useInView.ts     # Intersection observer hook
│   ├── globals/             # Global utilities (empty - add here)
│   ├── globals.css          # Global styles & CSS variables
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Home page composing all sections
├── tailwind.config.ts       # Tailwind with custom colors
├── next.config.ts           # Next.js configuration
└── package.json             # Dependencies
```

## Section IDs (for Navigation)
All sections MUST use these IDs for the navigation smooth scroll to work:

| Section | ID | File |
|---------|-----|------|
| Hero | `hero` | `sections/Hero.tsx` |
| About | `about` | `sections/About.tsx` |
| Vision | `vision` | `sections/Vision.tsx` |
| Services | `services` | `sections/Services.tsx` |
| Approach | `approach` | `sections/Approach.tsx` |
| Industries | `industries` | `sections/Industries.tsx` |
| Why Maverick | `why-maverick` | `sections/WhyMaverick.tsx` |
| Contact | `contact` | `sections/Contact.tsx` |

## Available Utilities

### Tailwind Classes
```css
/* Glow Effects */
.glow-cyan          /* Subtle cyan glow */
.glow-cyan-strong   /* Strong cyan glow */
.glow-cyan-subtle   /* Very subtle glow */

/* Text */
.gradient-text      /* Cyan gradient text */

/* Backgrounds */
.glass              /* Semi-transparent with blur */
.glass-strong       /* Stronger glass effect */

/* Borders */
.gradient-border    /* Animated gradient border */

/* Spacing */
.section-padding    /* Consistent section padding */
.container-padding  /* Consistent container padding */
```

### CSS Variables
```css
var(--navy-900)     /* #0a0f1c - Primary bg */
var(--navy-800)     /* #0f172a - Secondary bg */
var(--cyan-400)     /* #22d3ee - Accent */
var(--cyan-glow)    /* rgba(34, 211, 238, 0.5) */
```

### Animations
```css
.animate-float      /* Floating animation */
.animate-pulse-glow /* Pulsing glow */
.animate-gradient   /* Gradient shift */
.animate-shimmer    /* Shimmer effect */
```

### Hooks
- `useInView<T>()` - Intersection observer for scroll animations

## Building New Sections

When creating a new section:

1. **File Location**: Create in `app/sections/SectionName.tsx`
2. **Export**: Add to `app/sections/index.ts`
3. **ID**: Must match the id in page.tsx (e.g., `id="services"`)
4. **Animation**: Use Framer Motion with `useInView` for scroll reveals
5. **Styling**: Use Tailwind classes, theme colors (navy-*, cyan-*)

### Section Template
```tsx
"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "../hooks/useInView";

export function SectionName() {
  const [ref, isInView] = useInView<HTMLElement>();

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      className="section-padding bg-navy-900"
    >
      <div className="max-w-7xl mx-auto container-padding">
        {/* Section content */}
      </div>
    </motion.section>
  );
}
```

## Running the Project
```bash
npm run dev      # Development server
npm run build    # Production build
npm run start    # Start production server
```

## For Subagents
- All sections are already created - modify/improve existing files
- Navigation auto-detects sections by ID - don't change IDs
- Use existing color scheme (navy/cyan)
- All sections should use Framer Motion for animations
- Components should be responsive (mobile-first)
