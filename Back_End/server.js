import express from "express"
import cors from "cors"
import nodemailer from "nodemailer"
import bodyParser from "body-parser"
import path from "path"
import dotenv from "dotenv"


dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const __dirname = path.resolve();

app.use(express.json()); // allows us to parse incoming requests:req.body
// Middleware
app.use(cors({
  origin: process.env.NODE_ENV === 'production' ? 'https://huggingtails.org' : 'http://localhost:5000',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));

// Create a transporter using SMTP
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: 465,
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  }
});

// Verify transporter configuration
transporter.verify(function(error, success) {
  if (error) {
    console.log('Transporter verification error:', error);
  } else {
    console.log("Server is ready to take our messages");
  }
});

// Email sending endpoint
app.post('/api/send-email', async (req, res) => {
  console.log('Received request to send email');
  const { to, subject, body, attachments } = req.body;
 
  const mailOptions = {
    from: process.env.EMAIL_FROM, // Use environment variable
    to,
    subject,
    text: body,
  };

  // Handle attachments
  if (attachments && Array.isArray(attachments) && attachments.length > 0) {
    mailOptions.attachments = attachments.map(attachment => ({
      filename: attachment.filename,
      content: attachment.content,
      encoding: attachment.encoding
    }));
  }

  try {
    console.log('Attempting to send email...');
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');
    res.status(200).send('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).send(`Error sending email: ${error.message}`);
  }
});

// Test endpoint
app.get('/test', (req, res) => {
  console.log('Test endpoint hit');
  res.status(200).send('Server is running');
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Error caught by middleware:', err.stack);
  res.status(500).send('Something broke!');
});


if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/freelance/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "freelance", "dist", "index.html"));
  });
}
// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
