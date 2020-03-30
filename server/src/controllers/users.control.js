import User from '../models/users.model';
import constants from '../constants';

import Logger from '../logger';
const logger = Logger('Users.Controller :');

exports.register = async (req, res) => {
  logger.info('A new Signup request...');
  try {
    if (Object.keys(req.body).length === 0) {
      logger.info('Empty Request is made by the user...');
      throw new Error('Empty Request');
    }
    const { first_name, last_name, email, password, phone, } = req.body;
    const validUserObj = {
      firstName: first_name,
      lastName: last_name,
      email: email,
      password: password,
      phone: phone,
      isActive: false,
      role: 5,
    };
    logger.info(`User Info, ${validUserObj.firstName}, ${validUserObj.lastName}, ${validUserObj.email}, ${validUserObj.phone}`);
    const user = new User(validUserObj);
    const userInfo = await user.save();
    const userObject = userInfo.toObject();
    delete userObject.password;
    logger.info('New User is created.');
    const authToken = await user.generateAuthToken(res);
    res.cookie('token', authToken, { maxAge: constants.TIMEOUT, httpOnly: true, });
    logger.info('Cookie is set for the new user');
    res.status(201).send({ status: 'success', userObject, });
  } catch (error) {
    logger.error('Error occured while signing up the User');
    logger.error(error);
    res.status(400).send(error);
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password, } = req.body;
    logger.info(`Login request for email: ${email}`);
    const user = await User.findByCredentials(email, password);
    if (!user) {
      logger.warn(`Wrong combination found for the email ${email}`);
      res
        .status(401)
        .send({ error: 'Login failed! Check authentication credentials', });
    }
    const authToken = await user.generateAuthToken(req, res);
    res.cookie('token', authToken, { maxAge: constants.TIMEOUT, httpOnly: true, });
    res.status(200).send({ user, });
  } catch (error) {
    logger.error(`Wrong combination found for the email ${error}`);
    res.status(400).send({ status: 'failure', error, });
  }
};

exports.profile = async (req, res) => {
  logger.info('Checking logged in user info.');
  try {
    if (req.user) {
      const currentUser = req.user.toObject();
      delete currentUser.password;
      if (currentUser) {
        res.send({ session: 'active', user: currentUser, });
        logger.info('Active Session Exists.');
        return;
      }
    }
    throw new Error('No User Exists');
  } catch (err) {
    res.send({ session: 'inactive', });
    logger.info('No Active Session Found.');
  }
};

exports.update = async (req, res) => {
  const response = await User.updateOne({ _id: req.user._id, }, req.body);
  // View logged in user profile
  res.send(response);
};

exports.logout = async (req, res) => {
  // Log user out of the application
  try {
    res.clearCookie('token', { });
    res.status(200).send({ status: 'success', message: 'User logged out successfully.', });
  } catch (error) {
    res.status(500).send(error);
  }
};
