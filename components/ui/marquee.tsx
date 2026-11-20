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
  /**
   * Icerigin kac kez basilacagi. Az ogeli listelerde 2 kopya ekrani
   * dolduramaz ve arada bosluk olusur; o durumda artirin.
   */
  repeat?: number;
};

/**
 * Icerigi yatayda sonsuz dongude kaydirir.
 * Her kopya kendi genisligi kadar sola kayar; bir kopya ekrandan cikarken
 * bir sonraki tam onun yerini aldigi icin dongu dikissiz gorunur.
 */
export function Marquee({
  children,
  className,
  reverse = false,
  duration = 32,
  pauseOnHover = true,
  repeat = 2,
}: MarqueeProps) {
  return (
    <div
      className={cn(
        "group relative flex w-full overflow-hidden",
        // Kenarlarda yumusak kaybolma
        "[mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]",
        className,
      )}
    >
      {Array.from({ length: repeat }, (_, i) => (
        <div
          key={i}
          aria-hidden={i > 0}
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
