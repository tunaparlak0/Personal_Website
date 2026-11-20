"use client";

import { useState, useRef, useEffect } from "react";
import { Download } from "lucide-react";
import { useLocale } from "@/components/locale-provider";

/** CV butonu: once hangi dilde indirilecegini sorar. */
export function CvDownload() {
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

  return (
    <div className="relative" ref={wrapperRef}>
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        aria-haspopup="menu"
        className="inline-flex cursor-pointer items-center gap-2 rounded-xl border border-border-token bg-card px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-accent-token/50"
      >
        <Download size={15} />
        {t.common.downloadCv}
      </button>

      {open && (
        <div
          role="menu"
          className="absolute top-full left-0 z-30 mt-2 w-44 overflow-hidden rounded-lg border border-border-token bg-card shadow-lg"
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
