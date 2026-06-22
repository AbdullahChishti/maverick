"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const clients = [
  { name: "JPMorgan", logo: "JPM" },
  { name: "Barclays", logo: "BCL" },
  { name: "Siemens", logo: "SIE" },
  { name: "Audi", logo: "AUD" },
];

export function Founders() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="founders" ref={ref} className="py-24 lg:py-32 bg-white">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left - About */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="text-violet-600 text-sm font-medium tracking-wide mb-4">Who we are</p>
            <h2 className="text-3xl lg:text-4xl font-semibold text-[#1C1917] leading-tight">
              Engineers from Microsoft, OpenAI & Google.
            </h2>
            <p className="mt-6 text-stone-600 leading-relaxed">
              We've spent years building AI infrastructure at scale. Now we help enterprises do the same—bringing production-grade engineering discipline to every project.
            </p>
            <p className="mt-4 text-stone-600 leading-relaxed">
              Our team combines deep ML expertise with the systems thinking needed to ship reliable, compliant AI in regulated industries.
            </p>
          </motion.div>

          {/* Right - Clients */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <p className="text-sm font-medium text-stone-500 mb-6">Trusted by</p>
            <div className="grid grid-cols-2 gap-4">
              {clients.map((client) => (
                <div
                  key={client.name}
                  className="flex items-center justify-center h-24 bg-stone-50 rounded-xl border border-stone-100"
                >
                  <span className="text-xl font-semibold text-stone-400">{client.name}</span>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm text-stone-500">
              ...and 40+ other enterprises across finance, healthcare, and technology.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
