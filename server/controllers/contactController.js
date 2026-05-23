import Contact from "../models/Contact.js";
import nodemailer from "nodemailer";

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

    // Nodemailer Transport
    // Nodemailer Transport - Optimized for Render + Gmail
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // Must be false for port 587
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false, // Bypasses local network routing restrictions
        ciphers: "SSLv3",          // Forces a compatible security standard
      },
      connectionTimeout: 10000,    // 10 seconds timeout limit
      greetingTimeout: 10000,
    });

    // ==========================
    // MAIL TO YOU
    // ==========================

    const adminMailOptions = {
      from: `"Portfolio Contact Form" <${process.env.EMAIL_USER}>`,
      replyTo: email,
      to: process.env.EMAIL_USER,

      subject: `✨ New Portfolio Inquiry from ${name}`,

      html: `
        <div style="font-family: Arial; padding: 20px;">
          
          <h2 style="color: #7e22ce;">
            New Portfolio Contact Message
          </h2>

          <hr />

          <p>
            <strong>Name:</strong> ${name}
          </p>

          <p>
            <strong>Email:</strong> ${email}
          </p>

          <p>
            <strong>Message:</strong>
          </p>

          <div style="background:#f3f4f6;padding:15px;border-radius:10px;">
            ${message}
          </div>

        </div>
      `,
    };

    // ==========================
    // AUTO REPLY TO USER
    // ==========================

    const userMailOptions = {
      from: `"Aaiswarya PM" <${process.env.EMAIL_USER}>`,
      to: email,

      subject: "🚀 Your Message Has Been Successfully Received",

      html: `
        <div style="font-family: Arial; padding: 20px;">

          <h2 style="color: #7e22ce;">
            Thank You for Contacting Me
          </h2>

          <p>
            Hi <strong>${name}</strong>,
          </p>

          <p>
            I have received your message successfully.
          </p>

          <p>
            Here is a copy of the message you submitted through my portfolio website:
          </p>

          <div 
            style="
              background:#f3f4f6;
              padding:15px;
              border-radius:10px;
              margin-top:15px;
            "
          >

            <p>
              <strong>Name:</strong> ${name}
            </p>

            <p>
              <strong>Email:</strong> ${email}
            </p>

            <p>
              <strong>Message:</strong>
            </p>

            <p>
              ${message}
            </p>

          </div>

          <br />

          <p>
            I will get back to you as soon as possible.
          </p>

          <br />

          <p>
            Regards,
          </p>

          <p>
            <strong>Aaiswarya PM</strong>
          </p>

        </div>
      `,
    };

    // Send Both Emails
    console.log("Sending admin email...");
    await transporter.sendMail(adminMailOptions);

    console.log("Sending user confirmation email...");
    await transporter.sendMail(userMailOptions);

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