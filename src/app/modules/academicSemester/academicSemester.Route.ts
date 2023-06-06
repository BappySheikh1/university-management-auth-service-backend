import express from 'express';
const router = express.Router();
import validateRequest from '../../middleware/validateRequest';
import { AcademicSemesterValidation } from './academicSemester.validation';

router
  .post(
    '/create-user',
    validateRequest(AcademicSemesterValidation.createAcademicSemesterZodSchema)
  )
  .get('/');

export const UserRoutes = router;
