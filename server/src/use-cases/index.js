import makeAddUser from './add-user';
import makeGetUser from './get-user';
import { userDb } from '../data-access';

const addUser = makeAddUser({ userDb, });
const getUser = makeGetUser({ userDb, });

export { addUser, getUser };
