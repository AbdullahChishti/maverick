"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { anchor } from "@/lib/utils";

export function Vision() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="vision" ref={sectionRef} className={`section-tight bg-surface ${anchor}`}>
      <div className="container-content text-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="overline mb-grid-5"
        >
          Our Vision
        </motion.p>

        <motion.blockquote
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1], delay: 0.08 }}
        >
          <p className="text-body-lg text-foreground sm:text-h3 sm:font-normal sm:leading-snug lg:text-h2 lg:font-normal lg:leading-snug">
            To become a{" "}
            <span className="font-medium text-accent">trusted global leader</span>{" "}
            in AI-native innovation, enabling organizations to achieve{" "}
            <span className="font-medium text-foreground">sustainable growth</span>{" "}
            through intelligent technology and cloud transformation.
          </p>
        </motion.blockquote>
      </div>
    </section>
  );
}
