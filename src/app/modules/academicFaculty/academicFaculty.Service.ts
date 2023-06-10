import { IAcademicFaculty } from './academicFaculty.Interface';
import { AcademicFaculty } from './academicFaculty.Model';

const createAcademicFaculty = async (
  payload: IAcademicFaculty
): Promise<IAcademicFaculty | null> => {
  const result = await AcademicFaculty.create(payload);
  return result;
};

export const AcademicFacultyService = {
  createAcademicFaculty,
};
