import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    try {
        const { name, email, message } = await req.json();

        // 1. Transporter Setup
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER, 
                pass: process.env.EMAIL_PASS, // Aapka 16-digit App Password
            },
        });

        // 2. Email Options
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER, 
            subject: `New Message from ${name}`,
            text: `Email: ${email}\n\nMessage: ${message}`,
            html: `
                <div style="font-family: Arial, sans-serif; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
                    <h2 style="color: #0070f3;">New Contact Form Submission</h2>
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <div style="background: #f9f9f9; padding: 15px; border-left: 4px solid #0070f3;">
                        <p><strong>Message:</strong></p>
                        <p>${message}</p>
                    </div>
                </div>
            `,
        };

        // 3. Send Email
        await transporter.sendMail(mailOptions);

        return NextResponse.json({ message: "Email sent successfully!" }, { status: 200 });

    } catch (error: unknown) {
        // TypeScript error handle karne ke liye narrowing
        const errorMessage = error instanceof Error ? error.message : "Internal Server Error";
        
        console.error("Nodemailer Error:", errorMessage);
        
        return NextResponse.json(
            { message: "Failed to send email", error: errorMessage }, 
            { status: 500 }
        );
    }
}