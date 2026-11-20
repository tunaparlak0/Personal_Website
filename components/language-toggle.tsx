"use client";

import { useLocale } from "@/components/locale-provider";
import { locales, type Locale } from "@/lib/content";
import { cn } from "@/lib/utils";

export function LanguageToggle() {
  const { locale, setLocale } = useLocale();

  return (
    <div
      role="group"
      aria-label="Dil / Language"
      className="inline-flex items-center rounded-full border border-border-token bg-card p-0.5"
    >
      {locales.map((code: Locale) => (
        <button
          key={code}
          type="button"
          onClick={() => setLocale(code)}
          aria-pressed={locale === code}
          className={cn(
            "cursor-pointer rounded-full px-2.5 py-1 text-xs font-medium transition-colors",
            locale === code
              ? "bg-accent-token text-white"
              : "text-muted-fg hover:text-foreground",
          )}
        >
          {code.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
