"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { anchor } from "@/lib/utils";

const clients = [
  { id: "jpmorgan", name: "JPMorgan" },
  { id: "barclays", name: "Barclays" },
  { id: "almaghreb", name: "Almaghreb Bank" },
] as const;

const differentiators = [
  {
    index: "01",
    title: "AI-First Delivery",
    description:
      "Intelligence embedded from strategy through implementation — not bolted on at the end.",
  },
  {
    index: "02",
    title: "Enterprise Security",
    description:
      "Compliance-ready architecture with proactive threat monitoring built into every layer.",
  },
  {
    index: "03",
    title: "Accelerated Delivery",
    description:
      "Agile, outcome-focused sprints that compress timelines without compromising quality.",
  },
  {
    index: "04",
    title: "Outcome-Driven",
    description:
      "Success measured by business impact — revenue, efficiency, and resilience — not deliverables alone.",
  },
] as const;

const approachSteps = ["Discover", "Design", "Build", "Scale"] as const;

const industries = [
  "Financial Services",
  "Healthcare",
  "Manufacturing",
  "Telecommunications",
  "Public Sector",
] as const;

const ease = [0.22, 0.1, 0.22, 1] as const;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.07, delayChildren: 0.04 },
  },
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease },
  },
};

export function Proof() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });
  const prefersReducedMotion = useReducedMotion();
  const motionState = prefersReducedMotion
    ? "visible"
    : isInView
      ? "visible"
      : "hidden";

  return (
    <section
      id="proof"
      ref={sectionRef}
      aria-labelledby="proof-heading"
      className={`section bg-surface ${anchor}`}
    >
      <motion.div
        className="container-wide"
        variants={containerVariants}
        initial={prefersReducedMotion ? "visible" : "hidden"}
        animate={motionState}
      >
        <motion.div
          variants={fadeUpVariants}
          className="mb-grid-8 flex items-end justify-between gap-grid-4 border-b border-border pb-grid-6 lg:mb-grid-10 lg:pb-grid-8"
        >
          <div className="flex items-end gap-grid-4 sm:gap-grid-6">
            <span
              className="font-semibold tabular-nums leading-none tracking-tighter text-foreground/10"
              aria-hidden
            >
              <span className="text-[3.5rem] sm:text-[4.5rem] lg:text-[5.5rem]">
                03
              </span>
            </span>
            <div>
              <p className="overline mb-grid-1.5">Proof</p>
              <h2
                id="proof-heading"
                className="text-[1.75rem] sm:text-h2 lg:text-[2.5rem]"
              >
                Why Organizations Choose Us
              </h2>
            </div>
          </div>
          <p className="hidden max-w-xs text-right text-body-sm text-muted-foreground lg:block">
            Trust, differentiation, and a proven delivery rhythm.
          </p>
        </motion.div>

        <motion.div
          variants={fadeUpVariants}
          className="overflow-hidden rounded-xl border border-border bg-surface lg:grid lg:grid-cols-12"
        >
          {/* Trust panel — client names as typographic anchors */}
          <div className="border-b border-border bg-foreground px-grid-5 py-grid-8 sm:px-grid-8 sm:py-grid-10 lg:col-span-5 lg:border-b-0 lg:border-r lg:py-grid-12">
            <p className="overline mb-grid-6 text-background/50">Trusted by</p>

            <ul className="space-y-grid-6" aria-label="Selected clients">
              {clients.map((client) => (
                <motion.li
                  key={client.id}
                  variants={fadeUpVariants}
                  className="group"
                >
                  <span
                    className="block font-[family-name:var(--font-display)] text-[1.625rem] font-medium leading-none tracking-[-0.03em] text-background transition-colors duration-300 group-hover:text-background/80 sm:text-[2rem] lg:text-[2.25rem]"
                  >
                    {client.name}
                  </span>
                </motion.li>
              ))}
            </ul>

            <p className="mt-grid-10 max-w-[16rem] text-body-sm leading-relaxed text-background/45">
              Global institutions that demand precision, security, and speed.
            </p>
          </div>

          {/* Differentiators panel */}
          <div className="px-grid-5 py-grid-8 sm:px-grid-8 sm:py-grid-10 lg:col-span-7 lg:py-grid-12">
            <p className="overline mb-grid-6 text-muted">Why Maverick</p>

            <ol className="divide-y divide-border-subtle">
              {differentiators.map((item) => (
                <motion.li
                  key={item.index}
                  variants={fadeUpVariants}
                  className="grid grid-cols-[2.5rem_1fr] gap-x-grid-4 py-grid-5 first:pt-0 last:pb-0 sm:grid-cols-[3rem_1fr] sm:gap-x-grid-5"
                >
                  <span
                    className="pt-0.5 font-[family-name:var(--font-display)] text-body-sm font-medium tabular-nums text-accent"
                    aria-hidden="true"
                  >
                    {item.index}
                  </span>
                  <div>
                    <h3 className="mb-grid-1 text-h4 text-foreground">
                      {item.title}
                    </h3>
                    <p className="max-w-md text-body-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </motion.li>
              ))}
            </ol>
          </div>
        </motion.div>

        {/* Compact approach timeline */}
        <motion.div
          variants={fadeUpVariants}
          className="mt-grid-8 border-t border-border pt-grid-8 lg:mt-grid-10 lg:pt-grid-10"
        >
          <div className="mb-grid-6 flex flex-col gap-grid-2 sm:flex-row sm:items-end sm:justify-between">
            <p className="overline text-muted">Our Approach</p>
            <p className="text-caption text-muted-foreground">
              End-to-end partnership, one disciplined rhythm
            </p>
          </div>

          <div className="relative">
            <div
              className="absolute left-0 right-0 top-[11px] hidden h-px bg-border lg:block"
              aria-hidden="true"
            >
              <motion.div
                className="h-full bg-accent"
                initial={{ width: prefersReducedMotion ? "100%" : 0 }}
                animate={isInView || prefersReducedMotion ? { width: "100%" } : {}}
                transition={{ duration: 1.1, ease, delay: 0.35 }}
              />
            </div>

            <ol className="grid grid-cols-2 gap-x-grid-4 gap-y-grid-6 lg:grid-cols-4 lg:gap-y-0">
              {approachSteps.map((step, index) => (
                <motion.li
                  key={step}
                  variants={fadeUpVariants}
                  className="relative flex flex-col lg:items-center lg:text-center"
                >
                  <span className="mb-grid-3 inline-flex h-[22px] w-[22px] items-center justify-center rounded-full border border-border bg-surface text-[0.6875rem] font-medium tabular-nums text-accent lg:mb-grid-4">
                    {index + 1}
                  </span>
                  <span className="font-[family-name:var(--font-display)] text-body font-medium tracking-[-0.02em] text-foreground">
                    {step}
                  </span>
                  {index < approachSteps.length - 1 && (
                    <span
                      className="absolute right-0 top-[10px] hidden translate-x-1/2 text-muted lg:inline"
                      aria-hidden="true"
                    >
                      →
                    </span>
                  )}
                </motion.li>
              ))}
            </ol>
          </div>
        </motion.div>

        {/* Industry tags — compact capstone */}
        <motion.div
          variants={fadeUpVariants}
          className="mt-grid-8 flex flex-col gap-grid-4 border-t border-border pt-grid-8 sm:flex-row sm:items-center sm:justify-between lg:mt-grid-10 lg:pt-grid-10"
        >
          <p className="overline shrink-0 text-muted">Industries</p>
          <ul className="flex flex-wrap gap-grid-2 sm:justify-end">
            {industries.map((industry) => (
              <li key={industry}>
                <span className="inline-block rounded-full border border-border-subtle px-grid-3 py-grid-1 text-caption text-muted-foreground transition-colors duration-200 hover:border-border hover:text-foreground">
                  {industry}
                </span>
              </li>
            ))}
          </ul>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Proof;
