"use client";

import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";

const sections = [
  { href: "#hakkimda", label: "Hakkımda" },
  { href: "#deneyim", label: "Deneyim" },
  { href: "#projeler", label: "Projeler" },
  { href: "#tasarim", label: "Tasarım" },
  { href: "#iletisim", label: "İletişim" },
];

export function SiteNav() {
  return (
    <header className="sticky top-0 z-40 border-b border-border-token bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex h-14 max-w-2xl items-center justify-between gap-4 px-6">
        <Link
          href="/"
          className="shrink-0 text-sm font-semibold tracking-tight hover:text-accent-token transition-colors"
        >
          Tuna Parlak
        </Link>

        <div className="hidden items-center gap-5 sm:flex">
          {sections.map((section) => (
            <a
              key={section.href}
              href={section.href}
              className="text-sm text-muted-fg hover:text-foreground transition-colors"
            >
              {section.label}
            </a>
          ))}
        </div>

        <ThemeToggle />
      </nav>
    </header>
  );
}
