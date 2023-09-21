import { SortOrder } from 'mongoose';
import { PaginationHelper } from '../../../helpers/paginationHelper';
import { IPaginationOptions } from '../../../interfaces/pagination';
import { academicDepartmentSearchableFields } from './academicDepartment.Constant';
import {
  AcademicDepartmentCreatedEvent,
  AcademicDepartmentUpdatedEvent,
  IAcademicDepartment,
  IAcademicDepartmentFilters,
} from './academicDepartment.interface';
import { AcademicDepartment } from './academicDepartment.model';
import { IGenericResponse } from '../../../interfaces/common';
import { AcademicFaculty } from '../academicFaculty/academicFaculty.Model';

const createAcademicDepartment = async (
  payload: IAcademicDepartment
): Promise<IAcademicDepartment | null> => {
  const result = await AcademicDepartment.create(payload);
  return result;
};

const getAllDepartment = async (
  filters: IAcademicDepartmentFilters,
  paginationOptions: IPaginationOptions
): Promise<IGenericResponse<IAcademicDepartment[]>> => {
  const { limit, page, skip, sortBy, sortOrder } =
    PaginationHelper.calculatePagination(paginationOptions);

  const { searchTerm, ...filtersData } = filters;

  const andConditions = [];

  if (searchTerm) {
    andConditions.push({
      $or: academicDepartmentSearchableFields.map(field => ({
        [field]: {
          $regex: searchTerm,
          $paginationOptions: 'i',
        },
      })),
    });
  }

  if (Object.keys(filtersData).length) {
    andConditions.push({
      $and: Object.entries(filtersData).map(([field, value]) => ({
        [field]: value,
      })),
    });
  }

  const sortConditions: { [key: string]: SortOrder } = {};

  if (sortBy && sortOrder) {
    sortConditions[sortBy] = sortOrder;
  }
  const whereConditions =
    andConditions.length > 0 ? { $and: andConditions } : {};

  const result = await AcademicDepartment.find(whereConditions)
    .populate('academicFaculty')
    .sort(sortConditions)
    .skip(skip)
    .limit(limit);

  const total = await AcademicDepartment.countDocuments(whereConditions);

  return {
    meta: {
      page,
      limit,
      total,
    },
    data: result,
  };
};

const getSingleDepartment = async (
  id: string
): Promise<IAcademicDepartment | null> => {
  const result = await AcademicDepartment.findById(id).populate(
    'academicFaculty'
  );
  return result;
};
const updateDepartment = async (
  id: string,
  payload: Partial<IAcademicDepartment>
): Promise<IAcademicDepartment | null> => {
  const result = await AcademicDepartment.findOneAndUpdate(
    { _id: id },
    payload,
    { new: true }
  ).populate('academicFaculty');
  return result;
};

const deleteDepartment = async (
  id: string
): Promise<IAcademicDepartment | null> => {
  const result = await AcademicDepartment.findByIdAndDelete(id, { new: true });
  return result;
};

const insertIntoDBFromEvent = async (
  e: AcademicDepartmentCreatedEvent
): Promise<void> => {
  const academicFaculty = await AcademicFaculty.findOne({
    syncId: e.academicFacultyId,
  });
  const payload = {
    title: e.title,
    academicFaculty: academicFaculty?._id,
    syncId: e.id,
  };

  await AcademicDepartment.create(payload);
};

const updateOneInDBFromEvent = async (
  e: AcademicDepartmentUpdatedEvent
): Promise<void> => {
  const academicFaculty = await AcademicFaculty.findOne({
    syncId: e.academicFacultyId,
  });

  const payload = {
    title: e.title,
    academicFaculty: academicFaculty?._id,
  };

  await AcademicDepartment.findOneAndUpdate(
    { syncId: e.id },
    {
      $set: payload,
    }
  );
};

const deleteOneFromDBFromEvent = async (syncId: string): Promise<void> => {
  await AcademicDepartment.findOneAndDelete({ syncId });
};

export const AcademicDepartmentService = {
  createAcademicDepartment,
  getAllDepartment,
  getSingleDepartment,
  deleteDepartment,
  updateDepartment,
  insertIntoDBFromEvent,
  updateOneInDBFromEvent,
  deleteOneFromDBFromEvent,
};
