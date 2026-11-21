export type Locale = "tr" | "en";

export const locales: Locale[] = ["tr", "en"];

/* ---------------------------------------------------------------- */
/* Dilden bagimsiz veriler                                           */
/* ---------------------------------------------------------------- */

export const siteUrl = "https://tunaparlak.site";

export const profile = {
  name: "Tuna Parlak",
  location: "Sakarya / Adana, Türkiye",
  email: "tunaparlak001@gmail.com",
  github: "https://github.com/tunaparlak0",
  linkedin: "https://www.linkedin.com/in/tuna-parlak-276668351/",
  instagram: "https://www.instagram.com/tunaparlak_/",
};

/** logo: public/tech altindaki dosya adi; yoksa bas harfler gosterilir. */
export type Tech = { name: string; logo?: string };

export const techStack: Tech[] = [
  { name: "Java", logo: "openjdk" },
  { name: "Spring Boot", logo: "springboot" },
  { name: ".NET Core", logo: "dotnet" },
  { name: "C#" }, // simpleicons'ta C# logosu yok
  { name: "Python", logo: "python" },
  { name: "TypeScript", logo: "typescript" },
  { name: "JavaScript", logo: "javascript" },
  { name: "HTML", logo: "html5" },
  { name: "CSS", logo: "css" },
  { name: "React", logo: "react" },
  { name: "Next.js", logo: "nextdotjs" },
  { name: "Tailwind CSS", logo: "tailwindcss" },
  { name: "Vite", logo: "vite" },
  { name: "Node.js", logo: "nodedotjs" },
  { name: "Fastify", logo: "fastify" },
  { name: "Prisma", logo: "prisma" },
  { name: "PostgreSQL", logo: "postgresql" },
  { name: "MySQL", logo: "mysql" },
  { name: "Redis", logo: "redis" },
  { name: "Cassandra", logo: "apachecassandra" },
  { name: "Apache Kafka", logo: "apachekafka" },
  { name: "Apache Spark", logo: "apachespark" },
  { name: "Hadoop", logo: "apachehadoop" },
  { name: "Docker", logo: "docker" },
  { name: "AWS EC2" },
  { name: "Nginx", logo: "nginx" },
  { name: "Linux", logo: "linux" },
  { name: "GitHub", logo: "github" },
  { name: "Postman", logo: "postman" },
  { name: "Flutter", logo: "flutter" },
  { name: "Dart", logo: "dart" },
  { name: "Unity", logo: "unity" },
];

export type SkillCategory = { id: string; items: Tech[] };

/** Hakkimda sayfasindaki tablo icin gruplanmis liste. */
export const skillCategories: SkillCategory[] = [
  {
    id: "backend",
    items: [
      { name: "Java & Spring Boot", logo: "springboot" },
      { name: ".NET Core", logo: "dotnet" },
      { name: "Node.js & Fastify", logo: "fastify" },
      { name: "Prisma ORM", logo: "prisma" },
      { name: "Docker", logo: "docker" },
      { name: "Nginx", logo: "nginx" },
      { name: "AWS EC2" },
      { name: "GitHub", logo: "github" },
    ],
  },
  {
    id: "data",
    items: [
      { name: "Apache Kafka", logo: "apachekafka" },
      { name: "Apache Spark", logo: "apachespark" },
      { name: "Hadoop HDFS", logo: "apachehadoop" },
      { name: "Cassandra", logo: "apachecassandra" },
      { name: "Redis", logo: "redis" },
      { name: "PostgreSQL", logo: "postgresql" },
      { name: "MySQL", logo: "mysql" },
    ],
  },
  {
    id: "game",
    items: [
      { name: "Unity Engine", logo: "unity" },
      { name: "C#" },
      { name: "Flutter", logo: "flutter" },
      { name: "Dart", logo: "dart" },
      { name: "Python", logo: "python" },
    ],
  },
  {
    id: "web",
    items: [
      { name: "JavaScript", logo: "javascript" },
      { name: "TypeScript", logo: "typescript" },
      { name: "Next.js", logo: "nextdotjs" },
      { name: "React", logo: "react" },
      { name: "Tailwind CSS", logo: "tailwindcss" },
      { name: "Vite", logo: "vite" },
    ],
  },
];

