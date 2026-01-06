import { NextRequest, NextResponse } from "next/server";

// Option 1: Using Resend (recommended)
// npm install resend
import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_API_KEY);

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();
    const { name, email, subject, message } = body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // ============================================
    // OPTION 1: Send email using Resend
    // ============================================
    // Uncomment below after installing resend and adding RESEND_API_KEY to .env.local
    
    const currentDate = new Date().toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });

    const { data, error } = await resend.emails.send({
      // ✏️ CUSTOMIZE THESE:
      from: "Portfolio Contact <onboarding@resend.dev>", // Use your verified domain: "Name <you@yourdomain.com>"
      to: process.env.CONTACT_EMAIL!, // Your email address
      replyTo: email, // Reply goes to the person who contacted you
      subject: `🔔 New Message: ${subject}`, // Email subject line
      
      // ✏️ CUSTOMIZE EMAIL TEMPLATE:
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
          </head>
          <body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f4f5;">
            <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
              <!-- Header -->
              <div style="background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%); padding: 30px; border-radius: 12px 12px 0 0; text-align: center;">
                <h1 style="color: #ffffff; margin: 0; font-size: 24px;">📬 New Contact Message</h1>
                <p style="color: #bfdbfe; margin: 10px 0 0 0; font-size: 14px;">${currentDate}</p>
              </div>
              
              <!-- Content -->
              <div style="background-color: #ffffff; padding: 30px; border-radius: 0 0 12px 12px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
                <!-- Sender Info -->
                <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin-bottom: 20px; border-left: 4px solid #2563eb;">
                  <h2 style="margin: 0 0 15px 0; color: #1e293b; font-size: 16px;">👤 Contact Details</h2>
                  <table style="width: 100%; border-collapse: collapse;">
                    <tr>
                      <td style="padding: 8px 0; color: #64748b; width: 80px;">Name:</td>
                      <td style="padding: 8px 0; color: #1e293b; font-weight: 600;">${name}</td>
                    </tr>
                    <tr>
                      <td style="padding: 8px 0; color: #64748b;">Email:</td>
                      <td style="padding: 8px 0;">
                        <a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding: 8px 0; color: #64748b;">Subject:</td>
                      <td style="padding: 8px 0; color: #1e293b; font-weight: 600;">${subject}</td>
                    </tr>
                  </table>
                </div>
                
                <!-- Message -->
                <div style="margin-bottom: 20px;">
                  <h2 style="margin: 0 0 15px 0; color: #1e293b; font-size: 16px;">💬 Message</h2>
                  <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; color: #334155; line-height: 1.6;">
                    ${message.replace(/\n/g, "<br>")}
                  </div>
                </div>
                
                <!-- Reply Button -->
                <div style="text-align: center; margin-top: 30px;">
                  <a href="mailto:${email}?subject=Re: ${subject}" 
                     style="display: inline-block; background-color: #2563eb; color: #ffffff; padding: 12px 30px; border-radius: 8px; text-decoration: none; font-weight: 600;">
                    ↩️ Reply to ${name}
                  </a>
                </div>
              </div>
              
              <!-- Footer -->
              <div style="text-align: center; padding: 20px; color: #64748b; font-size: 12px;">
                <p style="margin: 0;">This message was sent from your portfolio contact form.</p>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 }
      );
    }
    

    // ============================================
    // OPTION 2: Using Nodemailer (Gmail/SMTP)
    // ============================================
    // npm install nodemailer @types/nodemailer
    /*
    import nodemailer from "nodemailer";
    
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, // Use App Password for Gmail
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.CONTACT_EMAIL,
      replyTo: email,
      subject: `[Portfolio Contact] ${subject}`,
      html: `...`,
    });
    */

    // ============================================
    // For now: Log to console (development)
    // ============================================
    console.log("📧 New Contact Form Submission:");
    console.log("================================");
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Subject: ${subject}`);
    console.log(`Message: ${message}`);
    console.log("================================");

    return NextResponse.json(
      { message: "Message sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
