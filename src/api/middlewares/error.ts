import { Request, Response, NextFunction } from 'express';
import ErrorHandler from '@services/errorHandler';

interface PGError {
  statusCode: number;
  status: string;
  message: string;
  stack: string;
  detail: string;
  table: string;
  column: string;
}

function tableValidation(err: PGError) {
  const errorMessage = `Table "${err.table}", ${err.message}`;
  return new ErrorHandler(errorMessage, 400);
}

function developmentErrors(err: any, res: Response) {
  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
    stack: err.stack,
  });
}

function productionError(err: any, res: Response) {
  if (err.isOperational) {
    return res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
    });
  }

  console.error('Error', err);

  return res.status(500).json({
    status: 'Error',
    message: 'Something went wrong',
  });
}

export default (err: any, req: Request, res: Response, next: NextFunction) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';
  let requestError = Object.assign(err);

  if (process.env.NODE_ENV === 'development') {
    developmentErrors(err, res);
  }

  if (process.env.NODE_ENV === 'production') {
    if (requestError.name === 'ValidationError') requestError = tableValidation(requestError);
    productionError(requestError, res);
  }
};
