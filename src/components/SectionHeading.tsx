import type { ReactNode } from 'react';
import { Reveal } from './Reveal';

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  id?: string;
  children?: ReactNode;
}

export function SectionHeading({ eyebrow, title, id, children }: SectionHeadingProps) {
  return (
    <Reveal className="mb-10 sm:mb-14">
      <div className="flex items-center gap-3">
        <span className="h-px w-8 bg-accent/60" />
        <span className="section-eyebrow">{eyebrow}</span>
      </div>
      <h2
        id={id}
        className="mt-4 text-3xl font-semibold tracking-tighter2 text-ink-50 sm:text-4xl"
      >
        {title}
      </h2>
      {children ? <div className="mt-4 max-w-2xl text-ink-200">{children}</div> : null}
    </Reveal>
  );
}
