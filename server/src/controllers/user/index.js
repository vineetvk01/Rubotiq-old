import {
  addUser,
  getUser
} from '../../use-cases';
import makeRegisterUser from './register-user';
import makeLoginUser from './login-user';
import makeLogoutUser from './logout-user';
import makeGetUserProfile from './get-profile';
import makeCreateOtp from './create-otp';

import jwt from 'jsonwebtoken';
import mail from '../../util/mail';
import otpgenerator from '../../util/otp-generator';

const tokenGenerator = (toBeSigned) => {
  return jwt.sign({ ...toBeSigned, }, process.env.JWT_KEY);
};

const registerUser = makeRegisterUser({ addUser, });
const loginUser = makeLoginUser({ getUser, tokenGenerator, });
const logoutUser = makeLogoutUser();
const userProfile = makeGetUserProfile();
const createOtp = makeCreateOtp({ otpgenerator, sendMail, });

const userController = Object.freeze({
  registerUser,
  loginUser,
  logoutUser,
  userProfile,
  createOtp,
});

async function sendMail (data) {
  return await mail(data);
}

export default userController;
export { registerUser, loginUser, logoutUser, userProfile, createOtp };
