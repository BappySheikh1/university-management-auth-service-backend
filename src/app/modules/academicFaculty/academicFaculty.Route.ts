import express from 'express';
import { AcademicFacultyController } from './academicFaculty.Controller';

const router = express.Router();

router
  .post('/create-faculty', AcademicFacultyController.createAcademicFaculty)
  .get('/:id')
  .get('/')
  .patch('/:id')
  .delete('/:id');

export const AcademicFacultyRoutes = router;
