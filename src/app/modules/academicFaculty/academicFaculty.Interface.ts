import { Model } from 'mongoose';

export type IAcademicFaculty = {
  title: string;
};

export type AcademicFacultyModel = Model<
  IAcademicFaculty,
  Record<string, unknown>
>;

export type IAcademicFacultyFilters = {
  searchTerm?: string;
};

export type AcademicFacultyCreatedEvents = {
  id: string;
  title: string;
};

export type AcademicFacultyUpdatedEvents = {
  id: string;
  title: string;
};

export type AcademicFacultyDeletedEvents = {
  id: string;
};
