"use client";

import { Mail, MapPin } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import { PageHeader, PageShell } from "@/components/page-header";
import { BlurFade } from "@/components/ui/blur-fade";
import { ContactForm } from "@/components/contact-form";
import { useLocale } from "@/components/locale-provider";
import { profile } from "@/lib/content";

export default function ContactPage() {
  const { t } = useLocale();

  return (
    <PageShell>
      <PageHeader title={t.contact.title} subtitle={t.contact.subtitle} />

      <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)]">
        <BlurFade>
          <div className="space-y-4 rounded-2xl border border-border-token bg-card p-6">
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-3 text-sm transition-colors hover:text-accent-token"
            >
              <span className="flex size-9 items-center justify-center rounded-lg bg-accent-soft text-accent-token">
                <Mail size={16} />
              </span>
              {profile.email}
            </a>

            <p className="flex items-center gap-3 text-sm text-muted-fg">
              <span className="flex size-9 items-center justify-center rounded-lg bg-accent-soft text-accent-token">
                <MapPin size={16} />
              </span>
              {profile.location}
            </p>

            <div className="flex gap-2 pt-2">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="inline-flex size-10 items-center justify-center rounded-xl border border-border-token text-muted-fg transition-colors hover:text-foreground"
              >
                <FaGithub size={17} />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="inline-flex size-10 items-center justify-center rounded-xl border border-border-token text-muted-fg transition-colors hover:text-foreground"
              >
                <FaLinkedin size={17} />
              </a>
            </div>
          </div>
        </BlurFade>

        <BlurFade delay={0.08}>
          <ContactForm />
        </BlurFade>
      </div>
    </PageShell>
  );
}
