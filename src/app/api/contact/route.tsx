import { NextRequest, NextResponse } from "next/server";

import { render } from "@react-email/components";
import { Email } from "@/components/emails/email"
import { transporter, smtpEmail } from "@/lib/nodemailer";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, email, message } = body;

  const emailHtml = await render(
    <Email name={name} email={email} message={message} />
  );

  const options = {
    from: smtpEmail,
    to: 'fede29833@gmail.com',
    subject: "Nuevo mensaje desde tu página web!",
    html: emailHtml,
  };

  try {
    await transporter.sendMail(options);
  } catch (error) {
    console.error("Failed to send email:", error);
  }
  return new NextResponse("OK");
}