"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { anchor } from "@/lib/utils";

const founderOrgs = ["Microsoft", "OpenAI", "Google"] as const;

export function Hero() {
  const prefersReducedMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.1,
        delayChildren: prefersReducedMotion ? 0 : 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: prefersReducedMotion ? 0 : 0.7,
        ease: [0.22, 0.1, 0.22, 1],
      },
    },
  };

  const slideVariants = {
    hidden: { opacity: 0, x: prefersReducedMotion ? 0 : 24 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: prefersReducedMotion ? 0 : 0.8,
        ease: [0.22, 0.1, 0.22, 1],
        delay: prefersReducedMotion ? 0 : 0.35,
      },
    },
  };

  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className={`relative flex min-h-[100dvh] flex-col overflow-hidden bg-white ${anchor}`}
    >
      {/* Atmospheric depth — single soft gradient, no banding */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
      >
        <div className="absolute -right-[20%] -top-[30%] h-[70vh] w-[70vw] rounded-full bg-accent-subtle/60 blur-3xl" />
        <div className="absolute -bottom-[10%] -left-[10%] h-[40vh] w-[50vw] rounded-full bg-surface-subtle blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              "linear-gradient(to right, var(--border-subtle) 1px, transparent 1px), linear-gradient(to bottom, var(--border-subtle) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
            maskImage:
              "radial-gradient(ellipse 80% 70% at 30% 40%, black 20%, transparent 70%)",
          }}
        />
      </div>

      {/* Editorial split — headline dominates left, founders integrated right */}
      <motion.div
        className="container-wide relative z-10 flex flex-1 flex-col justify-center pb-grid-6 pt-24 sm:pt-28 lg:pb-grid-8 lg:pt-32"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid items-end gap-grid-8 lg:grid-cols-12 lg:gap-grid-6">
          {/* Primary column — scale + asymmetry via left alignment & line breaks */}
          <div className="lg:col-span-7 xl:col-span-7">
            <motion.p
              variants={itemVariants}
              className="overline mb-grid-4 text-left"
            >
              Enterprise Technology Consulting
            </motion.p>

            <motion.h1
              id="hero-heading"
              variants={itemVariants}
              className="max-w-[14ch] text-left font-[family-name:var(--font-display)] text-[2.625rem] font-medium leading-[1.02] tracking-[-0.035em] text-foreground sm:max-w-none sm:text-[3.5rem] lg:text-[4.5rem] xl:text-[5rem] text-balance"
            >
              AI-Native
              <span className="block text-foreground/75">& Cloud-First</span>
              <span className="block">Solutions</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mt-grid-5 max-w-md text-left text-body-lg leading-relaxed text-muted-foreground sm:mt-grid-6 sm:max-w-lg"
            >
              We help forward-thinking organizations transform with intelligent
              systems and modern cloud architecture.
            </motion.p>

            <motion.div variants={itemVariants} className="mt-grid-6 sm:mt-grid-8">
              <a
                href="#contact"
                className="group inline-flex min-h-[44px] min-w-[44px] items-center justify-center gap-2.5 rounded-full bg-foreground px-8 py-3 text-body-sm font-medium text-white transition-colors duration-200 hover:bg-neutral-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
              >
                Schedule a Consultation
                <ArrowRight
                  className="h-4 w-4 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </a>
            </motion.div>
          </div>

          {/* Founders — integrated credential panel, not a separate section */}
          <motion.aside
            variants={slideVariants}
            aria-label="Founder credentials"
            className="mt-grid-10 border-t border-border-subtle/60 pt-grid-8 lg:col-span-5 lg:col-start-8 lg:mt-0 lg:border-t-0 lg:pt-0 lg:pb-2 xl:col-span-4 xl:col-start-9"
          >
            <div className="relative border-l-2 border-accent pl-grid-5 sm:pl-grid-6">
              <p className="text-caption font-medium uppercase tracking-[0.1em] text-muted">
                Founded by leaders from
              </p>

              <ul className="mt-grid-4 space-y-grid-3" role="list">
                {founderOrgs.map((org, index) => (
                  <li
                    key={org}
                    className="flex items-baseline gap-grid-3"
                  >
                    <span
                      className="font-[family-name:var(--font-display)] text-[0.625rem] font-medium tabular-nums text-muted/60"
                      aria-hidden="true"
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="font-[family-name:var(--font-display)] text-xl font-medium tracking-[-0.02em] text-foreground sm:text-2xl">
                      {org}
                    </span>
                  </li>
                ))}
              </ul>

              <p className="mt-grid-5 max-w-xs text-body-sm leading-relaxed text-muted-foreground">
                Our founders built AI and cloud systems at these companies —
                experience they bring to every engagement.
              </p>
            </div>
          </motion.aside>
        </div>
      </motion.div>

      {/* Scroll cue — integrated into hero, no duplicate trust band */}
      <motion.div
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 pb-grid-6 pt-grid-2"
        aria-hidden="true"
      >
        <div className="container-wide flex justify-center lg:justify-start">
          <span className="inline-flex flex-col items-center gap-grid-2 text-muted/60">
            <span className="text-[0.6875rem] font-medium uppercase tracking-[0.12em]">
              Explore
            </span>
            <span className="block h-8 w-px bg-gradient-to-b from-border to-transparent" />
          </span>
        </div>
      </motion.div>
    </section>
  );
}
