"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { anchor } from "@/lib/utils";

export function Founders() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });

  return (
    <section
      id="founders"
      ref={ref}
      className={`flex min-h-[70vh] items-center bg-white ${anchor}`}
    >
      <div className="container-wide py-24">
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-[clamp(1.5rem,4vw,2.5rem)] font-normal leading-[1.3] tracking-[-0.02em] text-neutral-400"
        >
          Founded by engineers from
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-2 text-[clamp(2rem,6vw,5rem)] font-medium leading-[1.1] tracking-[-0.03em]"
        >
          <span className="font-sans font-semibold text-neutral-900">Microsoft</span>
          <span className="text-neutral-400">, </span>
          <span className="font-sans font-semibold text-neutral-900">OpenAI</span>
          <span className="text-neutral-400"> & </span>
          <span className="font-sans font-medium">
            <span style={{ color: "#4285F4" }}>G</span>
            <span style={{ color: "#EA4335" }}>o</span>
            <span style={{ color: "#FBBC05" }}>o</span>
            <span style={{ color: "#4285F4" }}>g</span>
            <span style={{ color: "#34A853" }}>l</span>
            <span style={{ color: "#EA4335" }}>e</span>
          </span>
          <span className="text-neutral-400">.</span>
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 text-[clamp(1rem,2vw,1.25rem)] font-normal leading-[1.5] text-neutral-400"
        >
          Trusted by JPMorgan, Barclays, Siemens, Audi, and others.
        </motion.p>
      </div>
    </section>
  );
}
