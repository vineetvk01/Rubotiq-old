import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import routes from './constants/routes';
import routers from './routes';

const app = express();

app.use(bodyParser.json());

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

app.use(routes.API, routers);

export default app;
