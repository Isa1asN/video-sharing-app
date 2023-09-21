import express from 'express'
import { test } from '../controllers/video.js';

const videoRoutes = express.Router()

videoRoutes.get("/test", test)

export default videoRoutes;
