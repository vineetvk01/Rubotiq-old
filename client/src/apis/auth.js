import axios from 'axios';
import { baseUrl } from '../constants';

const auth_urls = {
  LOGIN_URL: `${baseUrl}/api/users/login`,
  USER_PROFILE_URL: `${baseUrl}/api/users/me`,
  LOGOUT_URL: `${baseUrl}/api/users/me/logout`,
};

export const userAuthStatus = async () => {
  let newState = null;
  try {
    const response = await axios.get(auth_urls.USER_PROFILE_URL, {
      withCredentials: true,
    });
    newState = Boolean(response.status === 200);
  } catch {
    newState = false;
  }
  return newState;
};

export const authenticateUser = async (email, password) => {
  let newState = null;
  const credentials = { email, password };
  try {
    const response = await axios.post(auth_urls.LOGIN_URL, credentials, {
      withCredentials: true,
    });
    console.log(response);
    newState = Boolean(response.status === 200);
  } catch (error) {
    console.log('error', error);
    newState = false;
  }
  return newState;
};

export const logoutUser = async () => {
  try {
    const response = await axios.post(
      auth_urls.LOGOUT_URL,
      {},
      {
        withCredentials: true,
      },
    );
    return Boolean(response.status === 200);
  } catch (error) {
    return false;
  }
};