export type Design = {
  src: string;
  width: number;
  height: number;
};

/** Gorsel dosyalari; basliklar ve aciklamalar dile gore ayri tutuluyor. */
export const designAssets: Design[] = [
  { src: "/tasarimlar/gdg-yaka-karti.png", width: 945, height: 1417 },
  { src: "/tasarimlar/info-session.webp", width: 2000, height: 1000 },
  { src: "/tasarimlar/kulup-tanitim-haftasi.webp", width: 1080, height: 1350 },
  { src: "/tasarimlar/gdg-tanitim.webp", width: 818, height: 1922 },
  { src: "/tasarimlar/speaking-club.webp", width: 1080, height: 1350 },
  { src: "/tasarimlar/tea-talk.webp", width: 1080, height: 1350 },
  { src: "/tasarimlar/uiux-workshop-konusmaci.png", width: 1080, height: 1350 },
  { src: "/tasarimlar/uiux-workshop-afis.webp", width: 1414, height: 2000 },
];

export const projectLinks = [
  "https://github.com/tunaparlak0/su_sistemi",
  "https://github.com/tunaparlak0/devops_project_2",
  "",
  "https://github.com/tunaparlak0/oyun_kutusu",
  "https://github.com/tunaparlak0/2dUnity",
  "https://github.com/tunaparlak0/Personal_Website",
];

export const projectTags = [
  ["Fastify", "React", "Prisma", "PostgreSQL", "JWT"],
  ["AWS", "Docker", "Nginx", "Spring Boot", "MySQL"],
  ["React 19", "TypeScript", "Vite", "PostgreSQL", "RBAC"],
  ["Flutter", "Dart", "State Management"],
  ["Unity 2D", "C#", "OOP"],
  ["Next.js", "Tailwind", "React"],
];

/* ---------------------------------------------------------------- */
/* Dile bagli metinler                                               */
/* ---------------------------------------------------------------- */

