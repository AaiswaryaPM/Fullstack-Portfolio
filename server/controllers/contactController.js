import Contact from "../models/Contact.js";
import resend from "../utils/resend.js";

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

    // ==========================
    // MAIL TO YOU (ADMIN EMAIL)
    // ==========================

    console.log("Sending admin email...");

    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: process.env.EMAIL_USER,
      subject: `✨ New Portfolio Inquiry from ${name}`,
      html: `
        <div style="font-family: Arial; padding: 20px;">
          
          <h2 style="color: #7e22ce;">
            New Portfolio Contact Message
          </h2>

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

    // ==========================
    // AUTO REPLY TO USER
    // ==========================

    console.log("Sending user confirmation email...");

    await resend.emails.send({
      from: "Aaiswarya PM <onboarding@resend.dev>",
      to: email,
      subject: "🚀 Your Message Has Been Successfully Received",
      html: `
        <div style="font-family: Arial; padding: 20px;">

          <h2 style="color: #7e22ce;">
            Thank You for Contacting Me
          </h2>

          <p>Hi <strong>${name}</strong>,</p>

          <p>I have received your message successfully.</p>

          <p>Here is a copy of your message:</p>

          <div style="background:#f3f4f6;padding:15px;border-radius:10px;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong> ${message}</p>
          </div>

          <br />

          <p>I will get back to you as soon as possible.</p>

          <p><strong>Aaiswarya PM</strong></p>

        </div>
      `,
    });

    console.log("Emails sent successfully");

    res.status(200).json({
      success: true,
      message: "Message sent successfully",
    });

  } catch (error) {
    console.log("EMAIL ERROR:", error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};