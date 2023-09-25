import express from 'express'
import { getAllVideos, getMyVideos, test } from '../controllers/video.js';

const videoRoutes = express.Router()

videoRoutes.get("/test", test)

videoRoutes.get('/videos', getAllVideos)
videoRoutes.get('/myvideos', getMyVideos)

export default videoRoutes;
