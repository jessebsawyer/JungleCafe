import asyncHandler from 'express-async-handler';
import nodemailer from 'nodemailer';

const sendContactForm = asyncHandler(async (req, res) => {
  const { name, email, phone, message } = req.body;
  const output = `
  <p>You have a new contact request</p>
  <h3>Contact Details</h3>
  <ul>
    <li>Name: ${name}</li>
    <li>Email: ${email}</li>
    <li>Phone: ${phone}</li>
  </ul>
  <h3>Message</h3>
  <p>${message}</p>
  `;

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.EMAIL_USER, // generated ethereal user
      pass: process.env.EMAIL_PASSWORD, // generated ethereal password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: `"Jungle Cafe" ${process.env.EMAIL_USER}`, // sender address
    to: 'junglecafescarb@gmail.com', // list of receivers
    subject: 'Jungle Cafe Contact Request', // Subject line
    html: output, // html body
  });

  res.status(201).json({
    name: name,
    email: email,
    phone: phone,
    message: message,
  });

  console.log('Message sent: %s', info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
});

export default sendContactForm;
