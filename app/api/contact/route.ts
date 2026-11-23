import { NextResponse } from "next/server";
import { Resend } from "resend";
import { profile } from "@/lib/content";

const resend = new Resend(process.env.RESEND_API_KEY);

/** Kullanici metnini e-posta HTML'ine gomerken etiket olarak yorumlanmasini engeller. */
function escapeHtml(value: unknown) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message, captchaToken } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Eksik alan" }, { status: 400 });
    }

    // 1. ADIM: CAPTCHA DOGRULAMASI
    if (!captchaToken) {
      return NextResponse.json({ error: "Captcha bulunamadı" }, { status: 400 });
    }

    const secret = process.env.RECAPTCHA_SECRET_KEY;
    if (!secret) {
      console.error("RECAPTCHA_SECRET_KEY tanımlı değil.");
      return NextResponse.json(
        { error: "Sunucu tarafında reCAPTCHA yapılandırılmamış" },
        { status: 500 },
      );
    }

    const captchaResponse = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({ secret, response: captchaToken }),
      },
    );
    const captchaData = await captchaResponse.json();

    if (!captchaData.success) {
      // Orn: invalid-input-secret (secret yanlis), invalid-input-response (token bozuk)
      console.error(
        "reCAPTCHA doğrulaması başarısız:",
        captchaData["error-codes"],
      );
      return NextResponse.json(
        { error: "Captcha doğrulaması başarısız oldu" },
        { status: 400 },
      );
    }

    // 2. ADIM: MAIL GONDERME
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY tanımlı değil.");
      return NextResponse.json(
        { error: "Sunucu tarafında e-posta yapılandırılmamış" },
        { status: 500 },
      );
    }

    const { data, error } = await resend.emails.send({
      from: "Portfolyo İletişim <onboarding@resend.dev>",
      to: profile.email,
      // Gelen kutusundan dogrudan gonderene cevap verilebilsin
      replyTo: String(email),
      subject: `Portfolyo — ${name}`,
      html: `
        <h3>Portfolyondan yeni bir mesaj var</h3>
        <p><strong>Gönderen:</strong> ${escapeHtml(name)} (${escapeHtml(email)})</p>
        <p><strong>Mesaj:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
        <hr />
        <p style="font-size:12px;color:gray;">Bu mesaj reCAPTCHA ile doğrulanmıştır.</p>
      `,
    });

    // Resend hata firlatmaz, {data, error} doner. Bu kontrol olmadan
    // gonderilemeyen mesajlar da "basarili" gorunur.
    if (error) {
      console.error("Resend gönderimi başarısız:", error);
      return NextResponse.json(
        { error: "E-posta gönderilemedi" },
        { status: 502 },
      );
    }

    return NextResponse.json({ id: data?.id });
  } catch (error) {
    console.error("İletişim formu hatası:", error);
    return NextResponse.json({ error: "Beklenmeyen hata" }, { status: 500 });
  }
}
