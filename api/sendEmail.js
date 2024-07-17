import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { username, phoneNumber, email, subject, message } = req.body;

    // Create a transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      port: 465,
      secure: true,
      logger: true,
      debug: true,
      secureConnection: false,
      auth: {
        user: process.env.EMAIL_USER, // Use environment variables
        pass: process.env.EMAIL_PASS,
      },
      tls: { 
        rejectUnauthorized: true 
      },
    });

    const mailOptions = {
        from: email,
        to: process.env.RECIPIENT_EMAIL,
        subject: `Contact Form atokic.com: ${subject} - from ${username}`,
        html: `
          <html>
            <head>
              <style>
                body {
                  font-family: Arial, sans-serif;
                  background-color: #f4f4f4;
                  padding: 20px;
                }
                .email-content {
                  background-color: #fff;
                  padding: 20px;
                  border-radius: 8px;
                  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
                }
                .signature {
                  margin-top: 20px;
                  font-style: italic;
                }
              </style>
            </head>
            <body>
              <div class="email-content">
                <p><strong>Name:</strong> ${username}</p>
                <p><strong>E-mail:</strong> ${email}</p>
                <p><strong>Phone number:</strong> ${phoneNumber}</p>
                <p><strong>Subject:</strong> ${subject}</p>
                <p><strong>Message:</strong> ${message}</p>
              </div>
              <p class="signature">Sent from my personal website atokic.com!</p>
            </body>
          </html>
        `,
        replyTo: email,
      };

    try {
      const info = await transporter.sendMail(mailOptions);
      const successMessage = `Thank you, ${username}! Your message has been sent successfully.`;
      res.status(200).json({ message: successMessage });
    } catch (error) {
      res.status(500).json({ error: "Failed to send the email. Please try again later." });
    }
  } else {
    res.status(405).json({ message: "Only POST requests are allowed" });
  }
}