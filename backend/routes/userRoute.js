import express from 'express'
import { blockUser, deleteAUser, getAllUsers, getSingleUser, loginUser, registerUser, unBlockUser, updateUser } from '../controllers/userController.js'
import { isAdmin, verifyJwtToken } from '../middlewares/authMiddlewar.js'

const router = express.Router()

//All User Routes
router.post('/register', registerUser)
router.post('/login',loginUser)
router.get('/all-users',getAllUsers)
router.get('/:id',verifyJwtToken,isAdmin,getSingleUser)
router.delete('/:id',deleteAUser)
router.put('/edit-user/:id',verifyJwtToken,updateUser)
router.put('/block-user/:id',verifyJwtToken,isAdmin,blockUser)
router.put('/unblock-user/:id',verifyJwtToken,isAdmin,unBlockUser)




export default router