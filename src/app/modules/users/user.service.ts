import config from '../../../config/index'
import { IUser } from './users.interface'
import { User } from './users.model'
import { generateUserId } from './users.utils'

const createUser = async (user: IUser): Promise<IUser | null> => {
  // auto generated incremental id
  const id = await generateUserId()
  user.id = id

  // default password
  if (!user.password) {
    user.password = config.default_user_pass as string // type alias
  }

  const createUserRole = await User.create(user)
  if (!createUserRole) {
    throw new Error('Failed to create user')
  }
  return createUserRole
}

export default {
  createUser,
}
