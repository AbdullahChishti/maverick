"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" ref={ref} className="py-20 lg:py-28 bg-white">
      <div className="container-wide">
        <div className="grid lg:grid-cols-3 gap-4">
          {/* Main card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 bg-[#0C0A09] rounded-3xl p-10 lg:p-14 flex flex-col justify-between min-h-[400px]"
          >
            <div>
              <span className="text-violet-400 text-sm font-medium">What we do</span>
              <h2 className="mt-4 text-3xl lg:text-4xl font-semibold text-white leading-tight max-w-lg">
                We build AI systems that work in the real world.
              </h2>
            </div>
            <p className="text-stone-400 max-w-md">
              Not demos. Not prototypes. Production systems for enterprises where failure isn't an option.
            </p>
          </motion.div>

          {/* Right column */}
          <div className="flex flex-col gap-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex-1 bg-violet-600 rounded-3xl p-8 flex flex-col justify-end"
            >
              <span className="text-white/70 text-sm">Average delivery</span>
              <span className="text-4xl font-semibold text-white mt-1">12 weeks</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex-1 bg-stone-100 rounded-3xl p-8 flex flex-col justify-end"
            >
              <span className="text-stone-500 text-sm">Success rate</span>
              <span className="text-4xl font-semibold text-[#1C1917] mt-1">100%</span>
            </motion.div>
          </div>
        </div>

        {/* Services row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-4 grid sm:grid-cols-3 gap-4"
        >
          <div className="bg-stone-100 rounded-3xl p-8">
            <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center mb-6">
              <svg className="w-5 h-5 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-[#1C1917]">LLM Applications</h3>
            <p className="mt-2 text-sm text-stone-500">Custom models for your domain</p>
          </div>

          <div className="bg-stone-100 rounded-3xl p-8">
            <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center mb-6">
              <svg className="w-5 h-5 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-[#1C1917]">RAG Systems</h3>
            <p className="mt-2 text-sm text-stone-500">AI grounded in your data</p>
          </div>

          <div className="bg-stone-100 rounded-3xl p-8">
            <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center mb-6">
              <svg className="w-5 h-5 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-[#1C1917]">AI Agents</h3>
            <p className="mt-2 text-sm text-stone-500">Autonomous task execution</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
