import express from 'express';
import config from '@config/index';
import logger from '@loaders/logger';

async function startServer() {
  const app = express();

  await require('./loaders').default({ expressApp: app });

  const server = app.listen(config.port, () => {
    logger.info(`
      ################################################
      🛡️  Server listening on port: ${config.port} 🛡️
      ################################################
      `);
  });

  process.on('unhandledRejection', (err: Error) => {
    console.log(err.name, err.message);
    server.close(() => {
      process.exit(1);
    });
  });
}

startServer();
