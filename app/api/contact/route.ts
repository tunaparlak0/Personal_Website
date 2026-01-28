// src/app/api/contact/route.ts
import { NextResponse } from 'next/server';
import { Resend } from 'resend';


const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Mail gönderme işlemi
    const data = await resend.emails.send({
      from: 'Portfolyo İletişim <onboarding@resend.dev>', 
      to: 'tunaparlak001@gmail.com', 
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