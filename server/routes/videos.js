import express from 'express'
import { getAllVideos, getMyVideos, getVideoById, test } from '../controllers/video.js';

const videoRoutes = express.Router()

videoRoutes.get('/videos', getAllVideos)
videoRoutes.get('/videos/:id', getVideoById)
videoRoutes.get('/myvideos', getMyVideos)

export default videoRoutes;
