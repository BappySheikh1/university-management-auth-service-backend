import { Model, Types } from 'mongoose';
import { IAcademicFaculty } from '../academicFaculty/academicFaculty.Interface';

export type IAcademicDepartment = {
  title: string;
  academicFaculty: Types.ObjectId | IAcademicFaculty;
};

export type AcademicDepartmentModel = Model<
  IAcademicDepartment,
  Record<string, unknown>
>;

export type IAcademicDepartmentFilters = {
  searchTerm?: string | undefined;
  academicFaculty?: Types.ObjectId;
};

export type AcademicDepartmentCreatedEvent = {
  id: string;
  title: string;
  academicFacultyId: string;
};

export type AcademicDepartmentUpdatedEvent = {
  id: string;
  title: string;
  academicFacultyId: string;
};

export type AcademicDepartmentDeletedEvent = {
  id: string;
};
