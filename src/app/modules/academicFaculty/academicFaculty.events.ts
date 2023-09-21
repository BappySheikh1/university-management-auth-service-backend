import { RedisClient } from '../../../shared/radis';
import { EVENT_ACADEMIC_DEPARTMENT_UPDATED } from '../academicDepartments/academicDepartment.Constant';
import { EVENT_ACADEMIC_FACULTY_CREATED } from './academicFaculty.Constants';
import {
  AcademicFacultyCreatedEvents,
  AcademicFacultyDeletedEvents,
  AcademicFacultyUpdatedEvents,
} from './academicFaculty.Interface';
import { AcademicFacultyService } from './academicFaculty.Service';

const InitAcademicFacultyEvents = async () => {
  RedisClient.subscribe(EVENT_ACADEMIC_FACULTY_CREATED, async (e: string) => {
    const data: AcademicFacultyCreatedEvents = JSON.parse(e);

    await AcademicFacultyService.insertIntoDBFromEvent(data);
  });

  RedisClient.subscribe(
    EVENT_ACADEMIC_DEPARTMENT_UPDATED,
    async (e: string) => {
      const data: AcademicFacultyUpdatedEvents = JSON.parse(e);

      await AcademicFacultyService.updateIntoDBFromEvent(data);
    }
  );

  RedisClient.subscribe(
    EVENT_ACADEMIC_DEPARTMENT_UPDATED,
    async (e: string) => {
      const data: AcademicFacultyDeletedEvents = JSON.parse(e);

      await AcademicFacultyService.deleteOneFrmIntoEvent(data.id);
    }
  );
};

export default InitAcademicFacultyEvents;
