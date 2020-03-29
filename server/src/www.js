import app from './app';
import http from 'http';
import db from './db';
import constants from './constants';

import Logger from './logger';
const logger = Logger('www');

/**
 * Listen on provided port, on all network interfaces.
 */

const normalizePort = (val) => {
  const port = parseInt(val, 10);

  // eslint-disable-next-line no-restricted-globals
  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
};

const port = normalizePort(constants.PORT || '4000');

app.set('port', port);

const server = http.createServer(app);

db.dbConnect()
  .then(() => {
    try {
      server.listen(port);
    } catch (err) {
      logger.error(err);
    }
  })
  .catch((err) => logger.error(err));

/**
 * Event listener for HTTP server 'error' event.
 */

const onError = (error) => {
  if (error.syscall !== 'listen') {
    throw error;
  }

  const bind = typeof port === 'string' ? `Pipe ${port}` : `Port ${port}`;

  // handle specific listen errors with friendly messages
  switch (error.code) {
  case 'EACCES':
    logger.error(`${bind} requires elevated privileges`);
    process.exit(1);
  case 'EADDRINUSE':
    logger.error(`${bind} is already in use`);
    process.exit(1);
  default:
    throw error;
  }
};

/**
 * Event listener for HTTP server 'listening' event.
 */

const onListening = () => {
  const addr = server.address();
  const bind = typeof addr === 'string' ? `pipe ${addr}` : `port ${addr.port}`;
  logger.info(`Listening on ${bind}`);
};

server.on('error', onError);
server.on('listening', onListening);
