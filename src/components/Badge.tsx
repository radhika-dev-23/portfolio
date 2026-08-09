import type { ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode;
  tone?: 'accent' | 'neutral';
  className?: string;
}

export function Badge({ children, tone = 'neutral', className = '' }: BadgeProps) {
  const tones = {
    accent: 'border-accent/40 bg-accent/10 text-accent-soft',
    neutral: 'border-ink-600 bg-ink-800/60 text-ink-200',
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 font-mono text-[11px] uppercase tracking-[0.14em] ${tones[tone]} ${className}`}
    >
      {children}
    </span>
  );
}
