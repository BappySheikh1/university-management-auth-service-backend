import express from 'express';
const router = express.Router();
import { UserController } from './user.controller';
import validateRequest from '../../middleware/validateRequest';
import { UserValidation } from './user.validation';
import { FacultyValidation } from '../faculty/faculty.validation';
import { AdminValidation } from '../admin/admin.validation';

//create-student
router.post(
  '/create-student',
  validateRequest(UserValidation.createUserZodSchema),
  UserController.createStudent
);

// create faculty
router.post(
  '/create-faculty',
  validateRequest(FacultyValidation.createFacultyZodSchema),
  UserController.createFaculty
);

// create admin
router.post(
  '/create-admin',
  validateRequest(AdminValidation.createAdminZodSchema),
  UserController.createFaculty
);

export const UserRoutes = router;
