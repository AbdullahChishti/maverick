"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CONTACT_EMAIL, CONTACT_MAILTO } from "@/lib/utils";

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section id="contact" ref={ref} className="relative bg-white py-24 lg:py-32">
      {/* Subtle grid background */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, #E4E4E7 1px, transparent 1px),
            linear-gradient(to bottom, #E4E4E7 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />

      {/* Fade overlay for softer edges */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at center, transparent 0%, white 70%)",
        }}
      />

      <div className="container-wide relative">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center"
        >
          <p className="label label-accent mb-6">Next step</p>

          <h2 className="text-[clamp(2.5rem,8vw,5rem)] font-medium leading-[1] tracking-[-0.03em] text-[#18181B]">
            Let's build.
          </h2>

          <a
            href={CONTACT_MAILTO}
            className="group mt-10 inline-flex items-center gap-3 text-xl text-[#71717A] transition-colors duration-200 hover:text-[#7C6BF5] lg:text-2xl"
          >
            {CONTACT_EMAIL}
            <svg
              className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          </a>

          <p className="label mt-8">24h response · No NDA required</p>
        </motion.div>
      </div>
    </section>
  );
}
