import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { DotPattern } from "@/components/ui/dot-pattern";

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
    // suppressHydrationWarning: next-themes tema sinifini html'e istemcide ekler
    <html lang="tr" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider>
          <DotPattern />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
