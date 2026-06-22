"use client";

import { useState } from "react";
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

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.getElementById(href.slice(1))?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 bg-[#F5F5F4]">
        <nav className="container-wide h-14 flex items-center justify-between border-b border-stone-300">
          <a href="#" className="text-sm font-bold uppercase tracking-wide">
            Mavverik
          </a>

          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className="text-xs uppercase tracking-wide text-stone-600 hover:text-stone-900 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <button onClick={() => setOpen(true)} className="md:hidden" aria-label="Menu">
            <Menu className="w-5 h-5" />
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#F5F5F4] md:hidden"
          >
            <div className="container-wide h-14 flex items-center justify-between border-b border-stone-300">
              <span className="text-sm font-bold uppercase tracking-wide">Mavverik</span>
              <button onClick={() => setOpen(false)} aria-label="Close">
                <X className="w-5 h-5" />
              </button>
            </div>
            <nav className="container-wide flex flex-col gap-4 pt-8">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleClick(e, link.href)}
                  className="text-xl font-medium py-2"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
