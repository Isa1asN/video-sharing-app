import express from 'express'
import { test } from '../controllers/comment.js';

const commentRoutes = express.Router()

commentRoutes.get("/test", test)

export default commentRoutes;