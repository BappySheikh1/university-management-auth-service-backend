import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';
const app: Application = express();
import globalErrorHandler from './app/middleware/globalErrorHandler';
import routes from './app/Routes';

app.use(cors());

// parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use('/api/v1/user', UserRoutes);
// app.use('/api/v1/academic-semesters', AcademicSemesterRoutes);
app.use('/api/v1', routes);

// Testing
app.get('/', async (req: Request, res: Response, next: NextFunction) => {
  Promise.reject(new Error('Unhandled Promise Rejection'));
  next();
});

//global error handler
app.use(globalErrorHandler);

export default app;
