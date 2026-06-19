"use client";

const quickLinks = [
  { name: "Services", href: "#services" },
  { name: "Approach", href: "#approach" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface-subtle">
      <div className="container-wide">
        <div className="py-grid-8">
          <div className="flex flex-col gap-grid-4 md:flex-row md:items-start md:justify-between">
            <div>
              <p className="text-body font-semibold text-foreground">Maverick</p>
              <p className="mt-grid-0.5 text-body-sm text-muted-foreground">
                AI-Native Solutions. Cloud-First Innovation.
              </p>
            </div>

            <nav className="flex flex-wrap gap-x-grid-3 gap-y-grid-1" aria-label="Footer">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-body-sm text-muted-foreground hover:text-foreground"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>
        </div>

        <div className="border-t border-border py-grid-3">
          <div className="flex flex-col items-center justify-between gap-grid-2 sm:flex-row">
            <p className="text-caption text-muted">
              &copy; {new Date().getFullYear()} Maverick. All rights reserved.
            </p>
            <div className="flex items-center gap-grid-3">
              <a href="#" className="text-caption text-muted hover:text-muted-foreground">
                Privacy
              </a>
              <a href="#" className="text-caption text-muted hover:text-muted-foreground">
                Terms
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
