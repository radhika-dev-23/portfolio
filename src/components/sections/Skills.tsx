import { skills } from '@/data/portfolio';
import { SectionHeading } from '@/components/SectionHeading';
import { Reveal } from '@/components/Reveal';

export function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-28">
      <div className="container-content">
        <SectionHeading eyebrow="Technical Stack" title="Technical Stack">
          The languages, frameworks, and tools I work with — grouped by area.
        </SectionHeading>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skills.categories.map((category, i) => (
            <Reveal key={category.name} delay={i * 60}>
              <div className="h-full rounded-xl border border-ink-700/70 bg-ink-850/50 p-6 transition-colors hover:border-ink-600">
                <h3 className="text-base font-semibold uppercase tracking-[0.1em] text-ink-100">
                  {category.name}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-md border border-ink-700 bg-ink-800/50 px-3 py-1.5 text-base text-ink-100 transition-colors hover:border-accent/40 hover:text-ink-50"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
