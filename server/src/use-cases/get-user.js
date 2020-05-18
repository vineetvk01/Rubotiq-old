
// Logger
import Logger from '../logger';
const logger = Logger('[ Get-User :: Use-Case ]');

export default function makeGetUser ({ userDb, }) {
  return async function getUser (userInfo) {
    logger.info(' Going to make User using user info');

    const { email, password, } = userInfo;
    const userExists = await userDb.findByCredentials({ email, password, });

    if (userExists) {
      logger.info('User found with existing credentials, Returning the user');
      return userExists;
    }

    logger.warn('Wrong email or password combination', userInfo);
    throw new Error('Wrong email or password combination');
  };
}
