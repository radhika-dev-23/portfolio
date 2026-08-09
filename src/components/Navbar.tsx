import { useEffect, useState } from 'react';
import { Github, Linkedin, Menu, X, FileText } from 'lucide-react';
import { navLinks, profile } from '@/data/portfolio';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? 'border-b border-ink-700/60 bg-ink-900/85 backdrop-blur-md'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav className="container-content flex h-16 items-center justify-between" aria-label="Primary">
        <a
          href="#home"
          className="group flex items-center gap-2.5"
          onClick={() => setOpen(false)}
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-md border border-ink-600 bg-ink-800 font-mono text-sm font-semibold text-accent transition-colors group-hover:border-accent/50">
            RB
          </span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-md px-3 py-2 text-sm text-ink-100 transition-colors hover:text-ink-50"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop actions */}
        <div className="hidden items-center gap-1.5 lg:flex">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="rounded-md p-2 text-ink-100 transition-colors hover:bg-ink-800 hover:text-ink-50"
          >
            <Github size={18} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="rounded-md p-2 text-ink-100 transition-colors hover:bg-ink-800 hover:text-ink-50"
          >
            <Linkedin size={18} />
          </a>
          <a
            href={profile.resumeUrl}
            className="ml-1.5 inline-flex items-center gap-2 rounded-md border border-ink-600 bg-ink-800/60 px-3.5 py-2 text-sm font-medium text-ink-50 transition-colors hover:border-accent/60 hover:bg-accent/10"
          >
            <FileText size={15} />
            Resume
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="rounded-md p-2 text-ink-50 transition-colors hover:bg-ink-800 lg:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div
          id="mobile-menu"
          className="border-t border-ink-700/60 bg-ink-900/95 backdrop-blur-md lg:hidden"
        >
          <ul className="container-content flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-2.5 text-base text-ink-100 transition-colors hover:bg-ink-800 hover:text-ink-50"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="mt-2 flex items-center gap-2 border-t border-ink-700/50 pt-4">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-md border border-ink-600 px-3 py-2.5 text-sm text-ink-50"
              >
                <Github size={16} /> GitHub
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-md border border-ink-600 px-3 py-2.5 text-sm text-ink-50"
              >
                <Linkedin size={16} /> LinkedIn
              </a>
            </li>
            <li className="mt-2">
              <a
                href={profile.resumeUrl}
                onClick={() => setOpen(false)}
                className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-accent/50 bg-accent/10 px-3 py-2.5 text-sm font-medium text-ink-50"
              >
                <FileText size={16} /> Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
