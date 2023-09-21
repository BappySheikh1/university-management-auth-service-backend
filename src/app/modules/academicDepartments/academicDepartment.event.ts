import { RedisClient } from '../../../shared/radis';
import {
  EVENT_ACADEMIC_DEPARTMENT_CREATED,
  EVENT_ACADEMIC_DEPARTMENT_DELETED,
  EVENT_ACADEMIC_DEPARTMENT_UPDATED,
} from './academicDepartment.Constant';
import { AcademicDepartmentService } from './academicDepartment.Service';
import {
  AcademicDepartmentCreatedEvent,
  AcademicDepartmentDeletedEvent,
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
      // console.log(data);

      await AcademicDepartmentService.insertIntoDBFromEvent(data);
    }
  );

  RedisClient.subscribe(
    EVENT_ACADEMIC_DEPARTMENT_DELETED,
    async (e: string) => {
      const data: AcademicDepartmentDeletedEvent = JSON.parse(e);

      await AcademicDepartmentService.deleteOneFromDBFromEvent(data.id);
    }
  );
};

export default InitAcademicDepartmentEvents;
