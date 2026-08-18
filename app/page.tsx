"use client";

import Link from "next/link"; 
import { motion, Variants } from "framer-motion";

// --- İKON KÜTÜPHANELERİ ---
import { FaUnity, FaJava, FaReact, FaGithub, FaLinkedin, FaUser, FaPaperPlane, FaDocker } from "react-icons/fa"; 
import { SiPostgresql, SiMysql, SiApachecassandra, SiApachehadoop, SiNextdotjs, SiTypescript, SiTailwindcss, SiFlutter, SiDart, SiDotnet, SiPrisma, SiFastify, SiJavascript } from "react-icons/si";import { TbMathFunction, TbBrandCSharp } from "react-icons/tb";
import { HiArrowRight } from "react-icons/hi";

export default function Home() {
  
  const socialLinks = {
    github: "https://github.com/tunaparlak0",
    linkedin: "https://www.linkedin.com/in/tuna-parlak-276668351/"
  };

  const skills = [
    {
      category: "Backend & DevOps",
      items: [
        { name: "Java & Spring Boot", icon: FaJava, color: "text-red-500" },
        { name: ".NET Core", icon: SiDotnet, color: "text-purple-500" },
        { name: "Node.js & Fastify", icon: SiFastify, color: "text-white" },
        { name: "Prisma ORM", icon: SiPrisma, color: "text-teal-400" },
        { name: "Docker", icon: FaDocker, color: "text-blue-500" },
        { name: "Git", icon: FaGithub, color: "text-white" },
      ]
    },
    {
      category: "Veri Mühendisliği (Big Data)",
      items: [
        { name: "Apache Kafka", icon: SiApachehadoop, color: "text-white" },
        { name: "Apache Spark", icon: SiApachehadoop, color: "text-orange-400" },
        { name: "Cassandra (NoSQL)", icon: SiApachecassandra, color: "text-blue-300" },
        { name: "HDFS", icon: SiApachehadoop, color: "text-yellow-500" },
        { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-400" },
        { name: "MySQL", icon: SiMysql, color: "text-blue-600" },
      ]
    },
    {
      category: "Oyun & Mobil Geliştirme",
      items: [
        { name: "Unity Engine", icon: FaUnity, color: "text-white" },
        { name: "C#", icon: TbBrandCSharp, color: "text-purple-400" },
        { name: "Flutter", icon: SiFlutter, color: "text-cyan-400" },
        { name: "Dart", icon: SiDart, color: "text-blue-400" },
        { name: "2D Oyun Fiziği", icon: TbMathFunction, color: "text-yellow-400" },
      ]
    },
    {
      category: "Web Teknolojileri",
      items: [
        { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" }, // JavaScript eklendi
        { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
        { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
        { name: "React", icon: FaReact, color: "text-cyan-300" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-400" },
      ]
    }
  ];

  const projects = [
    {
      title: "Full-Stack Su ve Fatura Yönetim Sistemi",
      description: "Fastify ve Prisma ORM ile geliştirilen backend servisi ile PostgreSQL veritabanı yönetimi sağlayan; React tabanlı arayüze sahip tam kapsamlı su yönetim sistemi.",
      tags: ["Fastify", "React", "Prisma", "PostgreSQL", "JavaScript","JWT"],
      link: "https://github.com/tunaparlak0/su_sistemi"
    },
    {
      title: "Cloud Native DevOps Pipeline",
      description: "Spring Boot uygulamasının Dockerize edilerek AWS EC2 ortamına taşındığı, Nginx Reverse Proxy ile yapılandırılmış tam kapsamlı dağıtım mimarisi.",
      tags: ["AWS", "Docker", "Nginx", "Spring Boot", "MySQL"],
      link: "https://github.com/tunaparlak0/devops_project_2"
    },
    {
      title: "Social Gaming App (Work in Progress)",
      description: "Flutter kullanılarak geliştirilen; içerisinde Vampir-Köylü ve Tabu gibi popüler oyunları barındıran, karmaşık oylama mekanizmalarına ve rol dağıtım sistemlerine sahip mobil oyun platformu.",
      tags: ["Flutter", "Dart", "Mobile Game", "State Management"],
      link: "https://github.com/tunaparlak0/oyun_kutusu"
    },
    {
      title: "TechStore Veritabanı Sistemi",
      description: "Veritabanı ve Yönetim Sistemleri dersi kapsamında geliştirilen, JavaFX ile görselleştirilmiş, SQL tabanlı bir ürün yönetim sistemi projesi.",
      tags: ["Java", "JavaFX", "SQL"],
      link: "https://github.com/tunaparlak0/TechStoreDB"
    },
    {
      title: "Unity 2D Oyun Projesi",
      description: "C# ve Unity motoru kullanılarak geliştirilen, 2D fizik tabanlı mekanikleri, objeler arası etkileşimleri ve oyun içi arayüzleri test ettiğim tamamlanmamış bir proje.",
      tags: ["Unity 2D", "C#", "Physics", "OOP"],
      link: "https://github.com/tunaparlak0/2dUnity"
    },
    {
      title: "Kişisel Portfolyo Sitesi",
      description: "Next.js 15 ve Tailwind v4 ile geliştirilen, tamamen duyarlı kişisel web sitesi.",
      tags: ["Next.js", "Tailwind", "React"],
      link: "https://github.com/tunaparlak0/Personal_Website"
    }
  ];

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <main className="min-h-screen text-white scroll-smooth overflow-x-hidden font-sans relative isolate">
      
      {/* --- HERO SECTION --- */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="flex flex-col items-center justify-center min-h-[90vh] p-4 text-center relative z-10"
      >
        <div className="space-y-8 max-w-4xl flex flex-col items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
              Merhaba, Ben <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-purple-500">Tuna Parlak</span>
            </h1>
            <h2 className="text-2xl text-gray-300 font-light mt-4">
              Sakarya Üniversitesi Yazılım Mühendisliği 4. Sınıf Öğrencisi
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

          <div className="flex flex-wrap gap-4 justify-center mt-4">
            <Link href="/about" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition-all shadow-lg flex items-center gap-2 text-white hover:-translate-y-1 group">
              <FaUser />
              Hakkımda
              <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>

            <a href="#projects" className="px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg font-medium transition-all shadow-lg flex items-center gap-2 text-white border border-gray-700 hover:-translate-y-1">
              Projelerimi Gör 
            </a>
            
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
        className="py-20 bg-gray-800/50 relative z-10"
      >
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-400">
            Üzerinde Çalıştığım Teknolojiler
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skillGroup, index) => (
              <motion.div 
                key={index} 
                whileHover={{ y: -5 }} 
                className="bg-gray-900/80 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-blue-500 transition-colors shadow-lg group"
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
        className="py-20 bg-gray-900/10 relative z-10"
      >
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-400">
            Seçilmiş Projeler
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {projects.map((project, index) => (
              <motion.div 
                key={index} 
                whileHover={{ y: -10 }} 
                className="bg-gray-800/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl flex flex-col border border-gray-700 hover:border-blue-500/50 transition-all"
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
      
      <footer className="py-8 text-center text-gray-500 text-sm border-t border-gray-800 bg-gray-900/50 relative z-10">
        <p className="mb-2">© {new Date().getFullYear()} Tuna Parlak | Yazılım Mühendisi</p>
        <p className="text-xs text-gray-600">
          Bu site Next.js 15, Tailwind CSS ve Framer Motion teknolojileri ile geliştirilmiştir.
        </p>
      </footer>

    </main>
  );
}