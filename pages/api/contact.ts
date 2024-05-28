// var nodemailer = require("nodemailer");
// import type { NextApiRequest, NextApiResponse } from "next";

// type Data = {
//   status: string;
//   message: string;
// };

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<Data>
// ) {
//   // Check the request method
//   if (req.method !== "POST") {
//     return res.status(405).json({ status: "Error", message: "Method Not Allowed" });
//   }

//   const { firstName, lastName, email, message, phone } = req.body;

//   // Validate the request body
//   if (!firstName || !lastName || !email || !message || !phone) {
//     return res.status(400).json({ status: "Error", message: "Bad Request" });
//   }

//   // Create the transporter object using SMTP transport
//   const contactEmail = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//       user: process.env.EMAIL_USER,
//       pass: process.env.EMAIL_PASS,
//     },
//   });

//   try {
//     await contactEmail.verify();
//     console.log("Ready to send email");

//     const name = `${firstName} ${lastName}`;
//     const mail = {
//       from: email,
//       to: process.env.EMAIL_USER,
//       subject: "Contact Form Submission - Portfolio",
//       html: `<p>Name: ${name}</p>
//              <p>Email: ${email}</p>
//              <p>Phone: ${phone}</p>
//              <p>Message: ${message}</p>`,
//     };

//     // Send the email
//     await contactEmail.sendMail(mail);
//     res.status(200).json({ status: "Message Sent", message: "Your message has been sent successfully." });

//   } catch (error) {
//     console.error("Error sending email:", error);
//     res.status(500).json({ status: "Error", message: "Internal Server Error" });
//   }
// }



// var nodemailer = require("nodemailer");
// import type { NextApiRequest, NextApiResponse } from "next";

// type Data = {
//   status: string;
//   message?: string;
// };

// export default function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<Data>
// ) {
//   if (req.method !== "POST") {
//     res.status(405).json({ status: "Error", message: "Method Not Allowed" });
//     return;
//   }

//   const { firstName, lastName, email, phone, message, patientType } = req.body;

//   const contactEmail = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//       user: process.env.EMAIL_USER,
//       pass: process.env.EMAIL_PASS,
//     },
//   });

//   contactEmail.verify((error:any) => {
//     if (error) {
//       console.error("Email verification error:", error);
//     } else {
//       console.log("Ready to send email");
//     }
//   });

//   const mail = {
//     from: `${firstName} ${lastName} <${email}>`,
//     to: process.env.EMAIL_USER,
//     subject: "Contact Form Submission - Portfolio",
//     html: `<p>Name: ${firstName} ${lastName}</p>
//            <p>Email: ${email}</p>
//            <p>Phone: ${phone}</p>
//            <p>Patient Type: ${patientType}</p>
//            <p>Message: ${message}</p>`,
//   };

//   contactEmail.sendMail(mail, (error:any) => {
//     if (error) {
//       console.error("Error sending email:", error);
//       res.status(500).json({
//         status: "Error",
//         message: "Internal Server Error",
//       });
//     } else {
//       res.status(200).json({ status: "Message Sent" });
//     }
//   });
// }


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
    const { firstName, lastName, email, phone, message, patientType } = req.body;

    if (!firstName || !lastName || !email || !phone || !patientType) {
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
      subject: "Contact Form Submission - Dr. Shahrokh Khoshsobhat",
      html: `<p>Name: ${firstName} ${lastName}</p>
             <p>Email: ${email}</p>
             <p>Phone: ${phone}</p>
             <p>Patient Type: ${patientType}</p>
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
