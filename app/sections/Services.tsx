"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section id="services" ref={ref} className="bg-[#FAFAFA] py-24 lg:py-32">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <p className="label label-accent mb-6">What we build</p>
          <h2 className="text-[clamp(1.75rem,4vw,2.5rem)] font-medium leading-[1.25] tracking-[-0.02em] text-[#18181B]">
            LLM applications, RAG systems, and AI agents—deployed to production in regulated industries.
          </h2>
        </motion.div>
      </div>
    </section>
  );
}
