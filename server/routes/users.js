import express from 'express'
import { uploadProfileImg } from '../controllers/user.js';

const userRoutes = express.Router()

userRoutes.post('/profile/uploadImg', uploadProfileImg)

export default userRoutes;