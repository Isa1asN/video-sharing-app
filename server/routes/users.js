import express from 'express'
import { getUserById, uploadProfileImg } from '../controllers/user.js';
import { verifyUserToken } from '../middleware/auth.middleware.js';

const userRoutes = express.Router()

userRoutes.post('/profile/uploadImg', verifyUserToken, uploadProfileImg)
userRoutes.get('/:id', getUserById)

export default userRoutes;