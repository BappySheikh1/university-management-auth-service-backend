import config from '../../../config/index';
import { IUser } from './user.interface';
import { User } from './user.model';

const createStudent = async (user: IUser): Promise<IUser | null> => {
  // const academicSemester ={
  //   code : '01',
  //   year : '2015'
  // }
  // const id = await generateStudentId();
  //  user.id = id
  // default password
  if (!user.password) {
    user.password = config.default_student_pass as string;
  }
  const createUser = await User.create(user);
  return createUser;
};

export const UserService = {
  createStudent,
};
