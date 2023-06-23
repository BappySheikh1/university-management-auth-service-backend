import express from 'express';
import { AcademicFacultyController } from './academicFaculty.Controller';
import validationRequest from '../../middleware/validateRequest';
import { AcademicFacultyValidation } from './academicFaculty.Validation';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middleware/auth';

const router = express.Router();

router
  .post(
    '/create-faculty',
    validationRequest(AcademicFacultyValidation.createFacultyZodSchema),
    auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
    AcademicFacultyController.createAcademicFaculty
  )
  .get(
    '/:id',
    auth(
      ENUM_USER_ROLE.SUPER_ADMIN,
      ENUM_USER_ROLE.ADMIN,
      ENUM_USER_ROLE.FACULTY,
      ENUM_USER_ROLE.STUDENT
    ),
    AcademicFacultyController.getSingleFaculty
  )
  .get(
    '/',
    auth(
      ENUM_USER_ROLE.SUPER_ADMIN,
      ENUM_USER_ROLE.ADMIN,
      ENUM_USER_ROLE.STUDENT
    ),
    AcademicFacultyController.getAllFaculties
  )
  .patch(
    '/:id',
    auth(
      ENUM_USER_ROLE.SUPER_ADMIN,
      ENUM_USER_ROLE.ADMIN,
      ENUM_USER_ROLE.FACULTY
    ),
    validationRequest(AcademicFacultyValidation.updateFacultyZodSchema),
    AcademicFacultyController.updateFaculty
  )
  .delete(
    '/:id',
    auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
    AcademicFacultyController.deleteFaculty
  );

export const AcademicFacultyRoutes = router;
