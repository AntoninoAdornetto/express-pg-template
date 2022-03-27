import express, { NextFunction, Request, Response } from 'express';
import morgan from 'morgan';
import logger from '@loaders/logger';
import config from '@config/index';
import errorMiddleware from '@api/middlewares/error';
import ErrorHandler from '@services/errorHandler';

export default ({ app }: { app: express.Application }) => {
  app.use(express.json());
  if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
  }

  app.all('*', (req: Request, res: Response, next: NextFunction) => {
    next(new ErrorHandler(`No route found for ${req.originalUrl}`, 404));
  });

  app.use(errorMiddleware);

  process.on('uncaughtException', (err) => {
    console.log(err.name, err.message);
    process.exit(1);
  });

  const server = app.listen(config.port, () => {
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
};
