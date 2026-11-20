"use client";

import { useEffect } from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Ilk boyama bittikten sonra gecis efektlerini acariz; boylece
    // sayfa acilirken tema renkleri arasinda gecis animasyonu gorunmez.
    const id = window.setTimeout(
      () => document.documentElement.classList.add("theme-ready"),
      0,
    );
    return () => window.clearTimeout(id);
  }, []);

  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange={false}
    >
      {children}
    </NextThemesProvider>
  );
}
