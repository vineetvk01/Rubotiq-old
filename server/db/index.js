import { makeDb } from '../src/data-access';
import dotenv from 'dotenv';
import logger from '../src/logger';
dotenv.config();

const dbLogger = logger('[ Initalizing : db.js ]');
(async function setupDb () {
  dbLogger.info('Setting up database...');
  // database collection will automatically be created if it does not exist
  // indexes will only be added if they don't exist
  // const db = await makeDb();
  // const result = await db
  //   .collection('users')
  //   .createIndexes([
  //     { key: { hash: 1, }, name: 'hash_idx', },
  //     { key: { postId: -1, }, name: 'postId_idx', },
  //     { key: { replyToId: -1, }, name: 'replyToId_idx', }
  //   ]);
  // dbLogger.info(result);
  dbLogger.info('Database setup complete...');
  process.exit();
})();
