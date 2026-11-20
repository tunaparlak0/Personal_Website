import Image from "next/image";
import { Mail, MapPin, ExternalLink, Lock } from "lucide-react";
// lucide-react marka ikonlarini kaldirdi; bunlar react-icons'tan geliyor
import { FaGithub, FaLinkedin } from "react-icons/fa";

import { SiteNav } from "@/components/site-nav";
import { BlurFade } from "@/components/ui/blur-fade";
import { Marquee } from "@/components/ui/marquee";
import { DesignGallery } from "@/components/design-gallery";
import { ContactForm } from "@/components/contact-form";
import { CvDownload } from "@/components/cv-download";
import {
  profile,
  skillGroups,
  experience,
  education,
  projects,
  designs,
} from "@/lib/content";

function Section({
  id,
  title,
  children,
  delay = 0,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <section id={id} className="scroll-mt-20">
      <BlurFade delay={delay}>
        <h2 className="mb-5 text-xs font-semibold tracking-[0.14em] text-muted-fg uppercase">
          {title}
        </h2>
      </BlurFade>
      {children}
    </section>
  );
}

export default function Home() {
  const allSkills = skillGroups.flatMap((group) => group.items);

  return (
    <>
      <SiteNav />

      <main className="mx-auto max-w-2xl space-y-16 px-6 py-14">
        {/* HERO */}
        <section>
          <BlurFade immediate>
            <div className="flex items-start justify-between gap-6">
              <div className="min-w-0">
                <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  Merhaba, ben{" "}
                  {/* Emojinin tek basina alt satira dusmemesi icin isimle birlikte tutuyoruz */}
                  <span className="whitespace-nowrap">{profile.name} 👋</span>
                </h1>
                <p className="mt-2 text-sm text-muted-fg">{profile.title}</p>
              </div>

              <div className="relative size-24 shrink-0 overflow-hidden rounded-full border border-border-token sm:size-28">
                <Image
                  src="/profil.jpg"
                  alt={profile.name}
                  fill
                  sizes="112px"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </BlurFade>

          <BlurFade delay={0.1} immediate>
            <p className="mt-5 text-[15px] leading-relaxed text-muted-fg">
              {profile.bio}
            </p>
          </BlurFade>

          <BlurFade delay={0.18} immediate>
            <div className="mt-6 flex flex-wrap items-center gap-2">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 rounded-lg bg-accent-token px-3.5 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90"
              >
                <Mail size={15} />
                İletişime geç
              </a>
              <CvDownload />
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="inline-flex size-9 items-center justify-center rounded-lg border border-border-token bg-card text-muted-fg transition-colors hover:text-foreground"
              >
                <FaGithub size={16} />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="inline-flex size-9 items-center justify-center rounded-lg border border-border-token bg-card text-muted-fg transition-colors hover:text-foreground"
              >
                <FaLinkedin size={16} />
              </a>
            </div>
          </BlurFade>
        </section>

        {/* HAKKIMDA */}
        <Section id="hakkimda" title="Hakkımda">
          <BlurFade delay={0.05}>
            <div className="space-y-4 text-[15px] leading-relaxed text-muted-fg">
              <p>
                Matematiğe ve bilgisayar bilimine duyduğum ilgi beni yazılım
                geliştirmeye yönlendirdi. Problem çözmekten keyif alıyorum,
                öğrenmeye açığım ve kendimi sürekli geliştirmeye çalışıyorum.
              </p>
              <p>
                Ders kapsamındaki projelerin dışında mobil uygulama ve Unity ile
                oyun geliştirmeyle ilgileniyor, yeni teknolojileri keşfediyorum.
                Hazırlık sınıfında aldığım dersler ve bölümümün İngilizce olması
                sayesinde araştırma yaparken farklı kaynaklardan
                faydalanabiliyorum.
              </p>
              <p className="flex items-center gap-2 text-sm">
                <MapPin size={14} className="shrink-0" />
                {profile.location}
              </p>
            </div>
          </BlurFade>
        </Section>

        {/* DENEYİM */}
        <Section id="deneyim" title="Deneyim">
          <div className="space-y-5">
            {experience.map((item, i) => (
              <BlurFade key={item.org} delay={0.05 + i * 0.06}>
                <div className="rounded-xl border border-border-token bg-card p-4">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                    <h3 className="text-sm font-semibold">{item.role}</h3>
                    <span className="text-xs text-muted-fg">
                      {item.period}
                    </span>
                  </div>
                  <p className="mt-0.5 text-sm text-accent-token">{item.org}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-fg">
                    {item.description}
                  </p>
                </div>
              </BlurFade>
            ))}
          </div>
        </Section>

        {/* EĞİTİM */}
        <Section id="egitim" title="Eğitim">
          <div className="space-y-3">
            {education.map((item, i) => (
              <BlurFade key={item.school} delay={0.05 + i * 0.06}>
                <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1 border-b border-border-token pb-3">
                  <div>
                    <h3 className="text-sm font-semibold">{item.school}</h3>
                    <p className="mt-0.5 text-sm text-muted-fg">
                      {item.program}
                    </p>
                  </div>
                  <span className="text-xs text-muted-fg">{item.period}</span>
                </div>
              </BlurFade>
            ))}
          </div>
        </Section>

        {/* TEKNOLOJİLER */}
        <Section id="teknolojiler" title="Teknolojiler">
          <BlurFade delay={0.05}>
            <div className="space-y-2.5">
              <Marquee duration={40}>
                {allSkills.slice(0, Math.ceil(allSkills.length / 2)).map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-border-token bg-card px-3 py-1.5 text-xs whitespace-nowrap text-muted-fg"
                  >
                    {skill}
                  </span>
                ))}
              </Marquee>
              <Marquee duration={40} reverse>
                {allSkills.slice(Math.ceil(allSkills.length / 2)).map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-border-token bg-card px-3 py-1.5 text-xs whitespace-nowrap text-muted-fg"
                  >
                    {skill}
                  </span>
                ))}
              </Marquee>
            </div>
          </BlurFade>
        </Section>

        {/* PROJELER */}
        <Section id="projeler" title="Projeler">
          <div className="grid gap-4 sm:grid-cols-2">
            {projects.map((project, i) => (
              <BlurFade key={project.title} delay={0.05 + (i % 2) * 0.06}>
                <div className="flex h-full flex-col rounded-xl border border-border-token bg-card p-4 transition-colors hover:border-accent-token/50">
                  <h3 className="text-sm font-semibold">{project.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-fg">
                    {project.description}
                  </p>

                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded bg-accent-soft px-1.5 py-0.5 text-[11px] text-accent-token"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-4">
                    {project.link ? (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-medium text-foreground hover:text-accent-token transition-colors"
                      >
                        <FaGithub size={13} />
                        Kaynak kodu
                        <ExternalLink size={11} />
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 text-xs text-muted-fg">
                        <Lock size={12} />
                        Kurumsal proje — kaynak kodu özel
                      </span>
                    )}
                  </div>
                </div>
              </BlurFade>
            ))}
          </div>
        </Section>

        {/* TASARIM */}
        <Section id="tasarim" title="Tasarım">
          <BlurFade delay={0.05}>
            <p className="mb-5 text-[15px] leading-relaxed text-muted-fg">
              GDG on Campus Sakarya Üniversitesi topluluğunda tasarım ve sosyal
              medya ekibindeyim. Aşağıdaki etkinlik afişleri, sosyal medya
              görselleri ve basılı materyaller bu kapsamda hazırladığım
              çalışmalardan bir seçki. Büyütmek için üzerlerine tıklayın.
            </p>
          </BlurFade>
          <BlurFade delay={0.1}>
            <DesignGallery designs={designs} />
          </BlurFade>
        </Section>

        {/* İLETİŞİM */}
        <Section id="iletisim" title="İletişim">
          <BlurFade delay={0.05}>
            <p className="mb-5 text-[15px] leading-relaxed text-muted-fg">
              İş/staj, proje teklifleri veya geri dönüşler için aşağıdaki formu
              doldurabilir ya da doğrudan{" "}
              <a
                href={`mailto:${profile.email}`}
                className="text-accent-token underline underline-offset-4"
              >
                {profile.email}
              </a>{" "}
              adresine yazabilirsiniz.
            </p>
          </BlurFade>
          <BlurFade delay={0.1}>
            <ContactForm />
          </BlurFade>
        </Section>
      </main>

      <footer className="border-t border-border-token">
        <div className="mx-auto max-w-2xl px-6 py-6 text-xs text-muted-fg">
          © {new Date().getFullYear()} {profile.name}
        </div>
      </footer>
    </>
  );
}
