import User from '../models/users.model';
import constants from '../constants';

import Logger from '../logger';
const logger = Logger('users.controller :');

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
    const user = await User.findByCredentials(email, password);

    if (!user) {
      res
        .status(401)
        .send({ error: 'Login failed! Check authentication credentials', });
    }

    await user.generateAuthToken(req, res);

    res.status(200).send({ user, });
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.profile = async (req, res) => {
  logger.info('Checking logged in user info.');
  if (req.user) {
    res.send({ session: 'active', user: req.user, });
    logger.info('Active Session Exists.');
  } else {
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
    res.clearCookie('token', { domain: req.headers.host, });
    res.status(200).send('User logged out successfully.');
  } catch (error) {
    res.status(500).send(error);
  }
};
