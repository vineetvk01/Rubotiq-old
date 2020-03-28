import app from './app';

import Logger from './logger';
const logger = Logger('www');

const port = process.env.PORT || 2000;
app.get('/', (request, response) => {
  response.status(200).json({
    status: 'success',
    server: 'up',
  });
});

app.listen(port, () => {
  logger.info(`Listening on port ${port}`);
});
