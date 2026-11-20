"use client";

import Image from "next/image";
import { PageHeader, PageShell } from "@/components/page-header";
import { BlurFade } from "@/components/ui/blur-fade";
import { useLocale } from "@/components/locale-provider";
import { profile, skillCategories } from "@/lib/content";

export default function AboutPage() {
  const { t } = useLocale();
  const categoryNames = t.about.techCategories as Record<string, string>;

  return (
    <PageShell>
      <PageHeader title={t.about.title} subtitle={t.about.lead} />

      <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,3fr)_minmax(0,1fr)]">
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
          <div className="relative mx-auto aspect-square w-40 overflow-hidden rounded-2xl border border-border-token lg:mx-0 lg:w-full lg:max-w-[200px]">
            <Image
              src="/profil.jpg"
              alt={profile.name}
              fill
              sizes="200px"
              className="object-cover"
            />
          </div>
        </BlurFade>
      </div>

      {/* TEKNOLOJILER — kategorili tablo */}
      <section className="mt-16">
        <BlurFade>
          <h2 className="mb-6 text-2xl font-bold tracking-tight sm:text-3xl">
            {t.about.techTitle}
          </h2>
        </BlurFade>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {skillCategories.map((category, i) => (
            <BlurFade key={category.id} delay={(i % 4) * 0.06}>
              <div className="h-full rounded-2xl border border-border-token bg-card p-5">
                <h3 className="border-b border-border-token pb-3 text-base font-semibold">
                  {categoryNames[category.id]}
                </h3>
                <ul className="mt-4 space-y-3">
                  {category.items.map((item) => (
                    <li
                      key={item.name}
                      className="flex items-center gap-3 text-sm text-muted-fg"
                    >
                      {item.logo ? (
                        // Tek renkli SVG: koyu temada ters cevrilip beyaz olur.
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={`/tech/${item.logo}.svg`}
                          alt=""
                          width={18}
                          height={18}
                          loading="lazy"
                          className="size-[18px] shrink-0 dark:invert"
                        />
                      ) : (
                        <span className="flex size-[18px] shrink-0 items-center justify-center text-[10px] font-semibold text-foreground">
                          {item.name.slice(0, 2)}
                        </span>
                      )}
                      {item.name}
                    </li>
                  ))}
                </ul>
              </div>
            </BlurFade>
          ))}
        </div>
      </section>

      <div className="mt-16 grid gap-10 lg:grid-cols-2">
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
