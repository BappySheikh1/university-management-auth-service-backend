import express, { Application, Request, Response } from 'express'
import cors from 'cors'
const app: Application = express()
import userRouter from './app/modules/users/user.route'

app.use(cors())

// parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Testing
app.get('/', async (req: Request, res: Response) => {
  res.send('Working SuccessFull!')
})

app.use('/api/v1/users', userRouter)

export default app
