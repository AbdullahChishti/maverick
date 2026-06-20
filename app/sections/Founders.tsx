"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { anchor } from "@/lib/utils";

interface FounderOrg {
  name: string;
  role: string;
  detail: string;
}

const orgs: FounderOrg[] = [
  {
    name: "Microsoft",
    role: "Platform & enterprise AI leadership",
    detail: "Azure-scale platform engineering and enterprise AI governance.",
  },
  {
    name: "OpenAI",
    role: "LLM deployment & inference",
    detail: "Production LLM deployment, safety, and API-scale inference.",
  },
  {
    name: "Google",
    role: "ML infrastructure & data platforms",
    detail: "ML infrastructure and data platforms at global traffic scale.",
  },
];

const ease = [0.16, 1, 0.3, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay, ease },
  }),
};

export function Founders() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });
  const prefersReducedMotion = useReducedMotion();
  const motionState = prefersReducedMotion || isInView ? "visible" : "hidden";

  return (
    <section
      id="founders"
      ref={sectionRef}
      aria-labelledby="founders-heading"
      className={`section relative overflow-hidden bg-slate-deep text-on-slate ${anchor}`}
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="dot-grid-slate absolute inset-0 opacity-40" />
        <div className="absolute -left-[10%] bottom-0 h-[50%] w-[60%] rounded-full bg-[color-mix(in_srgb,var(--accent-bright)_8%,transparent)] blur-[120px]" />
      </div>

      <div className="container-wide relative z-10">
        <div className="grid grid-cols-1 gap-grid-8 lg:grid-cols-12 lg:gap-grid-10">
          <motion.div
            custom={0}
            initial={prefersReducedMotion ? "visible" : "hidden"}
            animate={motionState}
            variants={fadeUp}
            className="lg:col-span-5"
          >
            <p className="section-tag text-accent-bright [&::before]:bg-accent-bright [&::before]:shadow-[0_0_12px_var(--accent-glow)]">
              Founders
            </p>
            <h2
              id="founders-heading"
              className="mt-grid-4 max-w-lg font-display text-h1 font-semibold text-on-slate"
            >
              Built the systems your enterprise already runs on.
            </h2>
            <p className="mt-grid-5 max-w-prose text-body text-on-slate-soft lg:hidden">
              Before Mavverik, they led platform and model teams at Microsoft,
              OpenAI, and Google — shipping governed AI through Fortune&nbsp;100
              security review.
            </p>
          </motion.div>

          <motion.p
            custom={prefersReducedMotion ? 0 : 0.08}
            initial={prefersReducedMotion ? "visible" : "hidden"}
            animate={motionState}
            variants={fadeUp}
            className="hidden max-w-prose text-body-lg text-on-slate-soft lg:col-span-6 lg:block lg:col-start-7 lg:pt-grid-8"
          >
            Before Mavverik, they led platform and model teams at Microsoft,
            OpenAI, and Google — shipping governed AI, multi-region cloud, and
            data systems through Fortune&nbsp;100 security review. That is the
            team architecting yours.
          </motion.p>
        </div>

        {/* pedigree cards — company names as focal typography */}
        <motion.ul
          custom={prefersReducedMotion ? 0 : 0.16}
          initial={prefersReducedMotion ? "visible" : "hidden"}
          animate={motionState}
          variants={fadeUp}
          aria-label="Where our founders built and led"
          className="mt-grid-8 grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-[var(--rule-slate)] bg-[var(--rule-slate)] sm:grid-cols-3 lg:mt-grid-10"
        >
          {orgs.map((org) => (
            <li
              key={org.name}
              className="group bg-slate-mid/60 p-grid-5 transition-colors duration-300 hover:bg-slate-mid/80 sm:p-grid-6"
            >
              <h3 className="font-display text-[clamp(1.5rem,3.5vw,2.25rem)] font-semibold leading-none tracking-tight text-on-slate transition-colors duration-300 group-hover:text-accent-bright">
                {org.name}
              </h3>
              <p className="mt-grid-3 text-body-sm font-medium text-on-slate-soft">
                {org.role}
              </p>
              <p className="mt-grid-1.5 text-body-sm text-on-slate-muted">
                {org.detail}
              </p>
            </li>
          ))}
        </motion.ul>

        <motion.div
          custom={prefersReducedMotion ? 0 : 0.24}
          initial={prefersReducedMotion ? "visible" : "hidden"}
          animate={motionState}
          variants={fadeUp}
          className="mt-grid-8 flex items-start gap-grid-3 border-t border-[var(--rule-slate)] pt-grid-6 lg:mt-grid-10"
        >
          <span
            className="mt-1.5 inline-block h-2 w-2 shrink-0 rounded-full bg-accent-bright shadow-[0_0_8px_var(--accent-glow)]"
            aria-hidden="true"
          />
          <p className="max-w-2xl text-body-lg text-on-slate-soft">
            <span className="font-medium text-on-slate">One founding team</span>{" "}
            — the engineers who architect your systems are the ones accountable
            for them.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default Founders;
