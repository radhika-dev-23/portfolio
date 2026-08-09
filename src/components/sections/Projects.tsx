import { useState } from 'react';
import { ArrowUpRight, GitBranch, ArrowDown, ExternalLink } from 'lucide-react';
import { projects } from '@/data/portfolio';
import type { ProjectData } from '@/data/types';
import { SectionHeading } from '@/components/SectionHeading';
import { Reveal } from '@/components/Reveal';
import { Badge } from '@/components/Badge';
import { ProjectModal } from '@/components/ProjectModal';

export function Projects() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const activeProject = projects.find((p) => p.id === activeId) ?? null;

  return (
    <section id="projects" className="relative py-24 sm:py-28">
      <div className="container-content">
        <SectionHeading eyebrow="Projects" title="Projects">
          Hackathon projects exploring full-stack and AI-integrated applications.
        </SectionHeading>

        <Reveal>
          <div className="mb-5 flex items-center gap-3">
            <GitBranch size={16} className="text-accent" />
            <h3 className="text-sm font-medium uppercase tracking-[0.18em] text-ink-100">
              Hackathon Projects
            </h3>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onView={() => setActiveId(project.id)}
              />
            ))}
          </div>
        </Reveal>
      </div>

      <ProjectModal project={activeProject} onClose={() => setActiveId(null)} />
    </section>
  );
}

function ProjectCard({ project, onView }: { project: ProjectData; onView: () => void }) {
  return (
    <article className="group flex h-full flex-col rounded-xl border border-ink-700/70 bg-ink-850/50 p-6 transition-all hover:border-ink-600 hover:bg-ink-850/80">
      <div className="mb-3">
        <Badge tone="accent">{project.badge}</Badge>
      </div>

      <h4 className="text-lg font-semibold text-ink-50">{project.name}</h4>
      <p className="mt-2.5 flex-1 text-sm leading-relaxed text-ink-200">{project.summary}</p>

      {project.keyFeatures.length > 0 && (
        <ul className="mt-5 flex flex-col gap-2">
          {project.keyFeatures.map((feature) => (
            <li key={feature} className="flex items-start gap-2.5 text-sm text-ink-100">
              <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-accent/70" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      )}

      {project.keyTechnologies.length > 0 && (
        <div className="mt-5 flex flex-wrap gap-2 border-t border-ink-700/60 pt-5">
          {project.keyTechnologies.map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-ink-700 bg-ink-850 px-2.5 py-1 font-mono text-xs text-ink-100"
            >
              {tech}
            </span>
          ))}
        </div>
      )}

      <div className="mt-6 flex items-center gap-2.5">
        <button
          type="button"
          onClick={onView}
          className="inline-flex items-center gap-2 rounded-md border border-ink-600 bg-ink-800/40 px-4 py-2.5 text-sm font-medium text-ink-50 transition-colors hover:border-accent/50 hover:bg-accent/10"
        >
          View Details
          <ArrowUpRight size={15} />
        </button>
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md px-3 py-2.5 text-sm text-ink-100 transition-colors hover:text-ink-50"
            aria-label={`View ${project.name} on GitHub`}
          >
            <ExternalLink size={15} />
            GitHub
          </a>
        )}
      </div>
    </article>
  );
}

export function ArchitectureFlow({ steps }: { steps: string[] }) {
  return (
    <div className="flex flex-col gap-1">
      {steps.map((step, i) => (
        <div key={step} className="flex flex-col">
          <div className="rounded-md border border-ink-700 bg-ink-800/50 px-3 py-2 font-mono text-xs text-ink-100">
            {step}
          </div>
          {i < steps.length - 1 && (
            <div className="flex justify-center py-0.5" aria-hidden="true">
              <ArrowDown size={14} className="text-ink-400" />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export function Note({
  icon,
  label,
  text,
}: {
  icon: React.ReactNode;
  label: string;
  text: string;
}) {
  return (
    <div className="rounded-lg border border-ink-700/60 bg-ink-800/30 p-4">
      <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.14em] text-ink-300">
        <span className="text-accent">{icon}</span>
        {label}
      </p>
      <p className="mt-2 text-sm leading-relaxed text-ink-200">{text}</p>
    </div>
  );
}
