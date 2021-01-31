import asyncHandler from 'express-async-handler';
import nodemailer from 'nodemailer';
import { google } from 'googleapis';

const sendContactForm = asyncHandler(async (req, res) => {
  const clientId = process.env.CLIENT_ID;
  const clientSecret = process.env.CLIENT_SECRET;
  const redirectUri = process.env.REDIRECT_URI;
  const refreshToken = process.env.REFRESH_TOKEN;

  const oAuth2Client = new google.auth.OAuth2(
    clientId,
    clientSecret,
    redirectUri
  );
  oAuth2Client.setCredentials({ refreshToken: refreshToken });
  const accessToken = await oAuth2Client.getAccessToken();

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
      type: 'OAuth2',
      user: process.env.EMAIL_USER, // generated ethereal user
      clientId,
      clientSecret,
      refreshToken,
      accessToken,
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: `"Jungle Cafe" ${process.env.EMAIL_USER}`, // sender address
    to: 'junglecafescarb@gmail.com, jessebsawyer@gmail.com', // list of receivers
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
