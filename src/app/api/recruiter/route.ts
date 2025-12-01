import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
    try {
        const { name, company, role, email, message } = await req.json();

        // Validate fields
        if (!name || !email || !company || !role || !message) {
            return NextResponse.json(
                { error: "Missing fields" },
                { status: 400 }
            );
        }

        // Setup Nodemailer transporter
        const transporter = nodemailer.createTransport({
            host: process.env.EMAIL_HOST,
            port: Number(process.env.EMAIL_PORT),
            secure: process.env.EMAIL_SECURE === "true",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });

        // The actual email that WE receive
        await transporter.sendMail({
            from: `"Recruiter Inquiry" <${process.env.EMAIL_USER}>`,
            to: process.env.EMAIL_USER, // YOU receive the email
            subject: `New Recruiter Inquiry — ${company} (Role: ${role})`,
            html: `
        <h2>📩 New Recruiter Inquiry</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Hiring For:</strong> ${role}</p>
        <p><strong>Email:</strong> ${email}</p>

        <h3>Message:</h3>
        <p>${message}</p>

        <br />
        <p>— Portfolio Automated System</p>
      `
        });

        return NextResponse.json({ success: true });

    } catch (error) {
        console.error("Recruiter Mail Error:", error);
        return NextResponse.json(
            { error: "Failed to send recruiter inquiry" },
            { status: 500 }
        );
    }
}
