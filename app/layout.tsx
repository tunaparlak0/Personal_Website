import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// 👇 ParticlesBackground'u buraya import ediyoruz
import ParticlesBackground from "../components/ParticlesBackground";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tuna Parlak | Yazılım Mühendisi",
  description: "Tuna Parlak kişisel portfolyo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* 👇 1. ARKA PLAN RENGİNİ VE YAZI RENGİNİ BURADA TANIMLIYORUZ */}
      <body className={`${inter.className} bg-gray-900 text-white`}>
        
        {/* 👇 2. EFEKTİ TÜM SAYFALARIN ARKASINA SABİTLEYECEK BİLEŞEN */}
        <ParticlesBackground />
        
        {/* 👇 3. İÇERİKLERİN EFEKTİN ÜSTÜNDE DURMASI İÇİN relative VE z-10 EKLİYORUZ */}
        <div className="relative z-10">
            {children}
        </div>
      </body>
    </html>
  );
}