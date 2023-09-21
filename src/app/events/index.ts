import InitAcademicDepartmentEvents from '../modules/academicDepartments/academicDepartment.event';
import InitAcademicSemesterEvents from '../modules/academicSemester/academicSemester.event';

const subscribeToEvents = () => {
  InitAcademicSemesterEvents();
  InitAcademicDepartmentEvents();
};

export default subscribeToEvents;
