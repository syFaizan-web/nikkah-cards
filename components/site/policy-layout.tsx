import type { ReactNode } from 'react';

interface PolicyLayoutProps {
  title: string;
  description: string;
  children: ReactNode;
}

export function PolicyLayout({ title, description, children }: PolicyLayoutProps) {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="text-center">
        <span className="text-xs font-semibold uppercase tracking-wider text-accent">
          Information
        </span>
        <h1 className="mt-3 font-serif text-3xl font-semibold text-foreground sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>
      </div>

      <div className="mt-12 space-y-8">{children}</div>

      <div className="mt-12 rounded-lg border border-border/60 bg-muted/30 p-5 text-xs leading-relaxed text-muted-foreground">
        <p>
          This page contains editable placeholder content. Please replace
          business-specific details, timelines, and policies with your own
          before publishing. Last updated: {new Date().getFullYear()}.
        </p>
      </div>
    </div>
  );
}

interface PolicySectionProps {
  title: string;
  children: ReactNode;
}

export function PolicySection({ title, children }: PolicySectionProps) {
  return (
    <section>
      <h2 className="font-serif text-xl font-semibold text-foreground">
        {title}
      </h2>
      <div className="mt-3 space-y-3 text-sm leading-relaxed text-muted-foreground">
        {children}
      </div>
    </section>
  );
}
