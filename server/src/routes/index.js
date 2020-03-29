import express from 'express';
import users from './users.route';
import server from './servers.route';
import routes from '../constants/routes';

const router = express.Router();

router.use('/', server);

// Access user api's
router.use(routes.USER, users);

export default router;
