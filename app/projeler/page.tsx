"use client";

import { ExternalLink, Lock } from "lucide-react";
import { FaGithub } from "react-icons/fa";

import { PageHeader, PageShell } from "@/components/page-header";
import { BlurFade } from "@/components/ui/blur-fade";
import { useLocale } from "@/components/locale-provider";
import { projectMeta } from "@/lib/content";

export default function ProjectsPage() {
  const { t } = useLocale();

  return (
    <PageShell>
      <PageHeader title={t.projects.title} subtitle={t.projects.subtitle} />

      <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {t.projects.items.map((project, i) => {
          const { link, tags, ongoing, privateReason } = projectMeta[i];

          return (
            <BlurFade
              key={project.title}
              delay={(i % 3) * 0.06}
              /* Sabit yukseklikli yuva: kart hover'da buyurken digerlerini itmesin */
              className="relative hover:z-20 md:h-70"
            >
              <article className="group relative flex flex-col rounded-2xl border border-border-token bg-card p-5 transition-colors hover:border-accent-token/50 hover:bg-card md:absolute md:inset-x-0 md:top-0 md:min-h-full">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <h2 className="line-clamp-2 text-base font-semibold">
                    {project.title}
                  </h2>
                  {ongoing && (
                    <span className="shrink-0 rounded-full bg-accent-soft px-2 py-0.5 text-[11px] font-medium text-accent-token">
                      {t.common.ongoing}
                    </span>
                  )}
                </div>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-fg md:line-clamp-3 md:group-hover:line-clamp-none">
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded bg-accent-soft px-2 py-0.5 text-[11px] text-accent-token"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-5 md:mt-auto md:pt-5">
                  {link ? (
                    <a
                      href={link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-medium transition-colors hover:text-accent-token"
                    >
                      <FaGithub size={13} />
                      {t.common.sourceCode}
                      <ExternalLink size={11} />
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 text-xs text-muted-fg">
                      <Lock size={12} />
                      {privateReason === "research"
                        ? t.common.privateResearch
                        : t.common.privateSource}
                    </span>
                  )}
                </div>
              </article>
            </BlurFade>
          );
        })}
      </div>
    </PageShell>
  );
}
