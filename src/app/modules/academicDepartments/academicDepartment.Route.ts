import express from 'express';
import { AcademicDepartmentController } from './academicDepartment.Controller';
import validationRequest from '../../middleware/validateRequest';
import { AcademicDepartmentValidation } from './academicDepartment.Validation';

const router = express.Router();

router
  .post(
    '/create-department',
    validationRequest(
      AcademicDepartmentValidation.createAcademicDepartmentZodSchema
    ),
    AcademicDepartmentController.createAcademicDepartment
  )
  .get('/', AcademicDepartmentController.getAllDepartment)
  .get('/:id', AcademicDepartmentController.getSingleDepartment)
  .patch(
    '/:id',
    validationRequest(
      AcademicDepartmentValidation.updateAcademicDepartmentZodSchema
    ),
    AcademicDepartmentController.updateDepartment
  )
  .delete('/:id', AcademicDepartmentController.deleteDepartment);

export const AcademicDepartmentRoute = { router };
