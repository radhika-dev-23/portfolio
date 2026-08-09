import { GraduationCap, Award, BookOpen, MapPin, Calendar } from 'lucide-react';
import { about, education, certifications } from '@/data/portfolio';
import { SectionHeading } from '@/components/SectionHeading';
import { Reveal } from '@/components/Reveal';
import { SectionLabel } from '@/components/ui';

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-28">
      <div className="container-content">
        <SectionHeading eyebrow="About" title="About" />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Narrative */}
          <Reveal className="lg:col-span-2">
            <div className="flex h-full flex-col gap-6 rounded-xl border border-ink-700/70 bg-ink-850/50 p-7 sm:p-8">
              {about.paragraphs.map((paragraph, i) => (
                <p key={i} className="text-base leading-relaxed text-ink-100 sm:text-lg">
                  {paragraph}
                </p>
              ))}

              <div className="mt-2 border-t border-ink-700/60 pt-6">
                <SectionLabel className="mb-4 flex items-center gap-2">
                  <BookOpen size={14} className="text-accent" />
                  Currently learning
                </SectionLabel>
                <div className="flex flex-wrap gap-2">
                  {about.currentlyLearning.map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center gap-2 rounded-md border border-ink-700 bg-ink-800/40 px-3 py-1.5 text-base text-ink-100"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-accent/60" />
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          {/* Sidebar: education + certifications — visually secondary */}
          <Reveal delay={80} className="flex flex-col gap-5">
            {/* Education */}
            <div className="rounded-xl border border-ink-700/60 bg-ink-850/40 p-6">
              <div className="flex items-center gap-2 text-accent">
                <GraduationCap size={18} />
                <h3 className="text-sm font-semibold uppercase tracking-[0.14em]">Education</h3>
              </div>
              <h4 className="mt-4 text-base font-semibold text-ink-50">{education.institution}</h4>
              <p className="mt-1.5 text-sm text-ink-100">{education.degree}</p>
              <div className="mt-4 flex flex-col gap-1.5 border-t border-ink-700/60 pt-4 text-sm text-ink-200">
                <span className="inline-flex items-center gap-2">
                  <Calendar size={13} className="text-ink-300" />
                  {education.period}
                </span>
                <span className="inline-flex items-center gap-2">
                  <MapPin size={13} className="text-ink-300" />
                  {education.location}
                </span>
              </div>
            </div>

            {/* Certifications — compact */}
            <div className="rounded-xl border border-ink-700/60 bg-ink-850/40 p-6">
              <div className="flex items-center gap-2 text-accent">
                <Award size={18} />
                <h3 className="text-sm font-semibold uppercase tracking-[0.14em]">
                  Certifications
                </h3>
              </div>
              <ul className="mt-4 flex flex-col gap-3">
                {certifications.map((cert) => (
                  <li key={cert.title} className="border-l-2 border-ink-700 pl-3.5">
                    <p className="text-sm font-medium text-ink-50">{cert.title}</p>
                    <p className="mt-0.5 text-xs text-ink-300">{cert.subtitle}</p>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
