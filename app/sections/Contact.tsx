"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CONTACT_EMAIL, CONTACT_MAILTO } from "@/lib/utils";

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" ref={ref} className="py-20 lg:py-28 bg-[#FAFAF9]">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="bg-[#0C0A09] rounded-3xl p-10 lg:p-16 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8"
        >
          <h2 className="text-3xl lg:text-4xl font-semibold text-white leading-tight">
            Ready to ship?
          </h2>

          <a
            href={CONTACT_MAILTO}
            className="inline-flex items-center gap-3 bg-white text-[#0C0A09] px-8 py-4 rounded-full font-medium hover:bg-violet-100 transition-colors group"
          >
            {CONTACT_EMAIL}
            <svg
              className="w-4 h-4 transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
