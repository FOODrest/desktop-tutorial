// netlify/functions/send-email.js
const nodemailer = require("nodemailer");

exports.handler = async (event) => {
  // Only allow POST
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: "Method Not Allowed" }),
    };
  }

  try {
    const body = JSON.parse(event.body || "{}");

    // Support either shape:
    // 1) { to, subject, body }  <-- preferred
    // 2) { email, phoneNumber, message }  <-- fallback
    const hasDirect = body.to && body.subject && body.body;
    const hasForm = body.email && body.phoneNumber && body.message;

    if (!hasDirect && !hasForm) {
      return {
        statusCode: 400,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message:
            "Missing required fields. Send {to, subject, body} OR {email, phoneNumber, message}.",
        }),
      };
    }

    const to =
      (hasDirect && body.to) ||
      process.env.EMAIL_TO ||
      process.env.SMTP_USER;

    const subject =
      (hasDirect && body.subject) || "New Contact Form Submission";

    const text =
      (hasDirect && body.body) ||
      `From: ${body.email}
Phone: ${body.phoneNumber}

Message:
${body.message}`;

    const replyTo = body.email || undefined;

    // Create SMTP transporter (Gmail example)
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: String(process.env.SMTP_SECURE).toLowerCase() === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_FROM || process.env.SMTP_USER,
      to,
      subject,
      text,
      ...(replyTo ? { replyTo } : {}),
    };

    await transporter.sendMail(mailOptions);

    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: "Email sent successfully" }),
    };
  } catch (err) {
    console.error("Error sending email:", err);
    return {
      statusCode: 500,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: "Error sending email" }),
    };
  }
};
