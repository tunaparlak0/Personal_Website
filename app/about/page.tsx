"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { HiDownload, HiArrowLeft } from "react-icons/hi";
import { FaGraduationCap } from "react-icons/fa";

export default function AboutPage() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <main className="min-h-screen text-white p-6 md:p-12 overflow-x-hidden font-sans relative isolate">
      
      {/* Geri Dön Butonu */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto w-full relative z-10"
      >
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors mb-8 group"
        >
          <HiArrowLeft className="group-hover:-translate-x-1 transition-transform" />
          Ana Sayfaya Dön
        </Link>
      </motion.div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="max-w-3xl mx-auto flex flex-col items-center text-center relative z-10"
      >
        {/* Profil Fotoğrafı */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-blue-500/30 shadow-2xl shadow-blue-500/20 bg-gray-800 mb-6"
        >
          <Image
            src="/profil.jpg"
            alt="Tuna Parlak"
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        {/* İsim ve Ünvan */}
        <div className="flex flex-col items-center w-full">
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-purple-500 mb-4"
          >
            Tuna Parlak
          </motion.h1>

          <motion.h2
            className="mb-12 text-xl text-gray-300 font-light bg-gray-800/60 backdrop-blur-sm px-6 py-2 rounded-full border border-gray-700/50 inline-block"
          >
            Yazılım Mühendisliği Öğrencisi
          </motion.h2>
        </div>

        
        <motion.div
          className="mt-0 w-full bg-gray-800/80 backdrop-blur-md p-10 rounded-[40px] md:rounded-[80px] border border-gray-700/50 shadow-2xl text-left space-y-6"
        >
          <p className="text-gray-300 leading-relaxed text-lg">
            Merhaba! Ben Tuna. Sakarya Üniversitesi&apos;nde Yazılım Mühendisliği (İngilizce) 3. sınıf öğrencisiyim.
          </p>

          <p className="text-gray-300 leading-relaxed text-lg">
            {/* Kendi cümlelerini buraya ekleyebilirsin */}
            Matematik ve bilgisayara olan merakım beni yazılıma yönlendirdi. Öğrenmeye açık biriyim ,problem çözmekten keyif alıyorum ve sürekli kendimi geliştirmeye çalışıyorum.

            Dersler kapsamında geliştirdiğimiz projeler dışında, kişisel olarak mobil uyguluma geliştirme ve unity ile oyun geliştirme ile ilgilenip yeni teknolojileri keşfediyorum.
          </p>

          <p className="text-gray-300 leading-relaxed text-lg">
            {/* Kendi cümlelerini buraya ekleyebilirsin */}
            Hazırlık sınıfında aldığım ingizce dersleri ,lise döneminde katııldığım ingilizce kursları ve bölüm eğitimimin ingilizce olması sayesinde iyi bir ingilizce seviyesine sahibim. Bu sayede araştırmalar yaparken ve yeni teknolojileri öğrenirken farklı kaynaklardan faydalanabiliyorum.
            Yapay zekayı da yakından takip ederek etkili ve verimli bir şekilde kullanmaya çalışıyorum. Bu sayede projelerin ve öğrenme sürecimin daha hızlı ve kaliteli bir şekilde ilerlemesini sağlıyorum. 
          </p>

          {/* Eğitim Bölümü */}
          <div className="mt-8 pt-8 border-t border-gray-700/50 flex flex-col items-center justify-center text-center gap-3">
            <div className="p-3 bg-blue-900/30 rounded-full text-blue-400">
              <FaGraduationCap size={32} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Eğitim</h3>
              <p className="text-gray-400">
                Sakarya Üniversitesi — Yazılım Mühendisliği (İngilizce)
              </p>
            </div>
          </div>
        </motion.div>

        {/* CV İndir Butonu */}
        <div className="mt-12 mb-10">
          <a
            href="/Tuna-Parlak-CV.pdf"
            download="Tuna-Parlak-CV.pdf"
            className="
              inline-flex items-center justify-center gap-3
              px-10 py-4
              bg-gradient-to-r from-blue-500 to-purple-600
              text-white rounded-full
              font-bold text-lg
              border border-blue-400/40
              shadow-xl shadow-blue-500/30
              hover:from-blue-600 hover:to-purple-700
              transition-all duration-300
              hover:-translate-y-1
            "
          >
            <HiDownload size={24} />
            CV&apos;mi İndir
          </a>
        </div>
      </motion.div>
    </main>
  );
}