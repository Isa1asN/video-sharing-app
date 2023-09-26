import express from 'express'
import { followUserById, getFollowingUsers, getMyProfile, getUserById, uploadProfileImg } from '../controllers/user.js';
import { verifyUserToken } from '../middleware/auth.middleware.js';

const userRoutes = express.Router()

userRoutes.get('/profile', verifyUserToken, getMyProfile)
userRoutes.post('/profile/uploadImg', verifyUserToken, uploadProfileImg)
userRoutes.post('/:id/follow', verifyUserToken, followUserById)
userRoutes.get('/following', verifyUserToken, getFollowingUsers)
userRoutes.get('/:id', getUserById)


export default userRoutes;