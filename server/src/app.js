import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import authentication from './middleware/auth';
import { registerUser, loginUser, logoutUser, userProfile, createOtp } from './controllers/user';
import makeCallback from './express-callback';

const app = express();

app.use(bodyParser.json());
app.use(authentication);

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Origin', req.headers.origin);
  res.header(
    'Access-Control-Allow-Methods',
    'GET,PUT,POST,DELETE,UPDATE,OPTIONS'
  );
  res.header('Access-Control-Allow-Headers', 'Content-Type, *');
  next();
});

app.use(express.static(path.join(__dirname, '../public')));

// API Entry points
app.post('/api/users/register', makeCallback(registerUser));
app.post('/api/users/login', makeCallback(loginUser));
app.post('/api/users/logout', makeCallback(logoutUser));
app.get('/api/users/me', makeCallback(userProfile));
app.get('/api/users/me/send-otp', makeCallback(createOtp));
app.put('/api/users/me/update', makeCallback(registerUser));
app.delete('/api/users/me/delete', makeCallback(registerUser));
app.get('/',(req, res)=>res.sendStatus(404));

app.use(function (req, res, next) {
  res.status(404);
  // respond with json
  if (req.accepts('json')) {
    res.send({ status: '404', error: 'Not found', });
    return;
  }
  next();
});

export default app;
