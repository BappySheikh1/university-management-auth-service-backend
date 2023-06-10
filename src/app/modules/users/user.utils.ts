import { User } from './user.model';

export const findLastUserId = async (): Promise<string | undefined> => {
  const lastUser = await User.findOne({}, { id: 1, _id: 0 })
    .sort({ createdAt: -1 })
    .lean();

  return lastUser?.id;
};

export const generateUserId = async (): Promise<string> => {
  const currentUserId =
    (await findLastUserId()) || (0).toString().padStart(5, '0');
  // Increment by id
  const incrementedId = (parseInt(currentUserId) + 1)
    .toString()
    .padStart(5, '0');
  return incrementedId;
};
