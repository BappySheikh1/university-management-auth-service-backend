import express from 'express';
import { StudentController } from './student.Controller';
import validationRequest from '../../middleware/validateRequest';
import { StudentValidation } from './student.validation';
const router = express.Router();

router
  .get('/', StudentController.getAllStudents)
  .get('/:id', StudentController.getSingleStudent)
  .patch(
    '/:id',
    validationRequest(StudentValidation.updateStudentZodSchema),
    StudentController.updateStudent
  )
  .delete('/:id', StudentController.deleteStudent);

export const StudentRoutes = router;
