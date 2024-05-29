
var nodemailer = require("nodemailer");
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  status: string;
  message?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== "POST") {
    return res.status(405).json({ status: "Error", message: "Method Not Allowed" });
  }

  try {
    const { firstName, lastName, email, phone, resumeLink, message } = req.body;

    if (!firstName || !lastName || !email || !phone || !resumeLink) {
      return res.status(400).json({ status: "Error", message: "Missing required fields" });
    }

    const contactEmail = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await contactEmail.verify();

    const mail = {
      from: `${firstName} ${lastName} <${email}>`,
      to: process.env.EMAIL_USER,
      subject: "Career Form Submission - Dr. Shahrokh Khoshsobhat",
      html: `<p>Name: ${firstName} ${lastName}</p>
             <p>Email: ${email}</p>
             <p>Phone: ${phone}</p>
             <p>Resume Link: ${resumeLink}</p>
             <p>Message: ${message}</p>`,
    };

    await contactEmail.sendMail(mail);

    return res.status(200).json({ status: "Message Sent" });
  } catch (error) {
    console.error("Error sending email:", error);
    return res.status(500).json({
      status: "Error",
      message: "Internal Server Error",
    });
  }
}
