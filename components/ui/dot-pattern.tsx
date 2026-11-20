import { cn } from "@/lib/utils";

/**
 * Sayfanin arkasina sabitlenen, hareketsiz nokta deseni.
 * Merkeze dogru acilan bir maske ile kenarlara dogru soner.
 */
export function DotPattern({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none fixed inset-0 -z-10",
        "[background-image:radial-gradient(var(--color-pattern)_1px,transparent_1px)]",
        "[background-size:22px_22px]",
        "[mask-image:radial-gradient(ellipse_at_center,black_10%,transparent_75%)]",
        className,
      )}
    />
  );
}
