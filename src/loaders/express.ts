import express, { NextFunction, Request, Response } from 'express';
import morgan from 'morgan';
import routes from '@api/index';
import config from '@src/config';
import errorMiddleware from '@api/middlewares/error';
import ErrorHandler from '@services/errorHandler';

export default ({ app }: { app: express.Application }) => {
  process.on('uncaughtException', (err) => {
    console.log(err.name, err.message);
    process.exit(1);
  });

  app.use(express.json());

  if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
  }

  app.use(config.api.prefix, routes());

  app.all('*', (req: Request, res: Response, next: NextFunction) => {
    next(new ErrorHandler(`No route found for ${req.originalUrl}`, 404));
  });

  app.use(errorMiddleware);
  return app;
};
