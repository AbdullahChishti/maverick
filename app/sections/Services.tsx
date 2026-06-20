"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { anchor } from "@/lib/utils";

interface Capability {
  index: string;
  title: string;
  tagline: string;
  meta: string;
  featured?: boolean;
}

const capabilities: Capability[] = [
  {
    index: "01",
    title: "AI & Intelligent Systems",
    tagline:
      "Executive AI strategy through governed LLM agents — built for the risk review, not the pilot deck.",
    meta: "Live in regulated finance",
    featured: true,
  },
  {
    index: "02",
    title: "Data & Analytics",
    tagline:
      "Pipelines and models your leadership uses weekly — not another quarterly report.",
    meta: "Daily decision models",
  },
  {
    index: "03",
    title: "Cloud & Platform Engineering",
    tagline:
      "Migrate and operate multi-cloud platforms with security sign-off in the architecture, not bolted on at the end.",
    meta: "Multi-region, audited",
  },
  {
    index: "04",
    title: "Workflow Automation",
    tagline:
      "Replace manual handoffs across ERP, CRM, and the custom systems your teams already run.",
    meta: "ERP / CRM / custom",
  },
  {
    index: "05",
    title: "Application Modernization",
    tagline:
      "Rebuild legacy products on modern stacks — phased delivery, no big-bang cutover.",
    meta: "Phased, no cutover",
  },
];

const ease = [0.16, 1, 0.3, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay, ease },
  }),
};

export function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-60px" });
  const prefersReducedMotion = useReducedMotion();
  const motionState = prefersReducedMotion || isInView ? "visible" : "hidden";

  return (
    <section
      id="capabilities"
      ref={sectionRef}
      aria-labelledby="capabilities-heading"
      className={`section section-seam relative overflow-hidden bg-surface-sunken ${anchor}`}
    >
      <div className="pointer-events-none absolute inset-0 dot-grid opacity-20" aria-hidden="true" />

      <div className="container-wide relative z-10">
        <div className="grid grid-cols-1 gap-grid-4 lg:grid-cols-12 lg:items-end lg:gap-grid-8">
          <motion.div
            custom={0}
            initial={prefersReducedMotion ? "visible" : "hidden"}
            animate={motionState}
            variants={fadeUp}
            className="lg:col-span-7"
          >
            <p className="section-tag">Capabilities</p>
            <h2
              id="capabilities-heading"
              className="mt-grid-4 max-w-xl font-display text-h1 font-semibold text-ink"
            >
              What we build for enterprise teams.
            </h2>
          </motion.div>

          <motion.p
            custom={prefersReducedMotion ? 0 : 0.08}
            initial={prefersReducedMotion ? "visible" : "hidden"}
            animate={motionState}
            variants={fadeUp}
            className="max-w-prose text-body text-ink-soft lg:col-span-5 lg:text-right"
          >
            Five practices, one accountable team — scoped to ship and survive
            the audit.
          </motion.p>
        </div>

        {/* asymmetric bento grid */}
        <div className="mt-grid-8 grid grid-cols-1 gap-grid-3 sm:grid-cols-2 lg:mt-grid-10 lg:grid-cols-3 lg:gap-grid-4">
          {capabilities.map((cap, i) => (
            <motion.a
              key={cap.title}
              href="#contact"
              custom={prefersReducedMotion ? 0 : 0.1 + i * 0.06}
              initial={prefersReducedMotion ? "visible" : "hidden"}
              animate={motionState}
              variants={fadeUp}
              aria-label={`Discuss ${cap.title}`}
              className={cn(
                "cap-card group",
                cap.featured && "cap-card-featured sm:col-span-2 lg:col-span-2"
              )}
            >
              <div className="flex items-start justify-between gap-grid-3">
                <span
                  className={cn(
                    "font-mono text-[0.75rem] tabular-nums tracking-widest",
                    cap.featured ? "text-accent-deep" : "text-ink-faint"
                  )}
                >
                  {cap.index}
                </span>
                <ArrowUpRight
                  className="h-4 w-4 shrink-0 text-ink-faint transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                  aria-hidden="true"
                />
              </div>

              <h3
                className={cn(
                  "mt-grid-3 font-display text-h3 font-semibold leading-tight tracking-tight transition-colors duration-300",
                  cap.featured
                    ? "text-ink"
                    : "text-ink group-hover:text-accent-deep"
                )}
              >
                {cap.title}
              </h3>

              <p className="mt-grid-2 flex-1 text-body-sm text-ink-soft">
                {cap.tagline}
              </p>

              <span className="mt-grid-4 font-mono text-[0.625rem] uppercase tracking-[0.12em] text-ink-muted">
                {cap.meta}
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
