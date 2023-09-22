import express from 'express'
import { signIn, signUp } from '../controllers/auth.js';

const authRoutes = express.Router()

authRoutes.post("/signup", signUp)
authRoutes.post("/signin", signIn)

export default authRoutes;