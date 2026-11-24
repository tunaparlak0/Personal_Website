"use client";

import { useSyncExternalStore } from "react";

const QUERIES = ["(min-width: 1280px)", "(min-width: 768px)"] as const;

function subscribe(onChange: () => void) {
  const lists = QUERIES.map((q) => window.matchMedia(q));
  lists.forEach((l) => l.addEventListener("change", onChange));
  return () => lists.forEach((l) => l.removeEventListener("change", onChange));
}

function getSnapshot() {
  if (window.matchMedia(QUERIES[0]).matches) return 3;
  if (window.matchMedia(QUERIES[1]).matches) return 2;
  return 1;
}

/**
 * Tailwind'in md/xl esiklerine karsilik gelen sutun sayisi.
 * Sunucuda 3 varsayilir; kartlar zaten gorunur hale gelmeden once
 * istemci dogru degeri belirler.
 */
export function useColumnCount() {
  return useSyncExternalStore(subscribe, getSnapshot, () => 3);
}
