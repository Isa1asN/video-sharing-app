import express from 'express'
import { signUp } from '../controllers/auth.js';

const authRoutes = express.Router()

authRoutes.post("/signup", signUp)

export default authRoutes;