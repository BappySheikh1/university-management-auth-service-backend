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
  .get('/:id', AcademicFacultyController.getSingleFaculty)
  .get('/', AcademicFacultyController.getAllFaculties)
  .patch(
    '/:id',
    validationRequest(AcademicFacultyValidation.updateFacultyZodSchema),
    AcademicFacultyController.updateFaculty
  )
  .delete('/:id', AcademicFacultyController.deleteFaculty);

export const AcademicFacultyRoutes = router;
