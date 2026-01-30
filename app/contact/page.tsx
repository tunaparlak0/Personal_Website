"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { HiArrowLeft } from "react-icons/hi";
import { FaPaperPlane, FaEnvelope, FaMapMarkerAlt, FaCheck, FaTimes } from "react-icons/fa";
import ReCAPTCHA from "react-google-recaptcha";

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    
    // Eğer Captcha işaretlenmemişse uyarı ver ve işlemi durdur
    if (!captchaToken) {
        alert("Lütfen robot olmadığınızı doğrulayın.");
        return;
    }

    setFormStatus("loading");

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
      captchaToken: captchaToken, // Token'ı backend'e gönderiyoruz
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setFormStatus("success");
        (e.target as HTMLFormElement).reset();
        setCaptchaToken(null);
        recaptchaRef.current?.reset(); // Captcha'yı sıfırla
      } else {
        setFormStatus("error");
        setCaptchaToken(null);
        recaptchaRef.current?.reset();
      }
    } catch {
      setFormStatus("error");
      setCaptchaToken(null);
      recaptchaRef.current?.reset();
    }
  }

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <main className="min-h-screen bg-gray-900 text-white p-6 md:p-12 overflow-x-hidden font-sans">
      
      {/* Geri Dön Butonu */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto w-full"
      >
        <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors mb-8 group">
            <HiArrowLeft className="group-hover:-translate-x-1 transition-transform"/> Ana Sayfaya Dön
        </Link>
      </motion.div>

      <motion.div 
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-center text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-purple-500 mb-12">
            İletişime Geç
        </h1>

        <div className="bg-gray-800 p-8 md:p-12 rounded-3xl border border-gray-700 shadow-2xl">
            <div className="grid md:grid-cols-2 gap-12">
                
                {/* Sol Taraf: Bilgiler */}
                <div className="space-y-8">
                    <div>
                        <h3 className="text-2xl font-semibold text-white mb-4">Bir projeniz mi var?</h3>
                        <p className="text-gray-400 leading-relaxed text-lg">
                            Oyun geliştirme, backend sistemleri veya iş birliği fırsatları için benimle iletişime geçebilirsiniz. Mesajlarınıza en kısa sürede dönüş yapacağım.
                        </p>
                    </div>
                    
                    <div className="space-y-6 pt-4">
                        <div className="flex items-center gap-4 text-gray-300">
                            <div className="p-3 bg-blue-900/30 rounded-full text-blue-400">
                                <FaMapMarkerAlt size={20} />
                            </div>
                            <span className="text-lg">Sakarya, Türkiye</span>
                        </div>
                        <div className="flex items-center gap-4 text-gray-300">
                            <div className="p-3 bg-blue-900/30 rounded-full text-blue-400">
                                <FaEnvelope size={20} />
                            </div>
                            <span className="text-lg">iletisim@tunaparlak.com</span>
                        </div>
                    </div>
                </div>

                {/* Sağ Taraf: Form */}
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">İsim</label>
                        <input 
                          type="text" name="name" id="name" required 
                          disabled={formStatus === 'loading' || formStatus === 'success'}
                          className="w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors disabled:opacity-50" 
                          placeholder="Adınız Soyadınız" 
                        />
                    </div>
                    
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">E-posta</label>
                        <input 
                          type="email" name="email" id="email" required 
                          disabled={formStatus === 'loading' || formStatus === 'success'}
                          className="w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors disabled:opacity-50" 
                          placeholder="ornek@mail.com" 
                        />
                    </div>

                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Mesajınız</label>
                        <textarea 
                          name="message" id="message" rows={5} required 
                          disabled={formStatus === 'loading' || formStatus === 'success'}
                          className="w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors resize-none disabled:opacity-50" 
                          placeholder="Mesajınızı buraya yazın..."
                        ></textarea>
                    </div>

                    {/* RECAPTCHA ALANI */}
                    <div className="flex justify-center md:justify-start">
                        <ReCAPTCHA
                            ref={recaptchaRef}
                            sitekey="6LeKyFosAAAAANBUSTMDAtiYxKzbDObVDdD3m7Uy"
                            onChange={(token) => setCaptchaToken(token)}
                            theme="dark"
                        />
                    </div>

                    <button 
                      type="submit" 
                      disabled={formStatus === 'loading' || formStatus === 'success' || !captchaToken}
                      className={`w-full font-bold text-lg py-4 rounded-xl transition-all shadow-lg flex items-center justify-center gap-2 ${
                        formStatus === 'success' 
                          ? 'bg-green-600 hover:bg-green-700 text-white cursor-default' 
                          : formStatus === 'error'
                          ? 'bg-red-600 hover:bg-red-700 text-white'
                          : !captchaToken 
                            ? 'bg-gray-600 cursor-not-allowed opacity-50' // Captcha yoksa sönük
                            : 'bg-blue-600 hover:bg-blue-700 text-white hover:shadow-blue-500/25 hover:-translate-y-1'
                      }`}
                    >
                        {formStatus === 'loading' && <span className="animate-spin mr-2">⏳</span>}
                        {formStatus === 'idle' && <><FaPaperPlane /> Gönder</>}
                        {formStatus === 'loading' && "Gönderiliyor..."}
                        {formStatus === 'success' && <><FaCheck /> Mesaj Gönderildi!</>}
                        {formStatus === 'error' && <><FaTimes /> Hata, Tekrar Dene</>}
                    </button>
                </form>

            </div>
        </div>
      </motion.div>
    </main>
  );
}