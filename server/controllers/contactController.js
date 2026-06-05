import Contact from "../models/Contact.js";
import { Resend } from "resend";

export const sendMessage = async (req, res) => {
  try {
    let { name, email, message } = req.body;

    console.log("New Contact Request Received");

    // ==========================
    // SERVER SIDE VALIDATION
    // ==========================

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    // Remove extra spaces
    name = name.trim();
    email = email.trim();
    message = message.trim();

    // Name Validation
    if (name.length < 2 || name.length > 50) {
      return res.status(400).json({
        success: false,
        message: "Name must be between 2 and 50 characters",
      });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: "Invalid email",
      });
    }

    // Message validation
    if (message.length < 10 ||message.length > 1000) {
      return res.status(400).json({
        success: false,
        message: "Message must be between 10 and 1000 characters"
      });
    }

    // Basic Sanitization
    name = name.replace(/[<>]/g, "");
    email = email.replace(/[<>]/g, "");
    message = message.replace(/[<>]/g, "");

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
      from: "Portfolio Contact <onboarding@resend.dev>",
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
      from: "Portfolio Contact <onboarding@resend.dev>",
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