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
  .get('/:id', AcademicSemesterController.getSingleSemester)
  .get('/', AcademicSemesterController.getAllAcademicSemester)
  .patch(
    '/:id',
    validateRequest(AcademicSemesterValidation.updateAcademicSemesterZodSchema),
    AcademicSemesterController.updateSemester
  );

export const AcademicSemesterRoutes = router;
