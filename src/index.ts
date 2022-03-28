import config from '@config/index';
import createServer from '@utils/server';
import logger from '@loaders/logger';

const app = createServer();

process.on('uncaughtException', (err) => {
  console.log(err.name, err.message);
  process.exit(1);
});

const server = app.listen(config.port, async () => {
  logger.info(`
    ################################################
    🛡️  Server listening on port: ${config.port} 🛡️
    ################################################
    `);
});

process.on('unhandledRejection', (err) => {
  console.log(err);
  server.close(() => {
    process.exit(1);
  });
});
