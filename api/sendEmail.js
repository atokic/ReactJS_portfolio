import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { username, phoneNumber, email, subject, message } = req.body;

    // Create a transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // Use environment variables
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.RECIPIENT_EMAIL, // Use environment variables
      subject: `${subject} - from ${username}`,
      text: `Phone: ${phoneNumber}\n\n${message}`,
    };

    try {
      const info = await transporter.sendMail(mailOptions);
      console.log('Email sent:', info.response);
      res.status(200).json({ message: 'Email sent: ' + info.response });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ error: error.toString() });
    }
  } else {
    res.status(405).json({ message: 'Only POST requests are allowed' });
  }
}