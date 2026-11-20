"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      aria-label="Temayı değiştir"
      title="Temayı değiştir"
      className="inline-flex size-9 cursor-pointer items-center justify-center rounded-full border border-border-token bg-card text-muted-fg transition-colors hover:border-accent-token/50 hover:text-foreground"
    >
      {/*
        Hangi ikonun gorunecegine CSS karar veriyor. Boylece sunucuda
        hangi temanin secili oldugunu bilmemize gerek kalmiyor ve
        hydration uyusmazligi olusmuyor.
      */}
      <Moon size={16} className="dark:hidden" />
      <Sun size={16} className="hidden dark:block" />
    </button>
  );
}
