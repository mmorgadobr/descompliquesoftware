import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: true, // true para porta 465
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function POST(req: Request) {
  const { company, name, email, whatsapp, message } = await req.json();

  try {
    await transporter.sendMail({
      from: `"${name}" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_TO,
      subject: `Nova mensagem de ${name} - ${company}`,
      html: `
        <!DOCTYPE html>
        <html>
        <body style="margin:0; padding:0; background:#f4f6f8; font-family: Arial, sans-serif;">
        <div style="max-width:600px; margin:0 auto; background:#ffffff; border-radius:8px; overflow:hidden; border:1px solid #dde3ea; margin-top:24px;">
            
            <div style="width:100%; overflow:hidden; line-height:0;">
                 <img src="https://descompliquesoftware.com.br/images/banner_email.png" alt="Descomplique Software" style="width:100%; display:block;" />
            </div>

            <div style="padding:32px;">
            <p style="font-size:13px; color:#6b7280; margin:0 0 4px;">NOVO CONTATO VIA SITE</p>
            <h2 style="font-size:20px; color:#1a5fa8; margin:0 0 24px; font-weight:600;">Mensagem recebida</h2>

            <table style="width:100%; border-collapse:collapse; font-size:14px;">
                <tr style="border-bottom:1px solid #f0f0f0;">
                <td style="padding:12px 0; color:#6b7280; width:120px; vertical-align:top;">Empresa</td>
                <td style="padding:12px 0; color:#111827; font-weight:500;">${company}</td>
                </tr>
                <tr style="border-bottom:1px solid #f0f0f0;">
                <td style="padding:12px 0; color:#6b7280; vertical-align:top;">Nome</td>
                <td style="padding:12px 0; color:#111827; font-weight:500;">${name}</td>
                </tr>
                <tr style="border-bottom:1px solid #f0f0f0;">
                <td style="padding:12px 0; color:#6b7280; vertical-align:top;">E-mail</td>
                <td style="padding:12px 0; color:#1a5fa8;">${email}</td>
                </tr>
                <tr style="border-bottom:1px solid #f0f0f0;">
                <td style="padding:12px 0; color:#6b7280; vertical-align:top;">WhatsApp</td>
                <td style="padding:12px 0; color:#111827;">${whatsapp}</td>
                </tr>
                <tr>
                <td style="padding:12px 0; color:#6b7280; vertical-align:top;">Mensagem</td>
                <td style="padding:12px 0; color:#111827; line-height:1.6;">${message}</td>
                </tr>
            </table>

            <div style="margin-top:28px; padding:16px 20px; background:#f0f6ff; border-left:3px solid #1a5fa8; border-radius:4px;">
                <p style="margin:0; font-size:13px; color:#374151;">Este lead chegou pelo formulário de contato do site. Responda em até <strong>24 horas úteis</strong>.</p>
            </div>
            </div>

            <div style="background:#f9fafb; border-top:1px solid #e5e7eb; padding:20px 32px; text-align:center;">
            <p style="margin:0 0 4px; font-size:12px; color:#9ca3af;">Descomplique Software</p>
            <p style="margin:0; font-size:12px; color:#9ca3af;">contato@descompliquesoftware.com.br &nbsp;|&nbsp; descompliquesoftware.com.br</p>
            </div>

        </div>
        </body>
        </html>
        `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Erro ao enviar e-mail" }, { status: 500 });
  }
}