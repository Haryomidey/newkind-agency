const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 4000;

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const transporter = nodemailer.createTransport({
    host: 'smtp.zoho.com',
    port: 465,
    secure: true,
    auth: {
        user: process.env.USER,
        pass: process.env.PASS
    }
});

const sendEmail = (formData) => {
    const { first_name, last_name, email, phone_number, type_of_enquiry, country, company_name, project_details } = formData;

    const mailOptions = {
        from: process.env.USER,
        to: process.env.USER,
        subject: `Message from ${first_name} ${last_name}`,
        html: `
            <h2>New Inquiry from ${first_name} ${last_name}</h2>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone Number:</strong> ${phone_number}</p>
            
            <h3>Inquiry Details</h3>
            <ul>
                <li><strong>Type of Enquiry:</strong> ${type_of_enquiry}</li>
                <li><strong>Country:</strong> ${country}</li>
                <li><strong>Company Name:</strong> ${company_name}</li>
                <li><strong>Project Details:</strong> ${project_details}</li>
            </ul>
        `,
    };

    return transporter.sendMail(mailOptions);
};

app.post('/api/contact-us', async (req, res) => {
    try {
        const formData = req.body;
        await sendEmail(formData);

        res.status(200).json({ 
            status: true,
            message: 'Your message has been sent successfully!'
        });

    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ 
            status: false,
            message: 'Failed to send the message. Please try again later.'
        });
    }
});

app.get('/api/contact-us', (req, res) => {
    res.json({ message: 'Contact us API is working' });
  });

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
