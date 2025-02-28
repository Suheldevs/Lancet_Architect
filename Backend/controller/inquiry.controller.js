import nodemailer from 'nodemailer';
import Inquiry from '../model/inquiry.model.js';

export const createInquiry = async (req, res) => {
  const { name, phone, email, subject, message } = req.body;

  if (!name || !phone || !email || !subject || !message) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const newInquiry = new Inquiry({
      name,
      phone,
      email,
      subject,
      message,
    });

    await newInquiry.save();

    // Configure Nodemailer
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'suhel.codecrafter@gmail.com', 
      subject: 'New Inquiry Received',
      text: `
        Dear ${name},

        Your inquiry has been successfully received.

        Inquiry Details:
        - Name: ${name}
        - Email: ${email}
        - Phone: ${phone}
        - Subject: ${subject}
        - Message: ${message}

        We will get back to you as soon as possible.

        Thank you,
        Your Support Team
      `,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending email:', error);
        return res.status(500).json({ message: 'Error sending email', error });
      }
      console.log('Email sent:', info.response);
    });

    res.status(201).json({
      message: 'Inquiry Sent Successfully!',
      inquiryData: newInquiry,
    });
  } catch (error) {
    console.error('Error creating inquiry:', error);
    res.status(500).json({ message: 'Error creating inquiry', error });
  }
};

export const getAllInquiries = async (req, res) => {
  try {
    const inquiries = await Inquiry.find();
    res.status(200).json(inquiries);
  } catch (error) {
    console.error('Error fetching inquiries:', error);
    res.status(500).json({ message: 'Error fetching inquiries', error });
  }
};

export const deleteInquiry = async (req, res) => {
  const { id } = req.params;
  try {
    const inquiry = await Inquiry.findByIdAndDelete(id);

    if (!inquiry) {
      return res.status(404).json({ message: 'Inquiry not found' });
    }
    res.status(200).json({ message: 'Inquiry deleted successfully' });
  } catch (error) {
    console.error('Error deleting inquiry:', error);
    res.status(500).json({ message: 'Error deleting inquiry', error });
  }
};
