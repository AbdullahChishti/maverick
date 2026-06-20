"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Linkedin } from "lucide-react";
import { anchor } from "@/lib/utils";

const ease = [0.16, 1, 0.3, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay, ease },
  }),
};

const trustSignals = [
  "30-minute intro — no deck",
  "Senior engineers, not account managers",
];

export function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });
  const prefersReducedMotion = useReducedMotion();
  const motionState = prefersReducedMotion || isInView ? "visible" : "hidden";

  return (
    <section
      id="contact"
      ref={sectionRef}
      aria-labelledby="contact-heading"
      className={`section section-seam relative overflow-hidden bg-surface-raised ${anchor}`}
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div
          className="absolute right-0 top-0 h-[50%] w-[40%] rounded-full opacity-30 blur-[100px]"
          style={{ background: "var(--accent-glow)" }}
        />
      </div>

      <div className="container-wide relative z-10">
        <div className="grid grid-cols-1 gap-grid-8 lg:grid-cols-12 lg:gap-grid-8 lg:gap-y-grid-10">
          <motion.div
            custom={prefersReducedMotion ? 0 : 0.12}
            initial={prefersReducedMotion ? "visible" : "hidden"}
            animate={motionState}
            variants={fadeUp}
            className="order-1 lg:order-2 lg:col-span-6 lg:col-start-7"
          >
            <div className="rounded-lg border border-rule bg-surface p-grid-5 shadow-sm sm:p-grid-8">
              <p className="mono-label">Email</p>
              <a
                href="mailto:contact@mavverik.ai"
                className="group mt-grid-4 block"
                aria-label="Email Mavverik at contact@mavverik.ai"
              >
                <span className="block font-display text-[clamp(2rem,5.5vw,3.5rem)] font-semibold leading-[1.05] tracking-tight text-ink transition-colors duration-200 group-hover:text-accent-deep">
                  contact@
                </span>
                <span className="inline-flex items-baseline gap-2 font-display text-[clamp(2rem,5.5vw,3.5rem)] font-semibold leading-[1.05] tracking-tight">
                  <span className="relative text-accent-deep">
                    mavverik.ai
                    <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-accent-bright transition-all duration-300 group-hover:w-full" />
                  </span>
                  <ArrowUpRight
                    className="h-[0.45em] w-[0.45em] shrink-0 translate-y-[0.05em] text-accent opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                    aria-hidden="true"
                  />
                </span>
              </a>

              <p className="mt-grid-5 max-w-md text-body-sm text-ink-muted">
                Include your stack, timeline, and team size. We reply within one
                business day.
              </p>

              <div className="mt-grid-6 border-t border-rule pt-grid-5">
                <a
                  href="https://www.linkedin.com/company/mavverik"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex min-h-[48px] items-center gap-grid-2 rounded-md border border-rule bg-surface-raised px-grid-4 font-mono text-[0.68rem] uppercase tracking-[0.14em] text-ink-soft transition-all duration-200 hover:border-accent hover:text-accent-deep"
                  aria-label="Mavverik on LinkedIn (opens in new tab)"
                >
                  <Linkedin className="h-4 w-4 shrink-0" aria-hidden="true" />
                  LinkedIn
                  <ArrowUpRight
                    className="h-3.5 w-3.5 shrink-0 opacity-50 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                    aria-hidden="true"
                  />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            custom={0}
            initial={prefersReducedMotion ? "visible" : "hidden"}
            animate={motionState}
            variants={fadeUp}
            className="order-2 lg:order-1 lg:col-span-5"
          >
            <p className="section-tag">Contact</p>
            <h2
              id="contact-heading"
              className="mt-grid-4 font-display text-h1 font-semibold text-ink"
            >
              Talk to the team that ships.
            </h2>
            <p className="mt-grid-5 max-w-prose text-body text-ink-soft lg:text-body-lg">
              Architecture review, agent rollout, or platform modernization —
              tell us what you&apos;re building. You&apos;ll hear back from the
              engineers who&apos;d do the work.
            </p>

            <ul
              className="mt-grid-5 flex flex-col gap-grid-2.5"
              aria-label="What to expect when you reach out"
            >
              {trustSignals.map((signal) => (
                <li
                  key={signal}
                  className="flex items-start gap-grid-2.5 text-body-sm text-ink-soft"
                >
                  <span
                    className="mt-1.5 inline-block h-1 w-1 shrink-0 rounded-full bg-accent-bright"
                    aria-hidden="true"
                  />
                  {signal}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
