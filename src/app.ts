import express, { Application, NextFunction, Request, Response } from 'express'
import cors from 'cors'
const app: Application = express()
import globalErrorHandler from './app/middleware/globalErrorHandler'
import { UserRoutes } from './app/modules/users/user.route'

app.use(cors())

// parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/v1/user', UserRoutes)

// Testing
app.get('/', async (req: Request, res: Response, next: NextFunction) => {
  Promise.reject(new Error('Unhandled Promise Rejection'))
  next()
})

//global error handler
app.use(globalErrorHandler)

export default app
