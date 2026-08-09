import { MapPin, Calendar, Terminal, Bug, Gauge } from 'lucide-react';
import { experiences } from '@/data/portfolio';
import { SectionHeading } from '@/components/SectionHeading';
import { Reveal } from '@/components/Reveal';
import { TechList, SectionLabel } from '@/components/ui';

const highlightIcons = [Bug, Gauge, Terminal];

export function Experience() {
  return (
    <section id="experience" className="relative py-24 sm:py-28">
      <div className="container-content">
        <SectionHeading eyebrow="Experience" title="Experience">
          Hands-on industry exposure through an AI/ML internship focused on backend work.
        </SectionHeading>

        {experiences.map((exp) => (
          <Reveal key={exp.company}>
            <article className="rounded-xl border border-ink-600/80 bg-ink-850/60 p-7 sm:p-10">
              {/* Header */}
              <div className="flex flex-col gap-5 border-b border-ink-700/60 pb-7 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-2xl font-semibold text-ink-50 sm:text-3xl">{exp.company}</h3>
                  <p className="mt-2 font-mono text-base text-accent-soft">{exp.role}</p>
                  <p className="mt-4 text-base text-ink-200">{exp.context}</p>
                </div>
                <div className="flex flex-col gap-2 sm:items-end">
                  <span className="inline-flex items-center gap-2 text-base text-ink-200">
                    <Calendar size={16} className="text-ink-300" />
                    {exp.period}
                  </span>
                  <span className="inline-flex items-center gap-2 text-base text-ink-200">
                    <MapPin size={16} className="text-ink-300" />
                    {exp.location}
                  </span>
                </div>
              </div>

              {/* Highlights */}
              <ol className="mt-8 flex flex-col gap-8">
                {exp.highlights.map((highlight, i) => {
                  const Icon = highlightIcons[i % highlightIcons.length];
                  return (
                    <li key={highlight.title} className="flex gap-5 sm:gap-6">
                      <div className="flex flex-col items-center">
                        <span className="flex h-10 w-10 flex-none items-center justify-center rounded-lg border border-ink-600 bg-ink-800 text-accent-soft">
                          <Icon size={18} />
                        </span>
                        {i < exp.highlights.length - 1 && (
                          <span className="mt-1 w-px flex-1 bg-ink-700/60" />
                        )}
                      </div>
                      <div className="pb-1">
                        <h4 className="text-lg font-medium text-ink-50">
                          <span className="mr-2.5 font-mono text-sm text-ink-300">
                            {String(i + 1).padStart(2, '0')}
                          </span>
                          {highlight.title}
                        </h4>
                        <p className="mt-3 text-base leading-relaxed text-ink-200">
                          {highlight.description}
                        </p>
                      </div>
                    </li>
                  );
                })}
              </ol>

              {/* Technologies */}
              <div className="mt-9 border-t border-ink-700/60 pt-7">
                <SectionLabel className="mb-4">Technologies</SectionLabel>
                <TechList items={exp.technologies} />
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
