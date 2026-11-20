"use client";

import { PageHeader, PageShell } from "@/components/page-header";
import { BlurFade } from "@/components/ui/blur-fade";
import { useLocale } from "@/components/locale-provider";

export default function ExperiencePage() {
  const { t } = useLocale();

  return (
    <PageShell>
      <PageHeader title={t.experience.title} subtitle={t.experience.subtitle} />

      {/* Dikey zaman cizgisi */}
      <div className="relative mt-12 max-w-4xl">
        <div
          aria-hidden
          className="absolute top-2 bottom-2 left-[7px] w-px bg-border-token"
        />
        <div className="space-y-8">
          {t.experience.items.map((item, i) => (
            <BlurFade key={`${item.org}-${item.period}`} delay={i * 0.07}>
              <div className="relative pl-8">
                <span
                  aria-hidden
                  className="absolute top-2 left-0 size-[15px] rounded-full border-2 border-background bg-accent-token"
                />
                <div className="rounded-2xl border border-border-token bg-card p-5 sm:p-6">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h2 className="text-base font-semibold">{item.role}</h2>
                    <span className="text-xs text-muted-fg">{item.period}</span>
                  </div>
                  <p className="mt-1 text-sm font-medium text-accent-token">
                    {item.org}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-fg">
                    {item.description}
                  </p>
                </div>
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </PageShell>
  );
}
