import { useEffect } from 'react';
import { ArrowUpRight, GitBranch, BookOpen, X } from 'lucide-react';
import type { ProjectData } from '@/data/types';
import { Badge } from '@/components/Badge';
import { TechList, FeatureList, SectionLabel } from '@/components/ui';
import { ArchitectureFlow, Note } from '@/components/sections/Projects';

interface ProjectModalProps {
  project: ProjectData | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (!project) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-start justify-center overflow-y-auto bg-ink-950/80 p-4 backdrop-blur-sm sm:p-8"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby={`modal-title-${project.id}`}
    >
      <div
        className="relative my-auto w-full max-w-2xl rounded-xl border border-ink-700 bg-ink-850 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 z-10 flex items-start justify-between gap-4 rounded-t-xl border-b border-ink-700/60 bg-ink-850/95 p-6 backdrop-blur-sm">
          <div>
            {project.badge && (
              <div className="mb-3">
                <Badge tone="accent">{project.badge}</Badge>
              </div>
            )}
            <h3
              id={`modal-title-${project.id}`}
              className="text-xl font-semibold text-ink-50 sm:text-2xl"
            >
              {project.name}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="flex-none rounded-md p-2 text-ink-200 transition-colors hover:bg-ink-800 hover:text-ink-50"
            aria-label="Close details"
          >
            <X size={20} />
          </button>
        </div>

        {/* Body */}
        <div className="flex flex-col gap-7 p-6">
          {project.description && (
            <div>
              <SectionLabel className="mb-2">Description</SectionLabel>
              <p className="text-sm leading-relaxed text-ink-100">{project.description}</p>
            </div>
          )}

          {project.features.length > 0 && (
            <div>
              <SectionLabel className="mb-4">Features</SectionLabel>
              <FeatureList items={project.features} />
            </div>
          )}

          {project.technologies.length > 0 && (
            <div>
              <SectionLabel className="mb-3">Technologies</SectionLabel>
              <TechList items={project.technologies} />
            </div>
          )}

          {project.architecture && project.architecture.length > 0 && (
            <div>
              <SectionLabel className="mb-4">Architecture</SectionLabel>
              <ArchitectureFlow steps={project.architecture} />
            </div>
          )}

          {(project.contribution || project.learningOutcome) && (
            <div className="flex flex-col gap-4 border-t border-ink-700/60 pt-6">
              {project.contribution && (
                <Note icon={<GitBranch size={14} />} label="Contribution" text={project.contribution} />
              )}
              {project.learningOutcome && (
                <Note icon={<BookOpen size={14} />} label="Learning" text={project.learningOutcome} />
              )}
            </div>
          )}

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit items-center gap-2 rounded-md border border-ink-600 px-4 py-2.5 text-sm text-ink-100 transition-colors hover:border-accent/50 hover:text-ink-50"
            >
              <ArrowUpRight size={15} />
              View on GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
