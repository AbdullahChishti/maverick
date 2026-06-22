"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export function Founders() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="founders" ref={ref} className="py-16 lg:py-24 bg-stone-900 text-stone-100">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-2 gap-12 lg:gap-24"
        >
          <div>
            <p className="text-xs text-stone-500 uppercase tracking-wide mb-4">About</p>
            <p className="text-2xl lg:text-3xl font-medium leading-snug">
              Engineers from Microsoft, OpenAI, and Google building AI that ships.
            </p>
          </div>
          <div className="flex flex-col justify-end">
            <div className="grid grid-cols-3 gap-8 text-center">
              <div>
                <p className="text-4xl lg:text-5xl font-bold">50+</p>
                <p className="text-xs text-stone-500 mt-2 uppercase tracking-wide">Projects</p>
              </div>
              <div>
                <p className="text-4xl lg:text-5xl font-bold">12w</p>
                <p className="text-xs text-stone-500 mt-2 uppercase tracking-wide">Avg time</p>
              </div>
              <div>
                <p className="text-4xl lg:text-5xl font-bold">100%</p>
                <p className="text-xs text-stone-500 mt-2 uppercase tracking-wide">Shipped</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
