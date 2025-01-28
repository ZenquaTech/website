import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(`${process.env.NEXT_PUBLIC_RESEND_ID}`);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json(); // Parse the request body
    const { content, filename, formData } = body;

    const { data } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: ["manager.zenqua@gmail.com"],
      subject: `${
        formData.fullname
      } Resume - ${new Date().toLocaleDateString()}`,
      html: `<div>
      <p>Full Name: ${formData.fullname}</p>
      <p>Email: ${formData.email}</p>
      <p>Phone: ${formData.phone}</p>
      <p>Cover Letter: ${formData.coverletter}</p>
      <p>Tech Stack: ${formData.techstack}</p>
      <p>Experience: ${formData.experience}</p>
      </div>`,
      attachments: [
        {
          content,
          filename,
        },
      ],
    });
    return NextResponse.json({ data: data?.id }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export const runtime = "edge"; // Optional: Use edge runtime for better performance
