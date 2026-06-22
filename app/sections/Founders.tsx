"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const clients = [
  { name: "JPMorgan", industry: "Finance" },
  { name: "Barclays", industry: "Finance" },
  { name: "Siemens", industry: "Industrial" },
  { name: "Audi", industry: "Automotive" },
  { name: "Navan", industry: "Travel" },
  { name: "myToys", industry: "Retail" },
];

export function Founders() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section id="founders" ref={ref} className="bg-white py-24 lg:py-32">
      <div className="container-wide">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 flex flex-col justify-between gap-6 lg:mb-20 lg:flex-row lg:items-end"
        >
          <div>
            <p className="label label-accent mb-4">Trusted by</p>
            <h2 className="text-[clamp(1.75rem,4vw,2.5rem)] font-medium leading-[1.2] tracking-[-0.02em] text-[#18181B]">
              Industry leaders building
              <br />
              <span className="text-[#A1A1AA]">with us.</span>
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-[#71717A]">
            From Fortune 500 enterprises to high-growth startups in regulated industries.
          </p>
        </motion.div>

        {/* Client grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {clients.map((client, i) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.05 }}
              className="group relative"
            >
              <div className="flex items-center justify-between border border-[#E4E4E7] bg-[#FAFAFA] px-6 py-5 transition-all duration-300 hover:border-[#7C6BF5] hover:bg-white">
                <span className="text-xl font-medium tracking-[-0.01em] text-[#18181B] transition-colors duration-300 group-hover:text-[#7C6BF5] lg:text-2xl">
                  {client.name}
                </span>
                <span className="label transition-colors duration-300 group-hover:text-[#7C6BF5]">
                  {client.industry}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid gap-8 border-t border-[#E4E4E7] pt-16 sm:grid-cols-3 lg:mt-20 lg:pt-20"
        >
          <div>
            <p className="text-[clamp(2.5rem,6vw,3.5rem)] font-medium leading-none tracking-[-0.03em] text-[#18181B]">
              $200M<span className="text-[#7C6BF5]">+</span>
            </p>
            <p className="label mt-3">AI systems deployed</p>
          </div>
          <div>
            <p className="text-[clamp(2.5rem,6vw,3.5rem)] font-medium leading-none tracking-[-0.03em] text-[#18181B]">
              57
            </p>
            <p className="label mt-3">Enterprise clients</p>
          </div>
          <div>
            <p className="text-[clamp(2.5rem,6vw,3.5rem)] font-medium leading-none tracking-[-0.03em] text-[#18181B]">
              12<span className="text-[#7C6BF5]">wk</span>
            </p>
            <p className="label mt-3">Avg. to production</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
