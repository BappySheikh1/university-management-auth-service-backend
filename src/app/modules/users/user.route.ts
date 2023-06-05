import express from 'express'
const router = express.Router()
import { UserController } from './user.controller'

router.post('/create-user', UserController.createUser).get('/')

export const UserRoutes = router
