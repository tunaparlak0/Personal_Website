// "Image" importunu kaldırdık çünkü şimdilik kullanmıyoruz.

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-900 text-white p-4">
      {/* Profil ve Giriş Alanı */}
      <div className="text-center space-y-4 max-w-2xl">
        
        {/* v4 güncellemesi: bg-gradient yerine bg-linear kullanıyoruz */}
        <div className="mx-auto w-32 h-32 bg-linear-to-tr from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-4xl font-bold shadow-lg shadow-blue-500/50">
          TP
        </div>

        <h1 className="text-5xl font-bold tracking-tight mt-4">
          Merhaba, Ben <span className="text-blue-400">Tuna Parlak</span>
        </h1>
        
        <h2 className="text-2xl text-gray-300 font-light">
          Yazılım Mühendisliği Öğrencisi & Oyun Geliştirici
        </h2>

        <p className="text-gray-400 text-lg leading-relaxed mt-4">
          Modern web teknolojileri, büyük veri sistemleri ve oyun programlama üzerine çalışıyorum. 
          Amacım, karmaşık problemleri temiz kodla çözmek.
        </p>

        {/* Butonlar */}
        <div className="flex gap-4 justify-center mt-8">
          <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition-all shadow-lg hover:shadow-blue-500/25">
            Projelerimi Gör
          </button>
          <button className="px-6 py-3 border border-gray-600 hover:bg-gray-800 rounded-lg font-medium transition-all">
            İletişime Geç
          </button>
        </div>

      </div>
    </main>
  );
}