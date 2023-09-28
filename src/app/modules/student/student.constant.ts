export const gender = ['male', 'female'];
export const bloodGroup = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];

export const StudentSearchableFields = [
  'email',
  'id',
  'contactNo',
  'name.firstName',
  'name.middleName',
  'name.lastName',
];

export const StudentFilterableFields = [
  'searchTerm',
  'id',
  'email',
  'bloodGroup',
  'contactNo',
  'emergencyContactNo',
];

export const EVENT_STUDENT_UPDATED = 'student.updated';
