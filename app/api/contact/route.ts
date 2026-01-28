// src/app/api/contact/route.ts
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Buraya Resend'den aldığın "re_" ile başlayan kodu yapıştır:
const resend = new Resend('re_Axu3kHRr_nMkjET6DwDhV6JfbTpV2erj7'); 

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Mail gönderme işlemi
    const data = await resend.emails.send({
      from: 'Portfolyo İletişim <onboarding@resend.dev>', // Bunu değiştirme (Test için bu zorunlu)
      to: 'tunaparlak001@gmail.com', // BURAYA KENDİ MAİL ADRESİNİ YAZ
      subject: `Yeni Mesaj: ${name}`,
      html: `
        <h3>Portfolyondan Yeni Bir Mesaj Var!</h3>
        <p><strong>Gönderen:</strong> ${name} (${email})</p>
        <p><strong>Mesaj:</strong></p>
        <p>${message}</p>
      `
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}