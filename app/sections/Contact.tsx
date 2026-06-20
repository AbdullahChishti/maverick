"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { anchor, CONTACT_EMAIL, CONTACT_MAILTO } from "@/lib/utils";

const process = [
  { step: "01", text: "Share your project details" },
  { step: "02", text: "We respond within 24 hours" },
  { step: "03", text: "Kick off with a discovery call" },
];

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });

  return (
    <section
      id="contact"
      ref={ref}
      className={`relative bg-white ${anchor}`}
    >
      {/* Dot grid background */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(circle, rgb(180 180 180) 1.5px, transparent 1.5px)`,
          backgroundSize: '32px 32px',
        }}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white via-white/60 to-white" />
      <div className="container-wide relative z-10 py-32 lg:py-48">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8 }}
              className="text-sm font-medium text-neutral-400"
            >
              Contact
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mt-4 text-[clamp(2rem,5vw,4rem)] font-medium leading-[1] tracking-[-0.03em] text-neutral-900"
            >
              Ready to ship?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-6 max-w-sm text-lg text-neutral-500"
            >
              Tell us about your project. No sales pitch, just a conversation about what you're building.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <a
              href={CONTACT_MAILTO}
              className="group inline-flex items-center gap-4"
            >
              <span className="break-all text-[clamp(1.5rem,3.5vw,3rem)] font-medium leading-[1.1] tracking-[-0.03em] text-neutral-900 transition-colors group-hover:text-neutral-600">
                {CONTACT_EMAIL}
              </span>
              <ArrowUpRight className="h-8 w-8 shrink-0 text-neutral-400 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-neutral-900" />
            </a>
            <p className="mt-4 text-sm text-neutral-400">
              Berlin & Remote · Available for new projects
            </p>
          </motion.div>
        </div>
      </div>

      <div className="relative z-10 border-t border-neutral-200">
        <div className="container-wide py-16 lg:py-24">
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-sm font-medium text-neutral-400"
          >
            What to expect
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8 grid gap-6 sm:grid-cols-3"
          >
            {process.map((item) => (
              <div key={item.step} className="flex items-start gap-4">
                <span className="text-sm font-medium text-neutral-300">{item.step}</span>
                <p className="text-lg font-medium text-neutral-900 lg:text-xl">
                  {item.text}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
