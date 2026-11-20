"use client";

import Image from "next/image";
import Link from "next/link";

import { Marquee } from "@/components/ui/marquee";
import { useLocale } from "@/components/locale-provider";
import { designAssets } from "@/lib/content";

/**
 * Ana sayfada tasarimlari akitan serit.
 * Kartlar tam galeriye goturur; buyutec /tasarimlar sayfasinda.
 */
export function DesignMarquee() {
  const { t } = useLocale();
  const half = Math.ceil(designAssets.length / 2);

  const rows = [designAssets.slice(0, half), designAssets.slice(half)];

  return (
    <div className="space-y-4">
      {rows.map((row, rowIndex) => (
        <Marquee
          key={rowIndex}
          duration={50}
          reverse={rowIndex === 1}
          repeat={4}
        >
          {row.map((asset, i) => {
            const index = rowIndex * half + i;
            const meta = t.designs.items[index];

            return (
              <Link
                key={asset.src}
                href="/tasarimlar"
                title={meta?.title}
                className="group/card relative block h-44 w-auto shrink-0 overflow-hidden rounded-xl border border-border-token bg-card sm:h-56"
              >
                <Image
                  src={asset.src}
                  alt={meta?.title ?? ""}
                  width={asset.width}
                  height={asset.height}
                  sizes="320px"
                  className="h-full w-auto object-cover transition-transform duration-500 group-hover/card:scale-105"
                />
                <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent px-3 pt-8 pb-2 text-[11px] leading-tight text-white opacity-0 transition-opacity group-hover/card:opacity-100">
                  {meta?.title}
                </span>
              </Link>
            );
          })}
        </Marquee>
      ))}
    </div>
  );
}
