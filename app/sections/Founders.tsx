"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { anchor } from "@/lib/utils";

const companies = ["Microsoft", "OpenAI", "Google"];
const clients = ["JPMorgan", "Barclays", "Siemens", "Audi", "myToys", "Navan"];

export function Founders() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });

  return (
    <section
      id="founders"
      ref={ref}
      className={`bg-white ${anchor}`}
    >
      {/* Team */}
      <div className="container-wide py-32 lg:py-48">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8 }}
              className="text-sm font-medium text-neutral-400"
            >
              Team
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mt-4 text-[clamp(2rem,5vw,4rem)] font-medium leading-[1] tracking-[-0.03em] text-neutral-900"
            >
              Former engineers from
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col justify-center gap-4"
          >
            {companies.map((company) => (
              <p
                key={company}
                className="text-[clamp(2rem,5vw,4rem)] font-medium leading-[1] tracking-[-0.03em] text-neutral-900"
              >
                {company}
              </p>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Clients */}
      <div className="border-t border-neutral-200">
        <div className="container-wide py-16 lg:py-24">
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-sm font-medium text-neutral-400"
          >
            Trusted by
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8 flex flex-wrap gap-x-12 gap-y-4"
          >
            {clients.map((client) => (
              <p
                key={client}
                className="text-2xl font-medium text-neutral-900 lg:text-3xl"
              >
                {client}
              </p>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
