"use client";

import { BlurFade } from "@/components/ui/blur-fade";

export function PageHeader({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <BlurFade immediate>
      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">{title}</h1>
      {subtitle && (
        <p className="mt-3 max-w-3xl text-base leading-relaxed text-muted-fg sm:text-lg">
          {subtitle}
        </p>
      )}
    </BlurFade>
  );
}

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <main className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20">
      {children}
    </main>
  );
}
