import express from 'express'
import { registerUser } from '../controllers/userController.js'

const router = express.Router()

//Register User
router.post('/register', registerUser)
router.post('/login')

export default router