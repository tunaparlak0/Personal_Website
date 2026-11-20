"use client";

import { PageHeader, PageShell } from "@/components/page-header";
import { BlurFade } from "@/components/ui/blur-fade";
import { DesignGallery } from "@/components/design-gallery";
import { useLocale } from "@/components/locale-provider";

export default function DesignsPage() {
  const { t } = useLocale();

  return (
    <PageShell>
      <PageHeader title={t.designs.title} subtitle={t.designs.subtitle} />
      <BlurFade immediate delay={0.08}>
        <p className="mt-3 text-sm text-muted-fg">{t.common.enlargeHint}</p>
      </BlurFade>
      <div className="mt-10">
        <DesignGallery />
      </div>
    </PageShell>
  );
}
