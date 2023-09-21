import InitAcademicDepartmentEvents from '../modules/academicDepartments/academicDepartment.event';
import InitAcademicFacultyEvents from '../modules/academicFaculty/academicFaculty.events';
import InitAcademicSemesterEvents from '../modules/academicSemester/academicSemester.event';

const subscribeToEvents = () => {
  InitAcademicSemesterEvents();
  InitAcademicDepartmentEvents();
  InitAcademicFacultyEvents();
};

export default subscribeToEvents;
