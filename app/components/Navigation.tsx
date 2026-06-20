"use client";

import { useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BRIEF_MAILTO } from "@/lib/utils";

const links = [
  { href: "#founders", label: "Results" },
  { href: "#services", label: "Capabilities" },
  { href: "#contact", label: "Contact" },
];

export function Navigation() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(true);

  const update = useCallback(() => {
    const sections = ["hero", "services"];
    let inDark = false;

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= 60 && rect.bottom > 60) {
          inDark = true;
        }
      }
    });

    setDark(inDark);
  }, []);

  useEffect(() => {
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, [update]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.getElementById(href.slice(1))?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50">
        <nav className="container-wide flex h-20 items-center justify-between">
          <a
            href="#hero"
            onClick={(e) => handleClick(e, "#hero")}
            className={`text-lg font-medium tracking-[-0.02em] transition-colors duration-300 ${
              dark ? "text-white" : "text-black"
            }`}
          >
            Mavverik
          </a>

          <div className="hidden items-center gap-10 lg:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className={`font-mono text-[11px] uppercase tracking-[0.2em] transition-colors duration-300 ${
                  dark
                    ? "text-white/50 hover:text-white"
                    : "text-black/50 hover:text-black"
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href={BRIEF_MAILTO}
              className={`flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] transition-colors duration-300 ${
                dark
                  ? "text-emerald-400 hover:text-emerald-300"
                  : "text-emerald-600 hover:text-emerald-500"
              }`}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-current" />
              Start Project
            </a>
          </div>

          <button
            onClick={() => setOpen(true)}
            className={`flex h-12 w-12 items-center justify-center lg:hidden ${
              dark ? "text-white" : "text-black"
            }`}
            aria-label="Open menu"
          >
            <div className="space-y-1.5">
              <div className="h-0.5 w-6 bg-current" />
              <div className="h-0.5 w-4 bg-current" />
            </div>
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black lg:hidden"
          >
            <div className="container-wide flex h-20 items-center justify-between">
              <span className="text-lg font-medium tracking-[-0.02em] text-white">
                Mavverik
              </span>
              <button
                onClick={() => setOpen(false)}
                className="flex h-12 w-12 items-center justify-center text-white"
                aria-label="Close menu"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <nav className="container-wide flex flex-col gap-8 pt-16">
              {links.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleClick(e, link.href)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.1 }}
                  className="text-4xl font-medium tracking-[-0.02em] text-white"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href={BRIEF_MAILTO}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.4 }}
                className="mt-8 text-lg text-emerald-400"
              >
                Start a project →
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
