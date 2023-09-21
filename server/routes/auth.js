import express from 'express'
import { test } from '../controllers/auth.js';

const authRoutes = express.Router()

authRoutes.get("/test", test)

export default authRoutes;