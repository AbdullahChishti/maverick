"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const services = [
  { id: "01", name: "LLM Applications", detail: "Custom models, document processing, intelligent search" },
  { id: "02", name: "RAG Systems", detail: "Knowledge bases with citations and compliance" },
  { id: "03", name: "AI Agents", detail: "Autonomous workflows with human oversight" },
];

export function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="services" ref={ref} className="py-16 lg:py-24">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="border-t border-stone-300">
            {services.map((service, i) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="grid grid-cols-12 gap-4 py-6 border-b border-stone-300 group hover:bg-stone-200/50 -mx-4 px-4 transition-colors"
              >
                <div className="col-span-2 lg:col-span-1">
                  <span className="text-xs text-stone-400">{service.id}</span>
                </div>
                <div className="col-span-10 lg:col-span-4">
                  <span className="font-medium">{service.name}</span>
                </div>
                <div className="col-span-12 lg:col-span-7 lg:text-right">
                  <span className="text-sm text-stone-500">{service.detail}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
