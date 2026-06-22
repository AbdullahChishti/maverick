"use client";

import { useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { BRIEF_MAILTO } from "@/lib/utils";

const links = [
  { href: "#founders", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
];

function Logo({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Clean geometric M mark - two peaks forming an M */}
      <path
        d="M4 24V10L10 18L16 8L22 18L28 10V24"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

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

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

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
            ? "bg-[var(--surface)]/90 backdrop-blur-xl border-b border-[var(--rule)]"
            : ""
        }`}
      >
        <nav className="container-wide h-16 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-2.5 group"
            aria-label="Mavverik - Home"
          >
            <Logo className="w-7 h-7 text-white transition-colors group-hover:text-[var(--accent-bright)]" />
            <span className="font-medium text-[15px] tracking-[-0.01em] hidden sm:block">
              Mavverik
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className="relative px-4 py-2 text-sm text-[var(--ink-muted)] hover:text-[var(--ink)] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href={BRIEF_MAILTO}
              className="ml-4 inline-flex items-center gap-1.5 bg-white text-zinc-900 px-4 py-2 rounded-full text-sm font-medium hover:bg-zinc-100 transition-colors"
            >
              <span>Let&apos;s talk</span>
              <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={2.5} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden p-2 -mr-2 text-[var(--ink-soft)] hover:text-white transition-colors"
            aria-label="Open menu"
          >
            <Menu className="w-5 h-5" />
          </button>
        </nav>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-[var(--surface)] md:hidden"
          >
            {/* Header */}
            <div className="container-wide h-16 flex items-center justify-between border-b border-[var(--rule)]">
              <a href="#" className="flex items-center gap-2.5">
                <Logo className="w-7 h-7 text-white" />
                <span className="font-medium text-[15px] tracking-[-0.01em]">
                  Mavverik
                </span>
              </a>
              <button
                onClick={() => setOpen(false)}
                className="p-2 -mr-2 text-[var(--ink-soft)] hover:text-white transition-colors"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Navigation Links */}
            <motion.nav
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.25 }}
              className="container-wide flex flex-col pt-8"
            >
              {links.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleClick(e, link.href)}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.15 + index * 0.05 }}
                  className="text-xl font-medium py-4 text-[var(--ink-soft)] hover:text-white border-b border-[var(--rule)] transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}

              {/* Mobile CTA */}
              <motion.a
                href={BRIEF_MAILTO}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                className="mt-8 inline-flex items-center justify-center gap-2 bg-white text-zinc-900 px-6 py-3.5 rounded-full font-medium hover:bg-zinc-100 transition-colors"
              >
                <span>Let&apos;s talk</span>
                <ArrowUpRight className="w-4 h-4" strokeWidth={2.5} />
              </motion.a>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
