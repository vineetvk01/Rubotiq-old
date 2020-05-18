
import Logger from '../../logger';
const logger = Logger('[ Create-OTP :: Controller ]');

export default function makeGetUserProfile ({ otpgenerator, sendMail, }) {
  return async function getUserProfile (httpRequest) {
    try {
      logger.info(' Getting User Profile');

      const { source = {}, } = httpRequest.body;
      const { user, } = httpRequest;
      if (!user) {
        throw new Error('Please login for this request');
      }

      source.ip = httpRequest.ip;
      source.browser = httpRequest.headers['User-Agent'];
      if (httpRequest.headers.Referer) {
        source.referrer = httpRequest.headers.Referer;
      }

      logger.debug('\n (a) Source :', source, '\n (b) user : ', user);

      const otp = otpgenerator({ digits: 4, });

      const info = await sendMail({
        from: '"Rubotiq Team 👻" <rubotiq.io@gmail.com>',
        to: user.email,
        subject: 'Verify Your Email ✔',
        html: `<b>your Otp is : ${otp}</b><br><br><p>You can only send 3 OTPs in 24 hours</p>`,
      });

      logger.info(` Mail sent to the ${user.email} address : ${otp} : messageId: ${info.messageId}`);

      return {
        headers: {
          'Content-Type': 'application/json',
          'Last-Modified': new Date().toUTCString(),
        },
        statusCode: 204,
        body: {},
      };
    } catch (e) {
      // TODO: Error logging
      logger.error(e);

      return {
        headers: {
          'Content-Type': 'application/json',
        },
        statusCode: 400,
        body: {
          error: e.message,
        },
      };
    }
  };
}
