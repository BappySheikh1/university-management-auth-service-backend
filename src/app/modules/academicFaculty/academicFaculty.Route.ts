import express from 'express';
import { AcademicFacultyController } from './academicFaculty.Controller';
import validationRequest from '../../middleware/validateRequest';
import { AcademicFacultyValidation } from './academicFaculty.Validation';

const router = express.Router();

router
  .post(
    '/create-faculty',
    validationRequest(AcademicFacultyValidation.createFacultyZodSchema),
    AcademicFacultyController.createAcademicFaculty
  )
  .get('/:id')
  .get('/', AcademicFacultyController.getAllFaculties)
  .patch('/:id')
  .delete('/:id');

export const AcademicFacultyRoutes = router;
