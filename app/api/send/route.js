import { EmailTemplate } from "@/components/email-template";
import { NextResponse } from "next/server";
import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_API_KEY);
export async function POST(request) {
  try {
    const { email, invoiceUrl } = await request.json();
    const data = await resend.emails.send({
      from: "Desishub <info@desishub.com>",
      to: [email],
      subject: "New Invoice from Invoicer",
      react: EmailTemplate({ invoiceUrl }),
    });
    // console.log(data);
    return NextResponse.json(data);
  } catch (error) {
    // console.log(error);
    return NextResponse.json(
      { error },
      {
        status: 500,
      }
    );
  }
}
