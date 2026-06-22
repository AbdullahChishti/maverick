"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CONTACT_EMAIL, CONTACT_MAILTO } from "@/lib/utils";

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" ref={ref} className="py-24 lg:py-32">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-sm text-indigo-400 font-medium mb-4">Get in touch</p>
          <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
            Let's build your AI system.
          </h2>
          <p className="mt-4 text-lg text-zinc-400 max-w-lg mx-auto">
            Tell us about your project. We'll get back to you within 24 hours with a plan.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={CONTACT_MAILTO}
              className="group inline-flex items-center gap-3 bg-white text-zinc-900 px-8 py-4 rounded-full font-semibold hover:bg-zinc-100 transition-all"
            >
              {CONTACT_EMAIL}
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
