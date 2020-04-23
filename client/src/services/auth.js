import axios from 'axios';
import { baseUrl } from '../constants';

const auth_urls = {
  LOGIN_URL: `${baseUrl}/api/users/login`,
  USER_PROFILE_URL: `${baseUrl}/api/users/me`,
  LOGOUT_URL: `${baseUrl}/api/users/me/logout`,
  SIGNUP_URL: `${baseUrl}/api/users/register`,
};

export const userAuthStatus = async () => {
  try {
    const response = await axios.get(auth_urls.USER_PROFILE_URL, {
      withCredentials: true,
    });
    const { session, user } = response.data;
    if (session === 'active') {
      return user;
    }
    throw new Error('Unable to fetch');
  } catch (error) {
    return false;
  }
};

export const authenticateUser = async (credentials) => {
  try {
    const response = await axios.post(auth_urls.LOGIN_URL, credentials, {
      withCredentials: true,
    });
    return response.data
  } catch (error) {
    const data = (error.response && error.response.data) || { status: 'failure', error: 'Server Not Reachable', };
    return data;
  }
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

export const signupUser = async ({firstName, lastName, phone, email, password}) => {
  try {
    const response = await axios.post(
      auth_urls.SIGNUP_URL,
      { first_name: firstName,
        last_name: lastName, 
        email, 
        phone,
        password 
      },
      {
        withCredentials: true,
      },
    );
    return response.data;
  } catch (error) {
    const data = (error.response && error.response.data) || { status: 'failure', error: 'Server Not Reachable', };
    return data;
  }
};