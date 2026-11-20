"use client";

import { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

type BlurFadeProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** Yukari dogru kayma mesafesi (px) */
  offset?: number;
  /** true ise sayfa yuklenince, false ise gorus alanina girince calisir */
  immediate?: boolean;
};

/**
 * Icerigi hafif bulanikliktan netlige, asagidan yukari getirerek acar.
 * Hareketi azalt ayari acik olan ziyaretcilerde sadece opaklik degisir.
 */
export function BlurFade({
  children,
  className,
  delay = 0,
  offset = 12,
  immediate = false,
}: BlurFadeProps) {
  const reduceMotion = useReducedMotion();

  const hidden = reduceMotion
    ? { opacity: 0 }
    : { opacity: 0, y: offset, filter: "blur(6px)" };

  const visible = reduceMotion
    ? { opacity: 1 }
    : { opacity: 1, y: 0, filter: "blur(0px)" };

  const animationProps = immediate
    ? { animate: visible }
    : { whileInView: visible, viewport: { once: true, margin: "-60px" } };

  return (
    <motion.div
      className={className}
      initial={hidden}
      {...animationProps}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
