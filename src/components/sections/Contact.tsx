import { Mail, Github, Linkedin, ArrowUpRight, Copy, Check } from 'lucide-react';
import { useState } from 'react';
import { contact } from '@/data/portfolio';
import { SectionHeading } from '@/components/SectionHeading';
import { Reveal } from '@/components/Reveal';

export function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contact.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard unavailable — no-op, the mail link still works
    }
  };

  return (
    <section id="contact" className="relative py-24 sm:py-28">
      <div className="container-content">
        <SectionHeading eyebrow="Contact" title="Contact" />

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          {/* Left: headline + supporting */}
          <Reveal>
            <h3 className="text-2xl font-semibold tracking-tightish text-ink-50 sm:text-3xl">
              {contact.headline}
            </h3>
            <p className="mt-4 max-w-md text-base leading-relaxed text-ink-200">
              {contact.supporting}
            </p>
          </Reveal>

          {/* Right: contact channels */}
          <Reveal delay={80}>
            <div className="flex flex-col gap-3">
              {/* Email — primary */}
              <div className="group rounded-xl border border-ink-700/70 bg-ink-850/50 p-5 transition-colors hover:border-accent/40">
                <p className="font-mono text-xs uppercase tracking-[0.16em] text-ink-300">Email</p>
                <div className="mt-2 flex items-center justify-between gap-3">
                  <a
                    href={`mailto:${contact.email}`}
                    className="text-base text-ink-50 transition-colors hover:text-accent-soft sm:text-lg"
                  >
                    {contact.email}
                  </a>
                  <button
                    type="button"
                    onClick={copyEmail}
                    className="flex-none rounded-md border border-ink-600 p-2 text-ink-200 transition-colors hover:border-accent/50 hover:text-ink-50"
                    aria-label="Copy email address"
                  >
                    {copied ? <Check size={15} className="text-accent" /> : <Copy size={15} />}
                  </button>
                </div>
                {copied && (
                  <p className="mt-2 text-xs text-accent-soft">Copied to clipboard</p>
                )}
              </div>

              {/* GitHub + LinkedIn */}
              <a
                href={contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-xl border border-ink-700/70 bg-ink-850/50 p-5 transition-colors hover:border-accent/40"
              >
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.16em] text-ink-300">
                    GitHub
                  </p>
                  <p className="mt-2 text-base text-ink-50">radhika-dev-23</p>
                </div>
                <ArrowUpRight
                  size={18}
                  className="text-ink-300 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent-soft"
                />
              </a>

              <a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-xl border border-ink-700/70 bg-ink-850/50 p-5 transition-colors hover:border-accent/40"
              >
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.16em] text-ink-300">
                    LinkedIn
                  </p>
                  <p className="mt-2 text-base text-ink-50">radhika-bhargava-brs1399</p>
                </div>
                <ArrowUpRight
                  size={18}
                  className="text-ink-300 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent-soft"
                />
              </a>

              {/* Quick actions row */}
              <div className="mt-2 flex flex-wrap gap-3">
                <a
                  href={`mailto:${contact.email}`}
                  className="inline-flex items-center gap-2 rounded-md bg-accent px-4 py-2.5 text-sm font-medium text-ink-950 transition-colors hover:bg-accent-soft"
                >
                  <Mail size={15} />
                  Send an email
                </a>
                <a
                  href={contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md border border-ink-600 px-4 py-2.5 text-sm text-ink-100 transition-colors hover:border-accent/50 hover:text-ink-50"
                >
                  <Github size={15} />
                  GitHub
                </a>
                <a
                  href={contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md border border-ink-600 px-4 py-2.5 text-sm text-ink-100 transition-colors hover:border-accent/50 hover:text-ink-50"
                >
                  <Linkedin size={15} />
                  LinkedIn
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
