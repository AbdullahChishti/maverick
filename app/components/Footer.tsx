import { CONTACT_EMAIL } from "@/lib/utils";

const links = [
  { href: "#services", label: "Services" },
  { href: "#founders", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="bg-[#0C0A09] border-t border-stone-800 py-12">
      <div className="container-wide">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <span className="text-lg font-semibold text-white">Mavverik</span>
            <p className="text-sm text-stone-500 mt-1">AI Engineering Studio</p>
          </div>

          <div className="flex flex-wrap gap-x-8 gap-y-2">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-stone-400 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-sm text-stone-400 hover:text-white transition-colors"
            >
              {CONTACT_EMAIL}
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-stone-800 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-sm text-stone-600">© {new Date().getFullYear()} Mavverik. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-stone-600 hover:text-stone-400 transition-colors">Privacy</a>
            <a href="#" className="text-sm text-stone-600 hover:text-stone-400 transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
