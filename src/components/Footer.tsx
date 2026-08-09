import { Github, Linkedin, Mail } from 'lucide-react';
import { profile } from '@/data/portfolio';

export function Footer() {
  return (
    <footer className="border-t border-ink-700/60 bg-ink-950">
      <div className="container-content py-12">
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
          <div>
            <p className="text-lg font-semibold text-ink-50">{profile.name}</p>
            <p className="mt-1 text-sm text-ink-200">
              {profile.role} | {profile.subRole}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="inline-flex items-center gap-2 rounded-md border border-ink-700 px-3.5 py-2 text-sm text-ink-100 transition-colors hover:border-accent/50 hover:text-ink-50"
            >
              <Github size={16} /> GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="inline-flex items-center gap-2 rounded-md border border-ink-700 px-3.5 py-2 text-sm text-ink-100 transition-colors hover:border-accent/50 hover:text-ink-50"
            >
              <Linkedin size={16} /> LinkedIn
            </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              className="inline-flex items-center gap-2 rounded-md border border-ink-700 px-3.5 py-2 text-sm text-ink-100 transition-colors hover:border-accent/50 hover:text-ink-50"
            >
              <Mail size={16} /> Email
            </a>
          </div>
        </div>

        <p className="mt-8 border-t border-ink-700/40 pt-6 text-sm text-ink-300">
          © 2026 {profile.name}
        </p>
      </div>
    </footer>
  );
}
