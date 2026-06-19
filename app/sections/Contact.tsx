"use client";

import { Mail, Linkedin, Twitter } from "lucide-react";
import { anchor } from "@/lib/utils";

export function Contact() {
  return (
    <section id="contact" className={`section bg-surface-subtle ${anchor}`}>
      <div className="container-content mx-auto text-center">
        <p className="overline mb-grid-2">Contact</p>
        <h2 className="mb-grid-3">Let&apos;s build something great</h2>
        <p className="lead mb-grid-6">
          Ready to transform your business with AI? We&apos;d love to hear from you.
        </p>

        <a href="mailto:contact@maverick.ai" className="btn-primary">
          Get in touch
        </a>

        <div className="mt-grid-8 border-t border-border pt-grid-8">
          <a
            href="mailto:contact@maverick.ai"
            className="inline-flex items-center gap-grid-1 text-body text-muted-foreground hover:text-foreground"
          >
            <Mail className="h-4 w-4" />
            contact@maverick.ai
          </a>

          <div className="mt-grid-3 flex items-center justify-center gap-grid-3">
            <a
              href="https://linkedin.com/company/maverick"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-foreground"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://twitter.com/maverick"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-foreground"
              aria-label="Twitter"
            >
              <Twitter className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
