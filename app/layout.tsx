import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { LocaleProvider } from "@/components/locale-provider";
import { DotPattern } from "@/components/ui/dot-pattern";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";

const inter = Inter({ subsets: ["latin", "latin-ext"] });

export const metadata: Metadata = {
  title: "Tuna Parlak | Yazılım Mühendisi",
  description:
    "Sakarya Üniversitesi Yazılım Mühendisliği öğrencisi; backend, bulut ve arayüz projeleri ile GDG on Campus tasarım çalışmaları.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // suppressHydrationWarning: tema sinifi ve dil istemcide ayarlaniyor
    <html lang="tr" suppressHydrationWarning>
      <body className={`${inter.className} flex min-h-screen flex-col antialiased`}>
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
