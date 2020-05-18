import nodemailer from 'nodemailer';

import Logger from '../logger';
const logger = Logger('[ Mailer :: Util ]');

async function main (mail) {
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_SMTP,
    port: process.env.EMAIL_PORT,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_ID,
      pass: process.env.EMAIL_PWD,
    },
  });

  logger.warn("Email Id used for mailing : ");
  logger.warn(process.env.EMAIL_SMTP, process.env.EMAIL_PORT, process.env.EMAIL_ID, process.env.EMAIL_PWD);
  // send mail with defined transport object
  const info = await transporter.sendMail(mail);

  return info;

  // console.log("Message sent: %s", info.messageId);
  // // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // // Preview only available when sending through an Ethereal account
  // console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

export default main;
