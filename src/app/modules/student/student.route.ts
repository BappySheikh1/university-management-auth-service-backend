import express from 'express';
import { StudentController } from './student.Controller';
import validationRequest from '../../middleware/validateRequest';
import { StudentValidation } from './student.validation';
import auth from '../../middleware/auth';
import { ENUM_USER_ROLE } from '../../../enums/user';
const router = express.Router();

router
  .get(
    '/',
    auth(
      ENUM_USER_ROLE.SUPER_ADMIN,
      ENUM_USER_ROLE.ADMIN,
      ENUM_USER_ROLE.FACULTY,
      ENUM_USER_ROLE.FACULTY,
      ENUM_USER_ROLE.STUDENT
    ),
    StudentController.getAllStudents
  )
  .get(
    '/:id',
    auth(
      ENUM_USER_ROLE.SUPER_ADMIN,
      ENUM_USER_ROLE.ADMIN,
      ENUM_USER_ROLE.FACULTY,
      ENUM_USER_ROLE.FACULTY,
      ENUM_USER_ROLE.STUDENT
    ),
    StudentController.getSingleStudent
  )
  .patch(
    '/:id',
    validationRequest(StudentValidation.updateStudentZodSchema),
    auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
    StudentController.updateStudent
  )
  .delete(
    '/:id',
    auth(ENUM_USER_ROLE.SUPER_ADMIN),
    StudentController.deleteStudent
  );

export const StudentRoutes = router;
