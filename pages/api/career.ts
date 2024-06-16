import type { NextApiRequest, NextApiResponse } from 'next';
import multer from 'multer';
var nodemailer = require('nodemailer');
import fs from 'fs';

const upload = multer({
  dest: './uploads/',
});

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    upload.single('resume')(req, res, async (err) => {
      if (err) {
        return res.status(400).json({ error: 'Error uploading the file.' });
      }

      const { firstName, lastName, email, phone} = req.body;

      const filePath = req.file.path;
      const fileName = req.file.originalname;

      const mailOptions = {
        from: `${firstName} ${lastName} <${email}>`,
        to: process.env.EMAIL_USER,
        subject: 'New Job Application',
        text: `
Dear Hiring Team,
      
I am writing to express my interest in the job opportunity at your esteemed organization.
My name is ${firstName} ${lastName}, and I can be reached at ${email} or ${phone}.
      
I have attached my resume for your review. I am excited about the possibility of joining your team and contributing my skills and experience to the company's success.
      
Thank you for considering my application. I look forward to the opportunity to discuss my qualifications further.
      
Best regards,
${firstName} ${lastName}
        `,
        attachments: [
          {
            filename: req.file?.originalname,
            path: req.file?.path,
          },
        ],
      };
      try {
        await transporter.sendMail(mailOptions);
        fs.unlinkSync(filePath);
        return res.status(200).json({ message: 'Message sent successfully.' });
      } catch (error) {
        fs.unlinkSync(filePath);
        return res.status(500).json({ error: 'Error sending the message.' });
      }
    });
  } else {
    res.status(405).json({ error: 'Method not allowed.' });
  }
}