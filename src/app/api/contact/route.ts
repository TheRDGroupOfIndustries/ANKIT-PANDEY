import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      first_name,
      last_name,
      email,
      phone,
      company,
      service_interest,
      budget,
      message,
    }: {
      first_name: string;
      last_name: string;
      email: string;
      phone?: string;
      company?: string;
      service_interest: string;
      budget?: string;
      message: string;
    } = body;

    // Mail transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER as string,
        pass: process.env.EMAIL_PASS as string,
      },
    });

    /* ================================
       1️ EMAIL TO YOU 
    ================================= */
    await transporter.sendMail({
  from: email,
  to: process.env.EMAIL_USER,
  subject: `New Contact Form Submission — ${first_name} ${last_name}`,
  html: `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
      <h2 style="color:#2c2c2c;">New Contact Form Submission</h2>

      <table style="width:100%; border-collapse: collapse;">
        <tr>
          <td style="padding:8px; font-weight:bold;">Name</td>
          <td style="padding:8px;">${first_name} ${last_name}</td>
        </tr>
        <tr>
          <td style="padding:8px; font-weight:bold;">Email</td>
          <td style="padding:8px;">${email}</td>
        </tr>
        <tr>
          <td style="padding:8px; font-weight:bold;">Phone</td>
          <td style="padding:8px;">${phone || "N/A"}</td>
        </tr>
        <tr>
          <td style="padding:8px; font-weight:bold;">Company</td>
          <td style="padding:8px;">${company || "N/A"}</td>
        </tr>
        <tr>
          <td style="padding:8px; font-weight:bold;">Service Interest</td>
          <td style="padding:8px;">${service_interest}</td>
        </tr>
        <tr>
          <td style="padding:8px; font-weight:bold;">Budget</td>
          <td style="padding:8px;">${budget || "N/A"}</td>
        </tr>
      </table>

      <h3 style="margin-top:20px;">Message:</h3>
      <p style="background:#f7f7f7; padding:12px; border-radius:5px;">
        ${message}
      </p>

      <br/>
      <p style="font-size:14px; color:#777;">This is an automated email sent from your website contact form.</p>
    </div>
  `,
});


    /* ================================
       2️ AUTO-REPLY EMAIL TO USER
    ================================= */
   await transporter.sendMail({
  from: process.env.EMAIL_USER,
  to: email,
  subject: "Thank You! We Received Your Message ✔",
  html: `
    <div style="font-family: Arial, sans-serif; line-height: 1.7; color: #333;">
      <h2 style="color:#0d6efd;">Thank You, ${first_name}! </h2>

      <p>
        We’ve received your message and our team will get back to you within 
        <strong>24 hours</strong>.  
        We appreciate you taking the time to reach out!
      </p>

      <h3 style="margin-top:25px;"> Your Details:</h3>

      <table style="width:100%; border-collapse: collapse;">
        <tr>
          <td style="padding:8px; font-weight:bold;">Name</td>
          <td style="padding:8px;">${first_name} ${last_name}</td>
        </tr>
        <tr>
          <td style="padding:8px; font-weight:bold;">Email</td>
          <td style="padding:8px;">${email}</td>
        </tr>
        <tr>
          <td style="padding:8px; font-weight:bold;">Phone</td>
          <td style="padding:8px;">${phone || "N/A"}</td>
        </tr>
        <tr>
          <td style="padding:8px; font-weight:bold;">Service Selected</td>
          <td style="padding:8px;">${service_interest}</td>
        </tr>
        <tr>
          <td style="padding:8px; font-weight:bold;">Budget</td>
          <td style="padding:8px;">${budget || "N/A"}</td>
        </tr>
      </table>

      <h3 style="margin-top:20px;"> Your Message:</h3>
      <p style="background:#f0f7ff; padding:12px; border-left:4px solid #0d6efd; border-radius:4px;">
        ${message}
      </p>

      <br/>

      <p>
        If your message is urgent, feel free to reply to this email directly —  
        we’re always here to help!
      </p>

      <br/>
      <p style="font-weight:bold; font-size:16px;">
        Warm Regards,<br/>
        <span style="color:#0d6efd;">Ankit Pandey Team</span>
      </p>

      <p style="font-size:12px; color:#888; margin-top:20px;">
        This is an automated confirmation email.
      </p>
    </div>
  `,
});


    return NextResponse.json(
      { success: true, message: "Emails sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Nodemailer Error:", error);

    return NextResponse.json(
      { success: false, message: "Error sending emails" },
      { status: 500 }
    );
  }
}
