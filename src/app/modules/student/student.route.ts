import express from 'express';
import { StudentController } from './student.Controller';
const router = express.Router();

router
  .get('/create-student', StudentController.getAllStudents)
  .get('/:id', StudentController.getSingleStudent)
  .patch('/:id', StudentController.updateStudent)
  .delete('/:id', StudentController.deleteStudent);

export const StudentRoutes = router;
