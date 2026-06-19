"use client";

const links = [
  { name: "Services", href: "#services" },
  { name: "Proof", href: "#proof" },
  { name: "Contact", href: "#contact" },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-[var(--impact-border)] bg-[var(--impact-bg)] text-[var(--impact-fg)]">
      <div className="container-wide">
        <div className="flex flex-col gap-grid-6 py-grid-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-[family-name:var(--font-display)] text-body font-medium tracking-[-0.02em]">
              Maverick
            </p>
            <p className="mt-grid-1 max-w-xs text-body-sm text-[var(--impact-muted)]">
              AI-native consulting for enterprises that demand more.
            </p>
          </div>

          <nav
            className="flex flex-wrap items-center gap-x-grid-6 gap-y-grid-2"
            aria-label="Footer"
          >
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-body-sm text-[var(--impact-muted)] transition-colors hover:text-[var(--impact-fg)]"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>

        <div className="border-t border-[var(--impact-border)] py-grid-4">
          <div className="flex flex-col items-start justify-between gap-grid-2 sm:flex-row sm:items-center">
            <p className="text-caption text-[var(--impact-muted)]">
              &copy; {new Date().getFullYear()} Maverick. All rights reserved.
            </p>
            <a
              href="mailto:contact@maverick.ai"
              className="text-caption text-[var(--impact-muted)] transition-colors hover:text-[var(--impact-fg)]"
            >
              contact@maverick.ai
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
