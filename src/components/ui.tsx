import type { ReactNode } from 'react';

interface TechListProps {
  items: string[];
  className?: string;
}

export function TechList({ items, className = '' }: TechListProps) {
  if (items.length === 0) return null;
  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {items.map((item) => (
        <span
          key={item}
          className="rounded-md border border-ink-700 bg-ink-850 px-3 py-1.5 font-mono text-sm text-ink-100"
        >
          {item}
        </span>
      ))}
    </div>
  );
}

interface FeatureListProps {
  items: string[];
  className?: string;
}

export function FeatureList({ items, className = '' }: FeatureListProps) {
  if (items.length === 0) return null;
  return (
    <ul className={`flex flex-col gap-2.5 ${className}`}>
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2.5 text-base text-ink-100">
          <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-accent/70" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

interface SectionLabelProps {
  children: ReactNode;
  className?: string;
}

export function SectionLabel({ children, className = '' }: SectionLabelProps) {
  return (
    <p className={`font-mono text-xs uppercase tracking-[0.16em] text-ink-300 ${className}`}>
      {children}
    </p>
  );
}
