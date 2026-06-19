"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { ArrowRight, Mail, Linkedin } from "lucide-react";
import { anchor } from "@/lib/utils";

const ease = [0.22, 0.1, 0.22, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease },
  },
};

export function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-60px" });
  const prefersReducedMotion = useReducedMotion();
  const motionState = prefersReducedMotion
    ? "visible"
    : isInView
      ? "visible"
      : "hidden";

  return (
    <section
      id="contact"
      ref={sectionRef}
      aria-labelledby="contact-heading"
      className={`section-impact ${anchor}`}
    >
      <motion.div
        className="container-wide"
        initial={prefersReducedMotion ? "visible" : "hidden"}
        animate={motionState}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.08, delayChildren: 0.04 },
          },
        }}
      >
        <motion.div
          variants={fadeUp}
          className="mb-grid-10 flex items-end justify-between gap-grid-4 border-b pb-grid-6 lg:mb-grid-12 lg:pb-grid-8"
          style={{ borderColor: "var(--impact-border)" }}
        >
          <div className="flex items-end gap-grid-4 sm:gap-grid-6">
            <span
              className="font-semibold tabular-nums leading-none tracking-tighter"
              style={{ color: "color-mix(in srgb, var(--impact-fg) 12%, transparent)" }}
              aria-hidden
            >
              <span className="text-[3.5rem] sm:text-[4.5rem] lg:text-[5.5rem]">
                04
              </span>
            </span>
            <div>
              <p className="overline-impact mb-grid-1.5">Contact</p>
              <h2
                id="contact-heading"
                className="text-[1.75rem] font-semibold tracking-tight sm:text-h2 lg:text-[2.5rem]"
                style={{ color: "var(--impact-fg)" }}
              >
                Let&apos;s build something great
              </h2>
            </div>
          </div>
        </motion.div>

        <div className="grid gap-grid-10 lg:grid-cols-12 lg:gap-grid-8">
          <motion.div variants={fadeUp} className="lg:col-span-7">
            <p
              className="max-w-lg text-body-lg leading-relaxed"
              style={{ color: "var(--impact-muted)" }}
            >
              Ready to transform your business with AI-native systems and
              cloud-first architecture? Tell us about your goals — we&apos;ll
              respond within one business day.
            </p>

            <a
              href="mailto:contact@maverick.ai"
              className="group mt-grid-8 inline-flex min-h-[44px] min-w-[44px] items-center justify-center gap-2.5 rounded-full px-8 py-3 text-body-sm font-medium transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              style={{
                background: "var(--impact-fg)",
                color: "var(--impact-bg)",
              }}
            >
              Schedule a Consultation
              <ArrowRight
                className="h-4 w-4 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </a>
          </motion.div>

          <motion.aside
            variants={fadeUp}
            aria-label="Contact details"
            className="lg:col-span-5 lg:border-l lg:pl-grid-8"
            style={{ borderColor: "var(--impact-border)" }}
          >
            <p className="overline-impact mb-grid-4">Direct</p>

            <a
              href="mailto:contact@maverick.ai"
              className="inline-flex min-h-[44px] items-center gap-grid-2 text-body transition-colors duration-200 hover:opacity-80"
              style={{ color: "var(--impact-fg)" }}
            >
              <Mail className="h-4 w-4 shrink-0" aria-hidden="true" />
              contact@maverick.ai
            </a>

            <div className="mt-grid-6 flex items-center gap-grid-3">
              <a
                href="https://linkedin.com/company/maverick"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full border transition-colors duration-200 hover:border-[color-mix(in_srgb,var(--impact-fg)_30%,transparent)]"
                style={{
                  borderColor: "var(--impact-border)",
                  color: "var(--impact-muted)",
                }}
                aria-label="Maverick on LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </motion.aside>
        </div>
      </motion.div>
    </section>
  );
}
