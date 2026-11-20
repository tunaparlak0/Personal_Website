"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, ArrowRight } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import { BlurFade } from "@/components/ui/blur-fade";
import { TechMarquee } from "@/components/tech-marquee";
import { DesignMarquee } from "@/components/design-marquee";
import { CvDownload } from "@/components/cv-download";
import { useLocale } from "@/components/locale-provider";
import { profile } from "@/lib/content";

export default function Home() {
  const { t } = useLocale();

  const cards = [
    { href: "/hakkimda", ...t.home.cards.about },
    { href: "/deneyim", ...t.home.cards.experience },
    { href: "/projeler", ...t.home.cards.projects },
    { href: "/tasarimlar", ...t.home.cards.designs },
  ];

  return (
    <>
      {/* HERO */}
      <section className="mx-auto max-w-7xl px-5 pt-16 pb-20 sm:px-8 sm:pt-24">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_auto]">
          <div>
            <BlurFade immediate>
              <p className="text-sm font-medium tracking-wide text-accent-token">
                {t.home.greeting}
              </p>
              <h1 className="mt-2 text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
                {profile.name}
              </h1>
              <p className="mt-4 text-lg text-muted-fg sm:text-xl">
                {t.home.role}
              </p>
            </BlurFade>

            <BlurFade delay={0.1} immediate>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-fg sm:text-lg">
                {t.home.tagline}
              </p>
            </BlurFade>

            <BlurFade delay={0.18} immediate>
              <div className="mt-8 flex flex-wrap items-center gap-2.5">
                <Link
                  href="/iletisim"
                  className="inline-flex items-center gap-2 rounded-xl bg-accent-token px-5 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
                >
                  <Mail size={16} />
                  {t.home.hireMe}
                </Link>
                <CvDownload />
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="inline-flex size-10 items-center justify-center rounded-xl border border-border-token bg-card text-muted-fg transition-colors hover:text-foreground"
                >
                  <FaGithub size={17} />
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="inline-flex size-10 items-center justify-center rounded-xl border border-border-token bg-card text-muted-fg transition-colors hover:text-foreground"
                >
                  <FaLinkedin size={17} />
                </a>
              </div>

              <p className="mt-5 flex items-center gap-2 text-sm text-muted-fg">
                <MapPin size={14} />
                {profile.location}
              </p>
            </BlurFade>
          </div>

          <BlurFade delay={0.08} immediate>
            <div className="relative mx-auto size-44 overflow-hidden rounded-3xl border border-border-token sm:size-56 lg:size-64">
              <Image
                src="/profil.jpg"
                alt={profile.name}
                fill
                sizes="256px"
                className="object-cover"
                priority
              />
            </div>
          </BlurFade>
        </div>
      </section>

      {/* KISAYOL KARTLARI */}
      <section className="mx-auto max-w-7xl px-5 pb-20 sm:px-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card, i) => (
            <BlurFade key={card.href} delay={i * 0.06}>
              <Link
                href={card.href}
                className="group flex h-full flex-col justify-between rounded-2xl border border-border-token bg-card p-5 transition-colors hover:border-accent-token/50"
              >
                <div>
                  <h2 className="text-base font-semibold">{card.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted-fg">
                    {card.text}
                  </p>
                </div>
                <ArrowRight
                  size={16}
                  className="mt-5 text-muted-fg transition-transform group-hover:translate-x-1 group-hover:text-accent-token"
                />
              </Link>
            </BlurFade>
          ))}
        </div>
      </section>

      {/* TEKNOLOJI YIGINI — tam genislik */}
      <section className="border-y border-border-token bg-card/40 py-16">
        <div className="mx-auto mb-10 max-w-7xl px-5 sm:px-8">
          <BlurFade>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              {t.home.techTitle}
            </h2>
            <p className="mt-2 text-sm text-muted-fg sm:text-base">
              {t.home.techSubtitle}
            </p>
          </BlurFade>
        </div>
        <BlurFade delay={0.08}>
          <TechMarquee />
        </BlurFade>
      </section>

      {/* TASARIMLAR — tam genislik akan serit */}
      <section className="py-16">
        <div className="mx-auto mb-10 max-w-7xl px-5 sm:px-8">
          <BlurFade>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  {t.home.designTitle}
                </h2>
                <p className="mt-2 max-w-2xl text-sm text-muted-fg sm:text-base">
                  {t.home.designSubtitle}
                </p>
              </div>
              <Link
                href="/tasarimlar"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-accent-token hover:underline"
              >
                {t.common.viewAll}
                <ArrowRight size={14} />
              </Link>
            </div>
          </BlurFade>
        </div>
        <BlurFade delay={0.08}>
          <DesignMarquee />
        </BlurFade>
      </section>
    </>
  );
}
