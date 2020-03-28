import express from 'express';
import users from './users.route';
import { USER } from '../constants/routes';

const router = express.Router();

// Access user api's
router.use(USER, users);

export default router;
