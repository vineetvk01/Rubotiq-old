import mongoose from 'mongoose';
import { MONGODB_URL } from '../constants';

import Logger from '../logger';
const logger = Logger('db :');

const dbConnect = () => {
  return new Promise((resolve, reject) => {
    mongoose.connect(MONGODB_URL, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    });

    mongoose.connection.on('connected', () => {
      logger.info('Connected to the database');
      resolve('connected');
    });

    mongoose.connection.on('error', (err) => {
      logger.info(`Mongoose default connection error: ${err}`);
      reject(new Error(`Error in connection ${err}`));
    });

    // When the connection is disconnected
    mongoose.connection.on('disconnected', () => {
      logger.info('Mongoose default connection disconnected');
    });
  });
};

const dbDisconnect = () => mongoose.connection.close();

export default { dbConnect, dbDisconnect, };
