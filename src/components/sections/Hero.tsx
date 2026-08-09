import { ArrowRight, FileText, Github } from 'lucide-react';
import { profile } from '@/data/portfolio';

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-16"
    >
      {/* Background texture */}
      <div className="bg-tech-grid pointer-events-none absolute inset-0" aria-hidden="true" />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-40 top-1/2 h-[34rem] w-[34rem] -translate-y-1/2 rounded-full bg-accent/5 blur-[120px]"
        aria-hidden="true"
      />

      <div className="container-content relative grid w-full grid-cols-1 items-center gap-12 py-16 lg:grid-cols-12 lg:gap-8">
        {/* Left: copy */}
        <div className="lg:col-span-7">
          <div className="animate-fade-up flex items-center gap-3">
            <span className="h-2 w-2 animate-soft-pulse rounded-full bg-accent" />
            <span className="font-mono text-xs uppercase tracking-[0.24em] text-ink-200 sm:text-sm">
              Chennai, India · AI &amp; Robotics
            </span>
          </div>

          <h1
            className="animate-fade-up mt-6 text-4xl font-semibold tracking-tighter2 text-ink-50 sm:text-5xl lg:text-6xl"
            style={{ animationDelay: '60ms' }}
          >
            {profile.name}
          </h1>

          <p
            className="animate-fade-up mt-3 font-mono text-base text-accent-soft sm:text-lg"
            style={{ animationDelay: '120ms' }}
          >
            {profile.role}
            <span className="mx-2 text-ink-400">/</span>
            {profile.subRole}
          </p>

          <p
            className="animate-fade-up mt-6 max-w-xl text-lg leading-relaxed text-ink-100 sm:text-xl"
            style={{ animationDelay: '180ms' }}
          >
            {profile.tagline}
          </p>

          <p
            className="animate-fade-up mt-5 max-w-xl text-base leading-relaxed text-ink-200"
            style={{ animationDelay: '240ms' }}
          >
            {profile.supporting}
          </p>

          <div
            className="animate-fade-up mt-10 flex flex-wrap items-center gap-3"
            style={{ animationDelay: '300ms' }}
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-medium text-ink-950 transition-all hover:bg-accent-soft"
            >
              View Projects
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </a>
            <a
              href={profile.resumeUrl}
              className="inline-flex items-center gap-2 rounded-md border border-ink-600 bg-ink-800/40 px-5 py-3 text-sm font-medium text-ink-50 transition-colors hover:border-accent/50 hover:bg-accent/10"
            >
              <FileText size={16} />
              View Resume
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md px-4 py-3 text-sm font-medium text-ink-100 transition-colors hover:text-ink-50"
            >
              <Github size={16} />
              GitHub
            </a>
          </div>
        </div>

        {/* Right: subtle technical profile panel */}
        <div className="hidden lg:col-span-5 lg:block">
          <div
            className="animate-fade-in ml-auto max-w-sm rounded-xl border border-ink-700/70 bg-ink-850/80 p-6 backdrop-blur-sm"
            style={{ animationDelay: '360ms' }}
          >
            <div className="flex items-center justify-between border-b border-ink-700/60 pb-3">
              <span className="font-mono text-sm text-ink-300">~ / profile</span>
              <div className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full border border-ink-600" />
                <span className="h-2.5 w-2.5 rounded-full border border-ink-600" />
                <span className="h-2.5 w-2.5 rounded-full border border-accent/50 bg-accent/20" />
              </div>
            </div>
            <div className="mt-5 space-y-3 font-mono text-sm leading-relaxed">
              <Line label="focus" value="backend · ai · systems" />
              <Line label="specialty" value="ai & robotics" />
              <Line label="currently" value="learning + building" accent />
              <Line label="education" value="vit chennai · 2028" />
            </div>
            <div className="mt-5 border-t border-ink-700/60 pt-4">
              <Line label="based in" value="chennai, india" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Line({ label, value, accent }: { label: string; value: string; accent?: boolean }) {
  return (
    <div className="flex items-center gap-3">
      <span className="w-20 flex-none text-ink-300">{label}</span>
      <span className="text-ink-400">:</span>
      <span className={accent ? 'text-accent-soft' : 'text-ink-100'}>{value}</span>
    </div>
  );
}
