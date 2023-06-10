import express from 'express';
const router = express.Router();
import validateRequest from '../../middleware/validateRequest';
import { AcademicSemesterValidation } from './academicSemester.validation';
import { AcademicSemesterController } from './AcademicSemester.Controller';

router
  .post(
    '/create-semester',
    validateRequest(AcademicSemesterValidation.createAcademicSemesterZodSchema),
    AcademicSemesterController.createAcademicSemester
  )
  .get('/', AcademicSemesterController.getAllAcademicSemester)
  .get('/:id', AcademicSemesterController.getSingleSemester);

export const AcademicSemesterRoutes = router;
