"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { anchor, CONTACT_EMAIL } from "@/lib/utils";

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });

  return (
    <section
      id="contact"
      ref={ref}
      className={`bg-black ${anchor}`}
    >
      <div className="container-wide py-32 lg:py-48">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Left */}
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8 }}
              className="text-sm font-medium text-white/40"
            >
              Contact
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mt-4 text-[clamp(2rem,5vw,4rem)] font-medium leading-[1] tracking-[-0.03em] text-white"
            >
              Ready to ship?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-6 max-w-sm text-lg text-white/50"
            >
              Tell us about your project. We respond within 24 hours.
            </motion.p>

            <motion.a
              href={`mailto:${CONTACT_EMAIL}`}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="group mt-10 inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-base font-medium text-black transition-transform hover:scale-[1.02]"
            >
              Start a conversation
              <ArrowUpRight className="h-5 w-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </motion.a>
          </div>

          {/* Right */}
          <div className="flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-10"
            >
              <div>
                <p className="text-sm text-white/40">Email</p>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="mt-2 block text-2xl font-medium text-white hover:underline"
                >
                  {CONTACT_EMAIL}
                </a>
              </div>

              <div>
                <p className="text-sm text-white/40">Response time</p>
                <p className="mt-2 text-2xl font-medium text-white">
                  Within 24 hours
                </p>
              </div>

              <div>
                <p className="text-sm text-white/40">Based in</p>
                <p className="mt-2 text-2xl font-medium text-white">
                  Berlin & Remote
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
