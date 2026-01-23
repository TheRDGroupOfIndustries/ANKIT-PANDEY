// import { NextRequest, NextResponse } from "next/server";
// import nodemailer from "nodemailer";

// export async function POST(req: NextRequest) {
//   try {
//     const formData = await req.formData();
//     const file = formData.get("file") as File;
//     const courseTitle = formData.get("courseTitle") as string;

//     if (!file) {
//       return NextResponse.json({ error: "File missing" }, { status: 400 });
//     }

//     // Convert File → Buffer
//     const arrayBuffer = await file.arrayBuffer();
//     const buffer = Buffer.from(arrayBuffer);

//     // Nodemailer transporter
//     const transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         user: process.env.EMAIL_USER,       // <-- Gmail/SMTP email
//         pass: process.env.EMAIL_PASS,  // <-- App password
//       },
//     });

//     // Email format
//     await transporter.sendMail({
//       from: process.env.EMAIL_USER,
//       to: process.env.EMAIL_USER, // Admin receives the email
//       subject: `Payment Proof Submitted - ${courseTitle}`,
//       text: `A new payment proof was uploaded for the course: ${courseTitle}`,
//       attachments: [
//         {
//           filename: file.name,
//           content: buffer,
//         },
//       ],
//     });

//     return NextResponse.json({ success: true });
//   } catch (error) {
//     console.error("Error sending email:", error);
//     return NextResponse.json(
//       { error: "Email sending failed" },
//       { status: 500 }
//     );
//   }
// }


import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as File;
    const courseTitle = formData.get("courseTitle") as string;
    const username = formData.get("username") as string;
    const email = formData.get("email") as string;

    if (!file) {
      return NextResponse.json({ error: "File missing" }, { status: 400 });
    }

    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // ADMIN EMAIL
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `New Payment Proof - ${courseTitle}`,
      html: `
        <h2>New Payment Received</h2>
        <p><strong>Name:</strong> ${username}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Course:</strong> ${courseTitle}</p>
      `,
      attachments: [
        {
          filename: file.name,
          content: buffer,
        },
      ],
    });

    // USER EMAIL
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: `We Received Your Payment Proof - ${courseTitle}`,
      html: `
        <h2>Hello ${username},</h2>
        <p>Your payment proof for <strong>${courseTitle}</strong> has been received.</p>
        <p>We will verify it shortly and contact you soon.</p>
        <br/>
        <p>Thank you!</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Email sending failed" },
      { status: 500 }
    );
  }
}
