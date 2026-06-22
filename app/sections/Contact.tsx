"use client";

import { CONTACT_EMAIL, CONTACT_MAILTO } from "@/lib/utils";

export function Contact() {
  return (
    <section id="contact" className="py-16 lg:py-24">
      <div className="container-wide">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 border-t border-stone-300 pt-8">
          <p className="text-3xl lg:text-4xl font-bold tracking-tight">
            Ready?
          </p>
          <a
            href={CONTACT_MAILTO}
            className="text-lg hover:underline"
          >
            {CONTACT_EMAIL} →
          </a>
        </div>
      </div>
    </section>
  );
}
