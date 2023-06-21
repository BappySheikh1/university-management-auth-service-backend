import { z } from 'zod';
import { bloodGroup, gender } from './faculty.Constant';

const createFacultyZodSchema = z.object({
  body: z.object({
    name: z.object({
      firstName: z.string(),
      middleName: z.string().optional(),
      lastName: z.string(),
    }),
    dateOfBirth: z.string(),
    gender: z.enum([...gender] as [string, ...string[]]),
    bloodGroup: z.enum([...bloodGroup] as [string, ...string[]]),
    email: z.string().email(),
    contactNo: z.string(),
    emergencyContactNo: z.string(),
    presentAddress: z.string(),
    permanentAddress: z.string(),
    academicDepartment: z.string(),
    academicFaculty: z.string(),
    profileImage: z.string(),
  }),
});

const updateFacultyZodSchema = z.object({
  body: z.object({
    name: z.object({
      firstName: z.string().optional(),
      lastName: z.string().optional(),
      middleName: z.string().optional(),
    }),
    dateOfBirth: z.string().optional(),
    gender: z.string().optional(),
    bloodGroup: z.string().optional(),
    email: z.string().email().optional(),
    contactNo: z.string().optional(),
    emergencyContactNo: z.string().optional(),
    presentAddress: z.string().optional(),
    permanentAddress: z.string().optional(),
    department: z.string().optional(),
    designation: z.string().optional(),
  }),
});

export const FacultyValidation = {
  createFacultyZodSchema,
  updateFacultyZodSchema,
};
