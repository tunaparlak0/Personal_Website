import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { LocaleProvider } from "@/components/locale-provider";
import { DotPattern } from "@/components/ui/dot-pattern";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { siteUrl } from "@/lib/content";

const inter = Inter({ subsets: ["latin", "latin-ext"] });

const title = "Tuna Parlak | Yazılım Mühendisliği Öğrencisi";
const description =
  "Sakarya Üniversitesi Yazılım Mühendisliği öğrencisi. Backend, bulut ve arayüz projeleri ile GDG on Campus Sakarya Üniversitesi tasarım çalışmaları.";

export const metadata: Metadata = {
  // Goreli yollarin (og gorseli, canonical) hangi adrese gore cozulecegi
  metadataBase: new URL(siteUrl),
  title,
  description,
  keywords: [
    "Tuna Parlak",
    "yazılım mühendisliği",
    "portfolyo",
    "Sakarya Üniversitesi",
    "backend",
    "Next.js",
    "GDG on Campus",
  ],
  authors: [{ name: "Tuna Parlak", url: siteUrl }],
  creator: "Tuna Parlak",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: siteUrl,
    siteName: "Tuna Parlak",
    title,
    description,
    images: [
      {
        url: "/profil.jpg",
        width: 500,
        height: 674,
        alt: "Tuna Parlak",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/profil.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // suppressHydrationWarning: tema sinifi ve dil istemcide ayarlaniyor
    <html lang="tr" suppressHydrationWarning>
      <body
        className={`${inter.className} flex min-h-screen flex-col antialiased`}
      >
        <ThemeProvider>
          <LocaleProvider>
            <DotPattern />
            <SiteNav />
            <div className="flex-1">{children}</div>
            <SiteFooter />
          </LocaleProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
