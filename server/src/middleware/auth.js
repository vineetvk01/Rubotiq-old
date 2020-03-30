import jwt from 'jsonwebtoken';
import User from '../models/users.model';
import constants from '../constants';

import Logger from '../logger';
const logger = Logger('Auth.Middleware :');

const auth = async (req, res, next) => {
  logger.info('Checking Authentication in the request');
  try {
    if (req.headers.cookie) {
      const cookieArray = req.headers.cookie
        .split(';')
        .filter((cookie) => cookie.indexOf('token') !== -1);
      if (cookieArray.length > 0) {
        logger.info('Found TOKEN cookie attached in headers');
        const token = cookieArray[0].split('=')[1];

        if (!token) {
          logger.info('No Found TOKEN cookie attached in headers');
          res.status(401).send({
            error: 'Not authorized to access this resource, no token',
          });
        } else {
          const data = await jwt.verify(token, constants.JWT_KEY);
          const user = await User.findOne({ _id: data._id, });
          if (!user) {
            throw new Error();
          }
          req.user = user;
          logger.info('User is attached in the request');
        }
      }
    }
    logger.info('Sending to next route');
    next();
  } catch (error) {
    res.status(401).send({ error: 'Not authorized to access this resource', });
  }
};

export default auth;
