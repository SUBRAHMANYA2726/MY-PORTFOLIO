import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Message from "@/models/Message";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    // Connect to MongoDB
    try {
      const db = await dbConnect();
      if (db) {
        await Message.create({ name, email, message });
      }
    } catch (dbError) {
      console.error("Database Error:", dbError);
    }

    // Send email using Nodemailer
    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: "submmb06@gmail.com",
        subject: `New Portfolio Message from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      };

      await transporter.sendMail(mailOptions);
    }

    return NextResponse.json({ success: true, message: "Message sent successfully!" });
  } catch (error) {
    console.error("Contact API Error:", error);
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }
}
