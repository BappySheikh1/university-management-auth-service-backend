import express from 'express';
import { AcademicDepartmentController } from './academicDepartment.Controller';
import validationRequest from '../../middleware/validateRequest';
import { AcademicDepartmentValidation } from './academicDepartment.Validation';
import auth from '../../middleware/auth';
import { ENUM_USER_ROLE } from '../../../enums/user';

const router = express.Router();

router
  .post(
    '/create-department',
    validationRequest(
      AcademicDepartmentValidation.createAcademicDepartmentZodSchema
    ),
    auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
    AcademicDepartmentController.createAcademicDepartment
  )
  .get('/', AcademicDepartmentController.getAllDepartment)
  .get('/:id', AcademicDepartmentController.getSingleDepartment)
  .patch(
    '/:id',
    validationRequest(
      AcademicDepartmentValidation.updateAcademicDepartmentZodSchema
    ),
    auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
    AcademicDepartmentController.updateDepartment
  )
  .delete(
    '/:id',
    auth(ENUM_USER_ROLE.SUPER_ADMIN),
    AcademicDepartmentController.deleteDepartment
  );

export const AcademicDepartmentRoute = { router };
