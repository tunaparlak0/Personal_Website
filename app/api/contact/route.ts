import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message, captchaToken } = body;

    // 1. ADIM: CAPTCHA DOĞRULAMASI
    if (!captchaToken) {
        return NextResponse.json({ error: "Captcha bulunamadı" }, { status: 400 });
    }

    const secret = process.env.RECAPTCHA_SECRET_KEY;
    if (!secret) {
        console.error("RECAPTCHA_SECRET_KEY tanımlı değil.");
        return NextResponse.json({ error: "Sunucu tarafında reCAPTCHA yapılandırılmamış" }, { status: 500 });
    }

    // Google'a soruyoruz: "Bu token gerçek mi?"
    const captchaResponse = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({ secret, response: captchaToken }),
    });
    const captchaData = await captchaResponse.json();

    if (!captchaData.success) {
        // Örn: invalid-input-secret (secret yanlış), invalid-input-response (token bozuk/süresi geçmiş)
        console.error("reCAPTCHA doğrulaması başarısız:", captchaData["error-codes"]);
        return NextResponse.json({ error: "Captcha doğrulaması başarısız oldu" }, { status: 400 });
    }

    // 2. ADIM: MAIL GÖNDERME (Captcha başarılıysa buraya geçer)
    const data = await resend.emails.send({
      from: 'Portfolyo İletişim <onboarding@resend.dev>',
      to: 'tunaparlak00@gmail.com', // KENDİ MAİLİNİ KONTROL ET
      subject: `Yeni Mesaj: ${name}`,
      html: `
        <h3>Portfolyondan Yeni Bir Mesaj Var!</h3>
        <p><strong>Gönderen:</strong> ${name} (${email})</p>
        <p><strong>Mesaj:</strong></p>
        <p>${message}</p>
        <hr />
        <p style="font-size: 12px; color: gray;">Bu mesaj reCAPTCHA ile doğrulanmıştır.</p>
      `
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}