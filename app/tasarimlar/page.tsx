"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { HiArrowLeft, HiX } from "react-icons/hi";
import { FaPalette } from "react-icons/fa";

type Design = {
  src: string;
  title: string;
  description: string;
  tags: string[];
  width: number;
  height: number;
};

export default function TasarimlarPage() {
  const designs: Design[] = [
    {
      src: "/tasarimlar/gdg-yaka-karti.png",
      title: "GDG on Campus SAÜ — Yaka Kartı",
      description:
        "Topluluk ekibi için tasarladığım, etkinliklerde kullanılan yaka kartı; isim ve görev alanı her ekip üyesine göre değiştiriliyor.",
      tags: ["Yaka Kartı", "Basılı", "Kurumsal Kimlik"],
      width: 945,
      height: 1417,
    },
    {
      src: "/tasarimlar/info-session.webp",
      title: "Info Session — Etkinlik Duyurusu",
      description:
        "Topluluğun tanıtım buluşması için hazırladığım yatay etkinlik görseli.",
      tags: ["Etkinlik", "Banner"],
      width: 2000,
      height: 1000,
    },
    {
      src: "/tasarimlar/kulup-tanitim-haftasi.webp",
      title: "Kulüp Tanıtım Haftası — Afiş",
      description:
        "Gazete kolaj estetiğiyle hazırladığım, stant duyurusuna yönelik tanıtım afişi.",
      tags: ["Afiş", "Kolaj"],
      width: 1080,
      height: 1350,
    },
    {
      src: "/tasarimlar/gdg-tanitim.webp",
      title: "GDG SAÜ — Tanıtım Roll-up",
      description:
        "Topluluğun ne yaptığını anlatan, QR kodlu dikey tanıtım materyali.",
      tags: ["Roll-up", "Basılı"],
      width: 818,
      height: 1922,
    },
    {
      src: "/tasarimlar/speaking-club.webp",
      title: "Speaking Club — ESN Sakarya İş Birliği",
      description:
        "İki topluluğun ortak düzenlediği İngilizce konuşma kulübü için etkinlik görseli.",
      tags: ["Etkinlik", "İş Birliği"],
      width: 1080,
      height: 1350,
    },
    {
      src: "/tasarimlar/tea-talk.webp",
      title: "Tea Talk — Etkinlik Duyurusu",
      description:
        "Konuşmacı fotoğraflarının yerleştirilebildiği, tekrar kullanılabilir duyuru şablonu.",
      tags: ["Etkinlik", "Şablon"],
      width: 1080,
      height: 1350,
    },
    {
      src: "/tasarimlar/uiux-workshop-konusmaci.png",
      title: "UI/UX Workshop — Konuşmacı Duyurusu",
      description:
        "Workshop serisinin koyu temalı konuşmacı duyurusu; sponsor alanı dahil.",
      tags: ["Etkinlik", "Koyu Tema"],
      width: 1080,
      height: 1350,
    },
    {
      src: "/tasarimlar/uiux-workshop-afis.webp",
      title: "UI/UX Workshop — Etkinlik Afişi",
      description:
        "Aynı etkinliğin açık temalı afiş versiyonu; konuk, tarih ve yer alanları doldurulabilir.",
      tags: ["Afiş", "Açık Tema"],
      width: 1414,
      height: 2000,
    },
  ];

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
    <main className="min-h-screen text-white p-6 md:p-12 overflow-x-hidden font-sans relative isolate">
      {/* Geri Dön Butonu */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto w-full relative z-10"
      >
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors mb-8 group"
        >
          <HiArrowLeft className="group-hover:-translate-x-1 transition-transform" />
          Ana Sayfaya Dön
        </Link>
      </motion.div>

      {/* Başlık */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto text-center relative z-10 mb-14"
      >
        <div className="inline-flex items-center justify-center p-3 bg-blue-900/30 rounded-full text-blue-400 mb-5">
          <FaPalette size={28} />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-purple-500 mb-4">
          Tasarımlarım
        </h1>
        <p className="text-gray-300 text-lg leading-relaxed">
          Google Developer Groups on Campus Sakarya Üniversitesi topluluğunda
          tasarım ve sosyal medya ekibinde yer alıyorum. Aşağıdaki etkinlik
          afişleri, sosyal medya görselleri ve basılı materyaller bu kapsamda
          hazırladığım çalışmalardan bir seçki.
        </p>
      </motion.div>

      {/* Galeri — degisken en/boy oranlari icin masonry */}
      <div className="max-w-6xl mx-auto relative z-10 columns-1 sm:columns-2 lg:columns-3 gap-6 [column-fill:_balance]">
        {designs.map((design, index) => (
          <motion.button
            key={design.src}
            type="button"
            onClick={() => setSelected(design)}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
            className="group mb-6 block w-full break-inside-avoid text-left bg-gray-800/80 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 hover:border-blue-500/50 shadow-xl transition-colors cursor-zoom-in"
          >
            <div className="relative overflow-hidden bg-gray-900">
              <Image
                src={design.src}
                alt={design.title}
                width={design.width}
                height={design.height}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <div className="p-5">
              <h2 className="text-base font-bold text-white mb-1">
                {design.title}
              </h2>
              <p className="text-gray-400 text-sm mb-3">{design.description}</p>
              <div className="flex flex-wrap gap-2">
                {design.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium px-2 py-1 bg-blue-900/30 text-blue-300 rounded"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.button>
        ))}
      </div>

      {/* Buyuteç — secilen tasarimi tam boyutta goster */}
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
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 md:p-8 cursor-zoom-out"
          >
            <button
              type="button"
              onClick={close}
              aria-label="Kapat"
              className="absolute top-4 right-4 md:top-6 md:right-6 p-3 rounded-full bg-gray-800/90 hover:bg-gray-700 text-white border border-gray-600 transition-colors cursor-pointer"
            >
              <HiX size={22} />
            </button>

            <motion.div
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-5xl w-full max-h-full flex flex-col items-center cursor-default"
            >
              <Image
                src={selected.src}
                alt={selected.title}
                width={selected.width}
                height={selected.height}
                sizes="100vw"
                className="max-h-[78vh] w-auto h-auto max-w-full object-contain rounded-lg shadow-2xl"
              />
              <p className="mt-4 text-center text-gray-300 text-sm md:text-base">
                {selected.title}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
