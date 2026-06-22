import { CONTACT_EMAIL } from "@/lib/utils";

const navLinks = [
  { label: "About", href: "#founders" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="py-16 border-t border-white/10">
      <div className="container-wide">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                <span className="text-white font-bold text-sm">M</span>
              </div>
              <span className="font-semibold text-white">Mavverik</span>
            </div>
            <p className="text-sm text-zinc-400 max-w-xs">
              AI engineering studio. We build production AI systems for regulated industries.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-sm font-medium text-white mb-4">Navigation</p>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-zinc-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-sm font-medium text-white mb-4">Contact</p>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-sm text-zinc-400 hover:text-white transition-colors"
            >
              {CONTACT_EMAIL}
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-sm text-zinc-500">
            © {new Date().getFullYear()} Mavverik. All rights reserved.
          </p>
          <p className="text-sm text-zinc-500">
            Built with care in San Francisco.
          </p>
        </div>
      </div>
    </footer>
  );
}
