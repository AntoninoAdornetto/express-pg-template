import express, { NextFunction, Request, Response } from 'express';
import morgan from 'morgan';
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
};
