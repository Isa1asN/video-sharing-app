import express from 'express'
import { getMyProfile, getUserById, uploadProfileImg } from '../controllers/user.js';
import { verifyUserToken } from '../middleware/auth.middleware.js';

const userRoutes = express.Router()

userRoutes.get('/:id', getUserById)
userRoutes.get('/myprofile', verifyUserToken, getMyProfile)
userRoutes.post('/profile/uploadImg', verifyUserToken, uploadProfileImg)


export default userRoutes;