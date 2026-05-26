import Contact from "../models/Contact.js";
import { Resend } from "resend";

export const sendMessage = async (req, res) => {

  try {

    const { name, email, message } = req.body;

    const resend = new Resend(process.env.RESEND_API_KEY);

    console.log("New Contact Request Received");

    // Save to MongoDB
    const newMessage = new Contact({
      name,
      email,
      message,
    });

    await newMessage.save();

    console.log("Saved to MongoDB");

    const from = process.env.MAIL_FROM;
    const adminTo = process.env.CONTACT_RECIPIENT;

    // ==========================
    // MAIL TO ADMIN (site owner)
    // ==========================

    const adminHtml = `
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
    `;

    console.log("Sending admin email...");
    const adminResult = await resend.emails.send({
      from,
      to: adminTo,
      replyTo: email,
      subject: `New Portfolio Inquiry from ${name}`,
      html: adminHtml,
    });
    if (adminResult.error) {
      throw new Error(`Admin email failed: ${JSON.stringify(adminResult.error)}`);
    }

    console.log("Admin email sent successfully");

    res.status(200).json({
      success: true,
      message: "Message sent successfully",
    });

  } catch (error) {

    console.log("EMAIL ERROR:", error);

    res.status(500).json({
      success: false,
      message: "Server Error",
      debug: error?.message, // TEMPORARY — remove in T10 once prod is verified
    });

  }

};