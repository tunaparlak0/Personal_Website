"use client";

import { useState, useRef, useEffect } from "react";
import { Download, FileText } from "lucide-react";
import { useLocale } from "@/components/locale-provider";
import { cn } from "@/lib/utils";

/**
 * CV butonu: once hangi dilde indirilecegini sorar.
 * variant="icon" basliktaki ikon-only hali; uzerine gelince ipucu cikar.
 */
export function CvDownload({ variant = "button" }: { variant?: "button" | "icon" }) {
  const { t } = useLocale();
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const onPointerDown = (e: MouseEvent | TouchEvent) => {
      if (!wrapperRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const itemClass =
    "block px-3 py-2 text-sm text-muted-fg hover:bg-accent-soft hover:text-accent-token transition-colors";

  const isIcon = variant === "icon";

  return (
    <div className="group/cv relative" ref={wrapperRef}>
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        aria-haspopup="menu"
        aria-label={isIcon ? t.common.downloadCv : undefined}
        className={cn(
          "inline-flex cursor-pointer items-center justify-center border border-border-token bg-card font-medium text-foreground transition-colors hover:border-accent-token/50",
          isIcon
            ? "size-9 rounded-full text-muted-fg hover:text-foreground"
            : "gap-2 rounded-xl px-5 py-2.5 text-sm",
        )}
      >
        {isIcon ? (
          <FileText size={16} />
        ) : (
          <>
            <Download size={15} />
            {t.common.downloadCv}
          </>
        )}
      </button>

      {/* Ikon halinde uzerine gelince cikan ipucu */}
      {isIcon && !open && (
        <span
          role="tooltip"
          className="pointer-events-none absolute top-full left-1/2 z-30 mt-2 -translate-x-1/2 rounded-lg border border-border-token bg-card px-2.5 py-1.5 text-xs whitespace-nowrap text-foreground opacity-0 shadow-lg transition-opacity group-hover/cv:opacity-100"
        >
          {t.common.downloadCv}
        </span>
      )}

      {open && (
        <div
          role="menu"
          className={cn(
            "absolute top-full z-30 mt-2 w-44 overflow-hidden rounded-lg border border-border-token bg-card shadow-lg",
            isIcon ? "right-0" : "left-0",
          )}
        >
          <p className="border-b border-border-token px-3 py-2 text-xs text-muted-fg">
            {t.common.whichLanguage}
          </p>
          <a
            role="menuitem"
            href="/Tuna_Parlak_CV_TR.pdf"
            download="Tuna_Parlak_CV_TR.pdf"
            onClick={() => setOpen(false)}
            className={itemClass}
          >
            {t.common.turkish}
          </a>
          <a
            role="menuitem"
            href="/Tuna_Parlak_CV_EN.pdf"
            download="Tuna_Parlak_CV_EN.pdf"
            onClick={() => setOpen(false)}
            className={itemClass}
          >
            {t.common.english}
          </a>
        </div>
      )}
    </div>
  );
}
