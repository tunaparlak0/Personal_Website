"use client";

import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import { useLocale } from "@/components/locale-provider";
import { profile } from "@/lib/content";

export function SiteFooter() {
  const { t } = useLocale();

  const links = [
    { href: "/hakkimda", label: t.nav.about },
    { href: "/deneyim", label: t.nav.experience },
    { href: "/projeler", label: t.nav.projects },
    { href: "/tasarimlar", label: t.nav.designs },
    { href: "/iletisim", label: t.nav.contact },
  ];

  return (
    <footer className="mt-auto border-t border-border-token">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p className="text-xs text-muted-fg">
          © {new Date().getFullYear()} {profile.name}
        </p>

        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs text-muted-fg transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}

          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-muted-fg transition-colors hover:text-foreground"
          >
            <FaGithub size={15} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-muted-fg transition-colors hover:text-foreground"
          >
            <FaLinkedin size={15} />
          </a>
        </div>
      </div>
    </footer>
  );
}
