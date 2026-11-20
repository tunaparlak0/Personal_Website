export const profile = {
  name: "Tuna Parlak",
  title: "Yazılım Mühendisliği Öğrencisi · Sosyal Medya ve Tasarımcı",
  bio: "Sakarya Üniversitesi Yazılım Mühendisliği (İngilizce) 4. sınıf öğrencisiyim. Backend ve bulut tarafında projeler geliştiriyor, GDG on Campus Sakarya Üniversitesi'nde tasarım ve sosyal medya ekibinde yer alıyorum.",
  location: "Sakarya / Adana, Türkiye",
  email: "tunaparlak001@gmail.com",
  github: "https://github.com/tunaparlak0",
  linkedin: "https://www.linkedin.com/in/tuna-parlak-276668351/",
};

export const skillGroups = [
  {
    category: "Backend & DevOps",
    items: [
      "Java & Spring Boot",
      ".NET Core",
      "Node.js & Fastify",
      "Prisma ORM",
      "Docker",
      "AWS EC2",
      "Nginx",
      "Git",
    ],
  },
  {
    category: "Veri Mühendisliği",
    items: [
      "Apache Kafka",
      "Apache Spark",
      "Hadoop HDFS",
      "Cassandra",
      "Redis",
      "PostgreSQL",
      "MySQL",
    ],
  },
  {
    category: "Web & Mobil",
    items: [
      "TypeScript",
      "JavaScript",
      "Next.js",
      "React",
      "Tailwind CSS",
      "Flutter",
      "Dart",
    ],
  },
  {
    category: "Oyun & Tasarım",
    items: ["Unity Engine", "C#", "2D Oyun Fiziği", "UI/UX", "Figma"],
  },
];

export type Experience = {
  role: string;
  org: string;
  period: string;
  description: string;
};

export const experience: Experience[] = [
  {
    role: "Yazılım Geliştirme Stajyeri",
    org: "Kıvanç",
    period: "2026",
    description:
      "Tedarikçi Sürdürülebilirlik Değerlendirme Sistemi'nin arayüzünü geliştirdim. Rol–modül yetki matrisine dayalı RBAC altyapısı kurarak sayfa, buton ve API ucu bazında yetki kontrolü ekledim; yetkisiz erişim ve IDOR açıklarını kapattım.",
  },
  {
    role: "Tasarım ve Sosyal Medya Ekibi",
    org: "GDG on Campus Sakarya Üniversitesi",
    period: "2025 — Devam ediyor",
    description:
      "Topluluğun etkinlik afişlerini, sosyal medya görsellerini ve basılı materyallerini tasarlıyorum. Etkinlik duyurularının görsel dilini ve paylaşım düzenini yürütüyorum.",
  },
];

export const education = [
  {
    school: "Sakarya Üniversitesi",
    program: "Yazılım Mühendisliği (İngilizce), Lisans",
    period: "2022 — Devam ediyor",
  },
  {
    school: "Sungurbey Anadolu Lisesi",
    program: "Lise Diploması — Adana",
    period: "2017 — 2021",
  },
];

export type Project = {
  title: string;
  description: string;
  tags: string[];
  link: string;
};

export const projects: Project[] = [
  {
    title: "Full-Stack Su ve Fatura Yönetim Sistemi",
    description:
      "Fastify ve Prisma ORM ile geliştirilen backend servisi üzerinden PostgreSQL veritabanı yönetimi sağlayan, React tabanlı arayüze sahip tam kapsamlı su/fatura yönetim sistemi.",
    tags: ["Fastify", "React", "Prisma", "PostgreSQL", "JWT"],
    link: "https://github.com/tunaparlak0/su_sistemi",
  },
  {
    title: "Cloud Native DevOps Pipeline",
    description:
      "Spring Boot uygulamasının Dockerize edilerek AWS EC2 ortamına taşındığı, Nginx reverse proxy ile yapılandırılmış tam kapsamlı dağıtım mimarisi.",
    tags: ["AWS", "Docker", "Nginx", "Spring Boot", "MySQL"],
    link: "https://github.com/tunaparlak0/devops_project_2",
  },
  {
    title: "Tedarikçi Değerlendirme Sistemi",
    description:
      "Kıvanç bünyesinde ekiple birlikte yürüttüğümüz staj projesi. Arayüz geliştirme ve yetkilendirme altyapısı benim sorumluluğumdaydı; rol–modül yetki matrisine dayalı RBAC kurarak yetkisiz erişim ve IDOR açıklarını kapattım.",
    tags: ["React 19", "TypeScript", "Vite", "PostgreSQL", "RBAC"],
    link: "",
  },
  {
    title: "Social Gaming App",
    description:
      "Flutter ile geliştirdiğim; Vampir-Köylü ve Tabu gibi oyunları barındıran, karmaşık oylama mekanizmalarına ve rol dağıtım sistemine sahip mobil oyun platformu.",
    tags: ["Flutter", "Dart", "State Management"],
    link: "https://github.com/tunaparlak0/oyun_kutusu",
  },
  {
    title: "Unity 2D Oyun Projesi",
    description:
      "2D fizik tabanlı mekanikleri, objeler arası etkileşimleri ve oyun içi arayüzleri test ettiğim Unity projesi.",
    tags: ["Unity 2D", "C#", "OOP"],
    link: "https://github.com/tunaparlak0/2dUnity",
  },
  {
    title: "Kişisel Portfolyo Sitesi",
    description:
      "Next.js ve Tailwind ile geliştirdiğim, açık/koyu tema destekli bu web sitesi.",
    tags: ["Next.js", "Tailwind", "React"],
    link: "https://github.com/tunaparlak0/Personal_Website",
  },
];

export type Design = {
  src: string;
  title: string;
  description: string;
  tags: string[];
  width: number;
  height: number;
};

export const designs: Design[] = [
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
