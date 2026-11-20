"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import type { Design } from "@/lib/content";

/**
 * Masonry galeri + buyutec.
 * Tasarimlarin en/boy oranlari cok farkli oldugu icin sabit kart yerine
 * CSS columns kullaniyoruz; her gorsel kendi oraninda duruyor.
 */
export function DesignGallery({ designs }: { designs: Design[] }) {
  const [selected, setSelected] = useState<Design | null>(null);
  const close = useCallback(() => setSelected(null), []);

  useEffect(() => {
    if (!selected) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [selected, close]);

  return (
    <>
      <div className="columns-1 gap-4 sm:columns-2">
        {designs.map((design) => (
          <button
            key={design.src}
            type="button"
            onClick={() => setSelected(design)}
            className="group mb-4 block w-full break-inside-avoid cursor-zoom-in overflow-hidden rounded-xl border border-border-token bg-card text-left transition-colors hover:border-accent-token/50"
          >
            <Image
              src={design.src}
              alt={design.title}
              width={design.width}
              height={design.height}
              sizes="(max-width: 640px) 100vw, 320px"
              className="h-auto w-full transition-transform duration-500 group-hover:scale-[1.03]"
            />
            <div className="p-3">
              <h3 className="text-sm font-medium text-foreground">
                {design.title}
              </h3>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {design.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded bg-accent-soft px-1.5 py-0.5 text-[11px] text-accent-token"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </button>
        ))}
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={close}
            role="dialog"
            aria-modal="true"
            aria-label={selected.title}
            className="fixed inset-0 z-50 flex cursor-zoom-out items-center justify-center bg-black/90 p-4 backdrop-blur-sm md:p-8"
          >
            <button
              type="button"
              onClick={close}
              aria-label="Kapat"
              className="absolute top-4 right-4 cursor-pointer rounded-full border border-white/20 bg-white/10 p-3 text-white transition-colors hover:bg-white/20 md:top-6 md:right-6"
            >
              <X size={20} />
            </button>

            <motion.div
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="flex max-h-full w-full max-w-5xl cursor-default flex-col items-center"
            >
              <Image
                src={selected.src}
                alt={selected.title}
                width={selected.width}
                height={selected.height}
                sizes="100vw"
                className="h-auto max-h-[78vh] w-auto max-w-full rounded-lg object-contain shadow-2xl"
              />
              <p className="mt-4 text-center text-sm text-zinc-300">
                {selected.title}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
