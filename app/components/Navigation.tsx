"use client";

import { useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { BRIEF_MAILTO } from "@/lib/utils";

const links = [
  { href: "#services", label: "Services" },
  { href: "#founders", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function Navigation() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const update = useCallback(() => {
    setScrolled(window.scrollY > 50);
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
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#0C0A09]/90 backdrop-blur-md border-b border-stone-800"
            : "bg-transparent"
        }`}
      >
        <nav className="container-wide flex h-16 lg:h-20 items-center justify-between">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="text-lg font-semibold text-white"
          >
            Mavverik
          </a>

          <div className="hidden lg:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className="text-sm text-stone-400 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href={BRIEF_MAILTO}
              className="text-sm font-medium text-white bg-violet-600 hover:bg-violet-700 px-5 py-2.5 rounded-full transition-colors"
            >
              Get in touch
            </a>
          </div>

          <button
            onClick={() => setOpen(true)}
            className="lg:hidden text-white"
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#0C0A09] lg:hidden"
          >
            <div className="container-wide flex h-16 items-center justify-between">
              <span className="text-lg font-semibold text-white">Mavverik</span>
              <button onClick={() => setOpen(false)} className="text-white" aria-label="Close">
                <X className="w-6 h-6" />
              </button>
            </div>
            <nav className="container-wide flex flex-col gap-2 pt-8">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleClick(e, link.href)}
                  className="text-2xl font-medium text-white py-3"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={BRIEF_MAILTO}
                className="mt-6 inline-flex items-center justify-center text-sm font-medium text-white bg-violet-600 px-6 py-3 rounded-full"
              >
                Get in touch
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
