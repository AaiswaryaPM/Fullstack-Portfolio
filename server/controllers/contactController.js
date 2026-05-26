import Contact from "../models/Contact.js";
import { Resend } from "resend";

export const sendMessage = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    console.log("New Contact Request Received");

    // Save to MongoDB
    const newMessage = new Contact({
      name,
      email,
      message,
    });

    await newMessage.save();

    console.log("Saved to MongoDB");

    const resend = new Resend(process.env.RESEND_API_KEY);

    // ==========================
    // ADMIN EMAIL
    // ==========================
    console.log("Sending admin email...");

    const adminResponse = await resend.emails.send({
      from: process.env.MAIL_FROM,
      to: process.env.MY_EMAIL,
      replyTo: email,
      subject: `✨ New Portfolio Inquiry from ${name}`,
      html: `
        <div style="font-family: Arial; padding: 20px;">
          <h2 style="color:#7e22ce;">New Portfolio Contact Message</h2>
          <hr />
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <div style="background:#f3f4f6;padding:15px;border-radius:10px;">
            ${message}
          </div>
        </div>
      `,
    });

    console.log("ADMIN EMAIL RESPONSE:", adminResponse);

    // ==========================
    // USER EMAIL (AUTO REPLY)
    // ==========================
    console.log("Sending user auto-reply email...");

    const userResponse = await resend.emails.send({
      from: process.env.MAIL_FROM,
      to: email,
      subject: "🚀 Your Message Has Been Received",
      html: `
        <div style="font-family: Arial; padding: 20px;">
          <h2 style="color:#7e22ce;">Thank You for Contacting Me</h2>

          <p>Hi <strong>${name}</strong>,</p>

          <p>I have received your message successfully.</p>

          <p>Your message:</p>

          <div style="background:#f3f4f6;padding:15px;border-radius:10px;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <p>${message}</p>
          </div>

          <br/>

          <p>I will get back to you soon.</p>

          <p>Regards,<br/><strong>Aaiswarya PM</strong></p>
        </div>
      `,
    });

    console.log("USER EMAIL RESPONSE:", userResponse);

    return res.status(200).json({
      success: true,
      message: "Message sent successfully",
    });

  } catch (error) {
    console.log("EMAIL ERROR:", error);

    return res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};