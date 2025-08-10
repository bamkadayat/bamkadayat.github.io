import { NextResponse } from 'next/server';
import React from "react";
import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utils";
import ContactFormEmail from "@/email/contact-form-email";

export async function POST(request: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const formData = await request.formData();
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  // simple server-side validation
  if (!validateString(senderEmail, 500)) {
    return NextResponse.json(
      { error: "Invalid sender email" },
      { status: 400 }
    );
  }
  if (!validateString(message, 5000)) {
    return NextResponse.json(
      { error: "Invalid message" },
      { status: 400 }
    );
  }

  try {
    const data = await resend.emails.send({
      from: "Contact Form <bamportfolio@resend.dev>",
      to: "bamkadayat@gmail.com",
      subject: "Message from contact form",
      reply_to: senderEmail as string,
      react: React.createElement(ContactFormEmail, {
        message: message as string,
        senderEmail: senderEmail as string,
      }),
    });

    return NextResponse.json({ data });
  } catch (error: unknown) {
    return NextResponse.json(
      { error: getErrorMessage(error) },
      { status: 500 }
    );
  }
}