const tr = {
  nav: {
    home: "Ana Sayfa",
    about: "Hakkımda",
    experience: "Deneyim",
    projects: "Projeler",
    designs: "Tasarım",
    contact: "İletişim",
  },
  common: {
    backHome: "Ana sayfaya dön",
    downloadCv: "CV indir",
    whichLanguage: "Hangi dilde?",
    turkish: "Türkçe",
    english: "English",
    viewAll: "Hepsini gör",
    sourceCode: "Kaynak kodu",
    privateSource: "Kurumsal proje — kaynak kodu özel",
    enlargeHint: "Büyütmek için tasarımın üzerine tıklayın.",
  },
  home: {
    greeting: "Merhaba, ben",
    role: "Yazılım Mühendisliği Öğrencisi · Sosyal Medya ve Tasarımcı",
    tagline:
      "Backend ve bulut tarafında projeler geliştiriyorum. Aynı zamanda GDG on Campus Sakarya Üniversitesi'nde tasarım ve sosyal medya ekibindeyim.",
    hireMe: "İletişime geç",
    techTitle: "Teknoloji Yığını",
    techSubtitle: "Projelerimde kullandığım araçlar ve teknolojiler.",
    designTitle: "Tasarımlarım",
    designSubtitle:
      "GDG on Campus Sakarya Üniversitesi için Canva ile hazırladığım etkinlik afişleri ve sosyal medya görselleri.",
    cards: {
      about: {
        title: "Hakkımda",
        text: "Kim olduğum, nasıl çalıştığım ve eğitim geçmişim.",
      },
      experience: {
        title: "Deneyim",
        text: "Staj ve topluluk deneyimlerim.",
      },
      projects: {
        title: "Projeler",
        text: "Geliştirdiğim backend, bulut, web ve oyun projeleri.",
      },
      designs: {
        title: "Tasarım",
        text: "Etkinlik afişleri, sosyal medya görselleri ve basılı materyaller.",
      },
    },
  },
  about: {
    title: "Hakkımda",
    lead: "Sakarya Üniversitesi Yazılım Mühendisliği (İngilizce) 4. sınıf öğrencisiyim.",
    paragraphs: [
      "Matematiğe ve bilgisayar bilimine duyduğum ilgi beni yazılım geliştirmeye yönlendirdi. Problem çözmekten keyif alıyorum, öğrenmeye açığım ve kendimi sürekli geliştirmeye çalışıyorum.",
      "Ders kapsamındaki projelerin dışında mobil uygulama ve Unity ile oyun geliştirmeyle ilgileniyor, yeni teknolojileri keşfediyorum. Backend ve bulut tarafında Spring Boot, Docker ve AWS ile; veri tarafında Kafka, Spark ve PostgreSQL ile çalışıyorum.",
      "Hazırlık sınıfında aldığım dersler, lise döneminde katıldığım kurslar ve bölümümün İngilizce olması sayesinde iyi bir İngilizce seviyem var. Bu sayede araştırma yaparken ve yeni teknolojiler öğrenirken farklı kaynaklardan faydalanabiliyorum.",
      "Yapay zekâyı da yakından takip ederek etkili ve verimli şekilde kullanmaya çalışıyorum; bu, hem projelerimin hem de öğrenme sürecimin daha hızlı ilerlemesini sağlıyor.",
    ],
    educationTitle: "Eğitim",
    languagesTitle: "Diller",
    techTitle: "Üzerinde Çalıştığım Teknolojiler",
    techCategories: {
      backend: "Backend & DevOps",
      data: "Veri Mühendisliği (Big Data)",
      game: "Oyun & Mobil Geliştirme",
      web: "Web Teknolojileri",
    },
    languages: [
      { name: "Türkçe", level: "Ana dil" },
      { name: "İngilizce", level: "B2 (Orta-İleri Seviye)" },
    ],
    education: [
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
    ],
  },
  experience: {
    title: "Deneyim",
    subtitle: "Staj ve topluluk deneyimlerim.",
    items: [
      {
        role: "Tasarım ve Sosyal Medya Ekibi",
        org: "GDG on Campus Sakarya Üniversitesi",
        period: "Eylül 2026 — Devam ediyor",
        description:
          "Topluluğun etkinlik afişlerini, sosyal medya görsellerini ve basılı materyallerini tasarlıyorum. Etkinlik duyurularının görsel dilini ve paylaşım düzenini yürütüyorum.",
      },
      {
        role: "Yazılım Geliştirme Stajyeri",
        org: "Kıvanç",
        period: "Ağustos 2026",
        description:
          "Tedarikçi Sürdürülebilirlik Değerlendirme Sistemi'nin arayüzünü geliştirdim. Rol–modül yetki matrisine dayalı RBAC altyapısı kurarak sayfa, buton ve API ucu bazında yetki kontrolü ekledim; yetkisiz erişim ve IDOR açıklarını kapattım.",
      },
      {
        role: "Zorunlu Staj",
        org: "SASKİ — Sakarya Su ve Kanalizasyon İdaresi",
        period: "Temmuz 2026",
        description:
          "Zorunlu yaz stajım kapsamında Full-Stack Su ve Fatura Yönetim Sistemi'ni geliştirdim: Fastify ve Prisma ORM ile kurduğum backend servisi üzerinden PostgreSQL veritabanını yöneten, React tabanlı arayüze ve JWT tabanlı kimlik doğrulamaya sahip tam kapsamlı bir sistem.",
      },
    ],
  },
  projects: {
    title: "Projeler",
    subtitle:
      "Ders, staj ve kişisel merak kapsamında geliştirdiğim çalışmalar.",
    items: [
      {
        title: "Full-Stack Su ve Fatura Yönetim Sistemi",
        description:
          "SASKİ'deki zorunlu stajım kapsamında geliştirdiğim; Fastify ve Prisma ORM ile kurulan backend servisi üzerinden PostgreSQL veritabanı yönetimi sağlayan, React tabanlı arayüze sahip tam kapsamlı su/fatura yönetim sistemi.",
      },
      {
        title: "Cloud Native DevOps Pipeline",
        description:
          "Spring Boot uygulamasının Dockerize edilerek AWS EC2 ortamına taşındığı, Nginx reverse proxy ile yapılandırılmış tam kapsamlı dağıtım mimarisi. Docker Hub üzerinden imaj yönetimiyle uçtan uca CI/CD simülasyonu.",
      },
      {
        title: "Tedarikçi Değerlendirme Sistemi",
        description:
          "Kıvanç bünyesinde ekiple birlikte yürüttüğümüz staj projesi. Arayüz geliştirme ve yetkilendirme altyapısı benim sorumluluğumdaydı; rol–modül yetki matrisine dayalı RBAC kurarak yetkisiz erişim ve IDOR açıklarını kapattım.",
      },
      {
        title: "Social Gaming App",
        description:
          "Flutter ile geliştirdiğim; Vampir-Köylü ve Tabu gibi oyunları barındıran, karmaşık oylama mekanizmalarına ve rol dağıtım sistemine sahip mobil oyun platformu.",
      },
      {
        title: "Unity 2D Oyun Projesi",
        description:
          "2D fizik tabanlı mekanikleri, objeler arası etkileşimleri ve oyun içi arayüzleri test ettiğim Unity projesi.",
      },
      {
        title: "Kişisel Portfolyo Sitesi",
        description:
          "Next.js ve Tailwind ile geliştirdiğim, açık/koyu tema ve Türkçe/İngilizce dil desteği olan bu web sitesi.",
      },
    ],
  },
  designs: {
    title: "Tasarım",
    subtitle:
      "GDG on Campus Sakarya Üniversitesi topluluğunda tasarım ve sosyal medya ekibindeyim. Aşağıdakiler, Canva kullanarak hazırladığım çalışmalardan bir seçki.",
    items: [
      {
        title: "GDG on Campus SAÜ — Yaka Kartı",
        description:
          "Topluluk ekibi için tasarladığım, etkinliklerde kullanılan yaka kartı; isim ve görev alanı her ekip üyesine göre değiştiriliyor.",
        tags: ["Yaka Kartı", "Basılı", "Kurumsal Kimlik"],
      },
      {
        title: "Info Session — Etkinlik Duyurusu",
        description:
          "Topluluğun tanıtım buluşması için hazırladığım yatay etkinlik görseli.",
        tags: ["Etkinlik", "Banner"],
      },
      {
        title: "Kulüp Tanıtım Haftası — Afiş",
        description:
          "Gazete kolaj estetiğiyle hazırladığım, stant duyurusuna yönelik tanıtım afişi.",
        tags: ["Afiş", "Kolaj"],
      },
      {
        title: "GDG SAÜ — Tanıtım Roll-up",
        description:
          "Topluluğun ne yaptığını anlatan, QR kodlu dikey tanıtım materyali.",
        tags: ["Roll-up", "Basılı"],
      },
      {
        title: "Speaking Club — ESN Sakarya İş Birliği",
        description:
          "İki topluluğun ortak düzenlediği İngilizce konuşma kulübü için etkinlik görseli.",
        tags: ["Etkinlik", "İş Birliği"],
      },
      {
        title: "Tea Talk — Etkinlik Duyurusu",
        description:
          "Konuşmacı fotoğraflarının yerleştirilebildiği, tekrar kullanılabilir duyuru şablonu.",
        tags: ["Etkinlik", "Şablon"],
      },
      {
        title: "UI/UX Workshop — Konuşmacı Duyurusu",
        description:
          "Workshop serisinin koyu temalı konuşmacı duyurusu; sponsor alanı dahil.",
        tags: ["Etkinlik", "Koyu Tema"],
      },
      {
        title: "UI/UX Workshop — Etkinlik Afişi",
        description:
          "Aynı etkinliğin açık temalı afiş versiyonu; konuk, tarih ve yer alanları doldurulabilir.",
        tags: ["Afiş", "Açık Tema"],
      },
    ],
  },
  contact: {
    title: "İletişim",
    subtitle:
      "İş/staj, proje teklifleri veya geri dönüşler için formu doldurabilir ya da doğrudan e-posta yazabilirsiniz.",
    name: "İsim",
    namePlaceholder: "Adınız Soyadınız",
    email: "E-posta",
    emailPlaceholder: "ornek@mail.com",
    message: "Mesajınız",
    messagePlaceholder: "Mesajınızı buraya yazın...",
    send: "Gönder",
    sending: "Gönderiliyor...",
    sent: "Mesaj gönderildi",
    errorButton: "Hata, tekrar dene",
    errorText:
      "Mesaj gönderilemedi. Doğrulamayı tekrarlayıp yeniden deneyebilir ya da doğrudan e-posta yazabilirsiniz.",
    captchaMissing:
      "reCAPTCHA yapılandırılmamış: NEXT_PUBLIC_RECAPTCHA_SITE_KEY tanımlı değil.",
  },
};

