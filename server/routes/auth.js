import express from 'express'
import { signIn, signUp, signout } from '../controllers/auth.js';

const authRoutes = express.Router()

authRoutes.post("/signup", signUp)
authRoutes.post("/signin", signIn)
authRoutes.get("/logout", signout)

export default authRoutes;