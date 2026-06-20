"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SignalGraph } from "../components/SignalGraph";
import { anchor } from "@/lib/utils";

const ease = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  const prefersReducedMotion = useReducedMotion();

  const reveal = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 24 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: prefersReducedMotion ? 0 : 0.65,
        delay: prefersReducedMotion ? 0 : 0.08 + i * 0.1,
        ease,
      },
    }),
  };

  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className={`relative flex min-h-[100dvh] flex-col overflow-hidden bg-surface ${anchor}`}
    >
      {/* backdrop */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="dot-grid dot-grid-fade absolute inset-0 opacity-35" />
        <div
          className="absolute -right-[5%] top-[5%] h-[50vh] w-[50vw] max-w-2xl rounded-full opacity-70 blur-[100px]"
          style={{ background: "var(--accent-glow)" }}
        />
        <div className="absolute inset-x-0 bottom-0 h-px bg-rule" />
      </div>

      <div className="container-wide relative z-10 flex flex-1 flex-col pt-[var(--nav-h)]">
        <div className="grid flex-1 grid-cols-1 items-center gap-grid-6 py-grid-8 sm:gap-grid-8 sm:py-grid-10 lg:grid-cols-12 lg:gap-grid-6 lg:py-grid-16">
          {/* copy column — asymmetric left weight */}
          <div className="lg:col-span-7 xl:col-span-6">
            <motion.p
              custom={0}
              initial="hidden"
              animate="visible"
              variants={reveal}
              className="section-tag"
            >
              Mavverik
            </motion.p>

            <h1
              id="hero-heading"
              className="mt-grid-4 font-display text-display-xl font-semibold text-ink"
            >
              {["Production AI", "the regulators", "sign off on."].map(
                (line, i) => (
                  <span key={line} className="block overflow-hidden">
                    <motion.span
                      custom={i + 1}
                      initial="hidden"
                      animate="visible"
                      variants={reveal}
                      className={`block ${i === 2 ? "text-accent-deep" : ""}`}
                    >
                      {line}
                    </motion.span>
                  </span>
                )
              )}
            </h1>

            {/* journey pipeline */}
            <motion.div
              custom={4}
              initial="hidden"
              animate="visible"
              variants={reveal}
              className="mt-grid-8 max-w-xl"
            >
              <p className="text-body text-ink-soft sm:text-body-lg">
                One senior team, accountable from architecture review to
                production.
              </p>
              <div className="mt-grid-4 flex flex-col gap-grid-2 sm:flex-row sm:items-stretch">
                <div className="journey-node flex-1">
                  <span className="mono-label">Start</span>
                  <span className="font-display text-h4 font-semibold text-ink">
                    first architecture review
                  </span>
                </div>

                <div
                  className="hidden shrink-0 items-center justify-center px-grid-2 text-accent sm:flex"
                  aria-hidden="true"
                >
                  <ArrowRight className="h-4 w-4" strokeWidth={2} />
                </div>

                <div className="journey-node journey-node-active flex-1">
                  <span className="mono-label text-accent-deep">Live</span>
                  <span className="font-display text-h4 font-semibold text-ink">
                    governed systems in production
                  </span>
                </div>
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div
              custom={5}
              initial="hidden"
              animate="visible"
              variants={reveal}
              className="mt-grid-8 flex flex-col gap-grid-2 sm:flex-row sm:items-center"
            >
              <a href="#contact" className="btn-primary group">
                Start a brief
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </a>
              <a href="#founders" className="btn-secondary">
                Meet the team
              </a>
            </motion.div>
          </div>

          {/* signal visualization */}
          <motion.div
            custom={6}
            initial="hidden"
            animate="visible"
            variants={reveal}
            className="flex items-center justify-center lg:col-span-5 lg:col-start-8 xl:col-span-6 xl:col-start-7"
          >
            <SignalGraph className="mx-auto w-full max-w-[280px] sm:max-w-sm lg:max-w-md" />
          </motion.div>
        </div>
      </div>

      {/* status strip */}
      <motion.div
        custom={7}
        initial="hidden"
        animate="visible"
        variants={reveal}
        className="relative z-10 border-t border-rule bg-surface-raised"
        aria-hidden="true"
      >
        <div className="container-wide flex flex-wrap items-center justify-center gap-x-grid-6 gap-y-grid-2 py-grid-3 sm:justify-between">
          {[
            "Governed by design",
            "Regulatory scrutiny ready",
            "Architecture → production",
          ].map((item) => (
            <span
              key={item}
              className="flex items-center gap-2 font-mono text-[0.625rem] uppercase tracking-[0.14em] text-ink-muted"
            >
              <span className="h-1 w-1 rounded-full bg-accent-bright" />
              {item}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
