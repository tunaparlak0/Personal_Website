"use client";

import { Marquee } from "@/components/ui/marquee";
import { techStack, type Tech } from "@/lib/content";

function TechTile({ tech }: { tech: Tech }) {
  return (
    <div className="flex w-24 shrink-0 flex-col items-center gap-2.5">
      <div className="flex size-16 items-center justify-center rounded-2xl border border-border-token bg-card transition-colors group-hover:border-border-token">
        {tech.logo ? (
          // Tek renkli SVG'ler: acik temada siyah, koyu temada ters cevrilip beyaz olur.
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={`/tech/${tech.logo}.svg`}
            alt=""
            width={28}
            height={28}
            loading="lazy"
            className="size-7 dark:invert"
          />
        ) : (
          <span className="text-xs font-semibold tracking-tight">
            {tech.name.split(" ")[0]}
          </span>
        )}
      </div>
      <span className="text-center text-xs text-muted-fg">{tech.name}</span>
    </div>
  );
}

export function TechMarquee() {
  const third = Math.ceil(techStack.length / 3);
  const rows = [
    techStack.slice(0, third),
    techStack.slice(third, third * 2),
    techStack.slice(third * 2),
  ];

  return (
    <div className="space-y-6">
      {rows.map((row, i) => (
        <Marquee key={i} duration={46 + i * 6} reverse={i === 1} repeat={3}>
          {row.map((tech) => (
            <TechTile key={tech.name} tech={tech} />
          ))}
        </Marquee>
      ))}
    </div>
  );
}
