"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type MarqueeProps = {
  children: ReactNode;
  className?: string;
  /** Saga dogru kaydirir */
  reverse?: boolean;
  /** Bir turun suresi (saniye) */
  duration?: number;
  /** Uzerine gelince durdur */
  pauseOnHover?: boolean;
};

/**
 * Icerigi yatayda sonsuz dongude kaydirir.
 * Icerik iki kez basilir; ikinci kopya ilkinin bittigi yerden devam eder.
 */
export function Marquee({
  children,
  className,
  reverse = false,
  duration = 32,
  pauseOnHover = true,
}: MarqueeProps) {
  return (
    <div
      className={cn(
        "group relative flex w-full overflow-hidden",
        // Kenarlarda yumusak kaybolma
        "[mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]",
        className,
      )}
    >
      {[0, 1].map((i) => (
        <div
          key={i}
          aria-hidden={i === 1}
          className={cn(
            "flex shrink-0 items-center gap-4 pr-4 motion-reduce:animate-none",
            reverse ? "animate-marquee-reverse" : "animate-marquee",
            pauseOnHover && "group-hover:[animation-play-state:paused]",
          )}
          style={{ animationDuration: `${duration}s` }}
        >
          {children}
        </div>
      ))}
    </div>
  );
}
