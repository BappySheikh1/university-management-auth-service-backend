import { RequestHandler } from 'express'
import { UserService } from './user.service'

const createUser: RequestHandler = async (req, res, next) => {
  try {
    // const createUserZodSchema = z.object({
    //   body: z.object({
    //     role: z.string({
    //       required_error: 'role is required',
    //     }),
    //     password: z.string().optional(),
    //   }),
    // })

    // await createUserZodSchema.parseAsync(req)
    //  req-validation
    // body --> object
    // data --> object

    const { user } = req.body
    const result = await UserService.createUser(user)

    res.status(200).json({
      message: 'User created successfully',
      data: result,
    })
  } catch (error) {
    next(error)
  }
}

export const UserController = {
  createUser,
}