const en: typeof tr = {
  nav: {
    home: "Home",
    about: "About",
    experience: "Experience",
    projects: "Projects",
    designs: "Design",
    contact: "Contact",
  },
  common: {
    backHome: "Back to home",
    downloadCv: "Download CV",
    whichLanguage: "Which language?",
    turkish: "Türkçe",
    english: "English",
    viewAll: "View all",
    sourceCode: "Source code",
    privateSource: "Corporate project — source code is private",
    enlargeHint: "Click a design to enlarge it.",
  },
  home: {
    greeting: "Hi, I'm",
    role: "Software Engineering Student · Social Media & Designer",
    tagline:
      "I build backend and cloud projects, and I am part of the design and social media team at GDG on Campus Sakarya University.",
    hireMe: "Get in touch",
    techTitle: "Technology Stack",
    techSubtitle: "Tools and technologies I use in my projects.",
    designTitle: "My Designs",
    designSubtitle:
      "Event posters and social media visuals I created with Canva for GDG on Campus Sakarya University.",
    cards: {
      about: {
        title: "About",
        text: "Who I am, how I work and my educational background.",
      },
      experience: {
        title: "Experience",
        text: "My internships and community work.",
      },
      projects: {
        title: "Projects",
        text: "Backend, cloud, web and game projects I have built.",
      },
      designs: {
        title: "Design",
        text: "Event posters, social media visuals and print materials.",
      },
    },
  },
  about: {
    title: "About",
    lead: "I am a 4th-year Software Engineering (English) student at Sakarya University.",
    paragraphs: [
      "My interest in mathematics and computer science led me toward software development. I enjoy solving problems, I am open to learning and I keep improving myself.",
      "Beyond coursework, I am interested in mobile app and Unity game development, and I like exploring new technologies. On the backend and cloud side I work with Spring Boot, Docker and AWS; on the data side with Kafka, Spark and PostgreSQL.",
      "Thanks to my preparatory year, the English courses I took in high school and the fact that my program is taught in English, I have a solid command of English. This lets me use a wide range of sources while researching and learning new technologies.",
      "I also follow AI closely and try to use it effectively, which helps both my projects and my learning move faster.",
    ],
    educationTitle: "Education",
    languagesTitle: "Languages",
    techTitle: "Technologies I Work With",
    techCategories: {
      backend: "Backend & DevOps",
      data: "Data Engineering (Big Data)",
      game: "Game & Mobile Development",
      web: "Web Technologies",
    },
    languages: [
      { name: "Turkish", level: "Native" },
      { name: "English", level: "B2 (Upper-Intermediate)" },
    ],
    education: [
      {
        school: "Sakarya University",
        program: "Software Engineering (English), BSc",
        period: "2022 — Present",
      },
      {
        school: "Sungurbey Anatolian High School",
        program: "High School Diploma — Adana",
        period: "2017 — 2021",
      },
    ],
  },
  experience: {
    title: "Experience",
    subtitle: "My internships and community work.",
    items: [
      {
        role: "Design & Social Media Team",
        org: "GDG on Campus Sakarya University",
        period: "September 2026 — Present",
        description:
          "I design the community's event posters, social media visuals and print materials, and I run the visual language and publishing schedule of our announcements.",
      },
      {
        role: "Software Engineering Intern",
        org: "Kıvanç",
        period: "August 2026",
        description:
          "I developed the interface of the Supplier Sustainability Assessment System. I built a database-driven RBAC infrastructure based on a role–module permission matrix and closed unauthorized access and IDOR vulnerabilities through permission checks at the page, button and API endpoint level.",
      },
      {
        role: "Mandatory Internship",
        org: "SASKİ — Sakarya Water and Sewerage Administration",
        period: "July 2026",
        description:
          "During my mandatory summer internship I built the Full-Stack Water & Billing Management System: a complete system with a React-based interface and JWT authentication, managing a PostgreSQL database through a backend service I built with Fastify and Prisma ORM.",
      },
    ],
  },
  projects: {
    title: "Projects",
    subtitle:
      "Work built through coursework, internships and personal curiosity.",
    items: [
      {
        title: "Full-Stack Water & Billing Management System",
        description:
          "Built during my mandatory internship at SASKİ: a comprehensive water/billing management system with a React-based interface, managing a PostgreSQL database through a backend service built with Fastify and Prisma ORM.",
      },
      {
        title: "Cloud Native DevOps Pipeline",
        description:
          "A Dockerized Spring Boot application deployed to AWS EC2, with Nginx configured as a reverse proxy. End-to-end CI/CD simulated through image management on Docker Hub.",
      },
      {
        title: "Supplier Assessment System",
        description:
          "An internship project carried out with a team at Kıvanç. Interface development and the authorization layer were my responsibility; I built RBAC on a role–module permission matrix and closed unauthorized access and IDOR vulnerabilities.",
      },
      {
        title: "Social Gaming App",
        description:
          "A mobile gaming platform built with Flutter, featuring games such as Werewolf and Taboo with complex voting mechanisms and a role-assignment system.",
      },
      {
        title: "Unity 2D Game Project",
        description:
          "A Unity project where I tested 2D physics-based mechanics, object interactions and in-game interfaces.",
      },
      {
        title: "Personal Portfolio Website",
        description:
          "This website, built with Next.js and Tailwind, with light/dark themes and Turkish/English language support.",
      },
    ],
  },
  designs: {
    title: "Design",
    subtitle:
      "I am part of the design and social media team at GDG on Campus Sakarya University. Below is a selection of the work I created there using Canva.",
    items: [
      {
        title: "GDG on Campus SAU — Name Badge",
        description:
          "A name badge used at events, designed for the community team; the name and role fields change per team member.",
        tags: ["Name Badge", "Print", "Brand Identity"],
      },
      {
        title: "Info Session — Event Announcement",
        description:
          "A landscape event visual created for the community's introduction meetup.",
        tags: ["Event", "Banner"],
      },
      {
        title: "Club Promotion Week — Poster",
        description:
          "A promotional poster for our stand, designed with a newspaper collage aesthetic.",
        tags: ["Poster", "Collage"],
      },
      {
        title: "GDG SAU — Roll-up Banner",
        description:
          "A vertical print material with a QR code, explaining what the community does.",
        tags: ["Roll-up", "Print"],
      },
      {
        title: "Speaking Club — ESN Sakarya Collaboration",
        description:
          "An event visual for the English speaking club co-hosted by two communities.",
        tags: ["Event", "Collaboration"],
      },
      {
        title: "Tea Talk — Event Announcement",
        description:
          "A reusable announcement template with slots for speaker photographs.",
        tags: ["Event", "Template"],
      },
      {
        title: "UI/UX Workshop — Speaker Announcement",
        description:
          "The dark-themed speaker announcement of the workshop series, including a sponsor area.",
        tags: ["Event", "Dark Theme"],
      },
      {
        title: "UI/UX Workshop — Event Poster",
        description:
          "The light-themed poster version of the same event; guest, date and venue fields can be filled in.",
        tags: ["Poster", "Light Theme"],
      },
    ],
  },
  contact: {
    title: "Contact",
    subtitle:
      "For job/internship opportunities, project proposals or feedback, use the form below or email me directly.",
    name: "Name",
    namePlaceholder: "Your full name",
    email: "Email",
    emailPlaceholder: "example@mail.com",
    message: "Your message",
    messagePlaceholder: "Write your message here...",
    send: "Send",
    sending: "Sending...",
    sent: "Message sent",
    errorButton: "Failed, try again",
    errorText:
      "The message could not be sent. Please complete the verification and try again, or email me directly.",
    captchaMissing:
      "reCAPTCHA is not configured: NEXT_PUBLIC_RECAPTCHA_SITE_KEY is missing.",
  },
};

export const dictionaries = { tr, en };

export type Dictionary = typeof tr;
