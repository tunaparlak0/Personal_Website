"use client";

import Image from "next/image";
import { PageHeader, PageShell } from "@/components/page-header";
import { BlurFade } from "@/components/ui/blur-fade";
import { useLocale } from "@/components/locale-provider";
import { profile } from "@/lib/content";

export default function AboutPage() {
  const { t } = useLocale();

  return (
    <PageShell>
      <PageHeader title={t.about.title} subtitle={t.about.lead} />

      <div className="mt-12 grid gap-12 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
        <div className="space-y-5">
          {t.about.paragraphs.map((paragraph, i) => (
            <BlurFade key={i} delay={i * 0.05}>
              <p className="text-base leading-relaxed text-muted-fg">
                {paragraph}
              </p>
            </BlurFade>
          ))}
        </div>

        <BlurFade delay={0.1}>
          <div className="relative aspect-4/5 w-full overflow-hidden rounded-2xl border border-border-token">
            <Image
              src="/profil.jpg"
              alt={profile.name}
              fill
              sizes="(max-width: 1024px) 100vw, 380px"
              className="object-cover"
            />
          </div>
        </BlurFade>
      </div>

      <div className="mt-16 grid gap-12 lg:grid-cols-2">
        <section>
          <BlurFade>
            <h2 className="mb-5 text-xs font-semibold tracking-[0.14em] text-muted-fg uppercase">
              {t.about.educationTitle}
            </h2>
          </BlurFade>
          <div className="space-y-3">
            {t.about.education.map((item, i) => (
              <BlurFade key={item.school} delay={i * 0.06}>
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 rounded-2xl border border-border-token bg-card p-5">
                  <div>
                    <h3 className="text-sm font-semibold">{item.school}</h3>
                    <p className="mt-1 text-sm text-muted-fg">{item.program}</p>
                  </div>
                  <span className="text-xs text-muted-fg">{item.period}</span>
                </div>
              </BlurFade>
            ))}
          </div>
        </section>

        <section>
          <BlurFade>
            <h2 className="mb-5 text-xs font-semibold tracking-[0.14em] text-muted-fg uppercase">
              {t.about.languagesTitle}
            </h2>
          </BlurFade>
          <div className="space-y-3">
            {t.about.languages.map((item, i) => (
              <BlurFade key={item.name} delay={i * 0.06}>
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 rounded-2xl border border-border-token bg-card p-5">
                  <h3 className="text-sm font-semibold">{item.name}</h3>
                  <span className="text-sm text-muted-fg">{item.level}</span>
                </div>
              </BlurFade>
            ))}
          </div>
        </section>
      </div>
    </PageShell>
  );
}
