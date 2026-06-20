"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { anchor, CONTACT_EMAIL, CONTACT_MAILTO } from "@/lib/utils";

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });

  return (
    <section
      id="contact"
      ref={ref}
      className={`flex min-h-[60vh] items-center bg-white ${anchor}`}
    >
      <div className="container-wide py-24">
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-[clamp(1.25rem,3vw,2rem)] font-normal leading-[1.4] tracking-[-0.01em] text-neutral-400"
        >
          Ready to build something?
        </motion.p>

        <motion.a
          href={CONTACT_MAILTO}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-4 block text-[clamp(2rem,6vw,5rem)] font-medium leading-[1.1] tracking-[-0.03em] text-neutral-900 transition-colors hover:text-neutral-500"
        >
          {CONTACT_EMAIL}
        </motion.a>
      </div>
    </section>
  );
}
