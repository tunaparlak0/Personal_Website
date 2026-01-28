"use client";

import Link from "next/link"; 
import { motion, Variants } from "framer-motion";

// --- İKON KÜTÜPHANELERİ ---
import { FaUnity, FaJava, FaReact, FaGithub, FaLinkedin, FaUser, FaPaperPlane } from "react-icons/fa"; 
import { SiPostgresql, SiMysql, SiApachecassandra, SiApachehadoop, SiNextdotjs, SiTypescript, SiTailwindcss } from "react-icons/si";
import { TbMathFunction, TbBrandCSharp } from "react-icons/tb";
import { HiArrowRight } from "react-icons/hi";

export default function Home() {
  
  const socialLinks = {
    github: "https://github.com/tunaparlak0",
    linkedin: "https://www.linkedin.com/in/tuna-parlak-276668351/"
  };

  const skills = [
    {
      category: "Oyun Geliştirme",
      items: [
        { name: "Unity Engine", icon: FaUnity, color: "text-white" },
        { name: "C#", icon: TbBrandCSharp, color: "text-purple-500" },
        { name: "Oyun Fiziği", icon: TbMathFunction, color: "text-yellow-400" },
      ]
    },
    {
      category: "Backend & Veri",
      items: [
        { name: "Java", icon: FaJava, color: "text-red-500" },
        { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-400" },
        { name: "MySQL", icon: SiMysql, color: "text-blue-500" },
        { name: "Cassandra", icon: SiApachecassandra, color: "text-blue-300" },
        { name: "HDFS (Big Data)", icon: SiApachehadoop, color: "text-yellow-500" },
      ]
    },
    {
      category: "Web Teknolojileri",
      items: [
        { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
        { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-400" },
        { name: "React", icon: FaReact, color: "text-cyan-300" },
        { name: "Git", icon: FaGithub, color: "text-white" },
      ]
    }
  ];

  const projects = [
    {
      title: "TechStore Veritabanı Sistemi",
      description: "Java ve JavaFX kullanılarak geliştirilen, arka planda farklı veritabanı teknolojilerinin (PostgreSQL, MySQL vb.) entegre çalıştığı teknoloji mağazası yönetim sistemi.",
      tags: ["Java", "JavaFX", "SQL"],
      link: "https://github.com/tunaparlak0/TechStoreDB"
    },
    {
      title: "Unity 2D Oyun Projesi",
      description: "C# ve Unity motoru kullanılarak geliştirilen, 2D fizik tabanlı mekaniklere ve özgün level tasarımına sahip oyun projesi.",
      tags: ["Unity 2D", "C#", "Physics"],
      link: "https://github.com/tunaparlak0/2dUnity"
    },
    {
      title: "Kişisel Portfolyo Sitesi",
      description: "Modern web teknolojileri (Next.js 15 & Tailwind v4) ile geliştirilen, tamamen duyarlı (responsive) kişisel web sitesi.",
      tags: ["Next.js", "Tailwind", "React"],
      link: "https://github.com/tunaparlak0/Personal_Website"
    }
  ];

  // Animasyon Ayarları
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <main className="min-h-screen bg-gray-900 text-white scroll-smooth overflow-x-hidden font-sans">
      
      {/* --- HERO SECTION --- */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="flex flex-col items-center justify-center min-h-[90vh] p-4 text-center"
      >
        <div className="space-y-8 max-w-4xl flex flex-col items-center">
          
          <div>
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
              Merhaba, Ben <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-purple-500">Tuna Parlak</span>
            </h1>
            <h2 className="text-2xl text-gray-300 font-light mt-4">
              Yazılım Mühendisliği Öğrencisi & Oyun Geliştirici
            </h2>
          </div>

          <div className="flex gap-6 justify-center">
            <a href={socialLinks.github} target="_blank" className="text-gray-400 hover:text-white hover:scale-125 transition-transform duration-300" aria-label="Github">
              <FaGithub size={32} />
            </a>
            <a href={socialLinks.linkedin} target="_blank" className="text-gray-400 hover:text-blue-400 hover:scale-125 transition-transform duration-300" aria-label="LinkedIn">
              <FaLinkedin size={32} />
            </a>
          </div>

          <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
            Sakarya Üniversitesi&apos;nde eğitimime devam ediyorum. Kod yazarak karmaşık problemleri çözmeyi ve sanal dünyalar yaratmayı seviyorum.
          </p>

          <div className="flex flex-wrap gap-4 justify-center mt-4">
            <Link href="/about" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition-all shadow-lg flex items-center gap-2 text-white hover:-translate-y-1 group">
              <FaUser />
              Hakkımda
              <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>

            <a href="#projects" className="px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg font-medium transition-all shadow-lg flex items-center gap-2 text-white border border-gray-700 hover:-translate-y-1">
              Projelerimi Gör 
            </a>
            
            {/* GÜNCELLEME: Link butonu artık /contact sayfasına gidiyor */}
            <Link href="/contact" className="px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg font-medium transition-all shadow-lg flex items-center gap-2 text-white border border-gray-700 hover:-translate-y-1">
              <FaPaperPlane />
              İletişim
            </Link>
          </div>
        </div>
      </motion.section>

      {/* --- SKILLS SECTION --- */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }} 
        variants={fadeInUp}
        className="py-20 bg-gray-800/50"
      >
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-400">
            Teknik Yetkinlikler
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skillGroup, index) => (
              <motion.div 
                key={index} 
                whileHover={{ y: -5 }} 
                className="bg-gray-900 p-6 rounded-xl border border-gray-700 hover:border-blue-500 transition-colors shadow-lg group"
              >
                <h3 className="text-xl font-semibold mb-6 text-white border-b border-gray-700 pb-2 group-hover:text-blue-400 transition-colors">
                  {skillGroup.category}
                </h3>
                <div className="flex flex-col gap-3">
                  {skillGroup.items.map((item, i) => (
                    <div key={i} className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-800 transition-colors">
                      <span className={`text-2xl ${item.color}`}>
                        <item.icon />
                      </span>
                      <span className="text-gray-300 font-medium">{item.name}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* --- PROJECTS SECTION --- */}
      <motion.section 
        id="projects" 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="py-20 bg-gray-900"
      >
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-400">
            Seçilmiş Projeler
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div 
                key={index} 
                whileHover={{ y: -10 }} 
                className="bg-gray-800 rounded-xl overflow-hidden shadow-xl flex flex-col border border-gray-700 hover:border-blue-500/50 transition-all"
              >
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-400 text-sm mb-4 flex-1">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="text-xs font-medium px-2 py-1 bg-blue-900/30 text-blue-300 rounded">
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <a href={project.link} target="_blank" className="flex items-center justify-center gap-2 w-full py-3 bg-gray-700 hover:bg-blue-600 rounded-lg text-white font-medium transition-colors">
                    <FaGithub />
                    GitHub&apos;da İncele
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </motion.section>
      
      {/* Footer */}
      <footer className="py-8 text-center text-gray-500 text-sm border-t border-gray-800 bg-gray-900">
        <p className="mb-2">© {new Date().getFullYear()} Tuna Parlak | Yazılım Mühendisi & Oyun Geliştirici</p>
        <p className="text-xs text-gray-600">
          Bu site Next.js 15, Tailwind CSS ve Framer Motion teknolojileri ile geliştirilmiştir.
        </p>
      </footer>

    </main>
  );
}