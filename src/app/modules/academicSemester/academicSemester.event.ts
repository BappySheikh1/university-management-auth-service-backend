import { RedisClient } from '../../../shared/radis';
import {
  EVENT_ACADEMIC_SEMESTER_CREATED,
  EVENT_ACADEMIC_SEMESTER_DELETED,
  EVENT_ACADEMIC_SEMESTER_UPDATED,
} from './academicConstant';
import { AcademicSemesterService } from './academicSemester.Service';
import { IAcademicSemesterCreatedEvent } from './academicSemester.interface';

const InitAcademicSemesterEvents = () => {
  RedisClient.subscribe(EVENT_ACADEMIC_SEMESTER_CREATED, async (e: string) => {
    const data: IAcademicSemesterCreatedEvent = JSON.parse(e);

    await AcademicSemesterService.createSemesterFromEvent(data);
    // console.log(data);
  });

  RedisClient.subscribe(EVENT_ACADEMIC_SEMESTER_UPDATED, async (e: string) => {
    const data = JSON.parse(e);

    await AcademicSemesterService.updateOneIntoDBFromEvent(data);
    // console.log('Updated data', data);
  });

  RedisClient.subscribe(EVENT_ACADEMIC_SEMESTER_DELETED, async (e: string) => {
    const data = JSON.parse(e);

    await AcademicSemesterService.deleteOneIntoDBFromEvent(data.id);
  });
};

export default InitAcademicSemesterEvents;
