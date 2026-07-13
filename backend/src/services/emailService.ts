import nodemailer from "nodemailer";
import { env } from "../config/env";

const transporter =
  env.mail.user && env.mail.pass
    ? nodemailer.createTransport({
        host: env.mail.host,
        port: 587,
        secure: false,
        auth: { user: env.mail.user, pass: env.mail.pass },
      })
    : null;

export async function sendContactEmail(data: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) {
  if (!transporter) {
    console.warn("Email not configured, skipping send");
    return;
  }

  await transporter.sendMail({
    from: env.mail.user,
    to: env.mail.user,
    replyTo: data.email,
    subject: `[Portfolio Contact] ${data.subject}`,
    html: `
      <h2>New Contact Message</h2>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Subject:</strong> ${data.subject}</p>
      <p><strong>Message:</strong></p>
      <p>${data.message.replace(/\n/g, "<br>")}</p>
    `,
  });
}
