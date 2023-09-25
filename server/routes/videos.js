import express from 'express'
import { createNewVideo, getAllVideos, getMyVideos, getVideoById, test } from '../controllers/video.js';

const videoRoutes = express.Router()

videoRoutes.get('/', getAllVideos)
videoRoutes.get('/:id', getVideoById)
videoRoutes.get('/myvideos', getMyVideos)

videoRoutes.post('/create', createNewVideo)

export default videoRoutes;
