"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

import { ThemeToggle } from "@/components/theme-toggle";
import { LanguageToggle } from "@/components/language-toggle";
import { CvDownload } from "@/components/cv-download";
import { useLocale } from "@/components/locale-provider";
import { profile } from "@/lib/content";
import { cn } from "@/lib/utils";

export function SiteNav() {
  const { t } = useLocale();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const links = [
    { href: "/hakkimda", label: t.nav.about },
    { href: "/deneyim", label: t.nav.experience },
    { href: "/projeler", label: t.nav.projects },
    { href: "/tasarimlar", label: t.nav.designs },
    { href: "/iletisim", label: t.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-border-token bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-5 sm:px-8">
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="shrink-0 rounded-full border border-border-token px-4 py-1.5 text-sm font-semibold tracking-tight transition-colors hover:border-accent-token/60"
        >
          {profile.name}
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-lg px-3 py-2 text-sm transition-colors",
                pathname === link.href
                  ? "text-foreground"
                  : "text-muted-fg hover:text-foreground",
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <CvDownload variant="icon" />
          <LanguageToggle />
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Menü"
            aria-expanded={open}
            className="inline-flex size-9 cursor-pointer items-center justify-center rounded-full border border-border-token bg-card text-muted-fg transition-colors hover:text-foreground md:hidden"
          >
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-border-token md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col px-5 py-2 sm:px-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-2.5 text-sm text-muted-fg transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
