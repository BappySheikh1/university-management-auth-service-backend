import { RedisClient } from '../../../shared/radis';
import {
  EVENT_ACADEMIC_DEPARTMENT_CREATED,
  EVENT_ACADEMIC_DEPARTMENT_UPDATED,
} from './academicDepartment.Constant';
import { AcademicDepartmentService } from './academicDepartment.Service';
import {
  AcademicDepartmentCreatedEvent,
  AcademicDepartmentUpdatedEvent,
} from './academicDepartment.interface';

const InitAcademicDepartmentEvents = () => {
  RedisClient.subscribe(
    EVENT_ACADEMIC_DEPARTMENT_CREATED,
    async (e: string) => {
      const data: AcademicDepartmentCreatedEvent = JSON.parse(e);
      // console.log(data);

      await AcademicDepartmentService.insertIntoDBFromEvent(data);
    }
  );

  RedisClient.subscribe(
    EVENT_ACADEMIC_DEPARTMENT_UPDATED,
    async (e: string) => {
      const data: AcademicDepartmentUpdatedEvent = JSON.parse(e);
      console.log(data);

      await AcademicDepartmentService.insertIntoDBFromEvent(data);
    }
  );
};

export default InitAcademicDepartmentEvents;
