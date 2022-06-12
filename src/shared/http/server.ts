import 'reflect-metadata';
import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';
import cors from 'cors';
import { errors } from 'celebrate';
import routes from './routes';
import AppError from '@shared/errors/AppError';
import '@shared/typeorm';
import environment from '@config/environment';

const app = express();

app.use(cors());
app.use(express.json());

app.use(routes);
app.use(errors());

app.use(
  (error: Error, request: Request, respone: Response, next: NextFunction) => {
    if (error instanceof AppError) {
      return respone.status(error.statusCode).json({
        status: 'error',
        message: error.message,
      });
    }
    return respone.status(500).json({
      status: 'error',
      message: 'Internal Server Error',
    });
  },
);

app.listen(environment.port, () => {
  console.log(`Server is running on port ${environment.port}`);
});
