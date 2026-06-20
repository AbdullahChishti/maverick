"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { anchor, CONTACT_EMAIL, CONTACT_MAILTO } from "@/lib/utils";

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-15%" });

  return (
    <section
      id="contact"
      ref={ref}
      className={`bg-white ${anchor}`}
    >
      <div className="container-wide py-24 lg:py-40">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-black/40">
              Next step
            </p>
            <h2 className="mt-6 text-[clamp(2.5rem,6vw,5rem)] font-semibold leading-[1] tracking-[-0.04em] text-black">
              Let's build.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col justify-end"
          >
            <a
              href={CONTACT_MAILTO}
              className="group relative block overflow-hidden rounded-lg border border-black/10 bg-black p-8 transition-all duration-500 hover:border-emerald-500/50"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 to-emerald-500/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <span className="relative block text-[clamp(1.25rem,3vw,2rem)] font-medium tracking-[-0.02em] text-white transition-colors duration-300 group-hover:text-emerald-400">
                {CONTACT_EMAIL}
              </span>
              <span className="relative mt-4 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.25em] text-emerald-400">
                Start a conversation
                <svg className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </a>
            <div className="mt-8 flex gap-8 font-mono text-[10px] uppercase tracking-[0.3em] text-black/35 lg:gap-12">
              <span>24h response</span>
              <span>No NDA required</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />
    </section>
  );
}
