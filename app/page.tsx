import Image from "next/image";

export default function Home() {
  
  // --- GÜNCELLENMİŞ LİNKLER ---
  const socialLinks = {
    github: "https://github.com/tunaparlak0",
    linkedin: "https://www.linkedin.com/in/tuna-parlak-276668351/"
  };

  const skills = [
    {
      category: "Oyun Geliştirme",
      items: ["Unity Engine", "C#", "Oyun Fiziği", "2D/3D Matematik"]
    },
    {
      category: "Backend & Veri",
      items: ["Java", "PostgreSQL", "MySQL", "Apache Cassandra", "HDFS", "Big Data"]
    },
    {
      category: "Web Teknolojileri",
      items: ["Next.js", "TypeScript", "Tailwind CSS", "React", "Git & GitHub"]
    }
  ];

  // --- GÜNCELLENMİŞ PROJELER ---
  const projects = [
    {
      title: "TechStore Veritabanı Sistemi", // Repo ismine uygun başlık
      description: "Java ve JavaFX kullanılarak geliştirilen, arka planda farklı veritabanı teknolojilerinin (PostgreSQL, MySQL vb.) entegre çalıştığı teknoloji mağazası yönetim sistemi.",
      tags: ["Java", "JavaFX", "Database Design", "SQL"],
      link: "https://github.com/tunaparlak0/TechStoreDB" // DOĞRU LİNK
    },
    {
      title: "Unity 2D Oyun Projesi", // 2dUnity reposuna göre güncellendi
      description: "C# ve Unity motoru kullanılarak geliştirilen, 2D fizik tabanlı mekaniklere ve özgün level tasarımına sahip oyun projesi.",
      tags: ["Unity 2D", "C#", "Game Physics", "Item Interactions"],
      link: "https://github.com/tunaparlak0/2dUnity" // DOĞRU LİNK
    },
    {
      title: "Kişisel Portfolyo Sitesi",
      description: "Modern web teknolojileri (Next.js 15 & Tailwind v4) ile geliştirilen, tamamen duyarlı (responsive) kişisel web sitesi.",
      tags: ["Next.js", "Tailwind CSS", "TypeScript", "React"],
      link: "https://github.com/tunaparlak0/Personal_Website" // DOĞRU LİNK
    }
  ];

  return (
    <main className="min-h-screen bg-gray-900 text-white scroll-smooth">
      
      {/* --- HERO SECTION (GİRİŞ) --- */}
      <section className="flex flex-col items-center justify-center min-h-[90vh] p-4 text-center">
        <div className="space-y-6 max-w-2xl flex flex-col items-center">
          
          {/* --- PROFİL RESMİ --- */}
          <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-blue-500/30 shadow-xl shadow-blue-500/20 bg-gray-800">
            <Image 
              src="/profil.jpg" 
              alt="Tuna Parlak"
              fill 
              className="object-cover" 
              priority 
            />
          </div>

          <div>
            <h1 className="text-5xl font-bold tracking-tight">
              Merhaba, Ben <span className="text-blue-400">Tuna Parlak</span>
            </h1>
            
            <h2 className="text-2xl text-gray-300 font-light mt-2">
              Yazılım Mühendisliği Öğrencisi & Oyun Geliştirici
            </h2>
          </div>

          {/* --- SOSYAL MEDYA İKONLARI --- */}
          <div className="flex gap-6 justify-center">
            {/* GitHub İkonu */}
            <a href={socialLinks.github} target="_blank" aria-label="GitHub Profilim" className="text-gray-400 hover:text-white hover:scale-110 transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            </a>
            {/* LinkedIn İkonu */}
            <a href={socialLinks.linkedin} target="_blank" aria-label="LinkedIn Profilim" className="text-gray-400 hover:text-blue-400 hover:scale-110 transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
          </div>

          <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
            Sakarya Üniversitesi&apos;nde eğitimime devam ediyorum. Özellikle Unity ile oyun geliştirme 
            ve büyük veri (Big Data) sistemleri üzerine odaklanıyorum.
          </p>

          <div className="flex gap-4 justify-center mt-4">
            <a href="#projects" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition-all shadow-lg hover:shadow-blue-500/25 flex items-center gap-2">
              Projelerimi Gör 
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 animate-bounce">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
              </svg>
            </a>
            <a href={socialLinks.linkedin} target="_blank" className="px-6 py-3 border border-gray-600 hover:bg-gray-800 rounded-lg font-medium transition-all">
              İletişime Geç
            </a>
          </div>
        </div>
      </section>

      {/* --- SKILLS SECTION (YETENEKLER) --- */}
      <section className="py-20 bg-gray-800/50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-400">
            Teknik Yetkinlikler
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skillGroup, index) => (
              <div key={index} className="bg-gray-900 p-6 rounded-xl border border-gray-700 hover:border-blue-500 transition-colors shadow-lg group">
                <h3 className="text-xl font-semibold mb-4 text-white border-b border-gray-700 pb-2 group-hover:text-blue-400 transition-colors">
                  {skillGroup.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((item, i) => (
                    <span key={i} className="px-3 py-1 bg-gray-800 text-sm text-gray-300 rounded-full border border-gray-600">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- PROJECTS SECTION (PROJELER) --- */}
      <section id="projects" className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-400">
            Seçilmiş Projeler
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-gray-800 rounded-xl overflow-hidden hover:-translate-y-2 transition-transform duration-300 shadow-xl flex flex-col">
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

                  {/* Link Butonu */}
                  <a href={project.link} target="_blank" className="text-center w-full py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-white font-medium transition-colors flex items-center justify-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                    GitHub&apos;da İncele &rarr;
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
      
      {/* --- FOOTER (ALT BİLGİ) --- */}
      <footer className="py-8 text-center text-gray-500 text-sm border-t border-gray-800">
        <p>© 2026 Tuna Parlak. Next.js & Tailwind CSS ile geliştirildi.</p>
      </footer>

    </main>
  );
}